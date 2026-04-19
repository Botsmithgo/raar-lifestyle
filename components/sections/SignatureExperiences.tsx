"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { signatureExperiences } from "@/lib/services";
import { RevealLines } from "@/components/RevealText";

export default function SignatureExperiences() {
  return (
    <section
      id="experiences"
      data-surface="dark"
      className="relative bg-ink text-sand py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1560px] px-6 md:px-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="overline mb-6 text-sand/60">Signature Experience</p>
            <RevealLines
              className="display text-5xl md:text-7xl lg:text-8xl"
              lines={[
                <span key="l1">Polo &</span>,
                <span key="l2" className="display-italic text-rose">Racing</span>,
              ]}
            />
          </div>
          <p className="max-w-sm text-sand/70 leading-relaxed">
            With our top partner Capy Mourier, we open the doors to Dubai&rsquo;s
            finest equestrian days — a 48-hour journey through Meydan, the
            desert, and Al Habtoor Polo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
          {signatureExperiences.map((ex, i) => (
            <motion.article
              key={ex.title}
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
                  src={ex.image}
                  alt={ex.title}
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                <div className="absolute left-6 top-6 text-sand overline">
                  0{i + 1}
                </div>
              </div>
              <h3 className="display mt-6 text-3xl md:text-4xl">{ex.title}</h3>
              <p className="mt-4 max-w-sm text-sand/70 leading-relaxed">
                {ex.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
