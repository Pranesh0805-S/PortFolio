export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  accent: string;
  github: string;
  live?: string;
  hasUI: boolean;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "envoy-mail",
    name: "Envoy Mail",
    category: "AI / Productivity",
    description:
      "An agentic Gmail management workbench that categorizes, summarizes, and drafts replies to your inbox in real time.",
    stack: ["Node.js", "Gmail API", "Claude API", "React"],
    accent: "#5eead4",
    github: "https://github.com/Pranesh0805-S/Envoy",
    hasUI: true,
    image: "/projects/envoy-mail.png",
  },
  {
    slug: "agent-guard",
    name: "Agent Guard",
    category: "AI / Security",
    description: "A guard layer between a tool-using AI agent and its tools, built to measure and reduce prompt injection. A domain allowlist, a blind second-model reviewer, and a human approval queue cut successful attacks from 30% to 0% across 20 benchmark runs, with all harmless tasks still completing.",
    stack: ["Node.js", "Express", "Claude API"],
    accent: "#fbbf24",
    github: "https://github.com/Pranesh0805-S/Agent-Guard",
    hasUI: false,
  },
  {
    slug: "ouroboros",
    name: "Ouroboros",
    category: "AI / DevOps",
    description:
      "A self-healing CI/CD pipeline that classifies failing builds and generates patches automatically.",
    stack: ["Node.js", "GitHub Actions", "Claude API"],
    accent: "#a78bfa",
    github: "https://github.com/Pranesh0805-S/Ouroboros",
    hasUI: false,
  },
  {
    slug: "markdrop",
    name: "Markdrop",
    category: "Full Stack",
    description:
      "A document-to-Markdown converter with OTP and OAuth authentication, built for clean conversion at scale.",
    stack: ["React", "Vite", "Node.js", "Express"],
    accent: "#4ade80",
    github: "https://github.com/Pranesh0805-S/MarkDrop",
    live: "https://mark-drop.vercel.app/",
    hasUI: true,
    image: "/projects/markdrop.png",
  },
  {
    slug: "jobalert-bot",
    name: "JobAlert Bot",
    category: "Full Stack / Automation",
    description:
      "A WhatsApp job-alert bot on the official Business Cloud API, with a Python/FastAPI NLP microservice using spaCy and pgvector for semantic job matching.",
    stack: ["Node.js", "WhatsApp Business API", "Python", "FastAPI", "pgvector"],
    accent: "#f472b6",
    github: "https://github.com/Pranesh0805-S/JobAlert-Bot",
    live: "https://jobalert-bot.vercel.app/",
    hasUI: true,
    image: "/projects/jobalert-bot.png",
  },
];