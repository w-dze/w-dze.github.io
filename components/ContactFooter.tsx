import Link from "next/link";
import { StitchMarker } from "@/components/StitchMarker";
import { telHref } from "@/lib/phone";
import type { SiteContent } from "@/lib/site";

type ContactFooterProps = { site: SiteContent };

export function ContactFooter({ site }: ContactFooterProps) {
  const phoneLink = site.phone ? telHref(site.phone) : undefined;
  return (
    <footer
      id="contact"
      className="relative scroll-mt-24 pb-20 pt-16"
      aria-labelledby="contact-heading"
    >
      <StitchMarker className="md:left-[0.65rem] md:top-14" />
      <h2
        id="contact-heading"
        className="text-foreground font-display text-2xl font-semibold tracking-tight"
      >
        Contact
      </h2>
      <p className="text-muted mt-4 max-w-2xl leading-relaxed">{site.openTo}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={`mailto:${site.email}`}
          className="bg-accent text-accent-foreground focus-visible:ring-accent inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {site.email}
        </a>
        <a
          href={site.resumeHref}
          className="border-border text-foreground focus-visible:ring-accent inline-flex items-center justify-center rounded-full border border-dashed px-6 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Resume PDF
        </a>
        {phoneLink ? (
          <a
            href={phoneLink}
            className="border-border text-foreground focus-visible:ring-accent inline-flex items-center justify-center rounded-full border border-dashed px-6 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {site.phone}
          </a>
        ) : null}
        {site.social.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent focus-visible:ring-accent inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {s.label}
          </Link>
        ))}
      </div>
      <p className="text-muted mt-12 text-xs">
        Built with Next.js — thread motif is decorative (aria-hidden) and
        respects reduced motion.
      </p>
    </footer>
  );
}
