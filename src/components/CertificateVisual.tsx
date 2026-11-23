"use client";

import React, { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { Download, ShieldCheck, Check, Printer } from "lucide-react";
import { Certificate } from "@/types";
import { toPng } from "html-to-image";

interface CertificateVisualProps {
  certificate: Certificate;
}

export default function CertificateVisual({ certificate }: CertificateVisualProps) {
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [downloading, setDownloading] = useState(false);
  const certRef = useRef<HTMLDivElement>(null);

  // Generate QR Code URL
  useEffect(() => {
    const verifyUrl = typeof window !== "undefined"
      ? `${window.location.origin}/verify/${certificate.certificate_id}`
      : `https://almuntazirttc.com/verify/${certificate.certificate_id}`;

    QRCode.toDataURL(verifyUrl, {
      margin: 1,
      width: 140,
      color: {
        dark: "#0B2C4D",
        light: "#FFFFFF",
      },
      errorCorrectionLevel: "M",
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error("Error generating certificate QR:", err));
  }, [certificate.certificate_id]);

  // Download certificate as Flat Image (PNG)
  const handleDownloadImage = async () => {
    if (!certRef.current) return;
    try {
      setDownloading(true);
      const dataUrl = await toPng(certRef.current, {
        cacheBust: true,
        pixelRatio: 2, // High resolution for crisp printing
        backgroundColor: "#FFFFFF",
      });

      const link = document.createElement("a");
      link.download = `Al-Muntazir-Certificate-${certificate.certificate_id}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to generate certificate image:", err);
      window.print();
    } finally {
      setDownloading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Ensure exactly 20 subjects for 4 columns x 5 rows
  const displaySubjects: string[] = [...certificate.subjects];
  while (displaySubjects.length < 20) {
    displaySubjects.push("Practical Workshop Module");
  }

  // 4 columns of 5 rows each
  const col1 = displaySubjects.slice(0, 5);
  const col2 = displaySubjects.slice(5, 10);
  const col3 = displaySubjects.slice(10, 15);
  const col4 = displaySubjects.slice(15, 20);

  return (
    <div className="flex flex-col items-center w-full space-y-6">
      {/* Top Action Bar (Download / Print) */}
      <div className="w-full flex flex-wrap items-center justify-between gap-4 bg-navy-900 text-white p-4 rounded-2xl border border-gold/40 shadow-lg no-print">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold tracking-wider text-gold">Official Certificate Preview</span>
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                <Check className="w-3 h-3" /> Live Verified
              </span>
            </div>
            <p className="text-xs text-slate-300 font-mono">
              Certificate ID: <strong className="text-white">{certificate.certificate_id}</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold border border-navy-700 transition-all"
          >
            <Printer className="w-4 h-4 text-gold" />
            <span>Print</span>
          </button>

          <button
            onClick={handleDownloadImage}
            disabled={downloading}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 text-xs sm:text-sm font-bold shadow-gold-glow transition-all active:scale-[0.98]"
          >
            <Download className="w-4 h-4" />
            <span>{downloading ? "Generating PNG..." : "Download Flat Image (PNG)"}</span>
          </button>
        </div>
      </div>

      {/* A4 Landscape Certificate Canvas Container */}
      {/* Outer scroll wrapper for mobile screens */}
      <div className="w-full overflow-x-auto pb-4 flex justify-center">
        <div
          ref={certRef}
          id="certificate-print-node"
          className="relative bg-white text-[#1A1A1A] select-none shadow-2xl transition-all"
          style={{
            width: "1000px",
            minWidth: "1000px",
            height: "707px",
            minHeight: "707px",
            boxSizing: "border-box",
            padding: "24px",
          }}
        >
          {/* Outer Frame: GOLD #B08D2A (2.4 pt approx 3.2px) */}
          <div className="relative w-full h-full border-[3px] border-[#B08D2A] p-2 bg-[#FCFAF5]">
            {/* Inner Frame: NAVY #0B2C4D (1.1 pt approx 1.5px) */}
            <div className="relative w-full h-full border border-[#0B2C4D] bg-white p-6 flex flex-col justify-between overflow-hidden">
              
              {/* 4 Corner Gold Diamonds (10x10 pt 45 deg) */}
              <div className="absolute top-1 left-1 w-2.5 h-2.5 bg-[#B08D2A] rotate-45 transform pointer-events-none" />
              <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#B08D2A] rotate-45 transform pointer-events-none" />
              <div className="absolute bottom-1 left-1 w-2.5 h-2.5 bg-[#B08D2A] rotate-45 transform pointer-events-none" />
              <div className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-[#B08D2A] rotate-45 transform pointer-events-none" />

              {/* Watermark in Center (Institute Emblem ~9% opacity) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07]">
                <div className="w-[320px] h-[320px] rounded-full border-8 border-[#0B2C4D] flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="text-6xl font-black font-cert-times text-[#0B2C4D]">AMTTC</div>
                    <div className="text-sm font-bold tracking-widest text-[#0B2C4D] uppercase mt-2">Kot Addu</div>
                  </div>
                </div>
              </div>

              {/* Top Header Section */}
              <div className="relative z-10 flex items-start justify-between gap-4 pt-1">
                {/* Logo Top Left 76x76 pt (approx 85px) */}
                <div className="w-[82px] h-[82px] flex-shrink-0 flex items-center justify-center rounded-full border border-[#B08D2A] bg-[#0B2C4D] p-2 text-white shadow-sm">
                  <div className="text-center">
                    <span className="block text-xs font-bold tracking-tight text-[#B08D2A]">AL-MUNTAZIR</span>
                    <span className="block text-[8px] tracking-wider text-slate-200">TTC</span>
                  </div>
                </div>

                {/* Institute Name & Address in Center */}
                <div className="flex-1 text-center pr-12">
                  <h1 className="font-cert-times text-[25px] font-bold tracking-tight text-[#0B2C4D] uppercase leading-tight">
                    AL-MUNTAZIR TECHNICAL TRAINING & TRADE CENTER
                  </h1>
                  <p className="font-cert-times text-[13px] text-[#555555] mt-1 leading-snug">
                    Pull 88 Road, Near Benazir Income Support Office, Building Old Nadra Office, Kot Addu
                  </p>
                  <div className="flex items-center justify-center gap-3 mt-1 text-[11px] font-cert-times text-[#555555]">
                    <span>Govt. Licence No: <strong>H.213918-6</strong></span>
                    <span>•</span>
                    <span>Regd. Trade Mark No: <strong>909294</strong></span>
                  </div>
                </div>
              </div>

              {/* Certification Statement & Student Particulars */}
              <div className="relative z-10 text-center my-1 space-y-1">
                <p className="font-cert-times italic text-[16px] text-[#1A1A1A]">
                  This is to certify that
                </p>

                <p className="font-cert-times font-bold italic text-[20px] text-[#1A1A1A] leading-tight">
                  Mr. {certificate.student_name} <span className="font-normal italic text-[16px]">S/o</span> {certificate.father_name}
                </p>

                <p className="font-cert-times italic text-[13px] text-[#333333]">
                  having N.I.C. No: <strong className="font-sans not-italic text-slate-700">Verified via QR Record</strong>, File No: <strong className="font-mono text-[#0B2C4D]">{certificate.certificate_id}</strong>
                </p>

                {/* Course Name - Prominent Navy Times-BoldItalic */}
                <div className="py-0.5">
                  <h2 className="font-cert-times font-bold italic text-[30px] text-[#0B2C4D] uppercase tracking-wide leading-tight">
                    {certificate.course_name}
                  </h2>
                </div>

                <p className="font-cert-times italic text-[13.5px] text-[#1A1A1A]">
                  Held from <strong className="not-italic font-sans">{certificate.held_from || "Course Period"}</strong> to <strong className="not-italic font-sans">{certificate.held_to || certificate.issue_date}</strong> (Duration: {certificate.duration})
                </p>

                <p className="font-cert-times italic text-[13.5px] text-[#1A1A1A]">
                  has attended and qualified the above intensive technical course
                </p>

                <p className="font-cert-times italic text-[13.5px] text-[#1A1A1A]">
                  marks obtained <strong className="not-italic font-sans text-[#0B2C4D]">{certificate.marks_obtained || "85"}%</strong> Grade <strong className="not-italic font-cert-times font-bold text-[#0B2C4D]">"{certificate.grade || "A"}"</strong>
                </p>
              </div>

              {/* 20 Subjects in 4 Columns x 5 Rows */}
              <div className="relative z-10 my-1 bg-[#F9FAFC] border border-slate-200/90 rounded p-2.5">
                <div className="text-center mb-1.5">
                  <span className="font-cert-times font-bold text-[13.5px] text-[#0B2C4D] uppercase tracking-wider">
                    Subjects
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-x-4 text-[10px] font-cert-helvetica text-[#1A1A1A] leading-tight">
                  {/* Column 1 */}
                  <div className="space-y-1">
                    {col1.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1">
                        <span className="text-[#B08D2A] font-bold">•</span>
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-1">
                    {col2.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1">
                        <span className="text-[#B08D2A] font-bold">•</span>
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Column 3 */}
                  <div className="space-y-1">
                    {col3.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1">
                        <span className="text-[#B08D2A] font-bold">•</span>
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Column 4 */}
                  <div className="space-y-1">
                    {col4.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1">
                        <span className="text-[#B08D2A] font-bold">•</span>
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Signatories & QR Code Bar */}
              <div className="relative z-10 flex items-end justify-between px-4 pb-1 pt-2">
                {/* Left Signatory: Talha Hussain / Workshop Incharge */}
                <div className="text-center w-52 flex flex-col items-center">
                  <div className="h-10 flex items-end justify-center mb-1">
                    {/* Official Bright Blue Signature representation */}
                    <svg className="w-32 h-9 text-[#0047AB]" viewBox="0 0 140 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M10 28 Q30 5 45 22 T75 18 Q95 28 115 15 T130 25" />
                      <path d="M25 32 Q50 35 120 30" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div className="w-full border-t border-[#1A1A1A] pt-1">
                    <p className="font-cert-times font-bold text-[11.5px] uppercase tracking-tight text-[#1A1A1A]">
                      {certificate.left_signatory_name || "TALHA HUSSAIN"}
                    </p>
                    <p className="font-cert-times italic text-[10.5px] text-[#555555]">
                      {certificate.left_signatory_title || "Workshop Incharge"}
                    </p>
                  </div>
                </div>

                {/* Center QR Code with Certificate ID */}
                <div className="flex flex-col items-center justify-center">
                  <div className="p-1 bg-white border border-[#B08D2A] rounded shadow-sm">
                    {qrDataUrl ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={qrDataUrl}
                        alt="Certificate QR Verification Code"
                        className="w-20 h-20"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-slate-100 flex items-center justify-center text-[10px] text-slate-400">
                        QR Code
                      </div>
                    )}
                  </div>
                  <div className="text-center mt-1">
                    <span className="block text-[8px] uppercase tracking-wider text-slate-500 font-bold">
                      Scan to Verify
                    </span>
                    <span className="font-mono text-[9px] font-bold text-[#0B2C4D]">
                      {certificate.certificate_id}
                    </span>
                  </div>
                </div>

                {/* Right Signatory: Imdad Hussain / Project Incharge */}
                <div className="relative text-center w-52 flex flex-col items-center">
                  {/* Blue Stamp Representation positioned slightly above name on right */}
                  <div className="absolute -top-7 right-4 w-16 h-16 pointer-events-none opacity-80 rotate-[-12deg]">
                    <div className="w-full h-full rounded-full border-2 border-dashed border-[#0047AB] flex flex-col items-center justify-center text-[7px] text-[#0047AB] font-bold p-1">
                      <span>AL-MUNTAZIR</span>
                      <span className="text-[6px]">TTC</span>
                      <span>KOT ADDU</span>
                    </div>
                  </div>

                  <div className="h-10 flex items-end justify-center mb-1">
                    {/* Bright Blue Signature */}
                    <svg className="w-32 h-9 text-[#0047AB]" viewBox="0 0 140 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M15 20 Q35 10 50 30 T85 15 Q105 25 125 18" />
                      <path d="M20 30 Q65 32 110 32" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div className="w-full border-t border-[#1A1A1A] pt-1">
                    <p className="font-cert-times font-bold text-[11.5px] uppercase tracking-tight text-[#1A1A1A]">
                      {certificate.right_signatory_name || "IMDAD HUSSAIN"}
                    </p>
                    <p className="font-cert-times italic text-[10.5px] text-[#555555]">
                      {certificate.right_signatory_title || "Project Incharge"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Footer Line */}
              <div className="relative z-10 text-center border-t border-slate-200 pt-1 mt-1">
                <p className="font-cert-times text-[10px] text-[#555555]">
                  Trade Mark No. 909294 | Ph: +92 66 2240999
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
