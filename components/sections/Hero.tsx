"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import MirrorWordmark from "@/components/MirrorWordmark";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  const t = useTranslations("hero");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      data-surface="dark"
      className="relative h-[100svh] w-full overflow-hidden bg-ink text-sand"
    >
      {/* Background — slow Ken Burns */}
      <motion.div
        style={{ y: imgY }}
        className="absolute inset-0 will-change-transform"
      >
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="relative h-full w-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=2400&q=85&auto=format&fit=crop"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
      </motion.div>

      {/* Top eyebrow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-between px-6 pt-24 text-[11px] tracking-[0.3em] text-sand/60 uppercase md:px-10 md:pt-28">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          {t("eyebrowTop")}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 1 }}
          className="hidden md:inline"
        >
          {t("est")}
        </motion.span>
      </div>

      {/* Center content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="overline mb-14 md:mb-20 text-sand/70"
        >
          {t("category")}
        </motion.p>

        <MirrorWordmark size="xl" animated color="sand" className="mb-10" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="display-italic text-sand/90 mb-10 text-balance"
        >
          <span className="text-2xl md:text-4xl">{t("tagline")}</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.9 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton
            as="a"
            href="#contact"
            className="rounded-full bg-sand px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-ink transition hover:bg-bone"
          >
            {t("ctaPrimary")}
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#services"
            className="rounded-full border border-sand/40 px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-sand transition hover:border-sand hover:bg-sand/10"
          >
            {t("ctaSecondary")}
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <span className="overline text-sand/60">{t("scroll")}</span>
        <div className="mx-auto mt-3 h-10 w-px bg-sand/40" />
      </motion.div>
    </section>
  );
}
