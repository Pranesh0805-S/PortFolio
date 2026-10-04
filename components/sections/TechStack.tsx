const TOOLSETS = [
  { number: "01", title: "Frontend", note: "Interfaces in shipped projects", tools: [["React", "Envoy Mail · Markdrop"], ["Next.js", "Flow State · Portfolio"], ["TypeScript", "Flow State"], ["Tailwind CSS", "Portfolio"]] },
  { number: "02", title: "Backend & data", note: "APIs and application services", tools: [["Node.js", "Agent Guard · Envoy Mail"], ["Express", "Agent Guard · Markdrop"], ["Python / FastAPI", "JobAlert Bot"], ["PostgreSQL / pgvector", "JobAlert Bot"]] },
  { number: "03", title: "AI & automation", note: "Applied to practical workflows", tools: [["Claude API", "Agent Guard · Envoy Mail"], ["GitHub Actions", "Ouroboros"], ["Gmail API", "Envoy Mail"], ["WhatsApp Business API", "JobAlert Bot"]] },
];

export default function TechStack() {
  return (
    <section id="stack" className="chapter stack-section">
      <div className="chapter-shell">
        <div className="chapter-heading">
          <span className="chapter-index">02 <i /> TECHNICAL CAPABILITIES</span>
          <span className="chapter-coordinate">Tools connected to work I have built.</span>
        </div>
        <div className="stack-intro">
          <h2>Technology, with<br /><em>proof of use.</em></h2>
          <p>A quick map from the tools I use to the projects where they appear.</p>
        </div>
        <div className="toolset-grid">
          {TOOLSETS.map((group) => (
            <article className="toolset" key={group.title}>
              <div className="toolset-heading"><span>{group.number}</span><div><h3>{group.title}</h3><p>{group.note}</p></div></div>
                  <ul>{group.tools.map(([tool, proof], index) => <li key={tool}><span>{String(index + 1).padStart(2, "0")}</span><div><b>{tool}</b><small>{proof}</small></div></li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
