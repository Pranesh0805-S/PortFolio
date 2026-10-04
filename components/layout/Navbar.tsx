"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#stack", label: "Skills" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];
const EXPLORE_LINKS = [
  { href: "/work", label: "All projects", note: "Selected builds and case studies" },
  { href: "/toolkit", label: "My toolkit", note: "Languages, frameworks and tools" },
  { href: "/activity", label: "Activity", note: "GitHub and LeetCode" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const sectionHref = (href: string) => pathname === "/" ? href : `/${href}`;
  useEffect(() => {
    const closeOnOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !exploreRef.current?.contains(event.target)) setExploreOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExploreOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);
  return (
    <>
      <header className="site-header fixed inset-x-0 top-0 z-50 px-5 pt-4 sm:px-8 sm:pt-6 lg:px-12">
        <nav className="nav-shell mx-auto flex max-w-[1440px] items-center justify-between">
          <Link href={sectionHref("#top")} className="brand-link flex items-center gap-3" aria-label="Pranesh, home">
            <span className="brand-mark">P<span>.</span></span>
            <span className="nav-name">PRANESH S. <i /> ENGINEER / INDIA</span>
          </Link>

          <ul className="nav-links hidden items-center gap-7 lg:flex lg:gap-8">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link href={sectionHref(link.href)} className="nav-link font-mono text-[10px] uppercase tracking-[0.12em] transition-colors lg:text-[11px]">{link.label}</Link>
              </li>
            ))}
          </ul>

          <div className="nav-explore hidden lg:block" ref={exploreRef}>
            <button type="button" className="nav-explore-trigger" aria-expanded={exploreOpen} onClick={() => setExploreOpen(!exploreOpen)}>
              Explore <ChevronDown size={14} className={exploreOpen ? "rotate-180" : ""} />
            </button>
            {exploreOpen && <div className="nav-explore-menu">{EXPLORE_LINKS.map((page) => <Link key={page.href} href={page.href} onClick={() => setExploreOpen(false)}><b>{page.label}</b><small>{page.note}</small><ArrowUpRight size={14} /></Link>)}</div>}
          </div>

          <Link href={sectionHref("#contact")} className="nav-cta hidden items-center gap-3 md:inline-flex">
            <span>Let&apos;s talk</span><ArrowUpRight size={15} />
          </Link>
          <div className="nav-theme hidden lg:block"><ThemeToggle /></div>
          <div className="nav-actions lg:hidden">
            <button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-10 w-10 items-center justify-center transition lg:hidden">
            {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>
      </header>

      <div className={`mobile-menu fixed inset-0 z-40 px-6 pb-8 pt-24 transition duration-300 lg:hidden ${open ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"}`} onClick={() => setOpen(false)}>
        <nav aria-label="Mobile navigation" className={`mobile-nav-panel mx-auto flex max-w-[1320px] flex-col p-5 transition duration-300 ${open ? "translate-y-0" : "-translate-y-2"}`}>
          <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em]">Navigate / Pranesh S.</p>
          {LINKS.map((link, i) => (
            <Link key={link.href} href={sectionHref(link.href)} onClick={() => setOpen(false)} style={{ transitionDelay: open ? `${i * 45}ms` : "0ms" }} className={`mobile-nav-link border-b py-3 text-[21px] tracking-[-0.045em] transition-all ${open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}>{link.label}</Link>
          ))}
          <div className="mobile-pages"><p>EXPLORE MORE</p>{EXPLORE_LINKS.map((page) => <Link key={page.href} href={page.href} onClick={() => setOpen(false)}>{page.label}<ArrowUpRight size={15} /></Link>)}</div>
          <div className="mobile-menu-bottom"><ThemeToggle /><Link href={sectionHref("#contact")} onClick={() => setOpen(false)} className="mobile-nav-cta inline-flex items-center justify-between py-4 text-sm">Let&apos;s talk <ArrowUpRight size={16} /></Link></div>
        </nav>
      </div>
    </>
  );
}
