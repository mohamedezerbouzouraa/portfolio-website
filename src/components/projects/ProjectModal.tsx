import { Language } from "../locales/translations";

export type ProjectCategory =
  | "Agentic AI & LLMs"
  | "Computer Vision"
  | "Classical ML"
  | "Full-Stack & Web"
  | "MCP & Tools";

export type Project = {
  category: ProjectCategory;
  name: string;
  subtitle: string;
  date?: string;
  image: string;
  tags: string[];
  solution: string;
  tech: string;
  result: string;
  github: string;
  demo?: string;
};

export const categoryOrder: ProjectCategory[] = [
  "Agentic AI & LLMs",
  "Computer Vision",
  "Classical ML",
  "Full-Stack & Web",
  "MCP & Tools",
];

export const categoryLabels: Record<ProjectCategory, string> = {
  "Agentic AI & LLMs": "Agentic AI & LLMs",
  "Computer Vision": "Computer Vision",
  "Classical ML": "Classical ML & DL",
  "Full-Stack & Web": "Full-Stack & Web",
  "MCP & Tools": "Model Context Protocol",
};

const placeholderImage = (seed: string) =>
  `https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&fm=webp&q=80&w=1200&sig=${encodeURIComponent(seed)}`;

// Local images live in /public/assets/images/. We prefix with Vite's BASE_URL so the
// paths resolve correctly whether the site is deployed at the domain root or under a
// subpath (e.g. GitHub Pages project sites like /portfolio-website/).
const localImage = (filename: string) => `${import.meta.env.BASE_URL}assets/images/${filename}`;

