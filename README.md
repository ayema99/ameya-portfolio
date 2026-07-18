# Ameya Kulkarni — Portfolio

Personal portfolio site built with Create React App, React Router, Tailwind CSS, and Framer Motion.

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run the React app only (no AI chat API) |
| `npm run build` | Production build to `build/` |
| `npm test` | Run tests |
| `npm run dev:chat` | Run app + `/api/chat` locally via Vercel (requires setup below) |

## AI Chat Setup

The portfolio includes a Dharmesh-style "Chat with AI" feature powered by [Groq](https://groq.com) (free tier). The API key stays on the server — never in the React bundle.

### 1. Get a free Groq API key

1. Sign up at [console.groq.com](https://console.groq.com)
2. Create an API key
3. Copy `.env.example` to `.env.local` and add your key:

```bash
cp .env.example .env.local
# Edit .env.local:
GROQ_API_KEY=gsk_your_key_here
```

### 2. Local development with chat

**Easiest option (no Vercel login):**

```bash
npm run dev:local
```

This starts:
- React app at [http://localhost:3000](http://localhost:3000)
- Local chat API at [http://localhost:3001/api/chat](http://localhost:3001/api/chat) (proxied automatically)

**Alternative (Vercel CLI — requires one-time login):**

```bash
npm run dev:chat
```

Use this if you want production-like Vercel serverless behavior locally.

### 3. Deploy to Vercel

1. Push this repo to GitHub
2. Import the project in [vercel.com](https://vercel.com)
3. Add environment variable: `GROQ_API_KEY` = your Groq key
4. Deploy — Vercel reads [`vercel.json`](vercel.json) for the CRA build and API routes

### How it works

- **Frontend:** `ChatWidget` (floating bubble), `HeroChat` (homepage preview), suggested prompts
- **Backend:** [`api/chat.js`](api/chat.js) streams responses from Groq Llama 3.3 70B
- **Knowledge:** Portfolio content from [`src/data/`](src/data/) is injected into the system prompt (no vector DB needed at this scale)
- **Rate limit:** 20 requests per IP per hour (best-effort on serverless)

### Updating portfolio content for the AI

Edit these files — the site and AI knowledge base stay in sync:

- [`src/data/site.js`](src/data/site.js) — name, role, contact
- [`src/data/caseStudies.js`](src/data/caseStudies.js) — projects
- [`src/data/about.js`](src/data/about.js) — bio, process, toolkit
- [`src/data/strengths.js`](src/data/strengths.js) — strengths

Also update [`api/knowledgeBase.js`](api/knowledgeBase.js) if you change case studies (server-side copy used by the API).

## Learn More

- [Create React App docs](https://facebook.github.io/create-react-app/docs/getting-started)
- [Vercel serverless functions](https://vercel.com/docs/functions)
