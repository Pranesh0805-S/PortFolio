"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function TiltCard({
  children,
  className = "",
  intensity = 10,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(springY, [0, 1], [intensity, -intensity]);
  const rotateY = useTransform(springX, [0, 1], [-intensity, intensity]);
  const glowX = useTransform(springX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(springY, [0, 1], ["0%", "100%"]);

  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    if (!reduced) {
      x.set(px);
      y.set(py);
    }
    ref.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  function handleLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={
        reduced
          ? undefined
          : { rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }
      }
      className={`group relative overflow-hidden rounded-2xl border border-line bg-bg-elevated/60 before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100 before:bg-[radial-gradient(320px_circle_at_var(--mx)_var(--my),rgba(94,234,212,0.10),transparent_65%)] ${className}`}
    >
      {!reduced && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(280px circle at ${glowX} ${glowY}, rgba(94,234,212,0.12), transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}