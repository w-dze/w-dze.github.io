"use client";

import { motion } from "framer-motion";

type ScrollTagProps = {
  label: string;
  className?: string;
};

export function ScrollTag({ label, className = "" }: ScrollTagProps) {
  return (
    <motion.span
      className={`hidden rounded-full border border-blue-200 bg-blue-50 px-3 py-1 font-mono text-xs text-blue-700 md:inline-block ${className}`}
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.7 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {label}
    </motion.span>
  );
}
