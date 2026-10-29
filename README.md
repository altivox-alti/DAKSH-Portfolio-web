# Daksh Patel — Cyberpunk Developer Portfolio | GDG SSASIT 2026

Ultra-fast, responsive dark cyberpunk portfolio web application built with **React 19**, **Tailwind CSS**, and **Lucide-react** icons.

**Candidate:** Daksh Jayeshbhai Patel  
**Institution:** Shri Swami Atmanand Saraswati Institute of Technology (SSASIT), Surat  
**Program:** 1st Year B.Tech in Information Technology (Roll No: **IT20**)  
**Target Role:** GDG on Campus (Google Developer Groups) SSASIT 2026 Core Team  
**Domains:** Web Developer · Applied AI/ML · Cybersecurity  

---

## 🚀 Live Links & Profiles

- **Official Web Platform:** [https://altivox-ai-ten.vercel.app](https://altivox-ai-ten.vercel.app)
- **LinkedIn Profile:** [https://www.linkedin.com/in/daksh-patel-a05ab3273](https://www.linkedin.com/in/daksh-patel-a05ab3273?utm_source=share_via&utm_content=profile&utm_medium=member_android)
- **GitHub Profile:** [https://github.com/altivox-alti](https://github.com/altivox-alti)
- **YouTube Channel:** [https://youtube.com/@altivox_ai](https://youtube.com/@altivox_ai) (`@altivox_ai`)
- **Instagram Account:** [https://www.instagram.com/altivox_ai](https://www.instagram.com/altivox_ai) (`@altivox_ai`)

---

## 🛠️ Deploying to Vercel via GitHub (Recommended Workflow)

### Step 1: Create a Repository on GitHub
1. Open your browser and go to [github.com/new](https://github.com/new) while logged into **altivox-alti**.
2. Name the repository (e.g. `daksh-portfolio` or `gdg-ssasit-portfolio`).
3. Set visibility to **Public** (or **Private**).
4. Do **not** check "Initialize with README" (since this project already includes one).
5. Click **Create repository**.

### Step 2: Push Your Local Code to GitHub
Open your project folder in your terminal and run:

```bash
# 1. Initialize git
git init

# 2. Add all files
git add .

# 3. Create your initial commit
git commit -m "feat: complete cyberpunk portfolio for GDG SSASIT 2026"

# 4. Set default branch to main
git branch -M main

# 5. Link to your GitHub repo (replace <repo-name> with your repo's name)
git remote add origin https://github.com/altivox-alti/<repo-name>.git

# 6. Push to GitHub
git push -u origin main
```

---

### Step 3: Connect and Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account (`altivox-alti`).
2. On your Vercel dashboard, click **"Add New..."** → **"Project"**.
3. In the list of GitHub repositories, find your repository and click **"Import"**.
4. Configure Project Settings:
   - **Project Name:** `daksh-portfolio` (or your preferred name)
   - **Framework Preset:** `Vite` (Vercel automatically detects this)
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **"Deploy"**.

Vercel will build the project in about 20-30 seconds and provide a production URL (e.g., `https://daksh-portfolio.vercel.app`).

---

### 🔄 Automatic Continuous Deployment (CI/CD)
Whenever you push changes to GitHub:
```bash
git add .
git commit -m "update: new projects or certifications"
git push
```
Vercel will automatically detect the commit, trigger a fresh build, and update your live site with zero downtime.

## 🖼️ How to Add Your Permanent Photos for Vercel

Vite and Vercel serve all static files in the `/public` directory globally to every visitor:

1. **Your Profile Photo:**
   - Save your photo file as `public/daksh-patel.jpg` (or `public/daksh-patel.png`).
   - If using `.jpg` or `.png`, update line 32 in `src/data/portfolioData.ts`:
     ```ts
     profilePhoto: "/daksh-patel.jpg",
     ```
2. **Alti Mascot Photo:**
   - Save your Alti artwork into `public/alti-mascot.png` (or `.svg` / `.jpg`).
   - If using `.png`, update line 35 in `src/data/portfolioData.ts`:
     ```ts
     altiPhoto: "/alti-mascot.png",
     ```
3. **Pix Mascot Photo:**
   - Save your Pix artwork into `public/pix-mascot.png`.
   - Update line 38 in `src/data/portfolioData.ts`:
     ```ts
     pixPhoto: "/pix-mascot.png",
     ```

4. **Commit & Push to GitHub:**
   ```bash
   git add public/ src/data/portfolioData.ts
   git commit -m "feat: add permanent profile and mascot images"
   git push origin main
   ```
   *Vercel will deploy in 20 seconds, and all visitors will see your photos immediately!*

---

## 🔒 Public Deployment vs Owner Mode

On public Vercel and GitHub deployments:
- **Public Visitors:** Photo upload and reset buttons are automatically hidden. Visitors see only Daksh's verified identity credentials, SSASIT badges, and Alti & Pix mascots.
- **Owner Secret Toggle:** Press <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>D</kbd> on any page to toggle Owner Mode on or off if you want to update images.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run build check
npm run build

# Type check
npm run lint
```
