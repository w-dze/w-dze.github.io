type YarnBallLogoProps = {
  className?: string;
  title?: string;
};

/** Line-art yarn ball — strokes only; accent + muted from theme vars. */
export function YarnBallLogo({ className = "", title }: YarnBallLogoProps) {
  const ink = "currentColor";
  const soft = "var(--muted)";

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`yarn-ball-logo text-accent shrink-0 ${className}`}
      overflow="visible"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {title ? <title>{title}</title> : null}

      {/* tails */}
      <path
        className="yarn-ball-tail"
        d="M 46 46 C 51 53 53 61 53 71"
        stroke={ink}
        strokeWidth={2.2}
        opacity={0.92}
      />
      <path
        className="yarn-ball-tail-2"
        d="M 22 48 C 16 54 13 61 13 71"
        stroke={soft}
        strokeWidth={1.85}
      />
      <path
        className="yarn-ball-tail-3"
        d="M 40 42 C 48 41 53 43 61 53"
        stroke={soft}
        strokeWidth={1.65}
        opacity={0.85}
      />

      {/* skeleton wraps first (sit behind silhouette) */}
      <ellipse
        cx={34}
        cy={38}
        rx={17.8}
        ry={9.1}
        transform="rotate(-18 34 38)"
        stroke={soft}
        strokeWidth={1.5}
        opacity={0.55}
      />
      <ellipse
        cx={34}
        cy={38}
        rx={8.6}
        ry={17}
        transform="rotate(24 34 38)"
        stroke={soft}
        strokeWidth={1.45}
        opacity={0.52}
      />

      {/* balloon outline */}
      <circle cx={34} cy={38} r={17.9} stroke={ink} strokeWidth={2.35} />

      {/* foreground scribble wraps */}
      <path d="M 19 37 Q 34 28 53 43" stroke={ink} strokeWidth={1.9} opacity={0.88} />
      <path d="M 23 51 Q 35 43 51 54" stroke={soft} strokeWidth={1.45} opacity={0.82} />

      {/* little loop hitch */}
      <path
        d="M 30 27 C 34 21 39 26 41 31"
        stroke={ink}
        strokeWidth={1.55}
        opacity={0.75}
      />
    </svg>
  );
}
