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
