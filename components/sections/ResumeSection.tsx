import { ArrowUpRight, Download, FileText } from "lucide-react";

const DETAILS = [
  { label: "Focus", value: "Full-stack development & AI" },
  { label: "Education", value: "BCA · Coimbatore" },
  { label: "Building with", value: "React, Node.js, MongoDB" },
];

export default function ResumeSection() {
  return (
    <section id="resume" className="resume-section border-b border-line py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="resume-panel">
          <div className="resume-copy">
            <p className="resume-kicker"><FileText size={13} /> A quick introduction</p>
            <h2>Want the full picture?</h2>
            <p className="resume-description">My resume brings together what I&apos;ve studied, built, and the tools I use to turn ideas into working software.</p>
            <dl className="resume-details">
              {DETAILS.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
            <div className="resume-actions">
              <a className="resume-primary" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                View resume <ArrowUpRight size={15} />
              </a>
              <a className="resume-secondary" href="/Resume.pdf" download="Pranesh-S-Resume.pdf">
                <Download size={14} /> Download PDF
              </a>
            </div>
          </div>
          <div className="resume-preview" aria-hidden="true">
            <div className="resume-paper">
              <div className="resume-paper-top"><span>PS.</span><span>PORTFOLIO / 2026</span></div>
              <div className="resume-paper-rule" />
              <span className="resume-paper-label">FULL-STACK DEVELOPER · AI BUILDER</span>
              <strong>Pranesh S</strong>
              <span className="resume-paper-subtitle">Curious mind. Practical builder.</span>
              <div className="resume-paper-columns">
                <div><i /><i /><i /><i /></div>
                <div><i /><i /><i /></div>
              </div>
              <div className="resume-paper-foot"><span>SELECTED EXPERIENCE</span><span>01 — 04</span></div>
            </div>
            <span className="resume-preview-orbit resume-preview-orbit-one" />
            <span className="resume-preview-orbit resume-preview-orbit-two" />
          </div>
        </div>
      </div>
    </section>
  );
}
