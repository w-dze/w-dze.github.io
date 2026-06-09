import Link from "next/link";
import type { SiteContent } from "@/lib/site";
import { StitchMarker } from "@/components/StitchMarker";

type ProjectsSectionProps = { site: SiteContent };

export function ProjectsSection({ site }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="border-border/50 relative scroll-mt-24 border-b border-dashed py-16"
      aria-labelledby="projects-heading"
    >
      <StitchMarker className="md:left-[0.65rem] md:top-12" />
      <h2
        id="projects-heading"
        className="text-foreground font-display text-2xl font-semibold tracking-tight"
      >
        Projects
      </h2>
      <ul className="mt-8 grid gap-6 sm:grid-cols-1">
        {site.projects.map((project) => (
          <li
            key={project.name}
            className="float-card border-border/70 bg-card/40 group rounded-2xl border border-dashed p-6 hover:border-accent/60 hover:shadow-xl"
          >
            <h3 className="text-foreground text-lg font-semibold">
              {project.name}
            </h3>
            <p className="text-muted mt-2 leading-relaxed">{project.summary}</p>
            {project.bullets && (
              <ul className="text-muted mt-3 list-disc space-y-2 pl-5 marker:text-accent">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            <p className="text-muted mt-3 text-sm">
              <span className="text-foreground font-medium">Stack: </span>
              {project.stack.join(" · ")}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent focus-visible:ring-accent text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
