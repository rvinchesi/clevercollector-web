import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "CleverCollector — 250,000+ curated blogs and video for collectors";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(165deg, #0A1628 0%, #000000 55%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#B8872A",
          }}
        />
        <p
          style={{
            margin: 0,
            fontSize: 52,
            fontWeight: 900,
            letterSpacing: "0.12em",
            color: "#ffffff",
            textShadow: "2px 2px 0 #000",
          }}
        >
          CLEVER
        </p>
        <p
          style={{
            margin: 0,
            marginTop: 4,
            fontSize: 52,
            fontWeight: 900,
            letterSpacing: "0.12em",
            color: "#B8872A",
            textShadow: "2px 2px 0 #000",
          }}
        >
          COLLECTOR
        </p>
        <p
          style={{
            marginTop: 36,
            fontSize: 26,
            color: "rgba(255,255,255,0.85)",
            textAlign: "center",
            maxWidth: 880,
            lineHeight: 1.45,
          }}
        >
          250,000+ curated blogs & video, forums, and community — free on iOS.
        </p>
      </div>
    ),
    { ...size }
  );
}
