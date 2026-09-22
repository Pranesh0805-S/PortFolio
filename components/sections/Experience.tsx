"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <h2 className="mb-14 text-2xl font-semibold tracking-tight text-ink">
          Experience
        </h2>

        <div className="relative border-l border-line pl-8">
          {experience.map((entry, i) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-12 last:mb-0"
            >
              <span className="absolute -left-[2.35rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-cyan" />
              <p className="font-mono text-xs text-accent-cyan">{entry.period}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{entry.title}</h3>
              <p className="mt-1 text-sm text-ink-dim">{entry.place}</p>
              <ul className="mt-4 space-y-2">
                {entry.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-ink-dim">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line-strong" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
