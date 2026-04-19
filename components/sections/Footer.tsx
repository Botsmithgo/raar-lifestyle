"use client";

import MirrorWordmark from "@/components/MirrorWordmark";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      data-surface="dark"
      className="relative bg-ink text-sand border-t border-sand/10"
    >
      <div className="mx-auto max-w-[1560px] px-6 pt-16 pb-10 md:px-10">
        {/* Giant wordmark */}
        <div className="mb-16 flex justify-center overflow-hidden">
          <div className="text-[24vw] font-sans font-medium tracking-[0.02em] leading-[0.8] text-sand/90">
            <MirrorWordmark size="xl" color="sand" />
          </div>
        </div>

        <div className="mb-10 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="display-italic text-sand/80 mb-2 text-xl">
              Luxury meets convenience.
            </p>
            <p className="text-sand/50 text-sm max-w-sm">
              RAAR — a tailored luxury lifestyle & events management atelier.
              Dubai · Marrakech · Paris · worldwide.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 overline text-sand/60">
            <a href="#services" className="hover:text-sand transition">
              Services
            </a>
            <a href="#experiences" className="hover:text-sand transition">
              Experiences
            </a>
            <a href="#founder" className="hover:text-sand transition">
              Founder
            </a>
            <a href="#contact" className="hover:text-sand transition">
              Contact
            </a>
            <a
              href="https://instagram.com/raarlifestyle"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sand transition"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="hairline opacity-20 my-8" />

        <div className="flex flex-col items-start justify-between gap-4 text-sand/40 text-xs md:flex-row md:items-center">
          <span>© {year} RAAR Lifestyle. All rights reserved.</span>
          <span>Crafted with obsessive care.</span>
        </div>
      </div>
    </footer>
  );
}
