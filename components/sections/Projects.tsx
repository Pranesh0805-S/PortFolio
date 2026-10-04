import Image from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";
import type { CSSProperties } from "react";
import { projects, type Project } from "@/data/projects";

function ProjectArtwork({ project, className = "" }: { project: Project; className?: string }) {
  const style = { "--project-accent": project.accent } as CSSProperties;
  if (project.image) return <div className={`work-artwork work-artwork-image ${className}`} style={style}>
    <Image src={project.image} alt={`${project.name} interface`} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
    <span className="work-artwork-caption">{project.category}</span>
  </div>;
  if (project.slug === "agent-guard") return <div className={`work-artwork work-artwork-diagram guard-diagram ${className}`}>
    <span className="work-artwork-caption">REQUEST CONTROL / OVERVIEW</span>
    <div className="diagram-flow"><span>USER PROMPT</span><i /><span>AI AGENT</span><i /><div className="guard-gate"><b>GUARD LAYER</b><small>ALLOWLIST · REVIEW · APPROVAL</small></div><i /><span>APPROVED TOOL</span></div>
    <span className="work-artwork-foot">NODE.JS / EXPRESS / CLAUDE API</span>
  </div>;
  return <div className={`work-artwork work-artwork-diagram pipeline-diagram ${className}`}>
    <span className="work-artwork-caption">BUILD RECOVERY / WORKFLOW</span>
    <div className="pipeline-flow">{["BUILD", "FAILURE", "ANALYZE", "CANDIDATE FIX", "VERIFY"].map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><b>{step}</b></div>)}</div>
    <span className="work-artwork-foot">AI-ASSISTED · HUMAN-REVIEWABLE CHANGES</span>
  </div>;
}

function WorkLinks({ project, caseStudy = false }: { project: Project; caseStudy?: boolean }) {
  return <div className="work-links">
    {caseStudy && <a href={`/projects/${project.slug}`} className="case-link">View case study <ArrowUpRight size={14} /></a>}
    <a href={project.github} target="_blank" rel="noopener noreferrer"><Code2 size={14} /> View GitHub</a>
    {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live demo <ArrowUpRight size={14} /></a>}
  </div>;
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  return <article className={`work-featured ${index % 2 ? "work-featured-reverse" : ""}`} id={project.slug}>
    <div className="work-feature-copy">
      <div className="work-number"><span>{String(index + 1).padStart(2, "0")}</span><i /> FEATURED PROJECT</div>
      <p className="work-category">{project.category}</p>
      <h3>{project.name}</h3>
      <p className="work-description">{project.description}</p>
      {project.slug === "agent-guard" && <div className="benchmark-callout"><strong>6/20 <i>→</i> 0/20</strong><span>successful attacks · frozen Haiku 4.5 round</span><small>Harmless tasks completed: 15/15 in both arms</small></div>}
      <ul className="work-tech">{project.stack.map((tool) => <li key={tool}>{tool}</li>)}</ul>
      <WorkLinks project={project} caseStudy={project.slug === "agent-guard"} />
    </div>
    <ProjectArtwork project={project} className="work-feature-artwork" />
  </article>;
}

export default function Projects() {
  const featured = projects.slice(0, 3);
  const additional = projects.slice(3);
  return <section id="projects" className="chapter work-section">
    <div className="chapter-shell">
      <div className="chapter-heading"><span className="chapter-index">01 <i /> SELECTED WORK</span><span className="chapter-coordinate">Products, tools, and experiments.</span></div>
      <div className="work-intro"><h2>Built to be <em>useful.</em></h2><p>Start with the problem, then follow the engineering decisions behind each build.</p></div>
      <div className="featured-work-list">{featured.map((project, index) => <FeaturedProject key={project.slug} project={project} index={index} />)}</div>
      <div className="additional-work-heading"><span className="chapter-index">MORE BUILDS</span><span>Smaller experiments and useful tools</span></div>
      <div className="work-grid work-grid-additional">{additional.map((project, index) => <article className="work-card" key={project.slug}>
        <ProjectArtwork project={project} className="work-card-artwork" />
        <div className="work-card-body"><div className="work-card-heading"><span>{String(index + 4).padStart(2, "0")} / {project.category}</span><ArrowUpRight size={15} aria-hidden="true" /></div>
          <h3>{project.name}</h3><p>{project.description}</p><ul className="work-tech">{project.stack.slice(0, 4).map((tool) => <li key={tool}>{tool}</li>)}</ul><WorkLinks project={project} />
        </div></article>)}</div>
    </div>
  </section>;
}
