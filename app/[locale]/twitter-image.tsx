// Reuse the branded OG card for Twitter's summary_large_image (1200×630 works).
// Binding exports declared inline — star re-exports don't always carry
// `export const` bindings through every bundler pipeline.
export { default } from "./opengraph-image";

export const alt = "RAAR — Luxury Lifestyle & Events Management";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
