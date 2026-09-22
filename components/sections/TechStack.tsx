const STACK = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Next.js",
  "TypeScript",
  "Claude API",
  "Supabase",
  "Tailwind CSS",
  "Three.js",
];

export default function TechStack() {
  const doubled = [...STACK, ...STACK];

  return (
    <section id="stack" className="border-b border-line py-16">
      <p className="mx-auto mb-8 max-w-6xl px-6 font-mono text-xs uppercase tracking-widest text-ink-dim sm:px-10">
        Tech I build with
      </p>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />

        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-4">
          {doubled.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="whitespace-nowrap rounded-full border border-line px-5 py-2.5 font-mono text-sm text-ink-dim"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
