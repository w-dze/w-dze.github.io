import type { SiteContent } from "@/lib/site";
import { StitchMarker } from "@/components/StitchMarker";

type SkillsSectionProps = { site: SiteContent };

export function SkillsSection({ site }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className="border-border/50 relative scroll-mt-24 border-b border-dashed py-16"
      aria-labelledby="skills-heading"
    >
      <StitchMarker className="md:left-[0.65rem] md:top-12" />
      <h2
        id="skills-heading"
        className="text-foreground font-display text-2xl font-semibold tracking-tight"
      >
        Skills
      </h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {site.skills.map((group) => (
          <div key={group.title}>
            <h3 className="text-foreground text-sm font-semibold uppercase tracking-wider">
              {group.title}
            </h3>
            <ul className="text-muted mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <span className="border-border/80 bg-background/80 hover:border-accent/70 inline-block rounded-full border border-dotted px-3 py-1 text-sm transition">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
