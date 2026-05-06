export function SkipLink() {
  return (
    <a
      href="#main"
      className="bg-background text-foreground focus:ring-accent fixed left-4 top-4 z-[100] -translate-y-24 rounded-md px-4 py-2 text-sm font-medium shadow-lg ring-2 ring-foreground transition-transform duration-200 focus:translate-y-0 focus:outline-none"
    >
      Skip to content
    </a>
  );
}
