import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { fraunces, interTight } from "@/lib/fonts";
import { routing } from "@/i18n/routing";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import StructuredData from "@/components/StructuredData";
import "../globals.css";

const SITE_URL = "https://www.raarlifestyle.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";

  const title = isFr
    ? "RAAR — Lifestyle & Événements, sur mesure."
    : "RAAR — Luxury Lifestyle & Events Management";

  const description = isFr
    ? "Maison de lifestyle et d'événements sur mesure basée à Dubaï — voyages, séjours, dining, bien-être, staffing et expériences rares, à travers le monde."
    : "A tailored luxury lifestyle & events management atelier based in Dubai — travel, stays, dining, wellness, staffing and rare experiences, worldwide.";

  const canonicalPath = isFr ? "/fr" : "/";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: "%s — RAAR",
    },
    description,
    applicationName: "RAAR Lifestyle",
    authors: [{ name: "Asmaa Hanine", url: SITE_URL }],
    creator: "Asmaa Hanine",
    publisher: "RAAR Lifestyle",
    category: "Lifestyle",
    keywords: isFr
      ? [
          "conciergerie de luxe",
          "lifestyle management",
          "événementiel sur mesure",
          "conciergerie Dubaï",
          "voyage de luxe",
          "Marrakech luxe",
          "RAAR",
          "Asmaa Hanine",
        ]
      : [
          "luxury concierge",
          "lifestyle management",
          "events management",
          "Dubai concierge",
          "Morocco luxury",
          "VIP travel",
          "private travel",
          "RAAR",
          "Asmaa Hanine",
        ],
    alternates: {
      canonical: canonicalPath,
      // hreflang `<link>`s are rendered explicitly in the body (see layout)
      // because Next 16's `alternates.languages` omits x-default and
      // sometimes duplicates entries when used inside [locale] segments.
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      url: canonicalPath,
      siteName: "RAAR Lifestyle",
      title,
      description,
      locale: isFr ? "fr_FR" : "en_US",
      alternateLocale: isFr ? ["en_US"] : ["fr_FR"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    formatDetection: {
      email: false,
      telephone: false,
      address: false,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${fraunces.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-sand text-ink grain">
        {/* hreflang — Next 16's `alternates.languages` in Metadata doesn't
            emit <link> tags when the app uses a [locale] segment, so we
            render them explicitly here. Next hoists <link>s from server
            component bodies into <head>. */}
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="fr" href={`${SITE_URL}/fr`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />
        <StructuredData locale={locale as "en" | "fr"} />
        <NextIntlClientProvider>
          <CustomCursor />
          <SmoothScroll>
            <Nav />
            <main className="relative">{children}</main>
          </SmoothScroll>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
