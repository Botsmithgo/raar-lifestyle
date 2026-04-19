"use client";

import { useTranslations } from "next-intl";
import MirrorWordmark from "@/components/MirrorWordmark";

export default function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer
      data-surface="dark"
      className="relative bg-ink text-sand border-t border-sand/10"
    >
      <div className="mx-auto max-w-[1560px] px-6 pt-16 pb-10 md:px-10">
        <div className="mb-16 flex justify-center overflow-hidden">
          <div className="text-[24vw] font-sans font-medium tracking-[0.02em] leading-[0.8] text-sand/90">
            <MirrorWordmark size="xl" color="sand" />
          </div>
        </div>

        <div className="mb-10 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="display-italic text-sand/80 mb-2 text-xl">
              {t("tagline")}
            </p>
            <p className="text-sand/50 text-sm max-w-sm">{t("description")}</p>
          </div>

          <div className="flex flex-wrap gap-8 overline text-sand/60">
            <a href="#services" className="hover:text-sand transition">
              {tn("services")}
            </a>
            <a href="#experiences" className="hover:text-sand transition">
              {tn("experiences")}
            </a>
            <a href="#founder" className="hover:text-sand transition">
              {tn("founder")}
            </a>
            <a href="#contact" className="hover:text-sand transition">
              {tn("contact")}
            </a>
            <a
              href="https://instagram.com/raarlifestyle"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sand transition"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="hairline opacity-20 my-8" />

        <div className="flex flex-col items-start justify-between gap-4 text-sand/40 text-xs md:flex-row md:items-center">
          <span>{t("copyright", { year })}</span>
          <span>{t("craft")}</span>
        </div>
      </div>
    </footer>
  );
}
