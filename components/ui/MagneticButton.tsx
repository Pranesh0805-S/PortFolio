"use client";
import { useRef } from "react";

export default function MagneticButton({
  children, href, className = "", download,
}: { children: React.ReactNode; href: string; className?: string; download?: boolean | string }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const move = (e: React.PointerEvent) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.3;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.3;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const leave = () => { ref.current!.style.transform = "translate(0,0)"; };

  return (
    <a
      ref={ref}
      href={href}
      download={download}
      onPointerMove={move}
      onPointerLeave={leave}
      className={`inline-flex items-center gap-2 rounded-lg border border-line-strong transition-[transform,background-color,border-color,color] duration-200 ease-out ${className}`}
    >
      {children}
    </a>
  );
}