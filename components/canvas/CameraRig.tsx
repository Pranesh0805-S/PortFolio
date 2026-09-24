"use client";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { scrollState, mouse } from "@/lib/scrollState";

// One camera pose per scroll segment: [x, y, z]
const POSES: [number, number, number][] = [
  [0, 0, 5.2], [-1.2, -0.6, 6], [1.2, -1.2, 6.5], [0, -1.8, 5.5],
];

export default function CameraRig({ reduced }: { reduced: boolean }) {
  useFrame(({ camera }, dt) => {
    const t = MathUtils.clamp(scrollState.progress, 0, 1) * (POSES.length - 1);
    const i = Math.min(Math.floor(t), POSES.length - 2);
    const f = t - i;
    const a = POSES[i], b = POSES[i + 1];
    const k = reduced ? 1 : 1 - Math.pow(0.001, dt);
    const m = reduced ? 0 : 1;
    camera.position.x = MathUtils.lerp(camera.position.x, MathUtils.lerp(a[0], b[0], f) + mouse.x * 0.4 * m, k);
    camera.position.y = MathUtils.lerp(camera.position.y, MathUtils.lerp(a[1], b[1], f) + mouse.y * 0.3 * m, k);
    camera.position.z = MathUtils.lerp(camera.position.z, MathUtils.lerp(a[2], b[2], f), k);
    camera.lookAt(0, camera.position.y * 0.5, 0);
  });
  return null;
}
