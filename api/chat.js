const { buildSystemPrompt } = require('./knowledgeBase');
const { checkRateLimit } = require('./rateLimit');

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
const MODEL = 'llama-3.3-70b-versatile';
const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2000;

let cachedSystemPrompt = null;

function getSystemPrompt() {
  if (!cachedSystemPrompt) {
    cachedSystemPrompt = buildSystemPrompt();
  }
  return cachedSystemPrompt;
}

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }
  return req.socket?.remoteAddress || 'unknown';
}

function sanitizeMessages(messages) {
  if (!Array.isArray(messages)) return null;

  const sanitized = messages
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .map((m) => ({
      role: m.role,
      content: m.content.slice(0, MAX_MESSAGE_LENGTH).trim(),
    }))
    .filter((m) => m.content.length > 0);

  if (sanitized.length === 0 || sanitized.length > MAX_MESSAGES) return null;
  if (sanitized[sanitized.length - 1].role !== 'user') return null;

  return sanitized;
}

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Chat is not configured. Missing GROQ_API_KEY.' });
  }

  const ip = getClientIp(req);
  const rate = checkRateLimit(ip);
  res.setHeader('X-RateLimit-Remaining', String(rate.remaining));

  if (!rate.allowed) {
    res.setHeader('Retry-After', String(rate.retryAfter));
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const messages = sanitizeMessages(req.body?.messages);
  if (!messages) {
    return res.status(400).json({ error: 'Invalid messages payload.' });
  }

  const groqMessages = [{ role: 'system', content: getSystemPrompt() }, ...messages];

  try {
    const groqResponse = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL,
        messages: groqMessages,
        stream: true,
        temperature: 0.4,
        max_tokens: 512,
      }),
    });

    if (!groqResponse.ok) {
      const errText = await groqResponse.text();
      console.error('Groq API error:', groqResponse.status, errText);
      return res.status(502).json({ error: 'AI service unavailable. Please try again.' });
    }

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache, no-transform');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');

    const reader = groqResponse.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith('data:')) continue;

        const payload = trimmed.slice(5).trim();
        if (payload === '[DONE]') continue;

        try {
          const parsed = JSON.parse(payload);
          const content = parsed.choices?.[0]?.delta?.content;
          if (content) {
            res.write(content);
          }
        } catch {
          // Skip malformed SSE chunks
        }
      }
    }

    res.end();
  } catch (err) {
    console.error('Chat handler error:', err);
    if (!res.headersSent) {
      return res.status(500).json({ error: 'Something went wrong. Please try again.' });
    }
    res.end();
  }
};
