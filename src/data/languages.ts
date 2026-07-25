export type SpokenLanguage = {
  name: string;
  levelKey: "native" | "fluent" | "high" | "intermediate";
  percent: number;
};

export const spokenLanguages: SpokenLanguage[] = [
  { name: "Arabic", levelKey: "native", percent: 100 },
  { name: "French", levelKey: "fluent", percent: 90 },
  { name: "English", levelKey: "high", percent: 80 },
  { name: "Italian", levelKey: "intermediate", percent: 50 },
];
