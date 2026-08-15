export type ExperienceEntry = {
  role: string;
  company: string;
  companyLogoInitial: string;
  type: string;
  period: string;
  current: boolean;
  location?: string;
  bulletsEn: string[];
  bulletsFr: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "AI Engineer",
    company: "VisShop AI",
    companyLogoInitial: "V",
    type: "Internship",
    period: "Jun 2026 - Aug 2026",
    current: false,
    location: "Remote",
    bulletsEn: [
      "Developed a client-tracking model to monitor in-store movement and behavior from camera footage.",
      "Built a detection pipeline identifying the most attractive, high-engagement zones in-store based on customer traffic patterns.",
      "Designed an AI interpreter that generates natural-language remarks and insights directly from video frames.",
    ],
    bulletsFr: [
      "Développé un modèle de suivi des clients pour surveiller les mouvements et comportements en magasin à partir d'images de caméra.",
      "Construit un pipeline de détection identifiant les zones les plus attractives et à fort engagement en magasin, basé sur les habitudes de circulation des clients.",
      "Conçu un interpréteur IA qui génère des remarques et des insights en langage naturel directement à partir des images vidéo.",
    ],
  },
  {
    role: "AI Engineer & Full-Stack Developer",
    company: "Wusul Studio",
    companyLogoInitial: "و",
    type: "Internship",
    period: "Aug 2026 - Present",
    current: true,
    bulletsEn: [
      "Developed a full-stack platform for house listings and relocation services, connecting property owners with clients, with all interactions managed through an admin dashboard.",
      "Built a chatbot that streamlines the platform's services entirely through simple messaging.",
    ],
    bulletsFr: [
      "Développé une plateforme full-stack pour les annonces immobilières et les services de relocation, connectant propriétaires et clients, avec toutes les interactions gérées via un tableau de bord admin.",
      "Développé un chatbot qui simplifie l'ensemble des services de la plateforme via de simples messages.",
    ],
  },
];
