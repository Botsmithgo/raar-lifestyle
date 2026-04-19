import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { fraunces, interTight } from "@/lib/fonts";
import { routing } from "@/i18n/routing";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import "../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  const title =
    locale === "fr"
      ? "RAAR — Lifestyle & Événements, sur mesure."
      : "RAAR — Luxury Lifestyle & Events Management";
  return {
    title,
    description: t("tagline"),
    keywords: [
      "luxury concierge",
      "lifestyle management",
      "events management",
      "Dubai concierge",
      "Morocco luxury",
      "VIP travel",
      "RAAR",
    ],
    openGraph: {
      title,
      description: t("tagline"),
      type: "website",
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
        <NextIntlClientProvider>
          <CustomCursor />
          <SmoothScroll>
            <Nav />
            <main className="relative">{children}</main>
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
