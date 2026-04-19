"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import RevealText, { RevealLines } from "@/components/RevealText";

export default function Welcome() {
  const t = useTranslations("welcome");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-sand py-28 md:py-40"
    >
      <div className="mx-auto grid max-w-[1560px] grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        {/* Left — image */}
        <div className="md:col-span-5 md:col-start-1">
          <motion.div
            style={{ y }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm will-change-transform"
          >
            <Image
              src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1400&q=85&auto=format&fit=crop"
              alt="Aerial of a tranquil turquoise cove"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </motion.div>
        </div>

        {/* Right — copy */}
        <div className="md:col-span-6 md:col-start-7 md:pt-12">
          <p className="overline mb-8 text-ink/60">{t("eyebrow")}</p>

          <RevealLines
            className="display text-4xl md:text-6xl lg:text-7xl mb-10"
            lines={[
              <span key="l1">{t("headlineLine1")}</span>,
              <span key="l2">
                {t("headlineLine2Before")}
                <span className="display-italic text-rose">
                  {t("headlineLine2Accent")}
                </span>
              </span>,
              <span key="l3">{t("headlineLine3")}</span>,
            ]}
          />

          <div className="space-y-6 max-w-xl text-ink/80 leading-relaxed">
            <RevealText
              as="p"
              by="word"
              stagger={0.012}
              className="block"
              delay={0.3}
            >
              {t("body1")}
            </RevealText>
            <RevealText
              as="p"
              by="word"
              stagger={0.01}
              className="block"
              delay={0.5}
            >
              {t("body2")}
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
}
