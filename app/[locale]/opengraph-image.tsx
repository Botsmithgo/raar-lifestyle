import { ImageResponse } from "next/og";

export const alt = "RAAR — Luxury Lifestyle & Events Management";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand tokens — keep in sync with app/globals.css and the Tailwind @theme.
const INK = "#0E0E0C";
const SAND = "#F3EDE3";
const ROSE = "#B07A7D";
const GOLD = "#C9A96E";

// Fetch a single Fraunces weight from Google Fonts. Satori only accepts
// TTF / OTF / WOFF — not WOFF2. With no User-Agent header Google's css2
// endpoint defaults to serving a direct .ttf URL.
async function loadFraunces(weight: 400 | 500, italic = false) {
  const italBit = italic ? "1," : "0,";
  const cssUrl = `https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@${italBit}9..144,${weight}&display=swap`;
  const css = await fetch(cssUrl).then((r) => r.text());
  const match = css.match(/src: url\((https:[^)]+\.ttf)\)/);
  if (!match) throw new Error("Could not resolve Fraunces TTF URL");
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isFr = locale === "fr";

  const eyebrow = isFr
    ? "DUBAÏ · MARRAKECH · PARIS · ET AILLEURS"
    : "DUBAI · MARRAKECH · PARIS · WORLDWIDE";
  const tagline = isFr
    ? "Le sur-mesure, tout simplement."
    : "Luxury meets convenience.";
  const category = isFr
    ? "LIFESTYLE & ÉVÉNEMENTS · SUR MESURE"
    : "LUXURY LIFESTYLE & EVENTS MANAGEMENT";

  const [fraunces500, fraunces400Italic] = await Promise.all([
    loadFraunces(500, false),
    loadFraunces(400, true),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: INK,
          color: SAND,
          display: "flex",
          flexDirection: "column",
          padding: "72px 88px",
          fontFamily: "Fraunces",
          position: "relative",
        }}
      >
        {/* Rose bloom top-right — quiet luxury accent */}
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -220,
            width: 640,
            height: 640,
            background: ROSE,
            filter: "blur(180px)",
            opacity: 0.38,
            borderRadius: 9999,
            display: "flex",
          }}
        />

        {/* Top row — eyebrow + est. */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            letterSpacing: "0.3em",
            color: "rgba(243,237,227,0.6)",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          <span>{eyebrow}</span>
          <span>EST. 2021</span>
        </div>

        {/* Wordmark + tagline centered */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 36,
          }}
        >
          <div
            style={{
              fontSize: 260,
              fontWeight: 500,
              letterSpacing: "0.02em",
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
              gap: 28,
            }}
          >
            <span>RA</span>
            <span
              style={{
                color: "rgba(243,237,227,0.35)",
                fontWeight: 300,
              }}
            >
              |
            </span>
            <span>AR</span>
          </div>

          <div
            style={{
              fontSize: 48,
              fontStyle: "italic",
              color: ROSE,
              fontWeight: 400,
              display: "flex",
            }}
          >
            {tagline}
          </div>
        </div>

        {/* Bottom row — category + domain */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            letterSpacing: "0.3em",
            color: "rgba(243,237,227,0.6)",
            textTransform: "uppercase",
          }}
        >
          <span>{category}</span>
          <span style={{ color: GOLD }}>raarlifestyle.com</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Fraunces",
          data: fraunces500,
          style: "normal",
          weight: 500,
        },
        {
          name: "Fraunces",
          data: fraunces400Italic,
          style: "italic",
          weight: 400,
        },
      ],
    }
  );
}
