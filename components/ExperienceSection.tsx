import type { SiteContent } from "@/lib/site";
import { StitchMarker } from "@/components/StitchMarker";

type ExperienceSectionProps = { site: SiteContent };

export function ExperienceSection({ site }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="border-border/50 relative scroll-mt-24 border-b border-dashed py-16"
      aria-labelledby="experience-heading"
    >
      <StitchMarker className="md:left-[0.65rem] md:top-12" />
      <h2
        id="experience-heading"
        className="text-foreground font-display text-2xl font-semibold tracking-tight"
      >
        Experience
      </h2>
      <ol className="mt-10 space-y-12">
        {site.experience.map((job) => (
          <li key={`${job.company}-${job.dates}`}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-foreground text-lg font-semibold">
                  {job.title}
                </h3>
                <p className="text-accent font-medium">{job.company}</p>
              </div>
              <p className="text-muted font-mono text-sm">{job.dates}</p>
            </div>
            <ul className="text-muted mt-4 list-disc space-y-2 pl-5 marker:text-accent">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
