"use client";

import { motion, type Variants } from "framer-motion";
import Terminal from "./Terminal";
import MagneticButton from "@/components/ui/MagneticButton";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-line"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl px-6 py-32 pt-36 sm:px-10"
      >
        <motion.p
          variants={item}
          className="mb-5 font-mono text-sm text-accent-cyan"
        >
          full stack developer / ai &amp; llm engineer
        </motion.p>

        <motion.h1
          variants={item}
          className="text-balance max-w-2xl text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl"
        >
          Hi, I&apos;m Pranesh S.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-md text-balance text-lg leading-relaxed text-ink-dim"
        >
          I build full-stack products and AI-agent systems — from inbox
          copilots to self-healing CI/CD pipelines — with a focus on shipping
          things that actually work.
        </motion.p>

        <motion.div variants={item} className="mt-8">
          <Terminal />
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
        <MagneticButton
          href="#projects"
          className="!rounded-lg !border-0 bg-ink px-5 py-3 text-sm font-medium text-bg hover:bg-accent-cyan"
        >
          View projects
        </MagneticButton>
        <MagneticButton
          href="/resume.pdf"
          download="Pranesh S Resume.pdf"
          className="border-line-strong px-5 py-3 text-sm font-medium text-ink hover:border-accent-cyan hover:text-accent-cyan"
        >
          Download resume
        </MagneticButton>
        <a
          href="#contact"
          className="px-2 py-3 text-sm font-medium text-ink-dim transition-colors hover:text-ink"
        >
          Contact me
        </a>
      </motion.div>
      </motion.div>

      <motion.a
        href="#stack"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ink-dim sm:flex"
      >
        Scroll
        <span className="h-8 w-px bg-gradient-to-b from-ink-dim to-transparent" />
      </motion.a>
    </section>
  );
}
