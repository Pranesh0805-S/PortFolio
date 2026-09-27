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
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x)
      + (hash(i + vec2(0.0, 1.0)) - hash(i)) * u.y * (1.0 - u.x)
      + (hash(i + vec2(1.0, 1.0)) - hash(i + vec2(0.0, 1.0))) * u.x * u.y;
  }
  void main() {
    vec2 p = vec2(vUv.x * uResolution.x / uResolution.y, vUv.y);
    float t = uTime * 0.025;
    float wash = noise(p * 2.2 + vec2(t, -t * 0.6));
    float glow = noise(p * 3.1 - vec2(t * 0.4, t * 0.2));
    vec3 base = vec3(0.105, 0.075, 0.10);
    vec3 plum = vec3(0.40, 0.23, 0.32);
    vec3 rose = vec3(0.71, 0.49, 0.50);
    vec3 color = mix(base, base + plum * 0.17, smoothstep(0.34, 0.82, wash));
    color = mix(color, base + rose * 0.13, smoothstep(0.48, 0.9, glow) * 0.7);
    float vignette = smoothstep(1.02, 0.22, length(vUv - 0.5) * 1.12);
    color *= mix(0.93, 1.04, vignette);
    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function Background() {
  const mesh = useRef<THREE.Mesh>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.x = state.camera.position.x;
      mesh.current.position.y = state.camera.position.y;
    }
    if (material.current) {
      material.current.uniforms.uTime.value = state.clock.elapsedTime;
      material.current.uniforms.uResolution.value.set(size.width, size.height);
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, -6]} scale={[size.width / 60, size.height / 60, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{ uTime: { value: 0 }, uResolution: { value: new THREE.Vector2(1, 1) } }}
        depthWrite={false}
      />
    </mesh>
  );
}
