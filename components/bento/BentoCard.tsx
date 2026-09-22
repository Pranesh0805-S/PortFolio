"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function BentoCard({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-2xl border border-line bg-bg-elevated/60 p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
