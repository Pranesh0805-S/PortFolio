"use client";
import dynamic from "next/dynamic";
import CanvasErrorBoundary from "./CanvasErrorBoundary";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useMouseLerp } from "@/lib/useMouseLerp";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

const fallbackStyle = {
  background:
    "radial-gradient(600px circle at 70% 20%, rgba(94,234,212,0.12), transparent 60%), radial-gradient(500px circle at 20% 70%, rgba(167,139,250,0.10), transparent 60%)",
};

export default function CanvasRoot() {
  const reduced = useReducedMotion();
  useMouseLerp();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <CanvasErrorBoundary fallback={<div className="h-full w-full" style={fallbackStyle} />}>
        <Scene reduced={reduced} />
      </CanvasErrorBoundary>
    </div>
  );
}
