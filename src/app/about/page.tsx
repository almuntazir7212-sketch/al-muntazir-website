import { Metadata } from "next";
import { INSTITUTE_INFO, WHY_US } from "@/lib/constants";
import { ShieldCheck, Award, CheckCircle2, QrCode, UserCheck, Wrench, Building2, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Al-Muntazir Technical Training & Trade Center, Kot Addu (Licence H.213918-6)",
  description:
    "Learn about Al-Muntazir Technical Training & Trade Center Kot Addu, founded by Haji Imdad Hussain. Government Licensed (Licence H.213918-6, Trade Mark 909294). Discover our workshop standards and instant QR-verified certificate system.",
  openGraph: {
    title: "About Al-Muntazir Technical Training Center Kot Addu | Bharosa & Credentials",
    description: "Govt. Licensed technical training institute in Kot Addu. Founder Haji Imdad Hussain. QR-verified certifications.",
    url: `https://${INSTITUTE_INFO.domain}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Banner */}
      <section className="bg-navy text-white py-14 sm:py-20 border-b-4 border-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B08D2A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/20 text-gold-300 text-xs font-semibold tracking-wider uppercase border border-gold/40">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>Registered & Licensed Technical Institute</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white">
              About Us / Bharosa
            </h1>
            <p className="font-urdu text-xl sm:text-2xl font-bold text-gold" dir="rtl">
              المنتظر ٹیکنیکل ٹریننگ اینڈ ٹریڈ سینٹر — تعارف و اعتبار
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Established in Kot Addu under Government Licence No. <strong>{INSTITUTE_INFO.licenceNo}</strong> and Registered Trade Mark No. <strong>{INSTITUTE_INFO.tradeMarkNo}</strong>, Al-Muntazir Technical Training & Trade Center provides industrial-grade technical training designed to bridge the gap between young aspirants and real-world trade tests.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Core Pillars / Bharosa Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-gold transition-all shadow-navy-card space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-navy text-gold flex items-center justify-center">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-heading text-navy">
              Government Licensing
            </h3>
            <p className="font-urdu text-sm font-semibold text-gold-700" dir="rtl">
              سرکاری لائسنس اور قانونی رجسٹریشن
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Operating with full legal authorization under Govt. Licence No. <strong>{INSTITUTE_INFO.licenceNo}</strong> and registered Trade Mark No. <strong>{INSTITUTE_INFO.tradeMarkNo}</strong>, giving students and employers absolute peace of mind.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-gold transition-all shadow-navy-card space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-navy text-gold flex items-center justify-center">
              <QrCode className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-heading text-navy">
              Online QR Verification
            </h3>
            <p className="font-urdu text-sm font-semibold text-gold-700" dir="rtl">
              آن لائن تصدیق شدہ سرٹیفکیٹ
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every certificate carries an individual QR code directly connected to our official verification portal at <strong>almuntazirttc.com</strong>. Industrial employers can scan and verify credentials on the spot.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-gold transition-all shadow-navy-card space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-navy text-gold flex items-center justify-center">
              <Wrench className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-heading text-navy">
              Practical Trade Mastery
            </h3>
            <p className="font-urdu text-sm font-semibold text-gold-700" dir="rtl">
              ۱۰۰ فیصد پریکٹیکل اور ورکشاپ پریکٹس
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We do not believe in theoretical blackboard teaching alone. Students spend 80%+ of course hours cutting, welding, fitting, and testing on real machinery with safety standards.
            </p>
          </div>
        </div>

        {/* Leadership & Institutional Profile */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-navy-800 text-xs font-bold border border-navy-100">
                <UserCheck className="w-4 h-4 text-gold" />
                <span>Leadership & Vision</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold font-heading text-navy">
                Haji Imdad Hussain
              </h2>
              <p className="text-gold-700 font-semibold text-sm">
                Founder & Project Incharge, Al-Muntazir TTC
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  Under the visionary guidance of <strong>Haji Imdad Hussain</strong>, Al-Muntazir Technical Training & Trade Center was established to provide youth with high-demand vocational skills that enable them to achieve respectable livelihoods.
                </p>
                <p>
                  With years of dedication to industrial vocational standards, our institute ensures that every student is thoroughly prepared for local industrial shutdowns, power plant projects, engineering works, and competitive trade tests.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="font-bold text-navy">Haji Imdad Hussain</div>
                  <div className="text-slate-500 text-[11px]">Project Incharge</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="font-bold text-navy">Talha Hussain</div>
                  <div className="text-slate-500 text-[11px]">Workshop Incharge</div>
                </div>
              </div>
            </div>

            <div className="bg-navy-900 text-white rounded-2xl p-8 border-2 border-gold/40 space-y-6">
              <h3 className="text-xl font-bold font-heading text-gold flex items-center gap-2">
                <Building2 className="w-5 h-5 text-gold" />
                <span>Institutional Credentials</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm divide-y divide-navy-800">
                <div className="pt-3 first:pt-0 flex justify-between items-center">
                  <span className="text-slate-400">Institute Name:</span>
                  <span className="font-bold text-white text-right">{INSTITUTE_INFO.name}</span>
                </div>
                <div className="pt-3 flex justify-between items-center">
                  <span className="text-slate-400">Govt. Licence No:</span>
                  <span className="font-bold text-gold font-mono">{INSTITUTE_INFO.licenceNo}</span>
                </div>
                <div className="pt-3 flex justify-between items-center">
                  <span className="text-slate-400">Trade Mark No:</span>
                  <span className="font-bold text-gold font-mono">{INSTITUTE_INFO.tradeMarkNo}</span>
                </div>
                <div className="pt-3 flex justify-between items-center">
                  <span className="text-slate-400">Campus Location:</span>
                  <span className="font-bold text-white text-right">88 Road, Kot Addu</span>
                </div>
                <div className="pt-3 flex justify-between items-center">
                  <span className="text-slate-400">Official Domain:</span>
                  <span className="font-bold text-white font-mono">{INSTITUTE_INFO.domain}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gold hover:bg-gold-400 text-navy-950 font-bold text-xs sm:text-sm shadow-gold-glow transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Visit Campus or Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Why Employers Trust Al-Muntazir */}
        <div className="bg-slate-100 rounded-3xl p-8 sm:p-10 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h3 className="text-2xl font-bold font-heading text-navy">
              Why Companies & Employers Trust Our Graduates
            </h3>
            <p className="font-urdu text-sm font-semibold text-gold-700" dir="rtl">
              صنعتی کمپنیاں اور ٹھیکیدار ہمارے سرٹیفکیٹ پر اعتبار کیوں کرتے ہیں؟
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1.5">
              <div className="font-bold text-navy flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Forgery QR</span>
              </div>
              <p className="text-slate-600 text-xs">
                Live URL check verifies student name, course, and dates against the official database.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1.5">
              <div className="font-bold text-navy flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Real Machine Practice</span>
              </div>
              <p className="text-slate-600 text-xs">
                Students execute real cuts, passes, and joints during workshop hours.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1.5">
              <div className="font-bold text-navy flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Safety Compliance</span>
              </div>
              <p className="text-slate-600 text-xs">
                PPE, fire watch, and electrical safety are integrated into every module.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1.5">
              <div className="font-bold text-navy flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Dedicated Mentors</span>
              </div>
              <p className="text-slate-600 text-xs">
                Experienced instructors ensure every candidate passes trade tests with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
