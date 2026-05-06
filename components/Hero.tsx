import Link from "next/link";
import { StitchMarker } from "@/components/StitchMarker";
import { telHref } from "@/lib/phone";
import type { SiteContent } from "@/lib/site";

type HeroProps = { site: SiteContent };

export function Hero({ site }: HeroProps) {
  const phoneLink = site.phone ? telHref(site.phone) : undefined;
  return (
    <section
      id="top"
      className="border-border/50 relative scroll-mt-24 border-b border-dashed pb-16 pt-12 md:pt-16"
      aria-labelledby="hero-heading"
    >
      <StitchMarker className="md:left-[0.65rem] md:top-10" />
      <p className="text-accent font-display mb-2 text-sm font-medium tracking-wide">
        {site.roles}
      </p>
      <h1
        id="hero-heading"
        className="text-foreground font-display text-4xl font-semibold tracking-tight sm:text-5xl"
      >
        {site.name}
      </h1>
      <p className="text-muted mt-4 max-w-2xl text-lg leading-relaxed">
        {site.oneLiner}
      </p>
      <p className="thread-story text-accent/95 mt-4 max-w-2xl text-base italic leading-relaxed underline decoration-accent/55">
        {site.threadLine}
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <a
          href={site.resumeHref}
          className="bg-accent text-accent-foreground focus-visible:ring-accent inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition-[transform,filter] duration-200 hover:-translate-y-0.5 hover:brightness-[1.02] hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Download resume
        </a>
        <a
          href={`mailto:${site.email}`}
          className="border-border text-foreground focus-visible:ring-accent inline-flex items-center justify-center rounded-full border border-dashed bg-transparent px-6 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Email me
        </a>
        {phoneLink ? (
          <a
            href={phoneLink}
            className="border-border text-foreground focus-visible:ring-accent inline-flex items-center justify-center rounded-full border border-dashed bg-transparent px-6 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Call / text
          </a>
        ) : null}
        {site.social.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent focus-visible:ring-accent inline-flex items-center justify-center rounded-full px-3 py-2 text-sm font-medium underline-offset-4 transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {s.label}
          </Link>
        ))}
      </div>
      <p className="text-muted mt-6 text-sm">{site.location}</p>
    </section>
  );
}
