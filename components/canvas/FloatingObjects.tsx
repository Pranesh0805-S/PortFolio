"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { useLabelTexture } from "./useLabelTexture";

type FloatConfig = {
  position: [number, number, number];
  speed: number;
  floatAmp: number;
  phase: number;
};

function useFloat({ position, speed, floatAmp, phase }: FloatConfig, reduced: boolean) {
  const ref = useRef<THREE.Group>(null);
  const base = useMemo(() => new THREE.Vector3(...position), [position]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    if (!reduced) {
      ref.current.position.y = base.y + Math.sin(t * speed + phase) * floatAmp;
      ref.current.rotation.y += 0.0025;
      ref.current.rotation.x = Math.sin(t * 0.2 + phase) * 0.08;
    }
  });

  return ref;
}

function TechCard({
  label,
  position,
  color,
  reduced,
}: {
  label: string;
  position: [number, number, number];
  color: string;
  reduced: boolean;
}) {
  const ref = useFloat({ position, speed: 0.6, floatAmp: 0.12, phase: position[0] }, reduced);
  const labelTexture = useLabelTexture(label, color);

  return (
    <group ref={ref} position={position}>
      <RoundedBox args={[1.1, 1.1, 0.12]} radius={0.1} smoothness={4}>
        <meshStandardMaterial
          color="#11111a"
          roughness={0.35}
          metalness={0.2}
          emissive={color}
          emissiveIntensity={0.08}
        />
      </RoundedBox>
      <mesh position={[0, 0, 0.07]}>
        <planeGeometry args={[0.95, 0.95]} />
        <meshBasicMaterial map={labelTexture} transparent />
      </mesh>
    </group>
  );
}

function WireShape({
  geometry,
  position,
  color,
  scale = 1,
  reduced,
}: {
  geometry: "icosahedron" | "torusKnot" | "octahedron";
  position: [number, number, number];
  color: string;
  scale?: number;
  reduced: boolean;
}) {
  const ref = useFloat({ position, speed: 0.4, floatAmp: 0.18, phase: position[1] + 1 }, reduced);

  return (
    <group ref={ref} position={position} scale={scale}>
      <mesh>
        {geometry === "icosahedron" && <icosahedronGeometry args={[0.6, 0]} />}
        {geometry === "torusKnot" && <torusKnotGeometry args={[0.42, 0.14, 100, 12]} />}
        {geometry === "octahedron" && <octahedronGeometry args={[0.55, 0]} />}
        <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
}

export default function FloatingObjects({ reduced }: { reduced: boolean }) {
  return (
    <group position={[1.6, 0, 0]}>
      <TechCard label="React" position={[0.6, 0.9, 0]} color="#5eead4" reduced={reduced} />
      <TechCard label="Node" position={[1.7, -0.5, -0.4]} color="#a3e635" reduced={reduced} />
      <TechCard label="Mongo" position={[0.2, -1.3, 0.3]} color="#4ade80" reduced={reduced} />

      <WireShape geometry="icosahedron" position={[2.3, 1.1, -0.6]} color="#a78bfa" scale={0.9} reduced={reduced} />
      <WireShape geometry="torusKnot" position={[-0.2, 0.1, -0.8]} color="#5eead4" scale={0.8} reduced={reduced} />
      <WireShape geometry="octahedron" position={[1.4, -1.8, -0.3]} color="#fbbf24" scale={0.85} reduced={reduced} />
    </group>
  );
}
