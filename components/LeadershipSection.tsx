import type { SiteContent } from "@/lib/site";
import { StitchMarker } from "@/components/StitchMarker";

type LeadershipSectionProps = { site: SiteContent };

export function LeadershipSection({ site }: LeadershipSectionProps) {
  if (!site.leadership?.length) return null;

  return (
    <section
      id="leadership"
      className="border-border/50 relative scroll-mt-24 border-b border-dashed py-16"
      aria-labelledby="leadership-heading"
    >
      <StitchMarker className="md:left-[0.65rem] md:top-12" />
      <h2
        id="leadership-heading"
        className="text-foreground font-display text-2xl font-semibold tracking-tight"
      >
        Leadership &amp; community
      </h2>
      <ol className="mt-10 space-y-12">
        {site.leadership.map((role) => (
          <li key={`${role.company}-${role.dates}`}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-foreground text-lg font-semibold">
                  {role.title}
                </h3>
                <p className="text-accent font-medium">{role.company}</p>
              </div>
              <p className="text-muted font-mono text-sm">{role.dates}</p>
            </div>
            <ul className="text-muted mt-4 list-disc space-y-2 pl-5 marker:text-accent">
              {role.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
