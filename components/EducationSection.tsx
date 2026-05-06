import type { SiteContent } from "@/lib/site";
import { StitchMarker } from "@/components/StitchMarker";

type EducationSectionProps = { site: SiteContent };

export function EducationSection({ site }: EducationSectionProps) {
  return (
    <section
      id="education"
      className="border-border/50 relative scroll-mt-24 border-b border-dashed py-16"
      aria-labelledby="education-heading"
    >
      <StitchMarker className="md:left-[0.65rem] md:top-12" />
      <h2
        id="education-heading"
        className="text-foreground font-display text-2xl font-semibold tracking-tight"
      >
        Education
      </h2>
      <ul className="mt-8 space-y-8">
        {site.education.map((edu) => (
          <li
            key={`${edu.school}-${edu.dates}`}
            className="border-border/60 rounded-xl border border-dashed bg-transparent px-4 py-4"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-foreground text-lg font-semibold">
                  {edu.school}
                </h3>
                <p className="text-muted">{edu.degree}</p>
              </div>
              <p className="text-muted font-mono text-sm">{edu.dates}</p>
            </div>
            {edu.detail ? (
              <p className="text-muted mt-2 text-sm">{edu.detail}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
