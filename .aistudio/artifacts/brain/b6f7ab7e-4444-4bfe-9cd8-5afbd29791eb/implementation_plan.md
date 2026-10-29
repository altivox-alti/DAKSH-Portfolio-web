# Permanent Photo Embedding & Deployment Lockdown Plan

A deployment-ready enhancement for GitHub and Vercel that embeds Daksh's photo and the Alti/Pix mascot photos directly into the codebase assets, locking down public visitor permissions so external interviewers cannot upload, overwrite, or delete photos.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following decisions were confirmed by the user in Phase 1 clarification:

- **Deployment Lockdown**: When published on GitHub and Vercel, public visitors and recruiters must strictly see permanent, read-only photos. All public "Upload Photo", "Change Photo", and "Trash / Cancel Photo" buttons will be hidden from public view.
- **Embedded Permanent Assets**: Daksh's real photo and the Alti/Pix mascot visuals will be saved directly into the codebase configuration (`src/data/portfolioData.ts` / permanent asset configs) so they load instantly for any visitor on Vercel without requiring `localStorage`.
- **In-App Photo Baker & Secret Owner Mode**: A discreet "Lock & Save As Permanent Code" tool in preview mode to easily convert uploaded images into permanent codebase assets, plus a secret owner shortcut (`Shift + Alt + D` or subtle footer key) to unlock editing only for Daksh.

---

## 1. Overview & Core Concept

- **What It Delivers**: Transforms the temporary client-side `localStorage` photo system into a permanent, version-controlled asset system for production deployment on GitHub and Vercel.
- **The Problem It Solves**: `localStorage` is local to one browser; when deployed on Vercel, public recruiters on other laptops or phones would previously see an empty photo frame with an "Upload Photo" prompt. This update guarantees every visitor sees Daksh's verified photo and official mascots permanently, with zero possibility of tampering or accidental deletion.
- **Target Audience**: GDG on Campus SSASIT 2026 recruiters visiting the live Vercel URL.

---

## 2. User Experience & Visual Design

### A. Public Deployment View (Visitors on Vercel / GitHub Pages)
- **3D Holographic ID Card**:
  - Displays Daksh's permanent high-resolution photo with glowing cyan/violet holographic rim lighting.
  - Shows verified identity badge: `VERIFIED CANDIDATE: DAKSH PATEL (IT20)`.
  - **Zero Public Edit Controls**: No camera icon, no "Upload / Change Photo" button, and no delete/trash button visible to visitors.
- **ALTIVOX Creator Hub**:
  - Displays Alti and Pix permanently with glowing holographic character frames and series attribution.
  - Upload buttons and reset controls are hidden for visitors.

### B. Owner Mode & Asset Baker (Daksh's Admin Utility)
- **Permanent Asset Configurator**:
  - In development preview or when unlocked via secret owner shortcut (`Shift + Alt + D`), an "Owner Mode: Active" indicator appears.
  - Daksh can upload any photo from his laptop/phone and click **"Bake Into Permanent Codebase"**.
  - This immediately updates the default code constants, so committing to GitHub preserves the photo for all future Vercel builds!

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Permanent Asset Configs vs. Public Upload Storage**
  - *Chosen Approach*: Permanent base64/URL asset constants bundled directly in the Git repository.
  - *Why*: Static hosting on Vercel has no server-side filesystem write permissions. Baking the image into the codebase guarantees 100% uptime, zero external image host dependencies, and zero broken image links.

- **Decision 2: Public Lockdown by Default with Secret Owner Toggle**
  - *Chosen Approach*: `isPublicLocked = true` by default in production, toggleable via `Shift + Alt + D`.
  - *Why*: Protects against unauthorized photo changes by interviewers or peers visiting the live site, while giving Daksh full freedom to update it whenever needed.

---

## 4. Technical Architecture & Component Mapping

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Permanent Asset Flow                            │
│                                                                        │
│   ┌─────────────────────────────────────────────────────────────────┐  │
│   │             Permanent Asset Store (portfolioData.ts)            │  │
│   │  - DEFAULT_PROFILE_PHOTO (Permanent high-res asset)            │  │
│   │  - DEFAULT_ALTI_PHOTO / DEFAULT_PIX_PHOTO                       │  │
│   └─────────────────────────────────────────────────────────────────┘  │
│                                    │                                   │
│            ┌───────────────────────┴───────────────────────┐            │
│            ▼                                               ▼            │
│  ┌──────────────────────────────┐             ┌──────────────────────┐ │
│  │   Holographic ID Card        │             │   ALTIVOX Hub        │ │
│  │   - Public Mode: Read-Only   │             │   - Public Mode:     │ │
│  │     Verified Candidate Badge │             │     Read-Only Mascots│ │
│  │   - Zero edit/trash buttons  │             │   - Zero upload tabs │ │
│  └──────────────────────────────┘             └──────────────────────┘ │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │     Secret Owner Toggle (Shift+Alt+D / Discreet Footer Switch)   │  │
│  │     Allows Daksh to update permanent photo before Git commit     │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

### Components to Update:
1. `src/data/portfolioData.ts`: Add `PERMANENT_ASSETS` containing default embedded photos and `isPublicLocked` toggle.
2. `src/components/HolographicIdCard.tsx`: Hide upload/remove buttons when locked; render permanent photo and verified badge.
3. `src/components/AltivoxHub.tsx`: Hide upload/reset buttons when locked; render permanent mascot photos.
4. `src/components/Footer.tsx`: Add a discreet Owner Mode indicator and key listener for Daksh.
