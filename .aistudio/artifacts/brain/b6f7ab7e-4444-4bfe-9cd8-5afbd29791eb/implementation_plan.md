# Implementation Plan — Permanent Public Assets for Vercel & GitHub

Resolve the missing photo issue on Vercel by creating a dedicated `/public/` static assets directory with automatic fallbacks, so images are committed to GitHub and deployed to Vercel for every visitor.

---

## 1. Problem Root Cause Analysis

1. **`localStorage` Domain Isolation**:
   When you clicked "Upload Photo" in the preview environment, the browser stored the image base64 inside the `localStorage` of `ais-dev-...run.app`. The browser **never transfers `localStorage`** across domains to `vercel.app`.
2. **Missing Repository Assets**:
   In `src/data/portfolioData.ts`, `PERMANENT_ASSETS.profilePhoto` and `altiPhoto` were set to `null`. Therefore, the git repository contained no image files to send to Vercel.
3. **Public Mode Lockdown**:
   Because `isPublicDeploymentLocked` was enabled, the upload button was hidden on Vercel, preventing visitors from uploading.

---

## 2. Proposed Solution Architecture

### Step 1: Create `/public` Directory with Static Assets
- Create `/public/daksh-patel.jpg` (or SVG/PNG default asset).
- Create `/public/alti-mascot.png` (or SVG/PNG default asset).
- Create `/public/pix-mascot.png` (or SVG/PNG default asset).
- Any file placed in `/public/` in Vite is automatically copied into the root `dist/` directory on Vercel and served globally at `/daksh-patel.jpg`, `/alti-mascot.png`, etc.

### Step 2: Update `src/data/portfolioData.ts`
- Point permanent asset paths to the `/public` files:
  ```ts
  export const PERMANENT_ASSETS = {
    isPublicDeploymentLocked: true,
    profilePhoto: '/daksh-patel.jpg',
    altiPhoto: '/alti-mascot.png',
    pixPhoto: '/pix-mascot.png',
  };
  ```

### Step 3: Implement Image Error & Fallback Handling in UI
- In `HolographicIdCard.tsx` and `AltivoxHub.tsx`, add an `onError` fallback handler on `<img>` tags. If a file is not yet replaced or fails to load, gracefully fall back to the interactive cyberpunk holographic vector graphic rather than a broken image icon.

### Step 4: Step-by-Step Instructions for Daksh to Add Real Photos
- Provide exact steps for Daksh to drop his real photo files into `/public/daksh-patel.jpg` and `/public/alti-mascot.png`, then run:
  ```bash
  git add public/
  git commit -m "feat: add permanent profile and mascot images"
  git push origin main
  ```
- Vercel will immediately rebuild and show his real photos to every interviewer and visitor.

---

## 3. Verification & Testing

- Run `compile_applet` and `lint_applet` to verify zero TypeScript errors.
- Verify asset loading in development and preview modes.
