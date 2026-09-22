"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

const LINES = [
  "full stack developer",
  "building envoy — an ai gmail agent",
  "final-year cs student, coimbatore",
  "open to placement roles",
];

const TYPE_SPEED = 45;
const DELETE_SPEED = 28;
const HOLD_MS = 1400;

export default function Terminal() {
  const reduced = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState(reduced ? LINES[0] : "");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");

  useEffect(() => {
    if (reduced) return;

    const current = LINES[lineIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPE_SPEED);
      } else {
        timeout = setTimeout(() => setPhase("holding"), HOLD_MS);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("deleting"), HOLD_MS);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), DELETE_SPEED);
      } else {
        timeout = setTimeout(() => {
          setLineIndex((i) => (i + 1) % LINES.length);
          setPhase("typing");
        }, 0);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, lineIndex, reduced]);

  return (
    <div className="inline-flex items-center gap-2 rounded-lg border border-line bg-bg-elevated/80 px-4 py-2.5 font-mono text-sm text-ink-dim backdrop-blur-sm">
      <span className="text-accent-cyan">$</span>
      <span className="text-ink">whoami</span>
      <span className="mx-1 text-ink-dim/50">—</span>
      <span aria-live="polite">{text}</span>
      <span className="ml-0.5 inline-block h-4 w-[2px] animate-[blink_1s_steps(1)_infinite] bg-accent-cyan" />
    </div>
  );
}
