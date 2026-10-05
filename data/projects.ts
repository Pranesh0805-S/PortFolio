export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  problem: string;
  buildNotes: string;
  stack: string[];
  accent: string;
  github: string;
  live?: string;
  hasUI: boolean;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "agent-guard",
    name: "Agent Guard",
    category: "AI / Security",
    description: "A guard layer for tool-using AI agents. In the frozen Haiku 4.5 evaluation, successful attacks fell from 6/20 without the guard to 0/20 with it; harmless tasks completed 15/15 in both arms.",
    problem: "Tool-using agents need a way to reject malicious requests without blocking ordinary work.",
    buildNotes: "The frozen Haiku 4.5 evaluation compares guarded and unguarded runs: 20 attack attempts and 15 harmless tasks in each arm.",
    stack: ["Node.js", "Express", "Claude API"],
    accent: "#fbbf24",
    github: "https://github.com/Pranesh0805-S/Agent-Guard",
    hasUI: false,
  },
  {
    slug: "envoy-mail",
    name: "Envoy Mail",
    category: "AI / Productivity",
    description:
      "A Gmail workspace that uses AI to categorize messages, summarize threads, and draft replies.",
    problem: "Busy inboxes make it harder to sort incoming mail and catch the context in long threads.",
    buildNotes: "The workspace combines Gmail access with Claude-assisted categorization, thread summaries, and reply drafts.",
    stack: ["React", "Node.js", "Gmail API", "Claude API"],
    accent: "#5eead4",
    github: "https://github.com/Pranesh0805-S/Envoy",
    hasUI: true,
    image: "/projects/envoy-mail.png",
  },
  {
    slug: "ouroboros",
    name: "Ouroboros",
    category: "AI / DevOps",
    description:
      "An AI-assisted CI/CD workflow that analyzes failed builds and generates candidate fixes for review.",
    problem: "A failed build can leave developers digging through logs before they can decide what to fix.",
    buildNotes: "GitHub Actions runs the workflow; Claude helps analyze failure context and propose a candidate patch for human review.",
    stack: ["Node.js", "GitHub Actions", "Claude API"],
    accent: "#a78bfa",
    github: "https://github.com/Pranesh0805-S/Ouroboros",
    hasUI: false,
  },
  {
    slug: "jobalert-bot",
    name: "JobAlert Bot",
    category: "Full Stack / Automation",
    description:
      "A WhatsApp job-alert bot on the official Business Cloud API, with a Python/FastAPI NLP microservice using spaCy and pgvector for semantic job matching.",
    problem: "Relevant job listings are easy to miss when they are spread across sources and do not use the same wording as a candidate’s search.",
    buildNotes: "WhatsApp Business Cloud API delivers alerts, while a Python/FastAPI service uses spaCy and pgvector for semantic matching.",
    stack: ["Node.js", "WhatsApp Business API", "Python", "FastAPI", "pgvector"],
    accent: "#f472b6",
    github: "https://github.com/Pranesh0805-S/JobAlert-Bot",
    live: "https://jobalert-bot.vercel.app/",
    hasUI: true,
    image: "/projects/jobalert-bot.png",
  },
  {
    slug: "markdrop",
    name: "Markdrop",
    category: "Full Stack",
    description:
      "A document-to-Markdown converter with OTP and OAuth authentication, focused on a straightforward conversion workflow.",
    problem: "Moving document content into Markdown should not require a complicated conversion flow.",
    buildNotes: "Markdrop pairs a focused document conversion workflow with OTP and OAuth authentication.",
    stack: ["React", "Vite", "Node.js", "Express"],
    accent: "#4ade80",
    github: "https://github.com/Pranesh0805-S/MarkDrop",
    live: "https://mark-drop.vercel.app/",
    hasUI: true,
    image: "/projects/markdrop.png",
  },
  {
    slug: "flow-state",
    name: "Flow State",
    category: "Full Stack / Automation",
    description:
      "Flowstate is a productivity app for organizing tasks, tracking progress, and planning your workflow across web and Android.",
    problem: "People need a clear view of tasks and progress that travels with them across devices.",
    buildNotes: "Flow State brings task organization, progress tracking, and workflow planning to web and Android, with a stack spanning Next.js, React Native, and Python.",
    stack: ["next.js", "React Native", "python", "TypeScript", "postgreSQL", "SQLite", "Android SDK", "Gradle"],
    accent: "#72dcf4",
    github: "https://github.com/Pranesh0805-S/FlowState",
    live: "https://flowstate-pranesh0805.vercel.app/",
    hasUI: true,
    image: "/projects/flowstate.png",
  },
];