export const featuredProjects: Project[] = [
  // Agentic AI & LLMs
  {
    category: "Agentic AI & LLMs",
    name: "INSAT RAG Assistant",
    subtitle: "AI-powered multilingual chatbot for INSAT",
    image: localImage("insat-rag-assistant.jfif"),
    tags: ["Python", "RAG", "LangChain", "Flask"],
    solution:
      "Built a multilingual assistant to answer student and staff questions about INSAT using retrieval-augmented generation grounded in institutional documents.",
    tech:
      "LangChain for orchestration, BM25 retrieval for relevant document chunks, Groq-hosted LLMs for fast inference, a Flask backend, and a glassmorphism front-end UI.",
    result:
      "Delivers accurate, source-grounded answers in multiple languages, reducing manual lookup for common INSAT-related questions.",
    github: "https://github.com/mohamedezerbouzouraa/INSAT-RAG-assistant",
  },
  {
    category: "Agentic AI & LLMs",
    name: "RLHF World Cup 2026",
    subtitle: "FIFA World Cup 2026 chatbot that learns from feedback",
    image: localImage("rlhf-worldcup-2026.jfif"),
    tags: ["Python", "RLHF", "Groq", "Llama 3.3 70B"],
    solution:
      "Created a World Cup 2026 chatbot that lets users rate every response, using that feedback to continuously adapt future answers.",
    tech:
      "Llama 3.3 70B served through Groq for low-latency generation, with a lightweight reinforcement-learning-from-human-feedback loop driven by thumbs up/down ratings.",
    result:
      "Produces a chatbot whose answer quality visibly improves over time as more feedback signals are collected from users.",
    github: "https://github.com/mohamedezerbouzouraa/RLHF-worldcup-2026",
  },
  {
    category: "Agentic AI & LLMs",
    name: "Reviewify",
    subtitle: "LLM-powered multi-tool agent for HR managers",
    image: localImage("reviewify.jfif"),
    tags: ["Python", "LLM Agent"],
    solution:
      "Built an agent that turns a manager's rough bullet points about an employee into a polished, well-structured performance review.",
    tech:
      "A multi-tool LLM agent pipeline that expands, restructures, and tones bullet-point input into professional review documents.",
    result:
      "Cuts the time HR managers spend drafting reviews while keeping the final tone consistent and professional.",
    github: "https://github.com/mohamedezerbouzouraa/Reviewify",
  },
  {
    category: "Agentic AI & LLMs",
    name: "Student Advisor AI",
    subtitle: "Step-by-step interactive learning chatbot",
    image: localImage("student-advisor-ai.jfif"),
    tags: ["Python", "Education AI"],
    solution:
      "Designed an interactive chatbot that guides students through concepts step by step, checking understanding along the way.",
    tech:
      "Conversational LLM flow that explains concepts, then generates and assigns follow-up exercises tailored to the student's level.",
    result:
      "Gives students a patient, on-demand tutor that adapts explanations and practice to how well they're following along.",
    github: "https://github.com/mohamedezerbouzouraa/student-advisor-ai",
  },
  {
    category: "Agentic AI & LLMs",
    name: "MatchPicker AI Dashboard",
    subtitle: "Football analytics dashboard with a custom AI chatbot",
    image: localImage("matchpicker-ai-dashboard.jfif"),
    tags: ["Python", "Sports AI", "Flask"],
    solution:
      "Built a football dashboard combining real-time match analysis and Champions League statistics with a custom-trained chatbot for Q&A.",
    tech:
      "Flask backend serving live match data and stats, paired with a custom AI chatbot trained on football domain knowledge.",
    result:
      "Gives fans a single place to explore live match analysis and ask natural-language questions about teams and stats.",
    github: "https://github.com/mohamedezerbouzouraa/MatchPicker-AI-Dashboard",
  },
  // Computer Vision
  {
    category: "Computer Vision",
    name: "YOLOv8 Car Counter",
    subtitle: "Lightweight vehicle detection and counting",
    image: localImage("yolov8-car-counter.jpg"),
    tags: ["Python", "YOLOv8", "Detection"],
    solution:
      "Built a lightweight system to detect, count, and visualize cars in video footage using bounding boxes.",
    tech:
      "Ultralytics YOLOv8 for real-time object detection, with a counting logic layer and OpenCV-based visualization.",
    result:
      "Provides an efficient, easy-to-deploy traffic counting tool suitable for lightweight edge or desktop use.",
    github: "https://github.com/mohamedezerbouzouraa/YOLOv8-CarCounter",
  },
  {
    category: "Computer Vision",
    name: "Push-Up Counter",
    subtitle: "Pose-based exercise rep counter",
    image: localImage("pushup-counter.jfif"),
    tags: ["Python", "MediaPipe", "Pose Estimation"],
    solution:
      "Built a system that automatically counts push-up repetitions from video by analyzing body posture.",
    tech:
      "MediaPipe for body joint/pose landmark extraction, feeding joint angles into an Adaline (adaptive linear neuron) model to detect rep completion.",
    result:
      "Automates workout tracking without wearables, counting reps directly from a camera feed.",
    github: "https://github.com/mohamedezerbouzouraa/Push-Up-Counter-using-MediaPipe-Adaline",
  },
  {
    category: "Computer Vision",
    name: "Soccer Team Detection",
    subtitle: "Player detection and team classification",
    image: localImage("soccer-team-detection.jfif"),
    tags: ["Python", "YOLOv8", "Classification"],
    solution:
      "Built a system that detects football players on the pitch and classifies them into Blue/White teams automatically.",
    tech:
      "YOLOv8 for player detection combined with jersey-color analysis to assign each detected player to a team.",
    result:
      "Automates team-side classification from raw match footage, a building block for richer sports analytics tools.",
    github: "https://github.com/mohamedezerbouzouraa/Soccer-Team-Detection",
  },
  // Classical ML
  {
    category: "Classical ML",
    name: "RadioDx-COVID",
    subtitle: "Chest X-ray classifier for COVID-19, viral pneumonia, and normal cases",
    image: localImage("thumbnail_covid_project.png"),
    tags: ["Python", "PyTorch", "ResNet18", "Transfer Learning"],
    solution:
      "Built a deep learning model that classifies chest X-rays into Normal, Viral Pneumonia, or COVID-19, trained on the Kaggle COVID-19 Radiography Database.",
    tech:
      "A ResNet18 pretrained on ImageNet used as a feature extractor with a retrained final layer for the 3-class problem, a custom PyTorch Dataset class that balances classes by random sampling, horizontal-flip augmentation during training, and early stopping once validation accuracy reaches 95%.",
    result:
      "Delivers an end-to-end pipeline, from raw dataset preparation to training and prediction visualization, with correct/incorrect predictions highlighted in green/red.",
    github: "https://github.com/mohamedezerbouzouraa/RadioDx-COVID",
  },
  {
    category: "Classical ML",
    name: "Face Verify PCA",
    subtitle: "Face reconstruction and verification using PCA",
    image: localImage("face-verify-pca.jfif"),
    tags: ["Python", "PCA", "Computer Vision"],
    solution:
      "Built a face verification tool that reconstructs a grayscale face image from a PCA (eigenface) model and compares it to the original to flag mismatches.",
    tech:
      "NumPy and Pillow for loading and preprocessing grayscale face images, a custom PCA pipeline for dimensionality reduction and reconstruction, and Matplotlib to visualize the original, reconstructed, and difference-heatmap images side by side.",
    result:
      "Produces an interpretable reconstruction-distance and MSE score per image, giving a lightweight way to flag faces that don't match the trained identity model.",
    github: "https://github.com/mohamedezerbouzouraa/face-verify-pca",
  },
  {
    category: "Classical ML",
    name: "Lifestyle Stability Index",
    subtitle: "Classifying stable vs. unstable daily routines",
    image: localImage("lifestyle-stability-index.png"),
    tags: ["Python", "SVM", "GridSearchCV"],
    solution:
      "Built a classifier that labels a person's daily routine as STABLE or UNSTABLE from lifestyle signals.",
    tech:
      "Support Vector Classifier tuned with GridSearchCV, trained on features like sleep duration, step count, and screen time.",
    result:
      "Delivers a reliable lifestyle-stability classifier with hyperparameters tuned for best generalization.",
    github: "https://github.com/mohamedezerbouzouraa/Lifestyle-Stability-Index-using-GridSearchCV",
  },
  {
    category: "Classical ML",
    name: "Geo Country Guesser",
    subtitle: "Decision-tree country-guessing game",
    image: localImage("geo-country-guesser.png"),
    tags: ["Python", "Decision Tree", "Tkinter"],
    solution:
      "Built an interactive game that guesses which country a user is thinking of using geographic and demographic clues.",
    tech:
      "A Decision Tree model trained on 15 geographic/demographic features, wrapped in a Tkinter desktop GUI.",
    result:
      "Produces a fun, interpretable demonstration of decision-tree reasoning through a playable guessing game.",
    github: "https://github.com/mohamedezerbouzouraa/GEO_Country_Guesser_Using_Decision_Tree",
  },
  {
    category: "Classical ML",
    name: "SpamGuard (SVM)",
    subtitle: "Desktop spam detector using kernel SVM",
    image: localImage("spamguard.jfif"),
    tags: ["Python", "SVM", "NLP"],
    solution:
      "Built a desktop application that flags spam messages using classic NLP and machine learning techniques.",
    tech:
      "TF-IDF text vectorization feeding a Support Vector Machine with the kernel trick, wrapped in a Tkinter GUI.",
    result:
      "Provides a lightweight, offline-capable spam classifier with a simple desktop interface.",
    github: "https://github.com/mohamedezerbouzouraa/SpamGuard--SVM-using-kernel-trick-",
  },
  {
    category: "Classical ML",
    name: "Vehicle Health Predictor",
    subtitle: "Predicting healthy vs. unhealthy vehicles from sensor data",
    image: localImage("vehicle-health-predictor.jfif"),
    tags: ["Python", "Logistic Regression"],
    solution:
      "Built a predictive pipeline that classifies vehicles as healthy or unhealthy based on onboard sensor readings.",
    tech:
      "A Logistic Regression pipeline with preprocessing steps for sensor data cleaning and feature scaling.",
    result:
      "Gives a simple, interpretable early-warning classifier for vehicle maintenance based on sensor signals.",
    github: "https://github.com/mohamedezerbouzouraa/VehicleHealthPredictor",
  },
  // Full-Stack & Web
  {
    category: "Full-Stack & Web",
    name: "Mathematicians Legacy",
    subtitle: "Interactive map of history's mathematicians with an AI guide",
    image: localImage("mathematicians-legacy.jfif"),
    tags: ["PHP", "Python", "Symfony", "Gemini"],
    solution:
      "Built a full-stack platform presenting an interactive map of mathematicians throughout history, paired with an AI chatbot for exploration.",
    tech:
      "Symfony backend for the interactive map and content management, with a Flask service integrating Google's Gemini API for the chatbot.",
    result:
      "Creates an engaging educational platform that blends historical content with conversational AI exploration.",
    github: "https://github.com/mohamedezerbouzouraa/mathematicians-legacy",
  },
  // MCP & Tools
  {
    category: "MCP & Tools",
    name: "JobApplication Tracker AI",
    subtitle: "MCP-based job search workflow assistant",
    image: localImage("job-tracker-mcp.png"),
    tags: ["MCP", "Pydantic", "prompt_toolkit"],
    solution:
      "Built an AI-powered job application tracker on the Model Context Protocol that automatically organizes applications and monitors their status.",
    tech:
      "Model Context Protocol (MCP) server architecture, Pydantic for structured data validation, and prompt_toolkit for a rich CLI experience.",
    result:
      "Streamlines the entire job search workflow, removing the need for manual spreadsheet tracking of applications.",
    github: "https://github.com/mohamedezerbouzouraa/MCP",
  },
];

