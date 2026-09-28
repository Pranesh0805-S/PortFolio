import Image from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";
import type { CSSProperties } from "react";
import { projects, type Project } from "@/data/projects";

function ProjectArtwork({ project, className = "" }: { project: Project; className?: string }) {
  const style = { "--project-accent": project.accent } as CSSProperties;
  if (project.image) {
    return (
      <div className={`work-artwork work-artwork-image ${className}`} style={style}>
        <Image src={project.image} alt={`${project.name} interface`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        <span className="work-artwork-caption">{project.category}</span>
      </div>
    );
  }

  return (
    <div className={`work-artwork work-artwork-generated ${className}`} style={style} aria-hidden="true">
      <span className="work-artwork-caption">{project.category}</span>
      <div className="work-artwork-mark"><i /><i /><i /><i /><b>+</b></div>
      <span className="work-artwork-foot">{project.stack.slice(0, 3).join(" / ")}</span>
    </div>
  );
}

function WorkLinks({ project }: { project: Project }) {
  return (
    <div className="work-links">
      <a href={project.github} target="_blank" rel="noopener noreferrer"><Code2 size={15} /> Source</a>
      {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live project <ArrowUpRight size={14} /></a>}
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="chapter work-section">
      <div className="chapter-shell">
        <div className="chapter-heading">
          <span className="chapter-index">05 <i /> SELECTED WORK</span>
          <span className="chapter-coordinate">A small sample of what I like to solve.</span>
        </div>
        <div className="work-intro">
          <h2>Built to be <em>useful.</em></h2>
          <p>Each project started with a real friction point. The details are different; the goal is always to leave things clearer than I found them.</p>
        </div>

        <article className="work-featured" id="envoy-mail">
          <div className="work-feature-copy">
            <div className="work-number"><span>01</span><i /> FEATURED PROJECT</div>
            <p className="work-category">{featured.category}</p>
            <h3>{featured.name}</h3>
            <p className="work-description">{featured.description}</p>
            <ul className="work-tech">{featured.stack.map((tool) => <li key={tool}>{tool}</li>)}</ul>
            <WorkLinks project={featured} />
          </div>
          <ProjectArtwork project={featured} className="work-feature-artwork" />
        </article>

        <div className="work-grid">
          {rest.map((project, index) => (
            <article className="work-card" key={project.slug}>
              <ProjectArtwork project={project} className="work-card-artwork" />
              <div className="work-card-body">
                <div className="work-card-heading"><span>{String(index + 2).padStart(2, "0")} / {project.category}</span><ArrowUpRight size={15} aria-hidden="true" /></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="work-tech">{project.stack.map((tool) => <li key={tool}>{tool}</li>)}</ul>
                <WorkLinks project={project} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
