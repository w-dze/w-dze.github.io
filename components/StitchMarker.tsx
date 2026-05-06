type StitchMarkerProps = {
  className?: string;
};

/** Small “stitch” node on the thread column (decorative). */
export function StitchMarker({ className = "" }: StitchMarkerProps) {
  return (
    <span
      className={`stitch-marker-motion ring-background border-accent/55 bg-accent/15 absolute left-0 top-0 hidden size-3.5 shrink-0 rounded-full border-2 ring-2 md:block ${className}`}
      aria-hidden
    />
  );
}
