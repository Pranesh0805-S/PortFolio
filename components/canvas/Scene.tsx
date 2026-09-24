"use client";

import { Canvas } from "@react-three/fiber";
import Background from "./Background";
import FloatingObjects from "./FloatingObjects";
import CameraRig from "./CameraRig";

export default function Scene({ reduced }: { reduced: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#08080c"]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} color="#ffffff" />
      <pointLight position={[-3, -2, 2]} intensity={0.5} color="#5eead4" />

      <Background />
      <FloatingObjects reduced={reduced} />
      <CameraRig reduced={reduced} />
    </Canvas>
  );
}