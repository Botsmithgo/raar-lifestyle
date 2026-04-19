"use client";

import { motion } from "framer-motion";

type Props = {
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  className?: string;
  color?: "ink" | "sand" | "bone";
};

const sizeMap = {
  sm: "text-2xl",
  md: "text-4xl",
  lg: "text-7xl md:text-8xl",
  xl: "text-[18vw] md:text-[22vw] leading-none",
};

/**
 * The RAAR wordmark: "RA | AR" — where the second "AR" is horizontally mirrored.
 * When `animated`, the two halves start apart and slide together through the pipe.
 */
export default function MirrorWordmark({
  size = "md",
  animated = false,
  className = "",
  color = "ink",
}: Props) {
  const colorClass =
    color === "ink" ? "text-ink" : color === "sand" ? "text-sand" : "text-bone";

  const sizeClass = sizeMap[size];

  if (!animated) {
    return (
      <span
        aria-label="RAAR"
        className={`inline-flex items-center gap-[0.18em] font-sans font-medium tracking-[0.02em] ${sizeClass} ${colorClass} ${className}`}
      >
        <span>RA</span>
        <span className="opacity-40 font-light">|</span>
        <span style={{ transform: "scaleX(-1)" }} className="inline-block">
          RA
        </span>
      </span>
    );
  }

  return (
    <span
      aria-label="RAAR"
      className={`inline-flex items-center gap-[0.18em] font-sans font-medium tracking-[0.02em] ${sizeClass} ${colorClass} ${className}`}
    >
      <motion.span
        initial={{ x: "-25vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        RA
      </motion.span>
      <motion.span
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 0.4, scaleY: 1 }}
        transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
        className="font-light origin-center"
      >
        |
      </motion.span>
      <motion.span
        initial={{ x: "25vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        style={{ transform: "scaleX(-1)" }}
        className="inline-block"
      >
        RA
      </motion.span>
    </span>
  );
}
