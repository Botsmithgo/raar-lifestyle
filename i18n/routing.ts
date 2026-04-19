import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
  // English stays at `/`, French lives at `/fr`. Clean URLs, no /en prefix.
  localePrefix: "as-needed",
});
