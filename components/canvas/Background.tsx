"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    vec2 p = vec2(uv.x * aspect, uv.y);

    float t = uTime * 0.035;
    float n = noise(p * 1.6 + vec2(t, -t * 0.6));
    n += noise(p * 3.2 - vec2(t * 0.4, t * 0.3)) * 0.5;
    n /= 1.5;

    vec3 base = vec3(0.031, 0.031, 0.047);
    vec3 cyan = vec3(0.369, 0.918, 0.831);
    vec3 violet = vec3(0.655, 0.545, 0.980);

    float mixA = smoothstep(0.35, 0.85, n);
    float mixB = smoothstep(0.55, 0.95, noise(p * 2.1 + vec2(-t * 0.5, t * 0.2)));

    vec3 color = base;
    color = mix(color, base + cyan * 0.14, mixA);
    color = mix(color, base + violet * 0.12, mixB * 0.6);

    float vign = smoothstep(1.05, 0.25, length(uv - 0.5) * 1.3);
    color *= mix(0.7, 1.0, vign);

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function Background() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size, viewport } = useThree();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      materialRef.current.uniforms.uResolution.value.set(size.width, size.height);
    }
  });

  return (
    <mesh position={[0, 0, -6]} scale={[viewport.width * 1.4, viewport.height * 1.4, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uResolution: { value: new THREE.Vector2(1, 1) },
        }}
        depthWrite={false}
      />
    </mesh>
  );
}
