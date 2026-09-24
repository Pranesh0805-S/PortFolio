"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollState } from "@/lib/scrollState";
import { useReducedMotion } from "@/lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  useEffect(() => {
    const max = () => Math.max(1, document.documentElement.scrollHeight - innerHeight);

    if (reduced) {
      const onScroll = () => { scrollState.progress = scrollY / max(); };
      onScroll();
      addEventListener("scroll", onScroll, { passive: true });
      return () => removeEventListener("scroll", onScroll);
    }

    const lenis = new Lenis({ lerp: 0.1, anchors: true });
    lenis.on("scroll", (l: Lenis) => {
      scrollState.progress = l.progress;
      scrollState.velocity = l.velocity;
      ScrollTrigger.update();
    });
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => { gsap.ticker.remove(tick); lenis.destroy(); };
  }, [reduced]);

  return <>{children}</>;
}
