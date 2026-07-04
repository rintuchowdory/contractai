# Groq setup for ContractAI

This repository now includes a **server-side Groq proxy** for safer AI calls when deployed on **Vercel**.

## What was added

- `api/groq.js` — Vercel serverless function that sends chat-completion requests to Groq
- `src/lib/groqClient.js` — frontend helper that calls the serverless endpoint instead of Groq directly
- `vercel.json` — pins the Groq function to Node.js 20
- `.env.groq.example` — example server-side environment variable file

## Why this is safer

Do **not** call Groq directly from browser code with a real API key.
If you expose the key in frontend code or a public build variable, users can recover it.

This setup keeps the key on the server and only exposes a controlled `/api/groq` endpoint to the client.

## Deploy on Vercel

1. Import the repository into Vercel
2. In the Vercel project settings, add this environment variable:
   - `GROQ_API_KEY`
3. Deploy the project

## Frontend usage example

```js
import { requestGroqCompletion } from './src/lib/groqClient';

const result = await requestGroqCompletion({
  messages: [
    {
      role: 'system',
      content: 'You analyze business contracts and explain risk clearly.',
    },
    {
      role: 'user',
      content: 'Summarize the termination clause in simple language.',
    },
  ],
});

console.log(result.content);
```

## Important notes

- Keep `GROQ_API_KEY` only in Vercel environment variables
- Do not commit a real key to GitHub
- If you want stricter protection later, add rate limiting and request validation to `api/groq.js`
