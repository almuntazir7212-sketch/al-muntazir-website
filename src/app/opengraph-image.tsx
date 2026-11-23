import { ImageResponse } from "next/og";
import { INSTITUTE_INFO } from "@/lib/constants";

export const runtime = "nodejs";

export const alt = "Al-Muntazir Technical Training & Trade Center Kot Addu";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#0B2C4D",
          padding: "60px 80px",
          border: "12px solid #B08D2A",
          boxSizing: "border-box",
        }}
      >
        {/* Top Tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#B08D2A",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <span>Govt. Licence No: {INSTITUTE_INFO.licenceNo}</span>
          <span>•</span>
          <span>Trade Mark No: {INSTITUTE_INFO.tradeMarkNo}</span>
        </div>

        {/* Center Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 52,
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.2,
              marginBottom: 16,
              fontFamily: "serif",
            }}
          >
            {INSTITUTE_INFO.name}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#B08D2A",
              fontWeight: 600,
            }}
          >
            12 Certified Technical Trade Courses • Practical Workshop Training
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#E2E8F0",
              marginTop: 14,
            }}
          >
            Kot Addu, Punjab, Pakistan • QR Verified Certifications
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #1E3A5F",
            paddingTop: 24,
            color: "#CBD5E1",
            fontSize: 20,
          }}
        >
          <span>Phone: {INSTITUTE_INFO.phone}</span>
          <span style={{ color: "#22C55E" }}>WhatsApp: {INSTITUTE_INFO.whatsapp1}</span>
          <span style={{ color: "#B08D2A" }}>{INSTITUTE_INFO.domain}</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
