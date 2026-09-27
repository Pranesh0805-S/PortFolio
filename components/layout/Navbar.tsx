"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Journey" },
  { href: "#resume", label: "Resume" },
  { href: "#projects", label: "Projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-6">
        <nav className="nav-shell mx-auto flex max-w-[1440px] items-center rounded-full border border-white/60 bg-[#f7f0e6]/75 px-4 py-2.5 shadow-[0_10px_40px_rgba(83,59,48,0.08)] backdrop-blur-xl sm:px-6 sm:py-3">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Pranesh, home">
            <span className="brand-mark flex h-8 w-8 items-center justify-center rounded-full bg-[#453132] text-[11px] font-semibold tracking-[-0.06em] text-[#fff8ed] sm:h-9 sm:w-9 sm:text-xs">ps<span className="text-[#e5a683]">.</span></span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#4f4039] sm:text-[11px]">Pranesh S</span>
          </a>

          <ul className="nav-links hidden items-center gap-7 md:flex lg:gap-9">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link font-mono text-[10px] uppercase tracking-[0.15em] text-[#796960] transition-colors hover:text-[#332725] lg:text-[11px]">{link.label}</a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="nav-cta hidden shrink-0 items-center gap-2 rounded-full bg-[#3e2e2c] px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#fff8ed] transition duration-300 hover:bg-[#684552] sm:ml-auto sm:inline-flex">
            Let&apos;s talk <ArrowUpRight size={13} />
          </a>
          <div className="nav-actions md:hidden">
            <button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#62483f]/15 text-[#453431] transition hover:bg-white/60 md:hidden">
            {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>
      </header>

      <div className={`mobile-menu fixed inset-0 z-40 bg-[#41312f]/25 px-4 pb-5 pt-[5.2rem] backdrop-blur-sm transition duration-300 md:hidden ${open ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"}`} onClick={() => setOpen(false)}>
        <nav aria-label="Mobile navigation" className={`mx-auto flex max-w-[1440px] flex-col rounded-[24px] border border-white/70 bg-[#f8f1e8]/95 p-5 shadow-[0_20px_60px_rgba(50,34,30,0.17)] transition duration-300 ${open ? "translate-y-0" : "-translate-y-2"}`}>
          <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#987866]">Take a look around</p>
          {LINKS.map((link, i) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} style={{ transitionDelay: open ? `${i * 45}ms` : "0ms" }} className={`border-b border-[#73584d]/10 py-3 text-[21px] tracking-[-0.045em] text-[#43332f] transition-all ${open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}>{link.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#3e2e2c] py-3.5 text-[11px] uppercase tracking-[0.12em] text-[#fff8ed]">Let&apos;s talk <ArrowUpRight size={14} /></a>
        </nav>
      </div>
    </>
  );
}
