import Reveal from "@/components/ui/Reveal";
import { TOOLSETS } from "@/data/toolsets";
import Link from "next/link";

export default function TechStack() {
  return (
    <section id="stack" className="chapter stack-section">
      <div className="chapter-shell">
        <div className="chapter-heading">
          <span className="chapter-index">02 <i /> TECHNICAL CAPABILITIES</span>
          <span className="chapter-coordinate">The tools I use, shown in context.</span>
        </div>
        <div className="stack-intro">
          <div><p className="section-kicker">CAPABILITIES / STACK</p><h2>Built with<br /><em>the right tools.</em></h2></div>
          <p>Skills are easier to evaluate when they connect to something shipped. Here&apos;s where each part of my stack shows up.</p>
        </div>
        <div className="toolset-grid">
          {TOOLSETS.map((group) => (
            <Reveal className="toolset" key={group.title} delay={Number(group.number.slice(-1)) * 0.07}>
              <div className="toolset-heading"><span>{group.number}</span><div><h3>{group.title}</h3><p>{group.note}</p></div></div>
                  <ul>{group.tools.map(([tool, proof], index) => <li key={tool}><span>{String(index + 1).padStart(2, "0")}</span><div><b>{tool}</b><small>{proof}</small></div></li>)}</ul>
            </Reveal>
          ))}
        </div>
        <Link className="section-more-link" href="/toolkit">Explore my full toolkit <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}
