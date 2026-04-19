"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { destinationIds, destinationImages } from "@/lib/services";

/**
 * Single-row destination carousel. Each card carries a place + country caption
 * so it reads as a promise of where RAAR will take you — not just pretty scenery.
 */
export default function Marquee() {
  const t = useTranslations("destinations");
  const doubled = [...destinationIds, ...destinationIds];

  return (
    <section
      data-surface="dark"
      className="relative overflow-hidden bg-ink py-24 md:py-32"
    >
      <div className="mx-auto mb-14 flex max-w-[1560px] items-end justify-between gap-8 px-6 text-sand md:px-10">
        <div>
          <p className="overline mb-4 text-sand/60">{t("eyebrow")}</p>
          <h2 className="display text-4xl md:text-6xl lg:text-7xl">
            {t("headlineBefore")}
            <span className="display-italic text-rose">
              {t("headlineAccent")}
            </span>
            {t("headlineSuffix")}
          </h2>
        </div>
        <p className="hidden max-w-xs text-right text-sand/70 md:block">
          {t("side")}
        </p>
      </div>

      <div className="group/row relative flex overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-ink to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-ink to-transparent md:w-40" />

        <div className="marquee-track flex shrink-0 gap-5 pr-5 group-hover/row:[animation-play-state:paused]">
          {doubled.map((id, i) => (
            <figure
              key={i}
              className="group/card relative h-[48vh] w-[72vw] shrink-0 overflow-hidden rounded-sm md:h-[64vh] md:w-[30vw]"
            >
              <Image
                src={destinationImages[id]}
                alt={`${t(`list.${id}.place`)}, ${t(`list.${id}.country`)}`}
                fill
                className="object-cover transition-transform duration-[1400ms] ease-out group-hover/card:scale-105"
                sizes="(min-width: 768px) 30vw, 72vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />

              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-8">
                <div>
                  <p className="display text-sand text-3xl md:text-4xl">
                    {t(`list.${id}.place`)}
                  </p>
                  <p className="overline mt-2 text-sand/70">
                    {t(`list.${id}.country`)}
                  </p>
                </div>
                <span className="overline text-sand/60">
                  {String((i % destinationIds.length) + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <p className="mt-10 text-center overline text-sand/50">{t("outro")}</p>
    </section>
  );
}
