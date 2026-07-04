# Deployment notes for ContractAI

## Current deployment posture

This repository now supports **two deployment targets**:

- **Vercel** for the AI-enabled app with the secure Groq server-side proxy
- **GitHub Pages** for the static frontend build

## Recommended release flow

1. Open a pull request into `main`
2. Let the CI workflow validate install, optional lint, optional tests, and production build
3. Merge only after CI passes
4. Let the GitHub Pages workflow publish the static site from the Vite `dist/` build output
5. Use Vercel separately when you want the server-side Groq endpoint to be live

## GitHub Pages behavior

The Pages workflow now:

- installs dependencies with `npm ci`
- builds the Vite app with a Pages-specific base path
- uploads the generated `dist/` directory as the Pages artifact
- deploys the artifact with GitHub Actions Pages deployment
- creates a `404.html` fallback from `index.html` to reduce refresh issues for SPA-style navigation

### Branch and output

- Trigger: pushes to `main` or manual workflow dispatch
- Output directory: `dist/`
- Project-page base path: `/contractai/`

## Vercel behavior

Use **Vercel** when you want the secure server-side Groq flow.

Important rule:
- `GROQ_API_KEY` should stay only in Vercel environment variables, not in frontend code and not in GitHub Pages.

## Environment variables and API keys

Do **not** expose real AI provider secrets directly to browser code.

If a variable is injected into a frontend build, users can usually recover it from the shipped JavaScript bundle or network traffic.

Safer approach:

- keep provider secrets on a backend or serverless function
- let the frontend call that backend endpoint instead of calling the provider directly
- store secrets only in server-side runtime environments

## Manual GitHub Pages checklist

1. Open repository **Settings → Pages**
2. Ensure the source is **GitHub Actions**
3. Merge the PR into `main`
4. Wait for the **Deploy GitHub Pages** workflow to finish
5. Open the published Pages URL and verify static pages load correctly

## Suggested next improvements

- wire the visible ContractAI UI to the new `/api/groq` endpoint when you are ready to make the AI flow live on Vercel
- add at least one smoke test for the landing page
- add a lint script if you want CI to enforce code style automatically
