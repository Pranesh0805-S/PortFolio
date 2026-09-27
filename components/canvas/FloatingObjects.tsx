"use client";

import { useRef } from "react";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "@/lib/useReducedMotion";

function Monogram() {
  const group = useRef<THREE.Group>(null);
  const reduced = useReducedMotion();

  useFrame((state, delta) => {
    if (!group.current || reduced) return;
    group.current.rotation.y += delta * 0.14;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.06;
  });

  return (
    <group ref={group}>
      <mesh castShadow>
        <torusKnotGeometry args={[0.84, 0.29, 220, 32, 2, 3]} />
        <meshStandardMaterial color="#d28d86" roughness={0.24} metalness={0.24} emissive="#713f62" emissiveIntensity={0.18} />
      </mesh>
      <mesh position={[0, 0, -0.46]}>
        <torusGeometry args={[1.29, 0.012, 12, 120]} />
        <meshBasicMaterial color="#6e425f" transparent opacity={0.72} />
      </mesh>
      <mesh position={[0, 0, -0.5]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[1.43, 0.008, 10, 120]} />
        <meshBasicMaterial color="#806b5c" transparent opacity={0.56} />
      </mesh>
      <Float speed={0.7} rotationIntensity={0.15} floatIntensity={0.18} floatingRange={[-0.08, 0.08]}>
        <mesh position={[0, 0, 0.46]}>
          <sphereGeometry args={[0.105, 24, 24]} />
          <meshStandardMaterial color="#fff9f1" roughness={0.22} metalness={0.06} />
        </mesh>
      </Float>
    </group>
  );
}

export default function FloatingObjects({ reduced }: { reduced: boolean }) {
  return (
    <group position={[1.35, -0.06, 0]} scale={reduced ? 1.1 : 1.16}>
      <Monogram />
      <mesh position={[-0.9, -0.83, -0.2]} rotation={[0.3, 0.2, -0.35]}>
        <icosahedronGeometry args={[0.105, 1]} />
        <meshStandardMaterial color="#de9a68" roughness={0.28} metalness={0.28} />
      </mesh>
      <mesh position={[1.08, 0.9, -0.3]} rotation={[0.2, 0.3, 0.2]}>
        <octahedronGeometry args={[0.13, 0]} />
        <meshStandardMaterial color="#9a7688" roughness={0.31} metalness={0.3} />
      </mesh>
    </group>
  );
}
