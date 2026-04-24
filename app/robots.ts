import type { MetadataRoute } from "next";

const SITE_URL = "https://www.raarlifestyle.com";

export default function robots(): MetadataRoute.Robots {
  // Explicit allow-list for AI crawlers — wildcard alone isn't always honoured
  // by user agents that special-case themselves (GPTBot, ClaudeBot, etc.).
  const allowAll = { allow: "/", disallow: "" };

  return {
    rules: [
      { userAgent: "*", ...allowAll },
      { userAgent: "Googlebot", ...allowAll },
      { userAgent: "Google-Extended", ...allowAll },
      { userAgent: "GPTBot", ...allowAll },
      { userAgent: "ChatGPT-User", ...allowAll },
      { userAgent: "OAI-SearchBot", ...allowAll },
      { userAgent: "ClaudeBot", ...allowAll },
      { userAgent: "Claude-Web", ...allowAll },
      { userAgent: "anthropic-ai", ...allowAll },
      { userAgent: "PerplexityBot", ...allowAll },
      { userAgent: "Perplexity-User", ...allowAll },
      { userAgent: "CCBot", ...allowAll },
      { userAgent: "cohere-ai", ...allowAll },
      { userAgent: "Applebot", ...allowAll },
      { userAgent: "Applebot-Extended", ...allowAll },
      { userAgent: "Bytespider", ...allowAll },
      { userAgent: "Meta-ExternalAgent", ...allowAll },
      { userAgent: "FacebookBot", ...allowAll },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
