"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const quotes = [
  {
    text: "Some people want it to happen, some wish it could happen, others make it happen.",
    author: "Michael Jordan",
  },
  {
    text: "If you want something said, ask a man. If you want something done, ask a woman.",
    author: "Margaret Thatcher",
  },
];

export default function Quotes() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Two independent marquee tracks, opposite directions
  const x1 = useTransform(scrollYProgress, [0, 1], ["5%", "-25%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-25%", "5%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-bone py-32 md:py-44"
    >
      <div className="space-y-12 md:space-y-20">
        {quotes.map((q, i) => (
          <motion.div
            key={q.author}
            style={{ x: i === 0 ? x1 : x2 }}
            className="whitespace-nowrap"
          >
            <div className="flex items-center gap-10">
              <RepeatedQuote quote={q} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function RepeatedQuote({ quote }: { quote: (typeof quotes)[number] }) {
  const repeats = 4;
  return (
    <>
      {Array.from({ length: repeats }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-10 pr-10"
          aria-hidden={i > 0 ? true : undefined}
        >
          <span className="display-italic text-5xl md:text-8xl text-ink">
            “{quote.text}”
          </span>
          <span className="display text-2xl md:text-3xl text-rose">
            — {quote.author}
          </span>
          <span className="inline-block h-8 w-8 shrink-0 rounded-full border border-ink/30" />
        </div>
      ))}
    </>
  );
}
