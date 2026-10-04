import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return <section id="top" className="hero-shell">
    <div className="hero-grid-lines" aria-hidden="true" />
    <div className="hero-watermark" aria-hidden="true">PORTFOLIO</div>
    <div className="hero-layout">
      <div className="hero-copy">
        <p className="hero-eyebrow"><span className="hero-eyebrow-dot" /> FULL-STACK DEVELOPER <i /> COIMBATORE, INDIA</p>
        <p className="hero-intro-label">I DESIGN AND BUILD<br />USEFUL DIGITAL PRODUCTS.</p>
        <div className="hero-title-wrap"><h1 className="hero-title"><span>PRANESH</span></h1><p className="hero-title-index">© 2026<br />DEVELOPER / AI BUILDER</p></div>
        <p className="hero-description">Full-stack applications and practical AI tools, built with React, Node.js, Python, and modern APIs.</p>
        <div className="hero-actions">
          <a href="#projects" className="hero-primary"><span>View selected work</span><span className="hero-primary-arrow"><ArrowRight size={17} /></span></a>
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-secondary">Resume <ArrowUpRight size={14} /></a>
        </div>
        <div className="hero-meta"><span><i /> OPEN TO FULL-TIME · INTERNSHIPS · FREELANCE</span><span>REMOTE / ON-SITE</span></div>
      </div>

      <div className="hero-portrait">
        <div className="hero-portrait-glow" aria-hidden="true" />
        <Image src="/about/pranesh-avatar.png" alt="Illustrated portrait of Pranesh wearing a maroon shirt" fill priority sizes="(min-width: 1024px) 42vw, 88vw" className="hero-portrait-image" />
        <a className="hero-project-float" href="#agent-guard"><span>FEATURED PROJECT / 01</span><b>Agent Guard</b><small>AI SECURITY · NODE.JS</small><ArrowUpRight size={15} /></a>
        <div className="hero-portrait-caption"><span><i /> PRANESH S.</span><span>FULL-STACK DEVELOPER / 2026</span></div>
      </div>
    </div>
    <a href="#projects" className="hero-scroll"><span><ArrowDown size={14} /></span> SCROLL TO EXPLORE</a>
    <a className="hero-corner-link" href="https://github.com/Pranesh0805-S" target="_blank" rel="noopener noreferrer" aria-label="Visit Pranesh's GitHub profile"><ArrowUpRight size={15} /></a>
  </section>;
}
