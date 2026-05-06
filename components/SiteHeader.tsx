import Link from "next/link";
import { YarnBallLogo } from "@/components/YarnBallLogo";
import { site } from "@/lib/site";

const nav = [
  { href: "#highlights", label: "Highlights" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#leadership", label: "Leadership" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="bg-background/85 border-border/60 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-3 md:pl-[5.25rem]">
        <Link
          href="#top"
          className="group/logo hover:border-accent/50 focus-visible:ring-accent -m-1 inline-flex items-center gap-2 rounded-full border border-transparent p-1 transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95 md:gap-2.5"
        >
          <span className="logo-bounce-hover inline-flex transition-transform duration-300 group-hover/logo:-rotate-6 group-hover/logo:scale-110">
            <YarnBallLogo
              className="size-9 sm:size-10"
              title={`${site.name} — top of page`}
            />
          </span>
          <span className="font-display text-foreground max-w-[9rem] truncate text-sm font-semibold tracking-tight sm:max-w-none">
            {site.name.split(" ")[0] ?? site.name}
          </span>
        </Link>
        <nav aria-label="In-page">
          <ul className="text-muted flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-xs font-medium sm:text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-accent focus-visible:ring-accent rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
