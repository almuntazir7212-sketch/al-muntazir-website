import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Phone,
  QrCode,
  Sparkles,
  ArrowRight,
  Hammer,
} from "lucide-react";
import { INSTITUTE } from "@/data/institute";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Al-Muntazir Technical Training Center Kot Addu",
  description:
    "Learn about Al-Muntazir Technical Training & Trade Center, Kot Addu. Founded and supervised by Haji Imdad Hussain. Government Licence H.213918-6, Trade Mark No. 909294.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      {/* Page Header (Navy + Gold) */}
      <section className="bg-navy-950 text-white py-14 sm:py-20 border-b-2 border-gold-brand relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 opacity-95" />
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold-brand/40 text-gold-light text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Institute Heritage & Leadership</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            About Al-Muntazir Technical Center
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-3 leading-relaxed">
            Delivering high-caliber technical craftsmanship and certified trade training in Kot Addu under Government Licence No. {INSTITUTE.licenceNo}.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-black uppercase tracking-wider rounded-md bg-gold/15 text-navy-900 border border-gold-brand/40">
                <span>Center Overview</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black font-heading text-navy-900 leading-tight">
                Empowering Technical Talent in Kot Addu with Proven Trade Skills
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>Al-Muntazir Technical Training & Trade Center</strong> is an established vocational institute dedicated to training proficient technical tradesmen. Based on 88 Road in Kot Addu, our training philosophy centers entirely on practical workshop experience.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rather than passive theoretical lectures, our trainees spend their course hours in dedicated training bays — welding heavy steel plates, assembling industrial pipe spools, troubleshooting 3-phase electrical motor controls, and mastering plumbing distribution networks.
              </p>

              {/* Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="text-sm font-extrabold font-heading text-navy-900 flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Real Workshop Bays</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    Industry standard welding machines, cutting rigs, and electrical diagnostic panels.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="text-sm font-extrabold font-heading text-navy-900 flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Senior Mentorship</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    Instructors with decades of practical field experience in major fabrication projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card: Institutional Credentials & Leadership */}
            <div className="bg-navy-900 text-white rounded-3xl p-8 sm:p-10 border-2 border-gold-brand shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-navy-800">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold-brand bg-white shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="Al-Muntazir Official Crest"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black font-heading text-white">
                    Haji Imdad Hussain
                  </h3>
                  <p className="text-xs text-gold font-bold">Project Incharge & Owner</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Al-Muntazir Technical Training Center</p>
                </div>
              </div>

              <h4 className="text-xs uppercase font-extrabold tracking-wider text-gold mb-4">
                Official Registered Credentials
              </h4>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 bg-navy-950/60 p-3.5 rounded-xl border border-navy-800">
                  <Award className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">Government Licence</strong>
                    <span className="text-slate-300">Licence No: {INSTITUTE.licenceNo}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-navy-950/60 p-3.5 rounded-xl border border-navy-800">
                  <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">Registered Trade Mark</strong>
                    <span className="text-slate-300">Trade Mark No: {INSTITUTE.tradeMarkNo}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-navy-950/60 p-3.5 rounded-xl border border-navy-800">
                  <QrCode className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">Online QR Verification</strong>
                    <span className="text-slate-300">
                      Tamper-proof digital certificates verifiable by domestic and foreign employers.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-navy-950/60 p-3.5 rounded-xl border border-navy-800">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">Permanent Kot Addu Campus</strong>
                    <span className="text-slate-300">{INSTITUTE.address}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-navy-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Direct Landline Desk:</span>
                <a href={`tel:${INSTITUTE.phone}`} className="text-gold font-bold hover:underline">
                  {INSTITUTE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & QR System Spotlight */}
      <section className="bg-slate-50 py-14 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 text-[11px] font-black uppercase tracking-widest rounded-full bg-gold/15 text-navy-800 border border-gold-brand/40">
              Employer Trust System
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-navy-900 tracking-tight">
              Instant Credential Verification via QR Scan
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When industrial employers evaluate job candidates, credential verification is paramount. Every certificate issued by Al-Muntazir carries a unique encoded QR code. When scanned, it immediately loads the live student record and on-demand certificate from our secure system.
            </p>

            <div className="pt-4 flex items-center justify-center gap-4">
              <Link
                href="/courses"
                className="py-3 px-6 rounded-xl gold-gradient-btn text-xs sm:text-sm font-extrabold uppercase tracking-wide shadow-md active:scale-95 inline-flex items-center gap-2"
              >
                <span>View Our 12 Technical Trades</span>
                <ArrowRight className="w-4 h-4 text-navy-950" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
