const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 20;

const hits = new Map();

function cleanup(now) {
  for (const [key, entry] of hits.entries()) {
    if (now - entry.windowStart > WINDOW_MS) {
      hits.delete(key);
    }
  }
}

function checkRateLimit(ip) {
  const now = Date.now();
  cleanup(now);

  const entry = hits.get(ip);
  if (!entry || now - entry.windowStart > WINDOW_MS) {
    hits.set(ip, { windowStart: now, count: 1 });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  if (entry.count >= MAX_REQUESTS) {
    const retryAfter = Math.ceil((entry.windowStart + WINDOW_MS - now) / 1000);
    return { allowed: false, remaining: 0, retryAfter };
  }

  entry.count += 1;
  return { allowed: true, remaining: MAX_REQUESTS - entry.count };
}

module.exports = { checkRateLimit, MAX_REQUESTS };
