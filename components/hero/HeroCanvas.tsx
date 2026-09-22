"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "@/lib/useReducedMotion";
import CanvasErrorBoundary from "@/components/canvas/CanvasErrorBoundary";

const Scene = dynamic(() => import("@/components/canvas/Scene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-bg" />,
});

const staticFallback = (
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(94,234,212,0.08),transparent_60%),radial-gradient(circle_at_20%_80%,rgba(167,139,250,0.08),transparent_55%)] bg-bg" />
);

export default function HeroCanvas() {
  const reduced = useReducedMotion();

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <CanvasErrorBoundary fallback={staticFallback}>
        <Scene reduced={reduced} />
      </CanvasErrorBoundary>
    </div>
  );
}
