"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import TiltCard from "@/components/bento/TiltCard";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

const STATS = [
  { value: "5", label: "Projects shipped" },
  { value: "10+", label: "Tools in the stack" },
  { value: "3rd", label: "Year, B.C.A." },
  { value: "1", label: "Certification" },
];

const SKILLS = [
  "JavaScript",
  "Python",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Supabase",
  "Claude API",
  "REST APIs",
  "Figma",
];

export default function AboutBento() {
  return (
    <section id="about" className="border-b border-line py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-6xl px-6 sm:px-10"
      >
        <motion.p
          variants={fadeUp}
          className="mb-10 font-mono text-xs uppercase tracking-widest text-accent-cyan"
        >
          About me
        </motion.p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-[auto_auto]">
          {/* Photo / intro card */}
          <motion.div variants={fadeUp} className="md:col-span-2 md:row-span-2">
            <TiltCard className="h-full">
              <div className="relative flex h-full flex-col justify-end overflow-hidden p-6 pt-0">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10"
                  style={{
                    background:
                      "radial-gradient(220px circle at 70% 15%, rgba(94,234,212,0.18), transparent 65%), radial-gradient(260px circle at 15% 20%, rgba(167,139,250,0.14), transparent 60%)",
                  }}
                />

                <div className="relative mx-auto mt-8 h-56 w-48 overflow-hidden rounded-2xl border border-line-strong sm:h-64 sm:w-56">
                  <Image
                    src="/about/profile.png"
                    alt="Pranesh S"
                    fill
                    sizes="240px"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="mt-8">
                  <p className="font-mono text-xs text-accent-cyan">Hi, I&apos;m</p>
                  <h3 className="mt-1 text-2xl font-semibold text-ink">Pranesh S</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-dim">
                    A full-stack developer and final-year CS student in Coimbatore,
                    building AI-integrated products with Node.js, React, and the
                    Claude API — with a focus on shipping things that actually work.
                  </p>
                  <a
                    href="mailto:pranesh8506s@gmail.com"
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 font-mono text-xs text-ink-dim transition-colors hover:border-accent-cyan hover:text-accent-cyan"
                  >
                    pranesh8506s@gmail.com
                  </a>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Stat tiles */}
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <TiltCard intensity={6} className="h-full">
                <div className="flex h-full flex-col justify-center p-5">
                  <span className="text-3xl font-semibold tracking-tight text-ink">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs text-ink-dim">{stat.label}</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}

          {/* Featured project — hover reveal */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <TiltCard intensity={5} className="h-full">
              <div className="relative flex h-full min-h-[180px] flex-col justify-end p-6">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(94,234,212,0.1),transparent_70%)]"
                />
                <p className="font-mono text-xs text-accent-cyan">Featured build</p>
                <h4 className="mt-2 text-xl font-semibold text-ink">Envoy Mail</h4>
                <p className="mt-2 max-w-sm translate-y-2 text-sm text-ink-dim opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  AI Gmail agent with Claude Haiku categorization, an approval
                  queue for destructive actions, and calendar-aware scheduling.
                </p>
                <a
                  href="#projects"
                  className="mt-4 inline-flex w-fit items-center gap-1 font-mono text-xs text-ink-dim transition-colors hover:text-accent-cyan"
                >
                  View all projects →
                </a>
              </div>
            </TiltCard>
          </motion.div>

          {/* Skills */}
          <motion.div variants={fadeUp}>
            <TiltCard intensity={6} className="h-full">
              <div className="flex h-full flex-col justify-center p-5">
                <p className="font-mono text-xs text-accent-violet">Stack</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {SKILLS.slice(0, 6).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-line px-2 py-0.5 text-[11px] text-ink-dim"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Certifications / achievements */}
          <motion.div variants={fadeUp}>
            <TiltCard intensity={6} className="h-full">
              <div className="flex h-full flex-col justify-center p-5">
                <p className="font-mono text-xs text-accent-amber">Certified</p>
                <p className="mt-2 text-sm text-ink">MongoDB for Students</p>
                <p className="mt-3 font-mono text-xs text-accent-amber">Organized</p>
                <p className="mt-1 text-sm text-ink-dim">
                  Debugging Competition — Bliss 2025
                </p>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}