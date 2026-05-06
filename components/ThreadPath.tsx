"use client";

import { useEffect, useState } from "react";

/** Long spline — animated blue highlight travels along the stroke. */
const THREAD_D =
  "M 40 6 C 50 154 42 348 62 478 C 78 596 72 734 92 892 C 100 974 93 1172 84 1174";

/** Sidebar ribbons: muted base + dual-phase dash animations (skipped when motion reduced). */
export function ThreadPath() {
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const swayClass = reducedMotion ? "" : "thread-path-sway";

  return (
    <svg
      className="pointer-events-none absolute left-0 top-0 hidden h-full w-[5rem] md:block"
      viewBox="0 0 112 1180"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient
          id="threadLineSheen"
          gradientUnits="userSpaceOnUse"
          x1="20"
          y1="160"
          x2="116"
          y2="1020"
        >
          <stop offset="10%" stopColor="#ffffff" stopOpacity={0.2} />
          <stop offset="45%" stopColor="#dbeafe" stopOpacity={0.95} />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.92} />
        </linearGradient>
      </defs>
      <g className={swayClass} style={{ transformOrigin: "56px 0px" }}>
        <path d={THREAD_D} className="thread-line-bed" />

        {reducedMotion ? (
          <path
            d={THREAD_D}
            className="thread-line-accent-static"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        ) : (
          <>
            <path
              d={THREAD_D}
              className="thread-line-sheen thread-line-flow-ghost"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              strokeDasharray="21 508"
            />
            <path
              d={THREAD_D}
              className="thread-line-accent thread-line-flow-primary"
              stroke="url(#threadLineSheen)"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              strokeDasharray="34 492"
            />
          </>
        )}
      </g>
    </svg>
  );
}
