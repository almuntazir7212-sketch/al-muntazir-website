import type { Metadata, Viewport } from "next";
import { Archivo, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AdmissionModal from "@/components/AdmissionModal";
import { AdmissionProvider } from "@/components/AdmissionContext";
import { INSTITUTE } from "@/data/institute";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B2C4D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(`https://${INSTITUTE.domain}`),
  title: {
    default: "Al-Muntazir Technical Training & Trade Center Kot Addu | Welding, Electrician, Plumber Courses",
    template: "%s | Al-Muntazir Technical Training Center Kot Addu",
  },
  description:
    "Government Licensed (Licence H.213918-6, Trade Mark 909294) technical training institute in Kot Addu. Intensive practical training in Multi Welder, Argon Welder, 6GR Welder, Pipe Fitter, Industrial Electrician, Plumber with online QR-verified certificates.",
  keywords: [
    "Al-Muntazir Technical Training",
    "Kot Addu Technical Center",
    "Welding Course Kot Addu",
    "Multi Welder Training Pakistan",
    "Argon Welder 6GR",
    "Pipe Fitter Course",
    "Industrial Electrician Kot Addu",
    "Technical Trade Certificate Pakistan",
    "Trade Mark 909294",
    "Licence H.213918-6",
  ],
  authors: [{ name: INSTITUTE.owner }],
  creator: INSTITUTE.fullNameWithCity,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://${INSTITUTE.domain}`,
    siteName: INSTITUTE.fullNameWithCity,
    title: "Al-Muntazir Technical Training & Trade Center Kot Addu",
    description:
      "12 technical trades with practical workshop training. Government Licensed H.213918-6, Trade Mark 909294. Every certificate verifies with an online QR scan.",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "Al-Muntazir Technical Training & Trade Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Muntazir Technical Training & Trade Center Kot Addu",
    description: "12 practical technical courses in Kot Addu with QR-verified certificates.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-gold-light selection:text-navy-950">
        <AdmissionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <AdmissionModal />
        </AdmissionProvider>
      </body>
    </html>
  );
}
