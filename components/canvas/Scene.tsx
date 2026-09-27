"use client";

import { Canvas } from "@react-three/fiber";
import Background from "./Background";
import CameraRig from "./CameraRig";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function Scene() {
  const reduced = useReducedMotion();
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#1c141c"]} />
      <ambientLight intensity={1.05} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} color="#fff4e6" />
      <pointLight position={[-3, -2, 2]} intensity={1.1} color="#c38eaa" />
      <pointLight position={[3, 1, 3]} intensity={0.8} color="#e6a77a" />

      <Background />
      <CameraRig reduced={reduced} />
    </Canvas>
  );
}
