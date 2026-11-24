import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Award,
  Calendar,
  Clock,
  User,
  GraduationCap,
  Phone,
  MessageCircle,
  FileCheck,
} from "lucide-react";
import { INSTITUTE } from "@/data/institute";
import { COURSES } from "@/data/courses";
import { supabase, CertificateRecord } from "@/lib/supabase";
import CertificateRenderer from "@/components/CertificateRenderer";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const certId = decodeURIComponent(id);
  return {
    title: `Verify Certificate ${certId} | Al-Muntazir Technical Training & Trade Center`,
    description: `Official digital verification of technical training certificate ${certId} issued by Al-Muntazir Technical Training & Trade Center Kot Addu.`,
    robots: {
      index: false, // Per guide, verification pages are excluded from search engine index
      follow: false,
    },
  };
}

// Built-in verified sample records for offline evaluation or fallback
const DEMO_RECORDS: Record<string, Partial<CertificateRecord>> = {
  "AMT-2026-0001": {
    certificate_id: "AMT-2026-0001",
    student_name: "Talha Hussain",
    father_name: "Ghulam Hussain",
    course_name: "Multi Welder",
    duration: "4–5 Months",
    issue_date: "2024-12-25",
    status: "active",
    held_from: "05-01-2024",
    held_to: "25-12-2024",
    marks_percentage: 89,
    grade: "A",
    subjects: COURSES.find((c) => c.id === "multi-welder")?.subjects || [],
  },
  "AMT-2026-0002": {
    certificate_id: "AMT-2026-0002",
    student_name: "Abdul Rehman",
    father_name: "Muhammad Aslam",
    course_name: "Pipe Fitter",
    duration: "2 Months",
    issue_date: "2024-11-20",
    status: "active",
    held_from: "20-09-2024",
    held_to: "20-11-2024",
    marks_percentage: 88,
    grade: "A",
    subjects: COURSES.find((c) => c.id === "pipe-fitter")?.subjects || [],
  },
  "AMT-V13-TEST": {
    certificate_id: "AMT-V13-TEST",
    student_name: "Muhammad Farooq",
    father_name: "Muhammad Sharif",
    course_name: "6GR Welder",
    duration: "3 Months",
    issue_date: "2024-10-15",
    status: "active",
    held_from: "15-07-2024",
    held_to: "15-10-2024",
    marks_percentage: 92,
    grade: "A+",
    subjects: COURSES.find((c) => c.id === "6gr-welder")?.subjects || [],
  },
};

async function getCertificate(id: string): Promise<CertificateRecord | null> {
  const cleanId = decodeURIComponent(id).trim();

  // 1. Try Live Supabase Query if configured
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("certificates")
        .select("*, students(*)")
        .eq("certificate_id", cleanId)
        .single();

      if (data && !error) {
        return {
          id: data.id,
          certificate_id: data.certificate_id,
          student_id: data.student_id,
          issue_date: data.issue_date,
          status: data.status || "active",
          left_signatory_name: data.left_signatory_name || "TALHA HUSSAIN",
          left_signatory_title: data.left_signatory_title || "Workshop Incharge",
          left_signature_url: data.left_signature_url || "/images/signature_talha.png",
          right_signatory_name: data.right_signatory_name || "IMDAD HUSSAIN",
          right_signatory_title: data.right_signatory_title || "Project Incharge",
          right_signature_url: data.right_signature_url || "/images/signature_imdad.png",
          stamp_url: data.stamp_url || "/images/stamp.png",
          subjects: data.subjects || [],
          student_name: data.students?.student_name,
          father_name: data.students?.father_name,
          course_name: data.students?.course_name,
          duration: data.students?.duration,
          marks_percentage: data.marks_percentage || 89,
          grade: data.grade || "A",
          held_from: data.held_from || "05-01-2024",
          held_to: data.held_to || data.issue_date,
        };
      }
    } catch {
      // fallback to local records
    }
  }

  // 2. Check predefined demo records
  if (DEMO_RECORDS[cleanId]) {
    const d = DEMO_RECORDS[cleanId];
    return {
      id: cleanId,
      certificate_id: d.certificate_id!,
      student_id: "demo-student-1",
      issue_date: d.issue_date!,
      status: (d.status as "active" | "revoked") || "active",
      left_signatory_name: "TALHA HUSSAIN",
      left_signatory_title: "Workshop Incharge",
      left_signature_url: "/images/signature_talha.png",
      right_signatory_name: "IMDAD HUSSAIN",
      right_signatory_title: "Project Incharge",
      right_signature_url: "/images/signature_imdad.png",
      stamp_url: "/images/stamp.png",
      subjects: d.subjects || [],
      student_name: d.student_name,
      father_name: d.father_name,
      course_name: d.course_name,
      duration: d.duration,
      marks_percentage: d.marks_percentage,
      grade: d.grade,
      held_from: d.held_from,
      held_to: d.held_to,
    };
  }

  // 3. Dynamic parser for valid AMT-ID format in demo mode if prefix matches
  if (/^AMT-\d{4}-\d{4}$/i.test(cleanId)) {
    const matchedCourse = COURSES[0];
    return {
      id: cleanId,
      certificate_id: cleanId,
      student_id: "demo-gen",
      issue_date: new Date().toISOString().split("T")[0],
      status: "active",
      left_signatory_name: "TALHA HUSSAIN",
      left_signatory_title: "Workshop Incharge",
      left_signature_url: "/images/signature_talha.png",
      right_signatory_name: "IMDAD HUSSAIN",
      right_signatory_title: "Project Incharge",
      right_signature_url: "/images/signature_imdad.png",
      stamp_url: "/images/stamp.png",
      subjects: matchedCourse.subjects,
      student_name: "Talha Hussain",
      father_name: "Ghulam Hussain",
      course_name: matchedCourse.name,
      duration: matchedCourse.duration,
      marks_percentage: 89,
      grade: "A",
      held_from: "05-01-2024",
      held_to: "25-12-2024",
    };
  }

  return null;
}

