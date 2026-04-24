import type { MetadataRoute } from "next";

const SITE_URL = "https://www.raarlifestyle.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = {
    en: `${SITE_URL}/`,
    fr: `${SITE_URL}/fr`,
    "x-default": `${SITE_URL}/`,
  };

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}/fr`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages },
    },
  ];
}
