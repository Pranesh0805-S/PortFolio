"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const LINKS = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Skills" },
  { href: "#resume", label: "Resume" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="site-header fixed inset-x-0 top-0 z-50 px-6 pt-5 sm:px-10 sm:pt-7 lg:px-14">
        <nav className="nav-shell mx-auto flex max-w-[1440px] items-center justify-between">
          <a href="#top" className="brand-link flex items-center gap-3" aria-label="Pranesh, home">
            <span className="brand-mark">p<span>.</span></span>
            <span className="nav-name">PRANESH S <i /> FULL-STACK DEVELOPER</span>
          </a>

          <ul className="nav-links hidden items-center gap-7 md:flex lg:gap-9">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link font-mono text-[10px] uppercase tracking-[0.12em] transition-colors lg:text-[11px]">{link.label}</a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="nav-cta hidden items-center gap-3 md:inline-flex">
            <span>Available for work</span><ArrowUpRight size={15} />
          </a>
          <div className="nav-actions md:hidden">
            <button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-10 w-10 items-center justify-center transition md:hidden">
            {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>
      </header>

      <div className={`mobile-menu fixed inset-0 z-40 px-6 pb-8 pt-24 transition duration-300 md:hidden ${open ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"}`} onClick={() => setOpen(false)}>
        <nav aria-label="Mobile navigation" className={`mobile-nav-panel mx-auto flex max-w-[1320px] flex-col p-5 transition duration-300 ${open ? "translate-y-0" : "-translate-y-2"}`}>
          <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em]">Navigate / Pranesh S.</p>
          {LINKS.map((link, i) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} style={{ transitionDelay: open ? `${i * 45}ms` : "0ms" }} className={`mobile-nav-link border-b py-3 text-[21px] tracking-[-0.045em] transition-all ${open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}>{link.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mobile-nav-cta mt-5 inline-flex items-center justify-between py-4 text-sm">Contact me <ArrowUpRight size={16} /></a>
        </nav>
      </div>
    </>
  );
}
