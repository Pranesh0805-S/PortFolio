"use client";
import { useEffect } from "react";
import { mouse } from "./scrollState";

export function useMouseLerp() {
  useEffect(() => {
    let tx = 0, ty = 0, raf = 0;
    const move = (e: PointerEvent) => {
      tx = (e.clientX / innerWidth) * 2 - 1;
      ty = -((e.clientY / innerHeight) * 2 - 1);
    };
    const loop = () => {
      mouse.x += (tx - mouse.x) * 0.08;
      mouse.y += (ty - mouse.y) * 0.08;
      raf = requestAnimationFrame(loop);
    };
    addEventListener("pointermove", move);
    loop();
    return () => { removeEventListener("pointermove", move); cancelAnimationFrame(raf); };
  }, []);
}