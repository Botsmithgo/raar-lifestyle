"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealLines } from "@/components/RevealText";

export default function Founder() {
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
        {/* Portrait */}
        <div className="md:col-span-5">
          <motion.div
            style={{ y: imgY }}
            className="relative aspect-[3/4] overflow-hidden rounded-sm will-change-transform"
          >
            <Image
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1200&q=85&auto=format&fit=crop"
              alt="Asmaa Hanine, founder of RAAR"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </motion.div>
          <div className="mt-4 flex items-center justify-between text-ink/60">
            <span className="overline">Founder & CEO</span>
            <span className="overline">Dubai — Worldwide</span>
          </div>
        </div>

        {/* Bio */}
        <div className="md:col-span-6 md:col-start-7 md:pt-8">
          <p className="overline mb-8 text-ink/60">The Atelier</p>

          <RevealLines
            className="display text-4xl md:text-6xl lg:text-7xl mb-10"
            lines={[
              <span key="l1">Asmaa Hanine.</span>,
              <span key="l2" className="display-italic text-rose">
                Curator of the extraordinary.
              </span>,
            ]}
          />

          <div className="space-y-6 text-ink/80 leading-relaxed max-w-xl">
            <p>
              Founder and CEO of RAAR — a tailored luxury lifestyle & events
              management company based in Dubai, operating worldwide.
            </p>
            <p>
              After graduating from a top-five business school in Paris in
              International Marketing and Business Development, Asmaa consulted
              with Ernst & Young and Capgemini, working on large-scale projects
              for top-tier clients.
            </p>
            <p>
              Growing up interweaving Western and Eastern values, a passion
              arose within her for travel, culture and art. In that yearning,
              Asmaa has spent her time exploring top destinations abroad —
              curating events, fostering first-class relationships and scouting
              moments that leave her most discerning clients{" "}
              <em className="display-italic">absolutely breathless</em>.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border-b border-ink/30 pb-1 overline hover:border-ink transition"
            >
              Book a private call
              <span className="inline-block h-px w-8 bg-ink" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
