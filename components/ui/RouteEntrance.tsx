"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export default function RouteEntrance({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();
  return <motion.div initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .38, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
