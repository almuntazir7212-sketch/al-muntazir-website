import { Metadata } from "next";
import Link from "next/link";
import { getCertificateById } from "@/lib/supabase";
import CertificateVisual from "@/components/CertificateVisual";
import { INSTITUTE_INFO } from "@/lib/constants";
import {
  ShieldCheck,
  AlertTriangle,
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  User,
  GraduationCap,
  Award,
  ArrowLeft,
} from "lucide-react";

interface VerifyPageProps {
  params: Promise<{ id: string }>;
}

export const metadata: Metadata = {
  title: "Certificate Verification | Al-Muntazir Technical Training Center",
  description: "Official QR verification portal for Al-Muntazir Technical Training & Trade Center certificates.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function VerifyPage({ params }: VerifyPageProps) {
  const { id } = await params;
  const certificate = await getCertificateById(id);

  const isVerified = certificate && certificate.status === "active";

  return (
    <div className="min-h-screen bg-slate-100/90 py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-navy hover:text-gold transition-colors no-print"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home / ہوم پیج</span>
          </Link>
        </div>

        {/* VERIFIED STATE */}
        {isVerified && certificate ? (
          <div className="space-y-8">
            {/* Top Verification Result Badge Banner */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-500 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full pointer-events-none -z-0" />

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20 flex-shrink-0">
                    <ShieldCheck className="w-10 h-10" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                      Official Record Verified
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold font-heading text-navy">
                      Certificate Authenticity Confirmed
                    </h1>
                    <p className="font-urdu text-sm font-semibold text-gold-700" dir="rtl">
                      سرٹیفکیٹ کی تصدیق کامیاب — سرکاری ریکارڈ میں محفوظ
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs font-mono text-right self-stretch md:self-auto flex flex-col justify-center">
                  <span className="text-slate-500 text-[11px] block">Verified Certificate ID</span>
                  <strong className="text-base sm:text-lg text-navy font-bold">
                    {certificate.certificate_id}
                  </strong>
                  <span className="text-emerald-600 text-[11px] font-semibold flex items-center justify-end gap-1 mt-0.5">
                    ● Live Status: Active
                  </span>
                </div>
              </div>

              {/* Student Particulars Live Summary Cards */}
              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="text-slate-500 flex items-center gap-1.5 mb-1 text-xs">
                    <User className="w-3.5 h-3.5 text-gold" />
                    <span>Student Name:</span>
                  </div>
                  <div className="font-bold text-navy text-sm sm:text-base font-heading">
                    {certificate.student_name}
                  </div>
                  <div className="text-slate-500 text-xs mt-0.5">
                    S/o {certificate.father_name}
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="text-slate-500 flex items-center gap-1.5 mb-1 text-xs">
                    <GraduationCap className="w-3.5 h-3.5 text-gold" />
                    <span>Technical Trade:</span>
                  </div>
                  <div className="font-bold text-navy text-sm sm:text-base font-heading">
                    {certificate.course_name}
                  </div>
                  <div className="text-gold-700 font-semibold text-xs mt-0.5">
                    Duration: {certificate.duration}
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="text-slate-500 flex items-center gap-1.5 mb-1 text-xs">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    <span>Issue Date:</span>
                  </div>
                  <div className="font-bold text-navy text-sm sm:text-base font-mono">
                    {certificate.issue_date}
                  </div>
                  <div className="text-slate-500 text-xs mt-0.5">
                    {certificate.held_from && certificate.held_to
                      ? `${certificate.held_from} to ${certificate.held_to}`
                      : "Official Course Completion"}
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="text-slate-500 flex items-center gap-1.5 mb-1 text-xs">
                    <Award className="w-3.5 h-3.5 text-gold" />
                    <span>Grade / Evaluation:</span>
                  </div>
                  <div className="font-bold text-navy text-sm sm:text-base">
                    Grade {certificate.grade || "A"} ({certificate.marks_obtained || "85"}%)
                  </div>
                  <div className="text-slate-500 text-xs mt-0.5">
                    Qualified Practical Workshop
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate Visual Generated On-Demand */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold font-heading text-navy">
                    Official Certificate Document
                  </h2>
                  <p className="text-xs text-slate-500">
                    Generated dynamically from the official database record. High-resolution flat image for print and verification.
                  </p>
                </div>
                <div className="text-xs text-slate-400 font-mono hidden sm:block">
                  A4 Landscape Double-Frame Standard
                </div>
              </div>

              {/* The V12 Certificate Component */}
              <CertificateVisual certificate={certificate} />
            </div>
          </div>
        ) : (
          /* NOT FOUND / UNVERIFIED STATE */
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-red-400 shadow-2xl text-center max-w-2xl mx-auto space-y-6">
            <div className="w-20 h-20 rounded-full bg-red-100 text-red-600 mx-auto flex items-center justify-center">
              <AlertTriangle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider">
                Verification Failed
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold font-heading text-navy">
                Certificate Not Found / Not Verified
              </h1>
              <p className="font-urdu text-base font-semibold text-red-600" dir="rtl">
                سرٹیفکیٹ کی تصدیق نہیں ہو سکی — ریکارڈ موجود نہیں
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
              <p>
                The certificate identifier <strong className="font-mono text-red-600">{id}</strong> could not be verified in the live Al-Muntazir Technical Training Center database.
              </p>
              <p className="text-xs text-slate-500">
                This may happen if the QR code was scanned incorrectly, the certificate has been revoked by administration, or the identifier is invalid.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <p className="text-xs font-semibold text-navy">
                Need manual verification or assistance? Contact our central office:
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:${INSTITUTE_INFO.phone.replace(/\s+/g, "")}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-navy text-white hover:bg-navy-800 text-xs sm:text-sm font-semibold"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call Landline: {INSTITUTE_INFO.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${INSTITUTE_INFO.whatsapp1Clean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 text-xs sm:text-sm font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {INSTITUTE_INFO.whatsapp1}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
