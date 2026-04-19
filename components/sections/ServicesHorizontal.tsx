"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { serviceIds, serviceImages } from "@/lib/services";
import { RevealLines } from "@/components/RevealText";

export default function ServicesHorizontal() {
  const t = useTranslations("services");
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-740vw"]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-bone"
      style={{ height: `${(serviceIds.length + 1) * 80}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex h-full items-center will-change-transform"
        >
          {/* Intro card */}
          <div className="relative flex h-full w-screen shrink-0 flex-col justify-end px-10 pb-20 md:px-24 md:pb-28">
            <p className="overline mb-6 text-ink/60">{t("eyebrow")}</p>
            <RevealLines
              className="display text-5xl md:text-7xl lg:text-8xl max-w-4xl"
              lines={[
                <span key="l1">{t("headlineLine1")}</span>,
                <span key="l2">
                  {t("headlineLine2Before")}
                  <span className="display-italic text-rose">
                    {t("headlineLine2Accent")}
                  </span>
                  {t("headlineSuffix")}
                </span>,
              ]}
            />
            <p className="mt-8 max-w-md text-ink/70">{t("intro")}</p>
          </div>

          {serviceIds.map((id, i) => (
            <article
              key={id}
              data-cursor="hover"
              className="group relative mx-4 flex h-[82%] w-[70vw] shrink-0 overflow-hidden rounded-sm md:w-[62vw] lg:w-[52vw]"
            >
              <div className="relative h-full w-full">
                <Image
                  src={serviceImages[id]}
                  alt={t(`list.${id}.title`)}
                  fill
                  sizes="(min-width: 768px) 60vw, 80vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-between p-8 text-sand md:p-12">
                <div className="flex items-start justify-between">
                  <span className="overline text-sand/70">
                    {t(`list.${id}.eyebrow`)}
                  </span>
                  <span className="display text-2xl opacity-70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <h3 className="display text-4xl md:text-6xl mb-4">
                    {t(`list.${id}.title`)}
                  </h3>
                  <p className="max-w-md text-sand/85 leading-relaxed">
                    {t(`list.${id}.description`)}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-3 overline text-sand/80 transition-opacity group-hover:opacity-60">
                    <span>{t("enquire")}</span>
                    <span className="inline-block h-px w-10 bg-sand/80 transition-all group-hover:w-20" />
                  </div>
                </div>
              </div>
            </article>
          ))}

          <div className="h-full w-[20vw] shrink-0" />
        </motion.div>

        <div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 text-ink/60">
          <span className="overline">{t("progress")}</span>
          <ProgressDots progress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
}

function ProgressDots({
  progress,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const width = useTransform(progress, [0, 1], ["0%", "100%"]);
  return (
    <div className="relative h-px w-40 bg-ink/20">
      <motion.div style={{ width }} className="absolute left-0 top-0 h-px bg-ink" />
    </div>
  );
}
