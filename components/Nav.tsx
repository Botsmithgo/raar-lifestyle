"use client";

import { useEffect, useState } from "react";
import MirrorWordmark from "./MirrorWordmark";

const links = [
  { label: "Services", href: "#services" },
  { label: "Experiences", href: "#experiences" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(true); // hero is dark
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      // flip contrast based on the section under the nav
      const y = window.scrollY + 40;
      const darkRanges = document.querySelectorAll<HTMLElement>("[data-surface='dark']");
      let dark = false;
      darkRanges.forEach((el) => {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (y >= top && y < bottom) dark = true;
      });
      setOnDark(dark);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const text = onDark ? "text-sand" : "text-ink";
  const bg = scrolled
    ? onDark
      ? "bg-ink/60 backdrop-blur-md"
      : "bg-sand/60 backdrop-blur-md"
    : "bg-transparent";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${bg}`}
      >
        <div
          className={`mx-auto flex max-w-[1560px] items-center justify-between px-6 py-5 md:px-10 ${text}`}
        >
          <a href="#top" className="shrink-0" aria-label="RAAR home">
            <MirrorWordmark size="sm" color={onDark ? "sand" : "ink"} />
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="overline transition-opacity hover:opacity-60"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className={`hidden rounded-full border px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] transition md:inline-flex ${
                onDark
                  ? "border-sand/40 hover:bg-sand hover:text-ink"
                  : "border-ink/30 hover:bg-ink hover:text-sand"
              }`}
            >
              Become a client
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="inline-flex h-10 w-10 items-center justify-center md:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 top-0 h-px w-full bg-current transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-px w-full bg-current transition-opacity ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`absolute left-0 top-[12px] h-px w-full bg-current transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-ink text-sand transition-opacity duration-500 ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 px-8 text-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-serif text-4xl italic"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 rounded-full border border-sand/40 px-6 py-3 text-xs uppercase tracking-[0.2em]"
          >
            Become a client
          </a>
        </div>
      </div>
    </>
  );
}