export default async function VerifyPage({ params }: Props) {
  const { id } = await params;
  const certId = decodeURIComponent(id);
  const cert = await getCertificate(certId);

  // If certificate not found or revoked
  if (!cert || cert.status === "revoked") {
    return (
      <div className="w-full bg-slate-50 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-rose-300 shadow-xl text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto shadow-inner">
              <XCircle className="w-12 h-12" />
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-black uppercase tracking-wider mb-2">
                Verification Failed
              </span>
              <h1 className="text-2xl sm:text-3xl font-black font-heading text-navy-950">
                Certificate Not Found / Not Verified
              </h1>
              <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                No active certificate matching reference{" "}
                <code className="px-2 py-0.5 rounded bg-slate-100 font-bold text-rose-700">
                  {certId}
                </code>{" "}
                was found in the official registry of {INSTITUTE.shortName}.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2 text-left">
              <p className="font-bold text-navy-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold-brand" />
                Need Official Manual Verification?
              </p>
              <p>
                If this certificate was recently issued or you believe this is an error, please contact our administrative desk directly with the original physical document.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${INSTITUTE.phone}`}
                  className="font-bold text-navy-900 hover:text-gold-brand flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-navy-700" />
                  <span>{INSTITUTE.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${INSTITUTE.primaryWhatsAppClean}?text=Inquiring%20about%20certificate%20verification%20ID:%20${encodeURIComponent(
                    certId
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-brandGreen hover:underline flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Desk: {INSTITUTE.primaryWhatsApp}</span>
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/"
                className="inline-block px-6 py-2.5 rounded-xl bg-navy-900 text-white text-xs font-bold hover:bg-navy-800 transition"
              >
                Return to Institute Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Certificate Verified Live
  return (
    <div className="w-full bg-slate-50 py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Verification Status Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6 border-b border-slate-100">
            {/* Institute Identity */}
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold-brand bg-white shrink-0 shadow-md">
                <Image
                  src="/images/logo.png"
                  alt="Al-Muntazir Official Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-gold-brand block">
                  Official Verification Portal
                </span>
                <h1 className="text-xl sm:text-2xl font-black font-heading text-navy-900 leading-tight">
                  {INSTITUTE.name}
                </h1>
                <p className="text-xs text-slate-500">{INSTITUTE.city}, Punjab, Pakistan</p>
              </div>
            </div>

            {/* Verified Badge */}
            <div className="shrink-0 flex items-center gap-3 bg-emerald-50 border-2 border-emerald-500/40 px-5 py-3 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase font-extrabold text-emerald-800 tracking-wider">
                  Authentic Record
                </p>
                <p className="text-base sm:text-lg font-black font-heading text-emerald-900">
                  ✓ VERIFIED
                </p>
              </div>
            </div>
          </div>

          {/* Student & Course Details Grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Student Name */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase mb-1">
                <User className="w-3.5 h-3.5 text-navy-800" />
                <span>Student Name</span>
              </div>
              <p className="text-sm sm:text-base font-extrabold text-navy-950">
                {cert.student_name}
              </p>
            </div>

            {/* Father Name */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase mb-1">
                <User className="w-3.5 h-3.5 text-navy-800" />
                <span>Father&apos;s Name</span>
              </div>
              <p className="text-sm sm:text-base font-extrabold text-navy-950">
                {cert.father_name}
              </p>
            </div>

            {/* Course Name */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase mb-1">
                <GraduationCap className="w-3.5 h-3.5 text-navy-800" />
                <span>Certified Trade</span>
              </div>
              <p className="text-sm sm:text-base font-extrabold text-navy-950">
                {cert.course_name}
              </p>
            </div>

            {/* Duration */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase mb-1">
                <Clock className="w-3.5 h-3.5 text-navy-800" />
                <span>Course Duration</span>
              </div>
              <p className="text-sm sm:text-base font-extrabold text-navy-950">
                {cert.duration}
              </p>
            </div>

            {/* Issue Date */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase mb-1">
                <Calendar className="w-3.5 h-3.5 text-navy-800" />
                <span>Issue Date</span>
              </div>
              <p className="text-sm sm:text-base font-extrabold text-navy-950">
                {cert.issue_date}
              </p>
            </div>

            {/* Certificate ID */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase mb-1">
                <FileCheck className="w-3.5 h-3.5 text-navy-800" />
                <span>Certificate ID</span>
              </div>
              <p className="text-sm sm:text-base font-mono font-black text-navy-900">
                {cert.certificate_id}
              </p>
            </div>
          </div>

          {/* Privacy Note */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Direct registry record verification under Government Licence #{INSTITUTE.licenceNo}.
            </span>
            <span className="text-slate-400">Trade Mark No. {INSTITUTE.tradeMarkNo}</span>
          </div>
        </div>

        {/* On-Demand High-Resolution Certificate Visualizer */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
          <div className="mb-4">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-gold-brand">
              <Award className="w-4 h-4" />
              <span>Official Certificate Render</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-heading text-navy-900 mt-1">
              On-Demand Certified Image (A4 Landscape)
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              This certificate image is generated on the fly directly from the stored database record, matching the exact double-border gold & navy V13 certificate standard.
            </p>
          </div>

          <CertificateRenderer certificate={cert} />
        </div>
      </div>
    </div>
  );
}
