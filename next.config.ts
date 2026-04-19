import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve remote Unsplash URLs directly — they already handle sizing via query params,
    // and this avoids slow/failing server-side proxy fetches during dev.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
};

export default nextConfig;
