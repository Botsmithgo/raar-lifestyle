"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { RevealLines } from "@/components/RevealText";

export default function Founder() {
  const t = useTranslations("founder");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      id="founder"
      ref={ref}
      className="relative overflow-hidden bg-sand py-32 md:py-48"
    >
      <div className="mx-auto grid max-w-[1560px] grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <motion.div
            style={{ y: imgY }}
            className="relative aspect-[3/4] overflow-hidden rounded-sm will-change-transform"
          >
            <Image
              src="/images/founder-asmaa.jpg"
              alt="Asmaa Hanine, founder of RAAR"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </motion.div>
          <div className="mt-4 flex items-center justify-between text-ink/60">
            <span className="overline">{t("role")}</span>
            <span className="overline">{t("location")}</span>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7 md:pt-8">
          <p className="overline mb-8 text-ink/60">{t("eyebrow")}</p>

          <RevealLines
            as="h2"
            className="display text-4xl md:text-6xl lg:text-7xl mb-10 font-normal"
            lines={[
              <span key="l1">{t("headlineLine1")}</span>,
              <span key="l2" className="display-italic text-rose">
                {t("headlineLine2")}
              </span>,
            ]}
          />

          <div className="space-y-6 text-ink/80 leading-relaxed max-w-xl">
            <p>{t("body1")}</p>
            <p>{t("body2")}</p>
            <p>
              {t("body3Before")}
              <em className="display-italic">{t("body3Accent")}</em>
              {t("body3Suffix")}
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border-b border-ink/30 pb-1 overline hover:border-ink transition"
            >
              {t("cta")}
              <span className="inline-block h-px w-8 bg-ink" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
