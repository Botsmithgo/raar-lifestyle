import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0E0E0C",
          color: "#F3EDE3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          fontFamily: "Georgia, serif",
        }}
      >
        R
      </div>
    ),
    { ...size }
  );
}
