const TOOLSETS = [
  { number: "A", title: "Interface", note: "The part people feel", tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { number: "B", title: "Application", note: "The systems underneath", tools: ["Node.js", "Express", "MongoDB", "Supabase"] },
  { number: "C", title: "Exploration", note: "New ways to build", tools: ["Claude API", "Three.js", "Python", "FastAPI"] },
];

export default function TechStack() {
  return (
    <section id="stack" className="chapter stack-section">
      <div className="chapter-shell">
        <div className="chapter-heading">
          <span className="chapter-index">02 <i /> TOOLKIT</span>
          <span className="chapter-coordinate">A stack is a means, not the point.</span>
        </div>
        <div className="stack-intro">
          <h2>The tools I reach for.<br /><em>The ideas lead.</em></h2>
          <p>I pick technology for the problem in front of me. Here are the tools I&apos;ve been learning, testing, and putting to work.</p>
        </div>
        <div className="toolset-grid">
          {TOOLSETS.map((group) => (
            <article className="toolset" key={group.title}>
              <div className="toolset-heading"><span>{group.number}</span><div><h3>{group.title}</h3><p>{group.note}</p></div></div>
              <ul>{group.tools.map((tool, index) => <li key={tool}><span>{String(index + 1).padStart(2, "0")}</span>{tool}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
