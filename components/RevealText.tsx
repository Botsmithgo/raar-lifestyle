"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode, ElementType } from "react";

type Props = {
  children: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  stagger?: number;
  by?: "word" | "char";
};

export default function RevealText({
  children,
  className = "",
  as: Tag = "span",
  delay = 0,
  stagger = 0.04,
  by = "word",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  const parts =
    by === "word" ? children.split(" ") : Array.from(children);

  return (
    <Tag ref={ref} className={className}>
      <span className="sr-only">{children}</span>
      <span aria-hidden className="inline-flex flex-wrap">
        {parts.map((part, i) => (
          <span key={i} className="overflow-hidden inline-block leading-[1.05]">
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              animate={inView ? { y: 0 } : { y: "110%" }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: delay + i * stagger,
              }}
            >
              {part}
              {by === "word" && i < parts.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}

type RevealLinesProps = {
  lines: ReactNode[];
  className?: string;
  delay?: number;
  stagger?: number;
  as?: ElementType;
};

export function RevealLines({
  lines,
  className = "",
  delay = 0,
  stagger = 0.08,
  as: Tag = "div",
}: RevealLinesProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden leading-[1.05]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={inView ? { y: 0 } : { y: "110%" }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * stagger,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
