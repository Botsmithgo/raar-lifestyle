"use client";

import {
  ButtonHTMLAttributes,
  ReactNode,
  useRef,
  useCallback,
} from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  strength?: number;
  as?: "button" | "a";
  href?: string;
};

export default function MagneticButton({
  children,
  strength = 0.35,
  className = "",
  as = "button",
  href,
  ...rest
}: Props) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const inner = useRef<HTMLSpanElement>(null);

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      if (inner.current) {
        inner.current.style.transform = `translate(${x * strength * 0.5}px, ${y * strength * 0.5}px)`;
      }
    },
    [strength]
  );

  const onLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
    if (inner.current) inner.current.style.transform = "translate(0,0)";
  }, []);

  if (as === "a" && href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`inline-flex items-center justify-center transition-transform duration-300 ease-out ${className}`}
      >
        <span ref={inner} className="inline-block transition-transform duration-300 ease-out">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-flex items-center justify-center transition-transform duration-300 ease-out ${className}`}
      {...rest}
    >
      <span ref={inner} className="inline-block transition-transform duration-300 ease-out">
        {children}
      </span>
    </button>
  );
}
