"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

function ProjectThumb({
  image,
  name,
  category,
  accent,
  hasUI,
}: {
  image?: string;
  name: string;
  category: string;
  accent: string;
  hasUI: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (image && !failed) {
    return (
      <div className="relative h-40 w-full overflow-hidden bg-bg-elevated">
        <Image
          src={image}
          alt={`${name} screenshot`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className="flex h-40 items-center justify-between p-6"
      style={{ background: `linear-gradient(135deg, ${accent}1a, transparent 70%)` }}
    >
      <span className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
        {hasUI ? "no live preview yet" : "backend / CLI project"}
      </span>
      <span className="font-mono text-xs" style={{ color: accent }}>
        {category}
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <h2 className="mb-14 text-2xl font-semibold tracking-tight text-ink">
          Projects
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group overflow-hidden rounded-2xl border border-line bg-bg-elevated/60"
            >
              <ProjectThumb
                image={project.image}
                name={project.name}
                category={project.category}
                accent={project.accent}
                hasUI={project.hasUI}
              />

              <div className="border-t border-line p-6">
                <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-line px-2.5 py-1 text-xs text-ink-dim"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-line-strong px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-accent-cyan hover:text-accent-cyan"
                  >
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-ink px-3 py-1.5 text-xs font-medium text-bg transition-colors hover:bg-accent-cyan"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}