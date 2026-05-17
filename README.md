# ContractAI — AI Contract & Legal Document Automation

A full React + Vite SaaS landing page with a working AI contract generator powered by the Anthropic API.

## 🚀 Quick Start (Local Dev)

```bash
# 1. Clone the repo
git clone https://github.com/rintuchowdory/contractai.git
cd contractai

# 2. Install dependencies
npm install

# 3. Create your .env file (NEVER commit this)
cp .env.example .env
# Then edit .env and paste your Anthropic API key

# 4. Run dev server
npm run dev
# → http://localhost:5173/contractai/
```

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `VITE_ANTHROPIC_API_KEY` | Your Anthropic API key from console.anthropic.com |

> ⚠️ The `VITE_` prefix exposes the key in the browser bundle.  
> This is acceptable for portfolio/demo projects. For production, proxy via a backend.

## 📦 Deploy to GitHub Pages

### Step 1 — Create a new GitHub repo named `contractai`

### Step 2 — Enable GitHub Pages
Go to your repo → **Settings → Pages → Source → GitHub Actions**

### Step 3 — Add your API key as a secret
Go to **Settings → Secrets and variables → Actions → New repository secret**

| Name | Value |
|---|---|
| `VITE_ANTHROPIC_API_KEY` | `sk-ant-...` |

### Step 4 — Push to main

```bash
git init
git add .
git commit -m "feat: initial ContractAI build"
git branch -M main
git remote add origin https://github.com/rintuchowdory/contractai.git
git push -u origin main
```

GitHub Actions will automatically build and deploy.  
Your site will be live at: `https://rintuchowdory.github.io/contractai/`

## 🗂️ Project Structure

```
contractai/
├── .github/workflows/deploy.yml   # CI/CD — auto-deploys on push to main
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx               # Canvas animation + AI generator
│   │   ├── HowItWorks.jsx
│   │   ├── Features.jsx
│   │   ├── ContractTypes.jsx
│   │   ├── Benefits.jsx
│   │   ├── Industry.jsx
│   │   ├── Pricing.jsx            # Monthly/yearly toggle
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js                 # base: '/contractai/'
├── package.json
├── .env.example                   # Template — copy to .env
└── .gitignore                     # .env is excluded
```

## ⚙️ Change the Repo Name

If your repo is named differently (e.g. `contract-ai`), update `vite.config.js`:

```js
base: '/contract-ai/',
```

## 🛠️ Tech Stack

- React 18 + Vite 5
- Anthropic Claude API (`claude-sonnet-4-20250514`)
- Pure CSS-in-JS (no Tailwind, no UI lib)
- GitHub Actions + GitHub Pages
