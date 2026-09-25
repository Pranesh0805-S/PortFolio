export type ExperienceEntry = {
  period: string;
  title: string;
  place: string;
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    period: "2023 - 2026",
    title: "Bachelor of Computer Application",
    place: "Bishop Appasamy College of Arts and Science, Coimbatore",
    points: [
      "CGPA 7.3/10.",
      "Full-stack development with Node.js, Express, MongoDB, and React/Vite.",
      "Building AI/LLM-integrated products using the Anthropic API and Supabase.",
    ],
  },
  {
    period: "2025",
    title: "Organizer, Debugging Competition",
    place: "Bliss 2025",
    points: ["Organized and ran a college-wide debugging competition."],
  },
  {
    period: "2025",
    title: "Attendee, Google Cloud Community Day",
    place: "Coimbatore",
    points: ["Attended sessions on cloud infrastructure and deployment."],
  },
  {
    period: "2021 - 2023",
    title: "Higher Secondary",
    place: "CMS Matric Higher Secondary School, Coimbatore",
    points: ["HSC Percentage: 61."],
  },
];