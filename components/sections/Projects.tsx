"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/projects";

function ProjectThumb({
  image, name, category, accent, hasUI,
}: { image?: string; name: string; category: string; accent: string; hasUI: boolean }) {
  const [failed, setFailed] = useState(false);

  if (image && !failed) {
    return (
      <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-bg">
        <Image
          src={image}
          alt={`${name} screenshot`}
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className="flex h-48 w-full items-end justify-between rounded-2xl p-5"
      style={{ background: `linear-gradient(135deg, ${accent}1a, transparent 70%)` }}
    >
      <span className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
        {hasUI ? "no live preview yet" : "backend / CLI project"}
      </span>
      <span className="font-mono text-xs" style={{ color: accent }}>{category}</span>
    </div>
  );
}

function ProjectCard({
  project, index, total, progress,
}: { project: (typeof projects)[number]; index: number; total: number; progress: any }) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [0, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 md:top-32" style={{ top: `${96 + index * 28}px` }}>
      <motion.div
        style={{ scale }}
        className="origin-top rounded-[40px] border-2 border-line-strong bg-bg-elevated p-5 sm:p-7 md:p-8"
      >
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-baseline gap-4">
            <span className="text-4xl font-black text-line-strong sm:text-5xl">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
                {project.category}
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-ink sm:text-3xl">
                {project.name}
              </h3>
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-line-strong px-5 py-2 text-xs font-medium uppercase tracking-widest text-ink transition-colors hover:border-accent-cyan hover:text-accent-cyan"
            >
              GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-ink px-5 py-2 text-xs font-medium uppercase tracking-widest text-bg transition-colors hover:bg-accent-cyan"
              >
                Live
              </a>
            )}
          </div>
        </div>

        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink-dim">
          {project.description}
        </p>

        <ProjectThumb
          image={project.image}
          name={project.name}
          category={project.category}
          accent={project.accent}
          hasUI={project.hasUI}
        />

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-md bg-line px-2.5 py-1 text-xs text-ink-dim">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="projects" className="border-b border-line py-24">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <h2 className="gradient-heading mb-16 text-center text-4xl font-black uppercase tracking-tight sm:text-5xl">
          Project
        </h2>
      </div>

      <div ref={ref} className="relative mx-auto max-w-4xl px-6 sm:px-10">
        {projects.map((project, i) => (
          <div key={project.slug} className="mb-8" style={{ height: "85vh" }}>
            <ProjectCard project={project} index={i} total={projects.length} progress={scrollYProgress} />
          </div>
        ))}
      </div>
    </section>
  );
}