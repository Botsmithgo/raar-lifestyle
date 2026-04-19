"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { itineraryMomentIds, itineraryImages } from "@/lib/services";
import { RevealLines } from "@/components/RevealText";

export default function SignatureExperiences() {
  const t = useTranslations("itinerary");

  return (
    <section
      id="experiences"
      data-surface="dark"
      className="relative bg-ink text-sand py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1560px] px-6 md:px-10">
        <div className="mb-20 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="overline mb-6 text-sand/60">{t("eyebrow")}</p>
            <RevealLines
              className="display text-5xl md:text-7xl lg:text-8xl"
              lines={[
                <span key="l1">{t("headlineLine1")}</span>,
                <span key="l2" className="display-italic text-rose">
                  {t("headlineLine2")}
                </span>,
              ]}
            />
          </div>
          <p className="max-w-sm text-sand/70 leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {itineraryMomentIds.map((id, i) => (
            <motion.article
              key={id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.15,
              }}
              viewport={{ once: true, margin: "-10%" }}
              className="group relative flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src={itineraryImages[id]}
                  alt={t(`moments.${id}.title`)}
                  fill
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
                  <span className="overline text-sand/80">
                    {String(i + 1).padStart(2, "0")} —{" "}
                    {t(`moments.${id}.label`)}
                  </span>
                </div>
              </div>

              <div className="mt-6 md:mt-8">
                <h3 className="display text-3xl md:text-4xl">
                  {t(`moments.${id}.title`)}
                </h3>
                <p className="display-italic mt-3 text-rose/90 text-lg md:text-xl">
                  {t(`moments.${id}.line`)}
                </p>
                <p className="mt-5 max-w-sm text-sand/75 leading-relaxed">
                  {t(`moments.${id}.description`)}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md display-italic text-sand/70 text-xl md:text-2xl">
            {t("outro")}
          </p>
          <a
            href="#contact"
            className="overline inline-flex items-center gap-3 border-b border-sand/30 pb-1 transition hover:border-sand"
          >
            {t("cta")}
            <span className="inline-block h-px w-8 bg-sand" />
          </a>
        </div>
      </div>
    </section>
  );
}
