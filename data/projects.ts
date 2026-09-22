export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  accent: string;
  href?: string;
  /** Path under /public, e.g. "/projects/envoy-mail.png". Falls back to a
   * gradient card if the file doesn't exist yet. */
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
    image: "/projects/envoy-mail.png",
  },
  {
    slug: "ouroboros",
    name: "Ouroboros",
    category: "AI / DevOps",
    description:
      "A self-healing CI/CD pipeline that classifies failing builds and generates patches automatically.",
    stack: ["Node.js", "GitHub Actions", "Claude API"],
    accent: "#a78bfa",
    image: "/projects/ouroboros.png",
  },
  {
    slug: "local-biz-pain-point-finder",
    name: "Local Business Pain Point Finder",
    category: "AI / Local Business",
    description:
      "Scrapes gym reviews across Coimbatore via the Google Places API, clusters recurring complaints with Claude, and turns them into targeted outreach.",
    stack: ["Node.js", "Google Places API", "Claude API"],
    accent: "#fbbf24",
    image: "/projects/local-biz-pain-point-finder.png",
  },
  {
    slug: "markdrop",
    name: "Markdrop",
    category: "Full Stack",
    description: "A document-to-Markdown converter built for clean, reliable conversion at scale.",
    stack: ["React", "Node.js", "Express"],
    accent: "#4ade80",
    image: "/projects/markdrop.png",
  },
  {
    slug: "jobalert-bot",
    name: "JobAlert Bot",
    category: "Full Stack / Automation",
    description:
      "A WhatsApp job-alert bot built on a compliant WhatsApp Business Cloud API architecture.",
    stack: ["Node.js", "WhatsApp Business API"],
    accent: "#f472b6",
    image: "/projects/jobalert-bot.png",
  },
];
