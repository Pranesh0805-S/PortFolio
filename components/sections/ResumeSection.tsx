import { ArrowDownToLine, ArrowUpRight } from "lucide-react";

const DETAILS = [
  { label: "Focus", value: "Full-stack development & AI" },
  { label: "Education", value: "BCA · Coimbatore" },
  { label: "Everyday tools", value: "React · Node.js · MongoDB" },
];

export default function ResumeSection() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-shell">
        <div className="resume-index"><span>04 / QUICK REFERENCE</span><span>PRANESH S. — 2026</span></div>
        <div className="resume-main">
          <h2>One page.<br /><em>The whole picture.</em></h2>
          <div className="resume-description-block">
            <p>A concise look at what I&apos;ve studied, what I&apos;ve built, and where I&apos;m headed next.</p>
            <div className="resume-actions">
              <a className="resume-primary" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Open resume <ArrowUpRight size={16} /></a>
              <a className="resume-secondary" href="/Resume.pdf" download="Pranesh-S-Resume.pdf"><ArrowDownToLine size={15} /> Download PDF</a>
            </div>
          </div>
        </div>
        <dl className="resume-details">
          {DETAILS.map((item, index) => (
            <div key={item.label}><dt><span>{String(index + 1).padStart(2, "0")}</span>{item.label}</dt><dd>{item.value}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}
