"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";

type Tool = { name: string; kind: string; href: string };

const ORBITS: { duration: number; radius: number; startAngle: number; direction: "normal" | "reverse"; tools: Tool[] }[] = [
  {
    duration: 31,
    radius: 104,
    startAngle: -90,
    direction: "normal",
    tools: [
      { name: "React", kind: "react", href: "https://react.dev/" },
      { name: "Node.js", kind: "node", href: "https://nodejs.org/" },
      { name: "MongoDB", kind: "mongo", href: "https://www.mongodb.com/" },
    ],
  },
  {
    duration: 43,
    radius: 178,
    startAngle: -30,
    direction: "reverse",
    tools: [
      { name: "Python", kind: "python", href: "https://www.python.org/" },
      { name: "Claude", kind: "claude", href: "https://claude.ai/" },
      { name: "GitHub", kind: "github", href: "https://github.com/Pranesh0805-S" },
    ],
  },
  {
    duration: 59,
    radius: 252,
    startAngle: 30,
    direction: "normal",
    tools: [
      { name: "Vercel", kind: "vercel", href: "https://vercel.com/" },
      { name: "LeetCode", kind: "leetcode", href: "https://leetcode.com/u/pranesh0805-s/" },
      { name: "LinkedIn", kind: "linkedin", href: "https://www.linkedin.com/in/pranesh0805/" },
    ],
  },
];

function ToolMark({ kind }: { kind: string }) {
  if (kind === "react") return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="2.4" fill="currentColor"/><g fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="16" cy="16" rx="13" ry="5"/><ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)"/></g></svg>;
  if (kind === "node") return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="m16 2 12 7v14l-12 7-12-7V9L16 2Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><text x="16" y="19.5" textAnchor="middle" fontSize="8" fontWeight="700" fill="currentColor">JS</text></svg>;
  if (kind === "mongo") return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3c-5.4 6.1-8.2 10.5-7 15.1 1 3.8 4.3 6.2 6.5 8.7l.5 2.2.6-2.1c4.5-4.4 7-8.4 5.5-13.3C21.1 10 18.8 6.4 16 3Z" fill="currentColor"/><path d="M16 8v17" stroke="#30232d" strokeWidth="1.2" opacity=".7"/></svg>;
  if (kind === "python") return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3c-6 0-6 2.8-6 5.2v3.2h7.7v1.4H7.3C4.8 12.8 3 14.7 3 18c0 3.1 1.8 5 4.3 5h2.6v-3.2c0-2.9 2.1-5 5-5h5c2.4 0 4.1-1.8 4.1-4.3V8.2C24 5.2 21.5 3 16 3Zm-3.5 3.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" fill="currentColor"/><path d="M16 29c6 0 6-2.8 6-5.2v-3.2h-7.7v-1.4h10.4c2.5 0 4.3-1.9 4.3-5.2 0-3.1-1.8-5-4.3-5h-2.6v3.2c0 2.9-2.1 5-5 5h-5c-2.4 0-4.1 1.8-4.1 4.3v2.3c0 3 2.5 5.2 8 5.2Zm3.5-3.1a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Z" fill="currentColor"/></svg>;
  if (kind === "claude") return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 2.5 18.8 12l9.7 4-9.7 3.1L16 29.5 13 19.1 3.5 16l9.5-4L16 2.5Z" fill="currentColor"/><path d="m25 2 .9 3.1L29 6l-3.1 1-.9 3.2L24 7l-3-1 3-1L25 2Z" fill="currentColor" opacity=".7"/></svg>;
  if (kind === "github") return <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 2.8A13.2 13.2 0 0 0 11.8 28c.7.1.9-.3.9-.7v-2.5c-3.8.8-4.6-1.6-4.6-1.6-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.2 2 3 1.4 3.8 1.1.1-.9.5-1.5.9-1.9-3-.3-6.2-1.5-6.2-6.6 0-1.5.5-2.7 1.3-3.7-.1-.3-.6-1.8.1-3.7 0 0 1.1-.4 3.8 1.4a13 13 0 0 1 6.9 0c2.6-1.8 3.8-1.4 3.8-1.4.8 1.9.3 3.4.1 3.7.8 1 1.3 2.2 1.3 3.7 0 5.1-3.1 6.3-6.2 6.6.5.4.9 1.2.9 2.4v3.5c0 .4.3.8.9.7A13.2 13.2 0 0 0 16 2.8Z"/></svg>;
  if (kind === "vercel") return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4 30 28H2L16 4Z" fill="currentColor"/></svg>;
  if (kind === "leetcode") return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="m18.5 4-9 9a4.2 4.2 0 0 0 0 6l8.1 8.1a4.2 4.2 0 0 0 5.9 0l2-2" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/><path d="M13 18h14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>;
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M5 8.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM5.5 13h5v14h-5V13Zm8 0h4.8v1.9h.1c.7-1.3 2.3-2.6 4.8-2.6 5.1 0 6.1 3.3 6.1 7.6V27h-5v-6.3c0-1.5 0-3.5-2.1-3.5s-2.4 1.6-2.4 3.4V27h-5V13Z"/></svg>;
}

