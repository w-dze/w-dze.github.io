"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedThread() {
  const reduced = useReducedMotion();
  const loopCore =
    "M70 0 C 94 120, 42 220, 74 340 C 102 446, 42 534, 72 640 C 108 770, 34 870, 72 998 C 102 1102, 46 1206, 72 1310 C 108 1448, 36 1544, 72 1668 C 102 1772, 48 1882, 72 1992 C 106 2126, 40 2224, 72 2348 C 92 2436, 74 2520, 82 2600";

  return (
    <motion.svg
      className="pointer-events-none absolute left-24 top-0 hidden h-full w-24 md:block"
      viewBox="0 0 96 2600"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
      animate={reduced ? undefined : { x: [0, 6, -5, 4, -3, 0] }}
      transition={
        reduced
          ? undefined
          : { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
      }
    >
      <motion.path
        d={loopCore}
        stroke="#7ea7d8"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
        fill="none"
        animate={
          reduced
            ? undefined
            : {
                x: [0, 1.5, -1.5, 0],
                y: [0, -1, 1, 0],
              }
        }
        transition={
          reduced
            ? undefined
            : { duration: 7.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
        }
      />
    </motion.svg>
  );
}
