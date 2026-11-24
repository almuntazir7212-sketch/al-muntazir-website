"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import QRCode from "qrcode";
import { Download, Printer, CheckCircle2, ZoomIn } from "lucide-react";
import { INSTITUTE } from "@/data/institute";
import { CertificateRecord } from "@/lib/supabase";

interface Props {
  certificate: CertificateRecord;
}

export default function CertificateRenderer({ certificate }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(true);

  // A4 Landscape Print Dimensions at 300 DPI: 3508 x 2480 px
  const CANVAS_WIDTH = 3508;
  const CANVAS_HEIGHT = 2480;

  const generateCertificateImage = useCallback(async () => {
    setIsGenerating(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Scale factor from pt (841.89 x 595.28) to canvas px (3508 x 2480)
    const scale = CANVAS_WIDTH / 841.89;

    // 1. Clean White Background
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // 2. Double Border
    // Outer GOLD Frame: #B08D2A, 2.4 pt, margin 26 pt
    const outerMargin = 26 * scale;
    ctx.strokeStyle = "#B08D2A";
    ctx.lineWidth = 2.4 * scale;
    ctx.strokeRect(
      outerMargin,
      outerMargin,
      CANVAS_WIDTH - outerMargin * 2,
      CANVAS_HEIGHT - outerMargin * 2
    );

    // Inner NAVY Frame: #0B2C4D, 1.1 pt, margin 36 pt
    const innerMargin = 36 * scale;
    ctx.strokeStyle = "#0B2C4D";
    ctx.lineWidth = 1.1 * scale;
    ctx.strokeRect(
      innerMargin,
      innerMargin,
      CANVAS_WIDTH - innerMargin * 2,
      CANVAS_HEIGHT - innerMargin * 2
    );

    // 4 Corner Gold Diamonds (10x10 pt rotated 45 deg) on Inner Frame corners
    const diamondSize = 10 * scale;
    const drawDiamond = (cx: number, cy: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate((45 * Math.PI) / 180);
      ctx.fillStyle = "#B08D2A";
      ctx.fillRect(-diamondSize / 2, -diamondSize / 2, diamondSize, diamondSize);
      ctx.restore();
    };

    drawDiamond(innerMargin, innerMargin);
    drawDiamond(CANVAS_WIDTH - innerMargin, innerMargin);
    drawDiamond(innerMargin, CANVAS_HEIGHT - innerMargin);
    drawDiamond(CANVAS_WIDTH - innerMargin, CANVAS_HEIGHT - innerMargin);

    // Helper to safely load image
    const loadImage = (src: string): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new window.Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load ${src}`));
        img.src = src;
      });
    };

    // 3. Central Watermark (Institute Crest at ~9% opacity, 330x330 pt)
    try {
      const watermarkImg = await loadImage("/images/watermark.png").catch(() =>
        loadImage("/images/logo.png")
      );
      ctx.save();
      ctx.globalAlpha = 0.09;
      const wmSize = 330 * scale;
      ctx.drawImage(
        watermarkImg,
        (CANVAS_WIDTH - wmSize) / 2,
        (CANVAS_HEIGHT - wmSize) / 2 + 20 * scale,
        wmSize,
        wmSize
      );
      ctx.restore();
    } catch {
      // ignore watermark error
    }

    // 4. Institute Logo (Top-Left 76x76 pt)
    try {
      const logoImg = await loadImage("/images/logo.png");
      const logoX = 54 * scale;
      const logoY = 50 * scale;
      const logoSize = 78 * scale;
      ctx.drawImage(logoImg, logoX, logoY, logoSize, logoSize);
    } catch {
      // ignore logo error
    }

    // 5. QR Code in Top-Right Corner with Certificate ID below it
    try {
      const verifyUrl = `https://${INSTITUTE.domain}/verify/${certificate.certificate_id}`;
      const qrDataUrl = await QRCode.toDataURL(verifyUrl, {
        width: 300,
        margin: 1,
        color: {
          dark: "#0B2C4D",
          light: "#FFFFFF",
        },
      });
      const qrImg = await loadImage(qrDataUrl);
      const qrSize = 74 * scale;
      const qrX = CANVAS_WIDTH - innerMargin - qrSize - 18 * scale;
      const qrY = 48 * scale;
      ctx.drawImage(qrImg, qrX, qrY, qrSize, qrSize);

      // Certificate ID below QR code: stylish Navy Bold with Gold accent
      ctx.save();
      ctx.textAlign = "center";
      ctx.fillStyle = "#0B2C4D";
      ctx.font = `bold ${8.5 * scale}px "Times New Roman", Times, serif`;
      ctx.fillText(`ID: ${certificate.certificate_id}`, qrX + qrSize / 2, qrY + qrSize + 11 * scale);
      ctx.fillStyle = "#B08D2A";
      ctx.font = `bold ${7 * scale}px Arial, sans-serif`;
      ctx.fillText("ONLINE VERIFIED", qrX + qrSize / 2, qrY + qrSize + 19 * scale);
      ctx.restore();
    } catch {
      // ignore qr error
    }

    // 6. Institute Header Text: Perfectly Centered on the Page Width
    ctx.textAlign = "center";
    ctx.fillStyle = "#0B2C4D";
    ctx.font = `bold ${24 * scale}px "Times New Roman", Times, serif`;
    ctx.fillText(
      "AL-MUNTAZIR TECHNICAL TRAINING & TRADE CENTER",
      CANVAS_WIDTH / 2,
      76 * scale
    );

    // Decorative Gold divider line below header
    ctx.strokeStyle = "#B08D2A";
    ctx.lineWidth = 1.2 * scale;
    ctx.beginPath();
    ctx.moveTo(CANVAS_WIDTH / 2 - 280 * scale, 85 * scale);
    ctx.lineTo(CANVAS_WIDTH / 2 + 280 * scale, 85 * scale);
    ctx.stroke();

    // Institute Address
    ctx.fillStyle = "#555555";
    ctx.font = `normal ${12.5 * scale}px "Times New Roman", Times, serif`;
    ctx.fillText(
      "Pull 88 Road, Near Benazir Income Support Office, Building Old Nadra Office, Kot Addu",
      CANVAS_WIDTH / 2,
      100 * scale
    );

    // 7. Body Text Certifications
    // "This is to certify that" (Times-Italic, 17 pt, #1A1A1A)
    ctx.fillStyle = "#1A1A1A";
    ctx.font = `italic ${16.5 * scale}px "Times New Roman", Times, serif`;
    ctx.fillText("This is to certify that", CANVAS_WIDTH / 2, 130 * scale);

    // Student Name Line: "Mr. [student_name] S/o [father_name]" (Times-BoldItalic, 17 pt)
    const studentName = certificate.student_name || certificate.students?.student_name || "Talha Hussain";
    const fatherName = certificate.father_name || certificate.students?.father_name || "Ghulam Hussain";
    ctx.font = `italic bold ${17 * scale}px "Times New Roman", Times, serif`;
    ctx.fillText(`Mr. ${studentName}   S/o   ${fatherName}`, CANVAS_WIDTH / 2, 155 * scale);

    // "having N.I.C. No: ..." (Times-Italic, 14 pt) - File No removed per user spec
    const cnicNumber = certificate.students?.cnic || "36302-2480530-9";
    ctx.font = `italic ${13.5 * scale}px "Times New Roman", Times, serif`;
    ctx.fillText(`having N.I.C. No: ${cnicNumber}`, CANVAS_WIDTH / 2, 178 * scale);

    // Course Name: e.g. "Multi Welder Training Program" (Times-BoldItalic, 32 pt, Navy #0B2C4D)
    const rawCourseName = certificate.course_name || certificate.students?.course_name || "Multi Welder";
    const courseTitle = rawCourseName.includes("Training")
      ? rawCourseName
      : `${rawCourseName} Training Program`;

    ctx.fillStyle = "#0B2C4D";
    ctx.font = `italic bold ${30 * scale}px "Times New Roman", Times, serif`;
    ctx.fillText(courseTitle, CANVAS_WIDTH / 2, 222 * scale);

    // "Held from [date] to [date]" (Times-Italic, 14 pt)
    const heldFrom = certificate.held_from || "05-01-2024";
    const heldTo = certificate.held_to || certificate.issue_date || "25-12-2024";
    ctx.fillStyle = "#1A1A1A";
    ctx.font = `italic ${13.5 * scale}px "Times New Roman", Times, serif`;
    ctx.fillText(`Held from ${heldFrom} to ${heldTo}`, CANVAS_WIDTH / 2, 252 * scale);

    // "has attended and qualified the above intensive course" (Times-Italic, 14 pt)
    ctx.fillText(
      "has attended and qualified the above intensive course",
      CANVAS_WIDTH / 2,
      273 * scale
    );

    // "marks obtained ...% Grade “...”" (Times-Italic, 14 pt)
    const marks = certificate.marks_percentage || 89;
    const grade = certificate.grade || "A";
    ctx.fillText(`marks obtained ${marks} % Grade “ ${grade} ”`, CANVAS_WIDTH / 2, 294 * scale);

    // 8. Subjects Grid (20 subjects: 4 columns x 5 rows)
    const tableLeft = 52 * scale;
    const tableRight = CANVAS_WIDTH - 52 * scale;
    const tableWidth = tableRight - tableLeft;
    const tableTop = 312 * scale;
    const tableHeight = 115 * scale;

    // Subjects outer border line
    ctx.strokeStyle = "#0B2C4D";
    ctx.lineWidth = 1 * scale;
    ctx.strokeRect(tableLeft, tableTop, tableWidth, tableHeight);

    // Subjects Title header
    ctx.textAlign = "left";
    ctx.fillStyle = "#0B2C4D";
    ctx.font = `bold ${13 * scale}px "Times New Roman", Times, serif`;
    ctx.fillText("Subjects", tableLeft + 10 * scale, tableTop + 18 * scale);

    // Divider under "Subjects" header
    ctx.beginPath();
    ctx.moveTo(tableLeft, tableTop + 24 * scale);
    ctx.lineTo(tableRight, tableTop + 24 * scale);
    ctx.stroke();

    // 20 Subjects (4 columns x 5 rows)
    const subjectsList = certificate.subjects && certificate.subjects.length >= 20
      ? certificate.subjects
      : [
          "Safety Orientation", "Classification of Electrodes", "Welding Applications", "Welding Procedures", "SMAW & MIG Welders",
          "Safety in Welding", "Electrodes", "Welding Metallurgy", "Schedules & Variables", "Gas Cutting",
          "Principles of Welding", "Covered Electrodes", "Types of Joints", "Pre-Weld Preparations", "Non Destructive Tests",
          "Welding Equipment", "Arc Welding Positions", "Welding Symbols", "Welding Defects", "WPS & WPQR"
        ];

    const colWidth = tableWidth / 4;
    const rowHeight = 16.5 * scale;
    const contentStartY = tableTop + 38 * scale;

    ctx.fillStyle = "#1A1A1A";
    ctx.font = `normal ${9.8 * scale}px Arial, Helvetica, sans-serif`;

    for (let c = 0; c < 4; c++) {
      for (let r = 0; r < 5; r++) {
        const index = c * 5 + r;
        const subject = subjectsList[index] || "";
        ctx.fillText(subject, tableLeft + 10 * scale + c * colWidth, contentStartY + r * rowHeight);
      }
    }

    // 9. Signatures & Official Stamp
    const sigLineY = 495 * scale;

    // LEFT SIGNATORY: TALHA HUSSAIN (Workshop Incharge)
    const leftSigX = 140 * scale;
    try {
      const talhaSigImg = await loadImage(
        certificate.left_signature_url || "/images/signature_talha.png"
      );
      // 86x53 pt scaled
      ctx.drawImage(talhaSigImg, leftSigX - 43 * scale, sigLineY - 48 * scale, 86 * scale, 53 * scale);
    } catch {
      // ignore sig error
    }

    // Left Signature Line
    ctx.strokeStyle = "#1A1A1A";
    ctx.lineWidth = 1 * scale;
    ctx.beginPath();
    ctx.moveTo(leftSigX - 80 * scale, sigLineY);
    ctx.lineTo(leftSigX + 80 * scale, sigLineY);
    ctx.stroke();

    // Left Signatory Text
    ctx.textAlign = "center";
    ctx.fillStyle = "#1A1A1A";
    ctx.font = `bold ${11 * scale}px "Times New Roman", Times, serif`;
    ctx.fillText(
      certificate.left_signatory_name || "TALHA HUSSAIN",
      leftSigX,
      sigLineY + 16 * scale
    );
    ctx.font = `italic ${10 * scale}px "Times New Roman", Times, serif`;
    ctx.fillText(
      certificate.left_signatory_title || "Workshop Incharge",
      leftSigX,
      sigLineY + 28 * scale
    );

    // RIGHT SIGNATORY: IMDAD HUSSAIN (Project Incharge)
    const rightSigX = CANVAS_WIDTH - 150 * scale;

    // Imdad Signature
    try {
      const imdadSigImg = await loadImage(
        certificate.right_signature_url || "/images/signature_imdad.png"
      );
      // 64x28 pt scaled
      ctx.drawImage(
        imdadSigImg,
        rightSigX - 30 * scale,
        sigLineY - 32 * scale,
        64 * scale,
        28 * scale
      );
    } catch {
      // ignore
    }

    // Official Stamp (115x115 pt transparent blue, slightly overlapping above Imdad signature)
    try {
      const stampImg = await loadImage(
        certificate.stamp_url || "/images/stamp.png"
      );
      const stampSize = 115 * scale;
      ctx.drawImage(
        stampImg,
        rightSigX - stampSize / 2 + 10 * scale,
        sigLineY - stampSize + 25 * scale,
        stampSize,
        stampSize
      );
    } catch {
      // ignore stamp error
    }

    // Right Signature Line
    ctx.strokeStyle = "#1A1A1A";
    ctx.lineWidth = 1 * scale;
    ctx.beginPath();
    ctx.moveTo(rightSigX - 80 * scale, sigLineY);
    ctx.lineTo(rightSigX + 80 * scale, sigLineY);
    ctx.stroke();

    // Right Signatory Text
    ctx.textAlign = "center";
    ctx.fillStyle = "#1A1A1A";
    ctx.font = `bold ${11 * scale}px "Times New Roman", Times, serif`;
    ctx.fillText(
      certificate.right_signatory_name || "IMDAD HUSSAIN",
      rightSigX,
      sigLineY + 16 * scale
    );
    ctx.font = `italic ${10 * scale}px "Times New Roman", Times, serif`;
    ctx.fillText(
      certificate.right_signatory_title || "Project Incharge",
      rightSigX,
      sigLineY + 28 * scale
    );

    // 10. Footer Line: Trade Mark No. 909294 | Ph: 0662240999
    ctx.fillStyle = "#555555";
    ctx.font = `normal ${9.8 * scale}px "Times New Roman", Times, serif`;
    ctx.fillText(
      "Trade Mark No. 909294   |   Ph: 0662240999",
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT - innerMargin - 14 * scale
    );

    // Export image as flat PNG
    const dataUrl = canvas.toDataURL("image/png");
    setImageUrl(dataUrl);
    setIsGenerating(false);
  }, [certificate]);

  useEffect(() => {
    generateCertificateImage();
  }, [generateCertificateImage]);

  const handleDownload = () => {
    if (!imageUrl) return;
    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = `Al-Muntazir-Certificate-${certificate.certificate_id}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handlePrint = () => {
    if (!imageUrl) return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>Al-Muntazir Certificate - ${certificate.certificate_id}</title>
          <style>
            @page { size: A4 landscape; margin: 0; }
            body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background: #fff; }
            img { width: 100vw; height: 100vh; object-fit: contain; }
          </style>
        </head>
        <body onload="window.print(); window.close();">
          <img src="${imageUrl}" />
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="w-full">
      {/* Hidden high-res canvas for rendering */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Rendered Certificate Card Preview */}
      <div className="bg-slate-900/5 p-3 sm:p-6 rounded-2xl border border-gold-brand/40 shadow-inner">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-navy-900 uppercase tracking-wider">
              High-Resolution On-Demand Certificate (V13 Spec)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              disabled={isGenerating}
              className="px-3.5 py-1.5 rounded-lg bg-navy-800 hover:bg-navy-900 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition active:scale-95 disabled:opacity-50"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={handleDownload}
              disabled={isGenerating}
              className="px-4 py-1.5 rounded-lg gold-gradient-btn text-xs font-extrabold uppercase tracking-wide flex items-center gap-1.5 shadow-sm transition active:scale-95 disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5 text-navy-950" />
              <span>Download PNG</span>
            </button>
          </div>
        </div>

        {/* Display Container with Aspect Ratio A4 Landscape */}
        <div className="relative w-full aspect-[841.89/595.28] rounded-xl overflow-hidden shadow-2xl bg-white border border-slate-300">
          {isGenerating ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white gap-3">
              <div className="w-8 h-8 border-4 border-gold-brand border-t-transparent rounded-full animate-spin" />
              <p className="text-xs font-bold text-navy-900">
                Generating On-Demand High-Resolution Certificate...
              </p>
            </div>
          ) : imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUrl}
              alt={`Certificate ${certificate.certificate_id}`}
              className="w-full h-full object-contain"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
