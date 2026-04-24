"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { RevealLines } from "@/components/RevealText";
import MagneticButton from "@/components/MagneticButton";

export default function Contact() {
  const t = useTranslations("contact");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") as string) || "";
    const email = (fd.get("email") as string) || "";
    const interest = (fd.get("interest") as string) || "";
    const message = (fd.get("message") as string) || "";

    const subject = encodeURIComponent(
      t("form.mailSubject", { name })
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\n${message}`
    );

    window.location.href = `mailto:asmaa@raarlifestyle.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section
      id="contact"
      data-surface="dark"
      className="relative overflow-hidden bg-ink text-sand py-32 md:py-44"
    >
      <motion.div
        aria-hidden
        initial={{ opacity: 0.15 }}
        animate={{ opacity: [0.1, 0.22, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-rose blur-[200px]"
      />

      <div className="relative mx-auto grid max-w-[1560px] grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="overline mb-8 text-sand/60">{t("eyebrow")}</p>

          <RevealLines
            className="display text-5xl md:text-7xl lg:text-8xl mb-10"
            lines={[
              <span key="l1">{t("headlineLine1")}</span>,
              <span key="l2">
                {t("headlineLine2Before")}
                <span className="display-italic text-rose">
                  {t("headlineLine2Accent")}
                </span>
                {t("headlineLine2After")}
              </span>,
              <span key="l3">{t("headlineLine3")}</span>,
              <span key="l4">{t("headlineLine4")}</span>,
            ]}
          />

          <p className="mb-10 max-w-md text-sand/80 leading-relaxed">
            {t("body")}
          </p>

          <ul className="space-y-4 text-sand/90">
            <li className="flex items-center gap-4">
              <span className="overline w-24 text-sand/50">
                {t("labels.email")}
              </span>
              <a
                href="mailto:asmaa@raarlifestyle.com"
                className="border-b border-sand/20 transition hover:border-sand"
              >
                asmaa@raarlifestyle.com
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="overline w-24 text-sand/50">
                {t("labels.instagram")}
              </span>
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
            <Field name="name" label={t("form.name")} required />
            <Field
              name="email"
              label={t("form.email")}
              type="email"
              required
            />
            <Field name="interest" label={t("form.interest")} />
            <Field
              name="message"
              label={t("form.message")}
              as="textarea"
              rows={4}
            />

            <div className="flex items-center gap-6">
              <MagneticButton
                type="submit"
                className="rounded-full bg-sand px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-ink transition hover:bg-bone"
              >
                {sent ? t("form.submitting") : t("form.submit")}
              </MagneticButton>
              <span className="text-xs text-sand/50 max-w-[260px]">
                {t("form.privacy")}
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
