"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { RevealLines } from "@/components/RevealText";

export default function Quotes() {
  const t = useTranslations("quotes");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const markY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const markRotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-bone py-32 md:py-48"
    >
      <motion.span
        aria-hidden
        style={{ y: markY, rotate: markRotate }}
        className="display-italic pointer-events-none absolute -left-4 top-10 text-[34vw] leading-none text-rose/20 md:-left-8 md:top-12 md:text-[28vw]"
      >
        “
      </motion.span>

      <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
        <p className="overline mb-10 text-ink/60">{t("eyebrow")}</p>

        <RevealLines
          className="display-italic text-ink text-balance text-3xl leading-[1.15] md:text-5xl lg:text-6xl"
          stagger={0.12}
          lines={[
            <span key="l1">{t("line1")}</span>,
            <span key="l2">{t("line2")}</span>,
            <span key="l3">
              {t("line3Before")}
              <span className="display text-rose not-italic">
                {t("line3Accent")}
              </span>
              {t("line3After")}
            </span>,
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex items-center justify-center gap-4 md:mt-16"
        >
          <span className="inline-block h-px w-10 bg-ink/30 md:w-16" />
          <span className="overline text-ink/70">{t("author")}</span>
          <span className="inline-block h-px w-10 bg-ink/30 md:w-16" />
        </motion.div>
      </div>
    </section>
  );
}
