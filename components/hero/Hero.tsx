import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="hero-shell relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <video className="hero-video" autoPlay loop muted playsInline preload="none" aria-hidden="true">
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-shade" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />

      <div className="hero-layout relative z-10 mx-auto grid w-full max-w-[1440px] items-center px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="hero-copy">
          <p className="hero-eyebrow"><span className="hero-eyebrow-dot" /> Full-stack developer <i /> Coimbatore, India</p>
          <h1 className="hero-title">
            <span>Full-stack</span>
            <em>developer.</em>
          </h1>
          <p className="hero-description">
            I build practical web apps and AI-powered tools that simplify everyday workflows, using React, Node.js, Python, and modern APIs.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="hero-primary group">
              <span>Explore my work</span>
              <span className="hero-primary-arrow"><ArrowRight size={17} /></span>
            </a>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-secondary">View resume <ArrowUpRight size={14} /></a>
          </div>
          <div className="hero-meta">
            <span><b>06</b> selected builds</span>
            <span className="hero-meta-rule" />
            <span><i /> Full-time · internships · freelance</span>
            <span>Remote / on-site</span>
          </div>
        </div>

        <div className="hero-network">
          <div className="network-heading"><span>CURRENTLY FEATURED</span><span>PROJECT / 01</span></div>
          <svg className="network-svg" viewBox="0 0 640 560" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="trace-a" x1="91" y1="98" x2="548" y2="452" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D6FF71" stopOpacity=".05" /><stop offset=".52" stopColor="#D6FF71" stopOpacity=".78" /><stop offset="1" stopColor="#D6FF71" stopOpacity=".08" />
              </linearGradient>
              <radialGradient id="node-glow"><stop stopColor="#E3FF9E" /><stop offset="1" stopColor="#B9E85C" stopOpacity=".05" /></radialGradient>
            </defs>
            <path className="network-grid-line" d="M80 0V560M160 0V560M240 0V560M320 0V560M400 0V560M480 0V560M560 0V560M0 80H640M0 160H640M0 240H640M0 320H640M0 400H640M0 480H640" />
            <path className="network-trace network-trace-a" d="M62 399C155 399 137 164 239 164C328 164 293 343 386 343C480 343 437 102 579 102" />
            <path className="network-trace network-trace-b" d="M101 95C174 95 181 277 280 277C372 277 350 452 446 452C520 452 508 279 593 279" />
            <path className="network-trace network-trace-c" d="M98 510C209 510 182 356 281 356C374 356 358 181 460 181C514 181 529 222 565 222" />
            <path className="network-trace network-trace-d" d="M40 260C130 260 117 459 228 459C321 459 302 93 420 93C500 93 483 375 604 375" />
            <circle className="network-node network-node-a" cx="239" cy="164" r="6" />
            <circle className="network-node network-node-b" cx="386" cy="343" r="8" />
            <circle className="network-node network-node-c" cx="280" cy="277" r="5" />
            <circle className="network-node network-node-d" cx="460" cy="181" r="7" />
            <circle className="network-node network-node-e" cx="228" cy="459" r="5" />
            <circle className="network-node network-node-f" cx="420" cy="93" r="6" />
            <circle cx="386" cy="343" r="31" fill="url(#node-glow)" opacity=".22" />
          </svg>
          <a href="#agent-guard" className="network-core"><span>AI SECURITY / TOOLING</span><strong>Agent<br /><i>Guard</i></strong><b>↗</b></a>
          <div className="network-tag network-tag-a"><i /> DOMAIN ALLOWLIST</div>
          <div className="network-tag network-tag-b">HUMAN APPROVAL <i /></div>
          <div className="network-footer"><span>NODE.JS / EXPRESS</span><span>GUARD → REVIEW → APPROVE</span></div>
        </div>
      </div>

      <a href="#about" className="hero-scroll"><span><ArrowDown size={14} /></span> Scroll to explore</a>
      <span className="hero-index">PORTFOLIO / 2026</span>
      <a className="hero-corner-link" href="https://github.com/Pranesh0805-S" target="_blank" rel="noopener noreferrer" aria-label="Visit Pranesh's GitHub profile"><ArrowUpRight size={15} /></a>
    </section>
  );
}
