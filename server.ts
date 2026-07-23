import express from "express";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";
import { buildCvGroundedPrompt, getCvContext, retrieveCvSnippets } from "./cvKnowledge";

const extractCvAnswer = (params: {
  snippets: Array<{ id: string; text: string; score: number }>;
  message: string;
  lang?: string;
}) => {
  const { snippets, message, lang } = params;
  const queryTokens = message
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/u)
    .filter((token) => token.length >= 2);

  const candidates = snippets
    .flatMap((snippet) => snippet.text.split(/\n+/))
    .map((line) => line.trim())
    .map((line) => (line.startsWith("- ") ? line.slice(2).trim() : line))
    .filter((line) => line.length > 20 && !line.startsWith("==="))
    .map((line) => {
      const normalized = line.toLowerCase();
      let score = 0;
      for (const token of queryTokens) {
        if (normalized.includes(token)) score += 1;
      }
      return { line, score };
    })
    .sort((a, b) => b.score - a.score);

  const picked: string[] = [];
  for (const candidate of candidates) {
    if (picked.length >= 4) break;
    if (!candidate.line) continue;
    if (picked.some((line) => line.toLowerCase() === candidate.line.toLowerCase())) continue;
    picked.push(candidate.line);
  }

  if (picked.length === 0) {
    return lang === "fr"
      ? "Je fonctionne actuellement en mode local, mais je n'ai pas trouvé d'information correspondante pour cette question. Essayez de demander plus précisément sur les compétences, les projets ou la formation."
      : "I am currently running in local mode, but I could not find matching information for this question. Please ask more specifically about skills, projects, or education.";
  }

  if (lang === "fr") {
    return [
      "Je fonctionne actuellement en mode local (sans API Gemini). Voici les informations pertinentes :",
      ...picked.map((line, idx) => `${idx + 1}. ${line}`),
    ].join("\n");
  }

  return [
    "I am currently running in local mode (without Gemini API). Here is relevant information:",
    ...picked.map((line, idx) => `${idx + 1}. ${line}`),
  ].join("\n");
};

const hasValidGeminiKey = (value: string | undefined) => {
  if (!value) return false;
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (trimmed.includes("PASTE_YOUR_NEW_GEMINI_API_KEY_HERE")) return false;
  if (trimmed.includes("MY_GEMINI_API_KEY")) return false;
  return true;
};

dotenv.config();
dotenv.config({ path: ".env.local", override: true });

async function startServer() {
  const app = express();
  const DEFAULT_PORT = 3001;

  app.use(express.json());

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/contact", (req, res) => {
    // Replace with a real email service or persistence layer in production.
    const { name, email, message } = req.body;
    void name;
    void email;
    void message;
    res.json({ success: true, message: "Message received successfully!" });
  });

  app.post("/api/chat", async (req, res) => {
    const { prompt, message, lang } = req.body ?? {};

    if (!message || typeof message !== "string") {
      res.status(400).json({
        message: lang === "fr" ? "Message manquant." : "Missing chat message.",
      });
      return;
    }

    try {
      await getCvContext();
      const cvSnippets = await retrieveCvSnippets({
        query: message,
        topK: 4,
      });

      if (!hasValidGeminiKey(process.env.GEMINI_API_KEY)) {
        res.json({
          text: extractCvAnswer({ snippets: cvSnippets, message, lang }),
        });
        return;
      }

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const groundedPrompt = buildCvGroundedPrompt({
        basePrompt: typeof prompt === "string" ? prompt : "",
        userMessage: message,
        lang,
        cvSnippets,
      });

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: groundedPrompt,
      });

      res.json({
        text: response.text || (lang === "fr" ? "Désolé, j'ai rencontré un problème." : "Sorry, I ran into an issue."),
      });
    } catch (error) {
      console.error("Gemini chat failed:", error);
      res.status(500).json({
        message:
          lang === "fr" ? "Je suis un peu occupé, réessayez plus tard !" : "I'm a bit busy, please try again later!",
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve static files from dist
    app.use(express.static("dist"));
  }

  const listenWithRetry = (port: number, retriesLeft: number): Promise<void> => {
    return new Promise((resolve, reject) => {
      const server = app.listen(port, "0.0.0.0");

      server.once("listening", () => {
        resolve();
      });

      server.once("error", (error: NodeJS.ErrnoException) => {
        server.close();

        if (error.code === "EADDRINUSE" && retriesLeft > 0) {
          listenWithRetry(port + 1, retriesLeft - 1).then(resolve).catch(reject);
          return;
        }

        reject(error);
      });
    });
  };

  await listenWithRetry(DEFAULT_PORT, 10);
}

startServer();
