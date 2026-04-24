import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RAAR Lifestyle",
    short_name: "RAAR",
    description:
      "A tailored luxury lifestyle & events management atelier based in Dubai.",
    start_url: "/",
    display: "standalone",
    background_color: "#F3EDE3",
    theme_color: "#0E0E0C",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
