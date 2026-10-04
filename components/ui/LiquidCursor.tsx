"use client";

import { useEffect } from "react";

export default function LiquidCursor() {
  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>(".liquid-cursor");
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!cursor || !finePointer.matches || reducedMotion.matches) return;

    document.documentElement.classList.add("has-liquid-cursor");
    let frame = 0;
    let x = -100;
    let y = -100;
    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
        frame = 0;
      });
    };
    const hover = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;
      cursor.classList.toggle("is-interactive", Boolean(event.target.closest("a, button, input, textarea, select, [role='button']")));
    };
    const press = () => cursor.classList.add("is-pressed");
    const release = () => cursor.classList.remove("is-pressed");
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", hover, { passive: true });
    window.addEventListener("pointerdown", press, { passive: true });
    window.addEventListener("pointerup", release, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      document.documentElement.classList.remove("has-liquid-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", hover);
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("pointerup", release);
    };
  }, []);

  return <div className="liquid-cursor" aria-hidden="true"><span /></div>;
}
