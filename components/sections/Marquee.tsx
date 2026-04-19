"use client";

import Image from "next/image";
import { marqueeImages } from "@/lib/services";

export default function Marquee() {
  // Duplicate the list for a seamless loop
  const doubled = [...marqueeImages, ...marqueeImages];

  return (
    <section
      data-surface="dark"
      className="relative overflow-hidden bg-ink py-20 md:py-28"
    >
      <div className="mx-auto mb-14 max-w-[1560px] px-6 md:px-10 flex items-end justify-between text-sand">
        <p className="overline text-sand/60">Destinations</p>
        <p className="max-w-xs text-right text-sand/70">
          A world of trusted partners — from desert retreats to Riviera yachts.
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="marquee-track flex shrink-0 gap-6 pr-6">
          {doubled.map((src, i) => (
            <div
              key={i}
              className="relative h-[40vh] w-[28vw] shrink-0 overflow-hidden rounded-sm md:h-[56vh] md:w-[22vw]"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 768px) 22vw, 40vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second row, slower, opposite-ish */}
      <div className="relative mt-6 flex overflow-hidden">
        <div className="marquee-track-slow flex shrink-0 gap-6 pr-6" style={{ animationDirection: "reverse" }}>
          {doubled.map((src, i) => (
            <div
              key={i}
              className="relative h-[30vh] w-[22vw] shrink-0 overflow-hidden rounded-sm md:h-[40vh] md:w-[16vw]"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 768px) 16vw, 30vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
