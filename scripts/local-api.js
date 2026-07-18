const fs = require('fs');
const path = require('path');
const http = require('http');

const PORT = 3001;

function loadEnvFile(filename) {
  const envPath = path.join(__dirname, '..', filename);
  if (!fs.existsSync(envPath)) return;

  fs.readFileSync(envPath, 'utf8')
    .split('\n')
    .forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const eq = trimmed.indexOf('=');
      if (eq === -1) return;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim();
      if (!process.env[key]) {
        process.env[key] = value;
      }
    });
}

loadEnvFile('.env.local');
loadEnvFile('.env');

const chatHandler = require('../api/chat');

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    return res.end();
  }

  if (req.url === '/api/chat' && req.method === 'POST') {
    try {
      const raw = await readBody(req);
      req.body = raw ? JSON.parse(raw) : {};
    } catch {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Invalid JSON body.' }));
    }

    try {
      await chatHandler(req, res);
    } catch (err) {
      console.error('Local API error:', err);
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal server error.' }));
      }
    }
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
  const hasKey = Boolean(process.env.GROQ_API_KEY);
  console.log(`Local chat API running at http://localhost:${PORT}/api/chat`);
  if (!hasKey) {
    console.warn('Warning: GROQ_API_KEY is missing. Add it to .env.local');
  } else {
    console.log('GROQ_API_KEY loaded from .env.local');
  }
});
