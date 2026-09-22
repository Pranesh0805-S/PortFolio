"use client";

const LINKS = [
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

        <a
          href="/resume.pdf"
          className="rounded-lg border border-line-strong px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-accent-cyan hover:text-accent-cyan"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