function Orbit({ orbit, index }: { orbit: (typeof ORBITS)[number]; index: number }) {
  return (
    <div
      className={`orbit-ring orbit-ring-${index + 1}`}
      style={{ "--orbit-radius": `${orbit.radius}px`, "--orbit-duration": `${orbit.duration}s`, "--orbit-direction": orbit.direction } as React.CSSProperties}
    >
      {orbit.tools.map((tool, toolIndex) => {
        const angle = toolIndex * 120 + orbit.startAngle;
        return (
          <a
            key={tool.name}
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={tool.name}
          className={`orbit-tool orbit-tool-${tool.kind}`}
            style={{ "--orbit-angle": `${angle}deg` } as React.CSSProperties}
          >
            <span className="orbit-tool-pill">
              <span className="orbit-tool-mark"><ToolMark kind={tool.kind} /></span>
              <span className="orbit-tool-label">{tool.name}</span>
            </span>
          </a>
        );
      })}
    </div>
  );
}

export default function OrbitingTools() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      document.documentElement.dataset.theme = saved;
    }
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    const button = buttonRef.current;
    if (button) {
      const rect = button.getBoundingClientRect();
      root.style.setProperty("--theme-origin", `${rect.left + rect.width / 2}px ${rect.top + rect.height / 2}px`);
    }
    root.classList.add("theme-transitioning");
    setIsTransitioning(true);

    const applyTheme = () => {
      root.dataset.theme = next;
      flushSync(() => setTheme(next));
    };
    const transitionDocument = document as Document & {
      startViewTransition?: (callback: () => void) => { finished: Promise<void> };
    };
    if (transitionDocument.startViewTransition) {
      const transition = transitionDocument.startViewTransition(applyTheme);
      void transition.finished.finally(() => {
        root.classList.remove("theme-transitioning");
        setIsTransitioning(false);
      });
    } else {
      applyTheme();
      window.setTimeout(() => {
        root.classList.remove("theme-transitioning");
        setIsTransitioning(false);
      }, 1000);
    }
    window.localStorage.setItem("portfolio-theme", next);
  }

  return (
    <div className="orbit-tools">
      <p className="orbit-caption"><span className="orbit-live-dot" /> Tools I use</p>
      <div className="orbit-stage">
        <div className="orbit-safe-zone" aria-hidden="true" />
        {ORBITS.map((orbit, index) => (
          <div key={index} className={`orbit-track orbit-track-${index + 1}`} aria-hidden="true" />
        ))}
        {ORBITS.map((orbit, index) => (
          <Orbit key={index} orbit={orbit} index={index} />
        ))}
        <button ref={buttonRef} type="button" className={`orbit-sun${isTransitioning ? " is-transitioning" : ""}`} onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} aria-busy={isTransitioning} disabled={isTransitioning}>
          <span className="orbit-moon" aria-hidden="true" />
          <span className="orbit-theme-hint">Switch to {theme === "dark" ? "light" : "dark"} mode</span>
        </button>
      </div>
    </div>
  );
}
