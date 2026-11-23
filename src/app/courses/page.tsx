import { Metadata } from "next";
import { COURSES, INSTITUTE_INFO, getWhatsAppAdmissionUrl } from "@/lib/constants";
import CourseCard from "@/components/CourseCard";
import { ShieldCheck, MessageCircle, Wrench, Award, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Courses — Al-Muntazir Technical Training Center Kot Addu | 12 Technical Trades",
  description:
    "Explore all 12 certified technical trade courses at Al-Muntazir TTC Kot Addu: Multi Welder, Argon (TIG), Electric Welder, 6GR Welder, Pipe Fitter, Pipe Fabricator, Industrial Electrician, Plumber, and more. Practical workshop training with QR-verified certificates.",
  openGraph: {
    title: "All 12 Technical Training Courses | Al-Muntazir TTC Kot Addu",
    description: "Hands-on workshop courses in Welding, Piping, Electrical, and Safety in Kot Addu. Government Licence H.213918-6.",
    url: `https://${INSTITUTE_INFO.domain}/courses`,
  },
};

export default function CoursesPage() {
  const weldingCourses = COURSES.filter((c) => c.category === "Welding");
  const pipingCourses = COURSES.filter((c) => c.category === "Piping");
  const electricalCourses = COURSES.filter((c) => c.category === "Electrical");
  const technicalCourses = COURSES.filter((c) => c.category === "Technical");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header Banner */}
      <section className="bg-navy text-white py-14 sm:py-20 border-b-4 border-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B08D2A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/20 text-gold-300 text-xs font-semibold tracking-wider uppercase border border-gold/40">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>12 Certified Technical Disciplines</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white">
              All Technical Trade Courses
            </h1>
            <p className="font-urdu text-xl sm:text-2xl font-bold text-gold" dir="rtl">
              المنتظر ٹیکنیکل ٹریننگ سینٹر کے تمام ۱۲ تکنیکی کورسز
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every course at Al-Muntazir TTC is designed with an 80% practical workshop syllabus. Students receive intensive hands-on experience under the mentorship of industry veterans, graduating with an officially recognized, QR-verified technical certificate.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                Govt. Licence No. {INSTITUTE_INFO.licenceNo}
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-gold" />
                QR-Verified Certificate on Completion
              </span>
              <span className="flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-gold" />
                No Theory-Only Classes — 100% Workshop Ready
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid Content */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Category: Welding Trades */}
        <div>
          <div className="border-b-2 border-slate-200 pb-4 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-gold-700">
                Category 01
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy flex items-center gap-2">
                <span>Welding Trades</span>
                <span className="font-urdu text-lg font-semibold text-gold-700" dir="rtl">ویلڈنگ ٹریڈز</span>
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Multi Welder, Argon (TIG), Electric Arc, and 6GR Pipe Welding
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weldingCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* Category: Piping & Fabrication */}
        <div>
          <div className="border-b-2 border-slate-200 pb-4 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-gold-700">
                Category 02
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy flex items-center gap-2">
                <span>Piping & Fabrication Trades</span>
                <span className="font-urdu text-lg font-semibold text-gold-700" dir="rtl">پائپنگ اور فیبریکیشن</span>
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Isometric Drawing Interpretation, Spool Fabrication, and Flange Fitting
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {pipingCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* Category: Electrical & Control Trades */}
        <div>
          <div className="border-b-2 border-slate-200 pb-4 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-gold-700">
                Category 03
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy flex items-center gap-2">
                <span>Electrical & Control Trades</span>
                <span className="font-urdu text-lg font-semibold text-gold-700" dir="rtl">الیکٹریکل اور وائرنگ کورسز</span>
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Industrial Motors, Control Panels, Building Wiring, and Power Transmission
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {electricalCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* Category: Technical & Safety Trades */}
        <div>
          <div className="border-b-2 border-slate-200 pb-4 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-gold-700">
                Category 04
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy flex items-center gap-2">
                <span>Technical & Safety Disciplines</span>
                <span className="font-urdu text-lg font-semibold text-gold-700" dir="rtl">ٹیکنیکل و حفاظتی شعبہ جات</span>
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Instrumentation Transmitters, Hot Work Safety, and Plumbing Networks
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* WhatsApp Admission Banner at Bottom */}
        <div className="bg-gradient-to-r from-navy to-navy-900 rounded-3xl p-8 sm:p-10 text-white border-2 border-gold/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-gold uppercase tracking-wider">
              Ready to enroll in your preferred course?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Get In Touch With Our Admission Counselor
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Message us directly on WhatsApp to confirm upcoming class timings, required documents, and batch dates.
            </p>
          </div>

          <a
            href={getWhatsAppAdmissionUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm sm:text-base shadow-lg transition-all flex-shrink-0"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Apply via WhatsApp ({INSTITUTE_INFO.whatsapp1})</span>
          </a>
        </div>
      </section>
    </div>
  );
}
