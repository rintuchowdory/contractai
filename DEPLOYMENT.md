# Deployment notes for ContractAI

## Current deployment posture

This repository appears to be a Vite + React frontend that is already set up for GitHub Pages deployment.

## Recommended release flow

1. Open a pull request into `main`
2. Let the CI workflow validate install, optional lint, optional tests, and production build
3. Merge only after CI passes
4. Let the existing deployment workflow publish the built site

## GitHub Pages checklist

- Confirm the repository Pages source matches the deployment workflow strategy used in `.github/workflows/deploy.yml`
- If the site is served as a project page, make sure the Vite base path matches the repository name when needed
- Verify the built output directory is the Vite default `dist/` unless the deployment workflow overrides it

## Environment variables and API keys

Do **not** expose real AI provider secrets directly to browser code.

Important rule:
- If a variable is injected into a frontend build, users can usually recover it from the shipped JavaScript bundle or network traffic.

Safer approach:
- Keep provider secrets on a backend or serverless function
- Let the frontend call that backend endpoint instead of calling the provider directly
- Store secrets in GitHub repository secrets only for server-side use in CI or deployment, not for permanent client-side runtime access

## When an API key is actually needed

A key is only needed if ContractAI is going to make live Gemini or other AI API requests.

- For a static marketing/demo site: no API key is needed
- For real AI analysis from the app: use a backend proxy and keep the provider key server-side

## Suggested next improvements

- Add a dedicated lint script if one is not present yet
- Add at least one smoke test for the landing page
- Review the deployment workflow to ensure it only runs after a successful build validation