const projectContentFr: Record<string, { solution: string; tech: string; result: string }> = {
  "https://github.com/mohamedezerbouzouraa/RadioDx-COVID": {
    solution:
      "Modèle de deep learning qui classe les radiographies pulmonaires en Normal, Pneumonie Virale ou COVID-19, entraîné sur la base de données Kaggle COVID-19 Radiography Database.",
    tech:
      "ResNet18 pré-entraîné sur ImageNet utilisé comme extracteur de caractéristiques avec une dernière couche réentraînée pour le problème à 3 classes, une classe Dataset PyTorch personnalisée équilibrant les classes par échantillonnage aléatoire, une augmentation par retournement horizontal pendant l'entraînement, et un arrêt anticipé une fois 95% de précision de validation atteinte.",
    result:
      "Fournit un pipeline complet, de la préparation des données brutes jusqu'à l'entraînement et la visualisation des prédictions, avec les prédictions correctes/incorrectes surlignées en vert/rouge.",
  },
  "https://github.com/mohamedezerbouzouraa/face-verify-pca": {
    solution:
      "Outil de vérification faciale qui reconstruit une image de visage en niveaux de gris à partir d'un modèle PCA (eigenfaces) et la compare à l'original pour détecter les incohérences.",
    tech:
      "NumPy et Pillow pour le chargement et le prétraitement des images de visage en niveaux de gris, un pipeline PCA maison pour la réduction de dimension et la reconstruction, et Matplotlib pour visualiser côte à côte l'image originale, reconstruite et la carte de différence.",
    result:
      "Fournit un score de distance de reconstruction et de MSE interprétable par image, permettant de signaler facilement les visages qui ne correspondent pas au modèle d'identité entraîné.",
  },
  "https://github.com/mohamedezerbouzouraa/INSAT-RAG-assistant": {
    solution:
      "Assistant multilingue conçu pour répondre aux questions des étudiants et du personnel de l'INSAT grâce à une génération augmentée par récupération de documents institutionnels.",
    tech:
      "LangChain pour l'orchestration, récupération BM25 des passages pertinents, modèles LLM hébergés sur Groq, backend Flask et interface glassmorphism.",
    result:
      "Fournit des réponses précises et sourcées en plusieurs langues, réduisant les recherches manuelles pour les questions courantes.",
  },
  "https://github.com/mohamedezerbouzouraa/RLHF-worldcup-2026": {
    solution:
      "Chatbot sur la Coupe du Monde 2026 permettant de noter chaque réponse pour améliorer continuellement la qualité des réponses futures.",
    tech:
      "Llama 3.3 70B servi via Groq pour une génération rapide, avec une boucle légère de RLHF pilotée par les votes des utilisateurs.",
    result:
      "Un chatbot dont la qualité des réponses s'améliore visiblement au fil des retours collectés.",
  },
  "https://github.com/mohamedezerbouzouraa/Reviewify": {
    solution:
      "Agent transformant les points clés notés par un manager en une évaluation de performance structurée et professionnelle.",
    tech:
      "Pipeline d'agent LLM multi-outils qui développe, restructure et ajuste le ton du texte fourni.",
    result:
      "Réduit le temps de rédaction des évaluations RH tout en gardant un ton professionnel homogène.",
  },
  "https://github.com/mohamedezerbouzouraa/student-advisor-ai": {
    solution:
      "Chatbot interactif qui guide les étudiants étape par étape et vérifie leur compréhension en cours de route.",
    tech:
      "Flux conversationnel basé sur un LLM qui explique les concepts puis génère des exercices adaptés au niveau de l'étudiant.",
    result:
      "Offre un tuteur patient et disponible à la demande, qui adapte ses explications à la progression de l'étudiant.",
  },
  "https://github.com/mohamedezerbouzouraa/MatchPicker-AI-Dashboard": {
    solution:
      "Tableau de bord football combinant analyse de match en temps réel, statistiques de Ligue des Champions et chatbot IA sur mesure.",
    tech:
      "Backend Flask servant les données live et les statistiques, associé à un chatbot IA entraîné sur le domaine du football.",
    result:
      "Donne aux fans un point d'accès unique pour explorer les matchs et poser des questions en langage naturel.",
  },
  "https://github.com/mohamedezerbouzouraa/YOLOv8-CarCounter": {
    solution:
      "Système léger de détection, comptage et visualisation des voitures dans une vidéo à l'aide de boîtes englobantes.",
    tech:
      "YOLOv8 d'Ultralytics pour la détection en temps réel, logique de comptage et visualisation via OpenCV.",
    result:
      "Un outil de comptage de trafic efficace, facile à déployer sur des configurations légères.",
  },
  "https://github.com/mohamedezerbouzouraa/Push-Up-Counter-using-MediaPipe-Adaline": {
    solution:
      "Système comptant automatiquement les répétitions de pompes à partir d'une analyse de la posture corporelle.",
    tech:
      "MediaPipe pour l'extraction des points clés du corps, angles articulaires envoyés à un modèle Adaline pour détecter chaque répétition.",
    result:
      "Automatise le suivi d'entraînement sans capteur portable, en comptant les répétitions via la caméra.",
  },
  "https://github.com/mohamedezerbouzouraa/Soccer-Team-Detection": {
    solution:
      "Système détectant les joueurs de football sur le terrain et les classant automatiquement en équipe Bleue/Blanche.",
    tech:
      "YOLOv8 pour la détection des joueurs combiné à une analyse de la couleur du maillot pour l'attribution d'équipe.",
    result:
      "Automatise la classification des équipes à partir d'images brutes de match, base pour des outils d'analyse sportive plus riches.",
  },
  "https://github.com/mohamedezerbouzouraa/Lifestyle-Stability-Index-using-GridSearchCV": {
    solution:
      "Classificateur qui étiquette la routine quotidienne d'une personne comme STABLE ou INSTABLE à partir de signaux de mode de vie.",
    tech:
      "SVC optimisé avec GridSearchCV, entraîné sur la durée de sommeil, le nombre de pas et le temps d'écran.",
    result:
      "Un classificateur de stabilité de mode de vie fiable, avec des hyperparamètres optimisés pour une bonne généralisation.",
  },
  "https://github.com/mohamedezerbouzouraa/GEO_Country_Guesser_Using_Decision_Tree": {
    solution:
      "Jeu interactif qui devine à quel pays pense l'utilisateur à partir d'indices géographiques et démographiques.",
    tech:
      "Modèle d'arbre de décision entraîné sur 15 caractéristiques géographiques/démographiques, interface Tkinter.",
    result:
      "Une démonstration ludique et interprétable du raisonnement par arbre de décision sous forme de jeu.",
  },
  "https://github.com/mohamedezerbouzouraa/SpamGuard--SVM-using-kernel-trick-": {
    solution:
      "Application de bureau détectant les messages indésirables grâce à des techniques classiques de NLP et de machine learning.",
    tech:
      "Vectorisation TF-IDF alimentant un SVM avec l'astuce du noyau, le tout dans une interface Tkinter.",
    result:
      "Un classificateur de spam léger, utilisable hors ligne, avec une interface de bureau simple.",
  },
  "https://github.com/mohamedezerbouzouraa/VehicleHealthPredictor": {
    solution:
      "Pipeline prédictif classifiant les véhicules comme sains ou défaillants à partir de données de capteurs embarqués.",
    tech:
      "Pipeline de régression logistique avec étapes de nettoyage et de mise à l'échelle des données capteurs.",
    result:
      "Un classificateur d'alerte précoce simple et interprétable pour la maintenance des véhicules.",
  },
  "https://github.com/mohamedezerbouzouraa/mathematicians-legacy": {
    solution:
      "Plateforme full-stack présentant une carte interactive des mathématiciens à travers l'histoire, accompagnée d'un chatbot IA.",
    tech:
      "Backend Symfony pour la carte interactive et la gestion de contenu, service Flask intégrant l'API Gemini de Google pour le chatbot.",
    result:
      "Crée une plateforme éducative engageante mêlant contenu historique et exploration conversationnelle par IA.",
  },
  "https://github.com/mohamedezerbouzouraa/MCP": {
    solution:
      "Suivi de candidatures alimenté par l'IA, basé sur le Model Context Protocol, qui organise automatiquement les candidatures et suit leur statut.",
    tech:
      "Architecture serveur MCP, Pydantic pour la validation des données structurées, et prompt_toolkit pour une expérience CLI riche.",
    result:
      "Simplifie tout le processus de recherche d'emploi, sans suivi manuel dans un tableur.",
  },
};

export const getLocalizedProjectContent = (project: Project, lang: Language) => {
  if (lang === "fr") {
    return (
      projectContentFr[project.github] || {
        solution: project.solution,
        tech: project.tech,
        result: project.result,
      }
    );
  }

  return {
    solution: project.solution,
    tech: project.tech,
    result: project.result,
  };
};
