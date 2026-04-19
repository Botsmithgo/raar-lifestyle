import type { Metadata } from "next";
import { fraunces, interTight } from "@/lib/fonts";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "RAAR — Luxury Lifestyle & Events Management",
  description:
    "A tailored luxury lifestyle & events management house. From VIP hotel bookings and private dining to bespoke itineraries, yacht charters and staffing — RAAR orchestrates the extraordinary. Based in Dubai, operating worldwide.",
  keywords: [
    "luxury concierge",
    "lifestyle management",
    "events management",
    "Dubai concierge",
    "Morocco luxury",
    "VIP travel",
    "RAAR",
  ],
  openGraph: {
    title: "RAAR — Luxury Lifestyle & Events Management",
    description:
      "Tailored luxury lifestyle & events management — luxury meets convenience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-sand text-ink grain">
        <CustomCursor />
        <SmoothScroll>
          <Nav />
          <main className="relative">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
