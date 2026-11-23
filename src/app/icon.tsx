import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "#0B2C4D",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#B08D2A",
          fontWeight: 800,
          borderRadius: "50%",
          border: "2px solid #B08D2A",
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  );
}
