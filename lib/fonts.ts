import { Fraunces, Inter_Tight } from "next/font/google";

// Editorial serif (Canela stand-in) — used for display headlines, italic pull-quotes.
// Variable font: using axes requires weight to be omitted/variable.
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif-raar",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
});

// Clean modern sans for UI, nav, body
export const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans-raar",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});
