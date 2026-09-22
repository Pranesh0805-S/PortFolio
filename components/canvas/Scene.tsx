"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Background from "./Background";
import FloatingObjects from "./FloatingObjects";

function PointerRig({ reduced, children }: { reduced: boolean; children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current || reduced) return;
    const { x, y } = state.pointer;
    group.current.rotation.y += (x * 0.25 - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (-y * 0.15 - group.current.rotation.x) * 0.04;
  });

  return <group ref={group}>{children}</group>;
}

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
      <PointerRig reduced={reduced}>
        <FloatingObjects reduced={reduced} />
      </PointerRig>
    </Canvas>
  );
}
