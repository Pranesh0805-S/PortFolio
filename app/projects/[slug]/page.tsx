import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) return { title: "Project not found — Pranesh S." };
  return { title: `${project.name} — Pranesh S.`, description: project.description };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  return <>
    <Navbar />
    <main className="project-detail-page editorial-page">
      <div className="project-detail-back"><Link href="/work"><ArrowLeft size={15} /> All projects</Link><span>PROJECT / {String(projects.indexOf(project) + 1).padStart(2, "0")}</span></div>
      <header className="project-detail-hero">
        <p className="section-kicker">{project.category} / PROJECT NOTES</p>
        <h1>{project.name}<span>.</span></h1>
        <p className="editorial-lede">{project.description}</p>
        <div className="project-detail-actions"><a className="route-primary" href={project.github} target="_blank" rel="noopener noreferrer">View source <ArrowUpRight size={15} /></a>{project.live && <a className="route-secondary" href={project.live} target="_blank" rel="noopener noreferrer">Open live project <ArrowUpRight size={15} /></a>}</div>
      </header>
      <Reveal className="project-detail-visual">
        {project.image ? <Image src={project.image} alt={`${project.name} project interface`} fill priority sizes="(min-width: 1100px) 80vw, 100vw" /> : <div className="project-detail-diagram"><span>PROBLEM</span><i /><strong>{project.name}</strong><i /><span>WORKING SOFTWARE</span></div>}
      </Reveal>
      <section className="project-detail-grid">
        <div><p className="section-kicker">OVERVIEW</p><h2>Built to make<br /><em>the work easier.</em></h2></div>
        <div className="project-detail-copy"><p>{project.description}</p><p>This project is part of a hands-on portfolio focused on useful interfaces, practical automation, and AI-assisted workflows. Its public repository includes the implementation and the details behind the build.</p></div>
      </section>
      <section className="project-detail-stack"><div><p className="section-kicker">TOOLS / TECHNOLOGIES</p><h2>Made with intention.</h2></div><ul>{project.stack.map((tool, index) => <li key={tool}><span>{String(index + 1).padStart(2, "0")}</span>{tool}</li>)}</ul></section>
      <section className="project-detail-next"><p>More practical builds, coming from the same curiosity.</p><Link href="/work">Explore all projects <ArrowUpRight size={15} /></Link></section>
    </main>
    <Footer />
  </>;
}
