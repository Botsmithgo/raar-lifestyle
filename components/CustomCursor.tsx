"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Disable on touch devices
    const mm = window.matchMedia("(hover: none), (pointer: coarse)");
    if (mm.matches) return;

    let mx = 0,
      my = 0;
    let rx = 0,
      ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
    };

    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t) return;
      if (
        t.closest("a, button, [data-cursor='hover'], input, textarea, label")
      ) {
        setHover(true);
      }
    };
    const onLeave = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t) return;
      if (
        t.closest("a, button, [data-cursor='hover'], input, textarea, label")
      ) {
        setHover(false);
      }
    };

    const raf = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      id = requestAnimationFrame(raf);
    };
    let id = requestAnimationFrame(raf);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[200] h-1.5 w-1.5 rounded-full bg-rose transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        ref={ringRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[199] rounded-full border border-current transition-[width,height,background-color,opacity,border-color] duration-300 ease-out ${
          visible ? "opacity-70" : "opacity-0"
        } ${hover ? "h-12 w-12 bg-rose/20 border-rose" : "h-8 w-8"}`}
      />
    </>
  );
}
