import { ArrowUpRight } from "lucide-react";

const SOCIALS = [
  { label: "GitHub", detail: "Code & experiments", href: "https://github.com/Pranesh0805-S" },
  { label: "LinkedIn", detail: "Professional profile", href: "https://www.linkedin.com/in/pranesh0805/" },
  { label: "LeetCode", detail: "Problem solving", href: "https://leetcode.com/u/pranesh0805-s/" },
];

const APPROACH = [
  { number: "01", title: "AI application security", description: "Control how tool-using agents access external actions." },
  { number: "02", title: "Developer workflows", description: "Make build failures easier to investigate and resolve." },
  { number: "03", title: "Useful automation", description: "Reduce repetitive work in email, job search, and planning." },
];

export default function AboutBento() {
  return (
    <section id="about" className="chapter about-section">
      <div className="chapter-shell">
        <div className="chapter-heading">
          <span className="chapter-index">04 <i /> PROFILE</span>
          <span className="chapter-coordinate">11.0168° N / 76.9558° E</span>
        </div>

        <div className="about-story">
          <h2>Developer based in <em>Coimbatore, India.</em></h2>
          <div className="about-intro">
            <p>I&apos;m Pranesh, a BCA student and full-stack developer focused on web applications, AI-powered products, automation, and developer tools.</p>
            <p>I enjoy turning rough ideas into working software and explaining the engineering choices behind it. I&apos;m looking for full-time roles, internships, freelance work, and thoughtful engineering collaborations.</p>
            <a href="mailto:pranesh8506s@gmail.com" className="text-link">Say hello <ArrowUpRight size={14} /></a>
          </div>
        </div>

        <div className="about-facts" aria-label="A few facts">
          <div><span>01 / ROLE</span><strong>Full-stack</strong><p>Developer / AI builder</p></div>
          <div><span>02 / FOCUS</span><strong>Web + AI</strong><p>Automation and developer tools</p></div>
          <div><span>03 / BASED IN</span><strong>India</strong><p>Coimbatore, Tamil Nadu</p></div>
          <div><span>04 / OPEN TO</span><strong>Work</strong><p>Full-time · Internships · Freelance</p></div>
        </div>

        <div className="about-approach">
            <div className="approach-heading"><span className="chapter-index">WHAT I ENJOY BUILDING</span><p>Products with clear problems<br /><em>and thoughtful engineering.</em></p></div>
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
