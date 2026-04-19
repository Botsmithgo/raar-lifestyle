"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

type Locale = "en" | "fr";

const FLAGS: Record<Locale, string> = {
  en: "🇬🇧",
  fr: "🇫🇷",
};

type Props = {
  tone?: "light" | "dark"; // match the current surface
  className?: string;
};

export default function LanguageToggle({ tone = "light", className = "" }: Props) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("language");
  const [, startTransition] = useTransition();

  const switchTo = (next: Locale) => {
    if (next === locale) return;
    startTransition(() => {
      // Preserve the current path + hash; next-intl rewrites the locale prefix.
      const hash = typeof window !== "undefined" ? window.location.hash : "";
      router.replace(pathname + hash, { locale: next, scroll: false });
    });
  };

  const isLight = tone === "light";
  const base = isLight ? "text-sand/60" : "text-ink/60";
  const active = isLight ? "text-sand" : "text-ink";
  const divider = isLight ? "bg-sand/30" : "bg-ink/30";

  return (
    <div
      aria-label={t("switchTo")}
      className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] ${className}`}
    >
      {(["en", "fr"] as Locale[]).map((l, i) => (
        <span key={l} className="inline-flex items-center">
          {i > 0 && (
            <span
              aria-hidden
              className={`mx-2 inline-block h-3 w-px ${divider}`}
            />
          )}
          <button
            onClick={() => switchTo(l)}
            aria-current={locale === l ? "true" : undefined}
            className={`inline-flex items-center gap-1.5 transition-colors hover:${isLight ? "text-sand" : "text-ink"} ${
              locale === l ? active : base
            }`}
          >
            <span className="text-base leading-none" aria-hidden>
              {FLAGS[l]}
            </span>
            <span>{l}</span>
          </button>
        </span>
      ))}
    </div>
  );
}
