export type Certification = {
  title: string;
  titleFr: string;
  issuer: string;
  issuedEn: string;
  issuedFr: string;
  credentialId: string;
  url: string;
  descriptionEn: string;
  descriptionFr: string;
  tags: string[];
};

export const certifications: Certification[] = [
  {
    title: "Foundations of Open Generative AI Engineering – Course Certificate",
    titleFr: "Foundations of Open Generative AI Engineering – Certificat de cours",
    issuer: "Coursera",
    issuedEn: "Nov 2026",
    issuedFr: "Nov. 2026",
    credentialId: "0X9UT4OP3J58",
    url: "https://coursera.org/share/577eebd0cecd97e95b0458c82046ef95",
    descriptionEn:
      "Completed the “Foundations of Open Generative AI Engineering” course on Coursera. The course covered how to select, evaluate, and deploy open-weight LLMs such as Mistral, Mixtral, and LLaMA.",
    descriptionFr:
      "A terminé le cours « Foundations of Open Generative AI Engineering » sur Coursera. Le cours a couvert la sélection, l'évaluation et le déploiement de LLMs à poids ouverts tels que Mistral, Mixtral et LLaMA.",
    tags: ["Coursera", "Open-weight LLMs", "Mistral", "Mixtral", "LLaMA"],
  },
];
