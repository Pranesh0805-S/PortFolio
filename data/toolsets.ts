export type Tool = readonly [name: string, proof: string];
export type Toolset = {
  number: string;
  title: string;
  note: string;
  tools: readonly Tool[];
};

export const TOOLSETS: readonly Toolset[] = [
  {
    number: "01",
    title: "Frontend",
    note: "Interfaces in shipped projects",
    tools: [
      ["React", "Envoy Mail · Markdrop"],
      ["Next.js", "Flow State · Portfolio"],
      ["TypeScript", "Flow State"],
      ["Tailwind CSS", "Portfolio"],
    ],
  },
  {
    number: "02",
    title: "Backend & data",
    note: "APIs and application services",
    tools: [
      ["Node.js", "Agent Guard · Envoy Mail"],
      ["Express", "Agent Guard · Markdrop"],
      ["Python / FastAPI", "JobAlert Bot"],
      ["PostgreSQL / pgvector", "JobAlert Bot"],
    ],
  },
  {
    number: "03",
    title: "AI & automation",
    note: "Applied to practical workflows",
    tools: [
      ["Claude API", "Agent Guard · Envoy Mail"],
      ["GitHub Actions", "Ouroboros"],
      ["Gmail API", "Envoy Mail"],
      ["WhatsApp Business API", "JobAlert Bot"],
    ],
  },
];
