import BentoCard from "./BentoCard";

const STACK = ["React", "Node.js", "Express", "MongoDB", "Next.js", "Claude API", "Supabase"];

export default function BentoGrid() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <h2 className="mb-10 text-2xl font-semibold tracking-tight text-ink">
        What I&apos;m building
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
        <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between">
          <div>
            <p className="font-mono text-xs text-accent-cyan">featured project</p>
            <h3 className="mt-3 text-2xl font-semibold text-ink">Envoy Mail</h3>
            <p className="mt-3 max-w-md text-ink-dim">
              An AI-powered agentic Gmail management workbench that
              categorizes, summarizes, and drafts replies to your inbox in
              real time.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Node.js", "Gmail API", "Claude API", "React"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line-strong px-3 py-1 font-mono text-xs text-ink-dim"
              >
                {tag}
              </span>
            ))}
          </div>
        </BentoCard>

        <BentoCard delay={0.05}>
          <p className="font-mono text-xs text-accent-violet">now building</p>
          <h3 className="mt-3 text-lg font-semibold text-ink">Ouroboros</h3>
          <p className="mt-2 text-sm text-ink-dim">
            A self-healing CI/CD pipeline that classifies failing builds and
            generates patches automatically.
          </p>
        </BentoCard>

        <BentoCard delay={0.1}>
          <p className="font-mono text-xs text-accent-amber">stack</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {STACK.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-line px-2.5 py-1 text-xs text-ink-dim"
              >
                {tech}
              </span>
            ))}
          </div>
        </BentoCard>

        <BentoCard delay={0.15} className="md:col-span-3">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono text-xs text-accent-cyan">let&apos;s talk</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">
                Open to full-stack &amp; AI engineering roles
              </h3>
            </div>
            <div className="flex gap-3" id="contact">
              <a
                href="/resume.pdf"
                className="rounded-lg border border-line-strong px-4 py-2 text-sm text-ink transition-colors hover:border-accent-cyan hover:text-accent-cyan"
              >
                Resume
              </a>
              <a
                href="mailto:hello@pranesh.dev"
                className="rounded-lg bg-ink px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent-cyan"
              >
                Email me
              </a>
            </div>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
