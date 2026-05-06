import type { SiteContent } from "@/lib/site";
import { StitchMarker } from "@/components/StitchMarker";

type HighlightsProps = { site: SiteContent };

export function Highlights({ site }: HighlightsProps) {
  return (
    <section
      id="highlights"
      className="border-border/50 relative scroll-mt-24 border-b border-dashed py-16"
      aria-labelledby="highlights-heading"
    >
      <StitchMarker className="md:left-[0.65rem] md:top-12" />
      <h2
        id="highlights-heading"
        className="text-foreground font-display text-2xl font-semibold tracking-tight"
      >
        Highlights
      </h2>
      <ul className="mt-6 space-y-3 text-base leading-relaxed">
        {site.highlights.map((item) => (
          <li
            key={item}
            className="float-card border-border/60 bg-card/50 text-muted relative rounded-xl border border-dashed px-4 py-3 pl-5 hover:shadow-md"
          >
            <span
              className="bg-accent absolute left-2 top-[1.1rem] hidden size-1.5 rounded-full md:block"
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
