import { ArrowUpRight } from "lucide-react";

const SOCIALS = [
  { label: "GitHub", detail: "Code & experiments", href: "https://github.com/Pranesh0805-S" },
  { label: "LinkedIn", detail: "Professional profile", href: "https://www.linkedin.com/in/pranesh0805/" },
  { label: "LeetCode", detail: "Problem solving", href: "https://leetcode.com/u/pranesh0805-s/" },
];

const APPROACH = [
  { number: "01", title: "Start with the why", description: "Understand the people and the problem before reaching for a stack." },
  { number: "02", title: "Make it work clearly", description: "Build focused experiences with systems that stay understandable." },
  { number: "03", title: "Keep learning in public", description: "Ship, listen, refine — then share what the next iteration taught me." },
];

export default function AboutBento() {
  return (
    <section id="about" className="chapter about-section">
      <div className="chapter-shell">
        <div className="chapter-heading">
          <span className="chapter-index">01 <i /> PROFILE</span>
          <span className="chapter-coordinate">11.0168° N / 76.9558° E</span>
        </div>

        <div className="about-story">
          <h2>Good software starts <em>with better questions.</em></h2>
          <div className="about-intro">
            <p>I&apos;m Pranesh, a full-stack developer and computer science student based in Coimbatore. I like taking an idea from a rough sketch to a real product — especially when there&apos;s an interesting systems problem hiding underneath.</p>
            <p>These days I&apos;m building with React, Node.js, and AI APIs. I care about how things work under the surface just as much as how they feel to use.</p>
            <a href="mailto:pranesh8506s@gmail.com" className="text-link">Say hello <ArrowUpRight size={14} /></a>
          </div>
        </div>

        <div className="about-facts" aria-label="A few facts">
          <div><span>01 / STUDYING</span><strong>BCA</strong><p>Computer Applications</p></div>
          <div><span>02 / BUILDING</span><strong>05</strong><p>Projects in the portfolio</p></div>
          <div><span>03 / BASED</span><strong>IN</strong><p>Coimbatore, India</p></div>
          <div><span>04 / CERTIFIED</span><strong>MongoDB</strong><p>MongoDB for Students</p></div>
        </div>

        <div className="about-approach">
          <div className="approach-heading"><span className="chapter-index">HOW I WORK</span><p>Curiosity is the input.<br /><em>Useful software is the output.</em></p></div>
          <div className="approach-list">
            {APPROACH.map((item) => (
              <article className="approach-item" key={item.number}>
                <span>{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
                <ArrowUpRight size={15} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>

        <div className="about-socials">
          <span className="chapter-index">ELSEWHERE</span>
          {SOCIALS.map((item) => (
            <a href={item.href} key={item.label} target="_blank" rel="noopener noreferrer">
              <span><b>{item.label}</b><small>{item.detail}</small></span><ArrowUpRight size={16} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
