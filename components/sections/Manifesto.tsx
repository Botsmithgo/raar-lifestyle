"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealLines } from "@/components/RevealText";

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      data-surface="dark"
      className="relative overflow-hidden bg-ink text-sand py-32 md:py-48"
    >
      <div className="mx-auto grid max-w-[1560px] grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-6">
          <p className="overline mb-8 text-sand/60">Why RAAR</p>

          <RevealLines
            className="display text-4xl md:text-6xl lg:text-7xl mb-10"
            lines={[
              <>We take great</>,
              <>
                pride in{" "}
                <span className="display-italic text-rose">authentic</span>
              </>,
              <>& inspiring</>,
              <>experiences.</>,
            ]}
          />

          <div className="max-w-lg space-y-6 text-sand/70 leading-relaxed">
            <p>
              Our international concierge specialists cultivate long-lasting
              relationships with clients and partners around the world — always
              prioritising quality over quantity.
            </p>
            <p>
              Allow our dedicated team and exclusive partners to take care of
              every painstaking detail with{" "}
              <em className="display-italic text-sand">
                luxurious style and personalised flare.
              </em>
            </p>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6">
            {[
              ["24/7", "Chauffeurs & security"],
              ["30+", "Countries covered"],
              ["1:1", "Personal concierge"],
            ].map(([big, small]) => (
              <div key={small} className="flex items-baseline gap-3">
                <span className="display text-3xl text-sand">{big}</span>
                <span className="overline text-sand/50">{small}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <motion.div
            style={{ y: imgY }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm will-change-transform"
          >
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=85&auto=format&fit=crop"
              alt="Riad courtyard with reflective pool"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink/30" />
          </motion.div>
          <div className="mt-4 flex items-center justify-between text-sand/50">
            <span className="overline">01 / Private Dining</span>
            <span className="overline">Dubai</span>
          </div>
        </div>
      </div>
    </section>
  );
}
