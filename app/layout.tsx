import type { Metadata } from "next";
import {
  DM_Sans,
  JetBrains_Mono,
  Playfair_Display,
} from "next/font/google";
import { SkipLink } from "@/components/SkipLink";
import { site } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.roles,
  email: site.email,
  ...(site.phone ? { telephone: site.phone } : {}),
  url: siteUrl,
  sameAs: site.social.map((s) => s.href),
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.roles}`,
    template: `%s — ${site.name}`,
  },
  description: site.oneLiner,
  openGraph: {
    title: `${site.name} — ${site.roles}`,
    description: site.oneLiner,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.roles}`,
    description: site.oneLiner,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="font-sans min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="grain" aria-hidden />
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
