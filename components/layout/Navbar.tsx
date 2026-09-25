"use client";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="font-mono text-sm text-ink">
          pranesh<span className="text-accent-cyan">.s</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-wide text-ink-dim transition-colors hover:text-accent-cyan"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href="https://github.com/Pranesh0805-S"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-line-strong p-2 text-ink-dim transition-colors hover:border-accent-cyan hover:text-accent-cyan"
            aria-label="GitHub"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.98 3.29 9.2 7.86 10.7.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.4-3.87-1.4-.53-1.32-1.3-1.68-1.3-1.68-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.77 2.73 1.26 3.4.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.44-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.5 3.17-1.18 3.17-1.18.62 1.6.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.79.55A10.52 10.52 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z"/></svg>
          </a>
          <a
            href="https://www.linkedin.com/in/pranesh0805/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-line-strong p-2 text-ink-dim transition-colors hover:border-accent-cyan hover:text-accent-cyan"
            aria-label="LinkedIn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z"/></svg>
          </a>
          <a
            href="https://leetcode.com/u/pranesh0805-s/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-line-strong p-2 text-ink-dim transition-colors hover:border-accent-cyan hover:text-accent-cyan"
            aria-label="LeetCode"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.48 2.1a1.4 1.4 0 0 0-1.98 0L5.4 8.2a3.5 3.5 0 0 0 0 4.95l5.2 5.2a1.4 1.4 0 1 0 1.98-1.98l-5.2-5.2a.7.7 0 0 1 0-.99l6.1-6.1a1.4 1.4 0 0 0 0-1.98ZM9.5 13.5a1.4 1.4 0 0 0 0 2.8h9.1a1.4 1.4 0 0 0 0-2.8H9.5Zm4.1 4.2a1.4 1.4 0 1 0-1.98 1.98l1.55 1.55a3.5 3.5 0 0 0 4.95 0l1.83-1.83a1.4 1.4 0 1 0-1.98-1.98l-1.83 1.83a.7.7 0 0 1-.99 0l-1.55-1.55Z"/></svg>
          </a>
        </div>

        <a
          href="/resume.pdf"
          download="Pranesh S Resume.pdf"
          className="rounded-lg border border-line-strong px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-accent-cyan hover:text-accent-cyan"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}