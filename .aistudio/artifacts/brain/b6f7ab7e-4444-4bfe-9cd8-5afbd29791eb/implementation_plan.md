# Implementation Plan — GitHub to Vercel Deployment Guide & Configuration

Deploy Daksh Jayeshbhai Patel's Cyberpunk Developer Portfolio to **Vercel** via **GitHub** (`altivox-alti`), ensuring automated zero-downtime builds, SPA URL routing without 404s, and public visitor security lockdown.

---

## 1. Project Configuration for Vercel & GitHub

- **Create `vercel.json`**:
  - Configure URL rewrites so Vite client-side routing serves `index.html` for all subpaths:
    ```json
    {
      "rewrites": [
        { "source": "/(.*)", "destination": "/index.html" }
      ]
    }
    ```
  - Define caching headers for immutable assets (`assets/*`) to maximize performance scores on Vercel Edge Network.

- **Check `.gitignore`**:
  - Ensure `dist`, `node_modules`, `.env`, `.DS_Store`, and build caches are properly excluded from version control.

- **Create `README.md`**:
  - Provide ready-to-run Git commands tailored for Daksh's GitHub account (`altivox-alti`).
  - Document Vercel build settings:
    - **Framework Preset**: `Vite`
    - **Build Command**: `npm run build`
    - **Output Directory**: `dist`
    - **Install Command**: `npm install`

---

## 2. Step-by-Step GitHub & Vercel Deployment Workflow

### Step A: Push Code to GitHub (`altivox-alti`)
1. In your local terminal, initialize git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of Daksh Patel GDG SSASIT 2026 portfolio"
   ```
2. Create a new repository on your GitHub account ([github.com/altivox-alti](https://github.com/altivox-alti)) named `daksh-portfolio` or `gdg-portfolio`.
3. Link the remote and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/altivox-alti/<your-repo-name>.git
   git push -u origin main
   ```

### Step B: Import to Vercel
1. Log in to your [Vercel Dashboard](https://vercel.com).
2. Click **"Add New..."** -> **"Project"**.
3. Select **"Continue with GitHub"** and choose your repository (`altivox-alti/<your-repo-name>`).
4. In the Project Configuration:
   - **Framework Preset**: Auto-detected as **Vite**
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (or `vite build`)
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Vercel will build and assign an instant live URL (e.g., `https://daksh-portfolio.vercel.app`).

### Step C: Continuous Deployment
- Any future change you push to the `main` branch (`git push origin main`) will automatically trigger a fresh Vercel build and deploy in seconds.

---

## 3. Production Verification & Security Checks

- **Zero-Downtime Build**:
  - Run `npm run build` locally to confirm `dist/` builds without errors.
- **Lockdown Verification**:
  - Confirm public visitors see the clean, read-only official photos without upload prompts.
  - Confirm the secret owner key combination (`Shift + Alt + D`) allows Daksh to modify photos if needed.
- **Links Verification**:
  - Verify all 5 official links open in a new tab:
    1. LinkedIn: `https://www.linkedin.com/in/daksh-patel-a05ab3273...`
    2. GitHub: `https://github.com/altivox-alti`
    3. Altivox Platform: `https://altivox-ai-ten.vercel.app`
    4. YouTube: `https://youtube.com/@altivox_ai`
    5. Instagram: `https://www.instagram.com/altivox_ai`
