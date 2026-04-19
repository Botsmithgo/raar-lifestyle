"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RevealLines } from "@/components/RevealText";
import MagneticButton from "@/components/MagneticButton";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // Build a mailto: with the form contents. No backend needed for v1.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") as string) || "";
    const email = (fd.get("email") as string) || "";
    const phone = (fd.get("phone") as string) || "";
    const interest = (fd.get("interest") as string) || "";
    const message = (fd.get("message") as string) || "";

    const subject = encodeURIComponent(`RAAR enquiry — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterest: ${interest}\n\n${message}`
    );

    window.location.href = `mailto:Asmaah@protonmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section
      id="contact"
      data-surface="dark"
      className="relative overflow-hidden bg-ink text-sand py-32 md:py-44"
    >
      {/* Subtle animated gradient blob */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0.15 }}
        animate={{ opacity: [0.1, 0.22, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-rose blur-[200px]"
      />

      <div className="relative mx-auto grid max-w-[1560px] grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="overline mb-8 text-sand/60">Get in Touch</p>

          <RevealLines
            className="display text-5xl md:text-7xl lg:text-8xl mb-10"
            lines={[
              <>Every request</>,
              <>is{" "}
                <span className="display-italic text-rose">unique</span>.
              </>,
              <>So is</>,
              <>our reply.</>,
            ]}
          />

          <p className="mb-10 max-w-md text-sand/80 leading-relaxed">
            Privacy and flexibility sit at the core of our philosophy. Tell us
            about you — we&rsquo;ll tailor every detail.
          </p>

          <ul className="space-y-4 text-sand/90">
            <li className="flex items-center gap-4">
              <span className="overline w-24 text-sand/50">Call</span>
              <a
                href="tel:+971504202558"
                className="border-b border-sand/20 transition hover:border-sand"
              >
                +971 50 420 2558
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="overline w-24 text-sand/50">WhatsApp</span>
              <a
                href="https://wa.me/33648555506"
                target="_blank"
                rel="noreferrer"
                className="border-b border-sand/20 transition hover:border-sand"
              >
                +33 6 48 55 55 06
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="overline w-24 text-sand/50">Email</span>
              <a
                href="mailto:Asmaah@protonmail.com"
                className="border-b border-sand/20 transition hover:border-sand"
              >
                Asmaah@protonmail.com
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="overline w-24 text-sand/50">Instagram</span>
              <a
                href="https://instagram.com/raarlifestyle"
                target="_blank"
                rel="noreferrer"
                className="border-b border-sand/20 transition hover:border-sand"
              >
                @raarlifestyle
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <form onSubmit={onSubmit} className="space-y-8">
            <Field name="name" label="Your name" required />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Field name="email" label="Email" type="email" required />
              <Field name="phone" label="Phone" type="tel" />
            </div>
            <Field
              name="interest"
              label="What are you interested in? (Hotels, yacht, dining…)"
            />
            <Field
              name="message"
              label="Tell us more"
              as="textarea"
              rows={4}
            />

            <div className="flex items-center gap-6">
              <MagneticButton
                type="submit"
                className="rounded-full bg-sand px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-ink transition hover:bg-bone"
              >
                {sent ? "Opening your mail app…" : "Send enquiry"}
              </MagneticButton>
              <span className="text-xs text-sand/50 max-w-[260px]">
                Your details stay private. We reply within 24 hours.
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea";
  rows?: number;
};

function Field({
  name,
  label,
  type = "text",
  required,
  as = "input",
  rows,
}: FieldProps) {
  const common =
    "w-full bg-transparent border-b border-sand/30 py-3 text-sand placeholder-sand/40 outline-none transition focus:border-sand";
  return (
    <label className="block">
      <span className="overline mb-3 block text-sand/60">
        {label}
        {required && <span className="ml-1 text-rose">*</span>}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={rows ?? 3}
          required={required}
          className={common}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className={common}
        />
      )}
    </label>
  );
}
