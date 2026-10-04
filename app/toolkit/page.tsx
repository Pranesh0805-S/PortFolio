import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Braces, Database, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import { TOOLSETS } from "@/data/toolsets";

export const metadata: Metadata = {
  title: "Tools & Technologies — Pranesh S.",
  description: "The languages, frameworks, and services Pranesh uses to build his projects.",
};

const ICONS = [Braces, Database, Sparkles];

export default function ToolkitPage() {
  return <>
    <Navbar />
    <main className="editorial-page toolkit-page">
      <header className="editorial-hero">
        <p className="section-kicker">HOW I BUILD / THE TOOLKIT</p>
        <h1>Tools with<br /><em>a purpose.</em></h1>
        <p className="editorial-lede">A practical stack for building clear interfaces, dependable services, and thoughtful AI workflows. Each tool below connects to work you can explore.</p>
        <div className="editorial-count"><span>12 CORE TOOLS</span><span>LINKED TO PROJECTS</span></div>
      </header>
      <section className="toolkit-groups" aria-label="Tools and technologies">
        {TOOLSETS.map((group, index) => {
          const Icon = ICONS[index];
          return <Reveal key={group.number} className="toolkit-group" delay={index * .08}>
            <div className="toolkit-group-intro"><span className="toolkit-number">{group.number}</span><Icon size={23} strokeWidth={1.5} /><h2>{group.title}</h2><p>{group.note}</p></div>
            <div className="toolkit-tools">{group.tools.map(([tool, proof], toolIndex) => <article key={tool} className="toolkit-tool"><span>{String(toolIndex + 1).padStart(2, "0")}</span><div><h3>{tool}</h3><p>Used in {proof}</p></div><ArrowUpRight size={15} /></article>)}</div>
          </Reveal>;
        })}
      </section>
      <section className="toolkit-principle"><p className="section-kicker">THE WAY I CHOOSE</p><h2>Start with the problem.<br /><em>Pick the smallest useful tool.</em></h2><p>Libraries and platforms matter most when they help a real person finish a task with less friction.</p><Link href="/#projects" className="section-more-link">See the work behind the stack <ArrowUpRight size={16} /></Link></section>
    </main>
    <Footer />
  </>;
}
