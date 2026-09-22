export type ExperienceEntry = {
  period: string;
  title: string;
  place: string;
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    period: "2022 — Present",
    title: "Final-Year B.E. Computer Science",
    place: "Coimbatore, Tamil Nadu",
    points: [
      "Full-stack development with Node.js, Express, MongoDB, and React/Vite.",
      "Building AI/LLM-integrated products using the Anthropic API and Supabase.",
      "Preparing for software placement interviews.",
    ],
  },
];
