"use client";
import { useRef } from "react";

export default function MagneticButton({
  children, href, className = "",
}: { children: React.ReactNode; href: string; className?: string }) {
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
    <a ref={ref} href={href} onPointerMove={move} onPointerLeave={leave}
       className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 transition-transform duration-200 ease-out ${className}`}>
      {children}
    </a>
  );
}