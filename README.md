# Mohamed Ezer Bouzouraa — AI Engineer Portfolio

Personal portfolio of **Mohamed Ezer Bouzouraa**, a software and AI engineer based in Tunis, Tunisia, currently studying Software & AI Engineering at INSAT.

Built with React 19, TypeScript, Vite, Tailwind CSS v4, and Motion.
Link : https://mohamedezerbouzouraa.github.io/portfolio-website/

## Features

- **Bilingual (EN / FR)** UI toggle in the navbar.
- **Categorized, horizontally-scrollable project grid** across 5 focus areas: Agentic AI & LLMs, Computer Vision, Classical ML, Full-Stack & Web, and MCP & Tools — 14 projects total, each with a detail modal.
- **CV-grounded AI chatbot** (bottom-right widget): retrieves relevant snippets from `public/Mohamed_Ezer_Resume.pdf` (if present) using a lightweight TF‑IDF search, then either:
  - answers via Google Gemini if `GEMINI_API_KEY` is set in `.env.local`, or
  - falls back to a fully local, no-API-key extractive answer mode using the facts in `cvProfileData.ts`.
- **Contact form** posting to a local `/api/contact` Express endpoint (stub — wire up a real email service for production).
- Light/dark theme toggle, scroll progress bar, and custom cursor.
- Blogs section linking out to the Maths Blog and the Prime Numbers article.
- Spoken languages section (Arabic, French, English, Italian).

## Getting started

```bash
npm install
npm run dev
```

This starts an Express + Vite dev server on `http://localhost:3001` (or the next free port).

### Optional: enable the Gemini-powered chatbot

Copy `.env.example` to `.env.local` and set a real key:

```bash
cp .env.example .env.local
```

```
GEMINI_API_KEY="your_real_key"
```

Without a valid key, the chatbot automatically runs in local extractive mode — no external API calls, fully offline-capable.

### Optional: add your resume PDF

Place a file named `Mohamed_Ezer_Resume.pdf` in `public/`. It will be used both for the "Download Resume" button and, if present, as additional grounding context for the chatbot. If the file is missing, the app still works — the chatbot falls back to the hard-coded facts in `cvProfileData.ts`.

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
├── server.ts                # Express server: /api/chat, /api/contact, Vite middleware
├── cvKnowledge.ts            # PDF parsing + TF-IDF retrieval for the chatbot
├── cvProfileData.ts          # Hard-coded EN/FR fallback facts about Mohamed
├── src/
│   ├── App.tsx               # Page composition: hero, skills, projects, education, blogs, languages, contact
│   ├── data/
│   │   ├── constants.ts      # Contact links
│   │   ├── projects.ts       # All 14 projects + FR translations
│   │   ├── blogs.ts          # Blog links
│   │   └── languages.ts      # Spoken languages
│   ├── locales/translations.ts
│   └── components/
│       ├── chat/AIChatbot.tsx
│       ├── contact/ContactForm.tsx
│       ├── layout/Navbar.tsx
│       ├── projects/ProjectModal.tsx
│       └── ui/{CustomCursor,ScrollProgress}.tsx
└── public/                   # Static assets (add Mohamed_Ezer_Resume.pdf here)
```

## Deployment

The GitHub Actions workflow under `.github/workflows` (copied from the reference repo) builds and deploys `dist/` to GitHub Pages. Set `VITE_BASE_PATH` to your repo name (e.g. `/portfolio/`) if deploying to a project page rather than a custom domain.
