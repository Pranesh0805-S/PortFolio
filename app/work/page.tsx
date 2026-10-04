import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Selected Projects — Pranesh S.",
  description: "Explore full-stack, AI, automation, and developer-tool projects by Pranesh S.",
};

export default function WorkPage() {
  return <>
    <Navbar />
    <main className="editorial-page work-index-page">
      <header className="editorial-hero">
        <p className="section-kicker">A CLOSER LOOK / SELECTED WORK</p>
        <h1>Useful ideas,<br /><em>made real.</em></h1>
        <p className="editorial-lede">A growing collection of products, experiments, and tools built around problems worth solving.</p>
        <div className="editorial-count"><span>PROJECTS / 06</span><span>FULL-STACK · AI · AUTOMATION · DEV TOOLS</span></div>
      </header>
      <section className="editorial-project-grid" aria-label="All projects">
        {projects.map((project, index) => <Reveal key={project.slug} className="editorial-project-card" delay={(index % 3) * .07}>
          <Link href={`/projects/${project.slug}`} className="editorial-project-link">
            <div className={`editorial-project-art ${project.image ? "has-image" : "has-diagram"}`}>
              {project.image ? <Image src={project.image} alt={`${project.name} application preview`} fill sizes="(min-width: 900px) 33vw, 100vw" /> : <div className="project-orbit-art"><i /><i /><i /><span>{project.name}</span></div>}
              <span className="project-art-index">{String(index + 1).padStart(2, "0")} / {project.category}</span>
            </div>
            <div className="editorial-project-heading"><div><p>{project.category}</p><h2>{project.name}</h2></div><span><ArrowUpRight size={18} /></span></div>
            <p className="editorial-project-description">{project.description}</p>
            <ul className="editorial-project-stack">{project.stack.map((tool) => <li key={tool}>{tool}</li>)}</ul>
          </Link>
        </Reveal>)}
      </section>
    </main>
    <Footer />
  </>;
}
