import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { INSTITUTE_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${INSTITUTE_INFO.domain}`),
  title: {
    default: "Al-Muntazir Technical Training & Trade Center Kot Addu | Welding, Electrician & Plumber Courses",
    template: "%s | Al-Muntazir Technical Training Center Kot Addu",
  },
  description:
    "Government licensed technical training institute in Kot Addu (Licence H.213918-6, Trade Mark 909294). Comprehensive practical workshop training in Multi Welder, Argon Welder, 6GR, Pipe Fitter, Industrial Electrician, Plumber, and more with instant QR verified certificates.",
  keywords: [
    "Technical Training Center Kot Addu",
    "Al-Muntazir Technical Training",
    "Welding Course Kot Addu",
    "Multi Welder Training",
    "Argon Welder TIG",
    "6GR Pipe Welder",
    "Pipe Fitter Course",
    "Industrial Electrician Kot Addu",
    "Plumbing Training Kot Addu",
    "Technical Trade Center Punjab",
    "Haji Imdad Hussain",
  ],
  authors: [{ name: INSTITUTE_INFO.name, url: `https://${INSTITUTE_INFO.domain}` }],
  creator: INSTITUTE_INFO.owner,
  publisher: INSTITUTE_INFO.name,
  openGraph: {
    title: "Al-Muntazir Technical Training & Trade Center Kot Addu | 12 Technical Trades",
    description:
      "Empowering youth with certified technical skills and hands-on workshop training in Kot Addu. Government Licence H.213918-6. QR-verified trade certificates.",
    url: `https://${INSTITUTE_INFO.domain}`,
    siteName: INSTITUTE_INFO.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Muntazir Technical Training & Trade Center Kot Addu",
    description: "Certified practical training in Welding, Piping, Electrical, and Technical Trades in Kot Addu.",
  },
  alternates: {
    canonical: `https://${INSTITUTE_INFO.domain}`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-navy font-sans antialiased selection:bg-gold selection:text-navy-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
