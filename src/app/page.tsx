"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  MessageCircle,
  FileText,
  Wrench,
  QrCode,
  CheckCircle2,
  Phone,
  Clock,
  Briefcase,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { INSTITUTE } from "@/data/institute";
import { COURSES } from "@/data/courses";
import { STATS } from "@/data/stats";
import { INITIAL_SUCCESS_STORIES } from "@/data/stories";
import { INITIAL_GALLERY_ITEMS, GalleryItem } from "@/data/gallery";
import { FAQS } from "@/data/faq";
import { useAdmissionModal } from "@/components/AdmissionContext";
import ImageLightbox from "@/components/ImageLightbox";
import { getWhatsAppUrl } from "@/lib/utils";

export default function HomePage() {
  const { openModal } = useAdmissionModal();
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="w-full">
      {/* =========================================================
          SECTION 2: HERO (PREMIUM VIP NAVY + WELDER OVERLAY)
      ========================================================= */}
      <section className="relative bg-navy-950 text-white overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-24 border-b-2 border-gold-brand">
        {/* Ambient Dark Navy & Gold Radial Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 opacity-95" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-navy-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Industrial Welder Sparkle Background Texture */}
        <div
          className="absolute inset-0 opacity-15 mix-blend-overlay bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#e3b93e 1px, transparent 1px), radial-gradient(#0B2C4D 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            backgroundPosition: "0 0, 16px 16px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Gold Kicker: Strictly visible, never clipped under header */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold-brand/40 text-gold-light text-xs font-black tracking-widest uppercase mb-5 shadow-sm animate-fadeIn">
              <Sparkles className="w-3.5 h-3.5 text-gold animate-spin-slow" />
              <span>ADMISSIONS OPEN • KOT ADDU</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-[10px] text-slate-300 font-semibold hidden xs:inline">
                Licence #{INSTITUTE.licenceNo}
              </span>
            </div>

            {/* Big White Bold Heading (Archivo 800-900) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-[1.12] mb-5">
              Learn a Skill. <br />
              <span className="text-transparent bg-clip-text bg-gold-gradient">
                Build Your Future.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-lg text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
              12 technical courses — every course ends with a certificate carrying a QR code.
            </p>

            {/* Hero Buttons: Compact, side-by-side, mobile-optimized */}
            <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 max-w-md mx-auto">
              {/* Gold "Admission Form" Button */}
              <button
                onClick={() => openModal()}
                className="flex-1 py-2.5 px-3.5 sm:py-3.5 sm:px-6 rounded-xl gold-gradient-btn text-xs sm:text-sm font-extrabold uppercase tracking-wide flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg active:scale-95 whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-navy-950 shrink-0" />
                <span>Admission Form</span>
              </button>

              {/* Green "Chat on WhatsApp" Button */}
              <a
                href={getWhatsAppUrl("Hello, I would like to inquire about admissions at Al-Muntazir Technical Training Center.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3.5 sm:py-3.5 sm:px-6 rounded-xl bg-brandGreen hover:bg-brandGreen-hover text-white text-xs sm:text-sm font-extrabold uppercase tracking-wide flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg active:scale-95 transition whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-white shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold" />
                Government Licensed: {INSTITUTE.licenceNo}
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-gold" />
                Trade Mark No: {INSTITUTE.tradeMarkNo}
              </span>
              <span className="flex items-center gap-1.5">
                <QrCode className="w-4 h-4 text-gold" />
                Online QR Verification
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: STATS STRIP (WHITE BACKGROUND, NAVY TEXT)
          Mobile rule: All 4 stats visible in a 2x2 grid, nothing hidden
      ========================================================= */}
      <section className="bg-white border-b border-slate-200 py-6 sm:py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y-0 sm:divide-x sm:divide-slate-200">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className={`text-center px-2 py-2 ${
                  idx % 2 === 1 ? "border-l border-slate-200 lg:border-l-0" : ""
                }`}
              >
                <p className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-navy-800 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-extrabold text-navy-950 uppercase tracking-wider mt-0.5">
                  {stat.label}
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                  {stat.highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: POPULAR COURSES WITH DURATIONS (CHIPS + LINK)
      ========================================================= */}
      <section className="bg-slate-50/70 py-12 sm:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-3 py-1 text-[11px] font-black uppercase tracking-widest rounded-full bg-gold/15 text-navy-800 border border-gold-brand/40 mb-2">
              Vocational Trade Catalog
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-navy-900 tracking-tight">
              Popular Technical Trades
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
              Explore our intensive market-aligned trade programs. Every course focuses on practical workshop skills.
            </p>
          </div>

          {/* Course Chips Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {COURSES.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl p-3.5 border border-slate-200/80 hover:border-gold-brand hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-extrabold text-navy-800 uppercase tracking-wider">
                      {course.duration}
                    </span>
                    {course.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-gold/15 text-navy-900 border border-gold/40">
                        {course.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold font-heading text-navy-900 group-hover:text-gold-brand transition-colors">
                    {course.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">
                    {course.shortDescription}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => openModal(course.name)}
                    className="text-[11px] font-bold text-navy-700 hover:text-navy-950 flex items-center gap-1"
                  >
                    <span>Apply</span>
                    <ArrowRight className="w-3 h-3 text-gold-brand" />
                  </button>
                  <a
                    href={getWhatsAppUrl(`Hello, I want to apply for the *${course.name}* course.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-brandGreen hover:underline flex items-center gap-1"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-navy-800 hover:bg-navy-900 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md transition group"
            >
              <span>Explore All 12 Courses & Full Syllabi</span>
              <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: WHY AL-MUNTAZIR (3 VIP CARDS WITH GOLD TOP BORDER)
      ========================================================= */}
      <section className="bg-white py-14 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 text-[11px] font-black uppercase tracking-widest rounded-full bg-gold/15 text-navy-800 border border-gold-brand/40 mb-2">
              Institution Credibility
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-navy-900 tracking-tight">
              Why Al-Muntazir Technical Training &amp; Trade Center
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
              We provide recognized credentials and authentic technical expertise that employers rely upon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: A Licensed Institute */}
            <div className="gold-border-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold flex items-center justify-center mb-5 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black font-heading text-navy-900 mb-2">
                  A Licensed Institute
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Operated legally and transparently with Government <strong>Licence No. {INSTITUTE.licenceNo}</strong> and registered <strong>Trade Mark No. {INSTITUTE.tradeMarkNo}</strong>. Full institutional integrity and recognized legal standing.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-navy-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Verified Official Center in Kot Addu</span>
              </div>
            </div>

            {/* Card 2: Practical Training */}
            <div className="gold-border-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold flex items-center justify-center mb-5 shadow-sm">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black font-heading text-navy-900 mb-2">
                  Practical Workshop Training
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Students learn by doing real physical work in our fully-equipped workshop. From high-pressure pipe welding booths to industrial 3-phase switchgear and control wiring benches.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-navy-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Industry Grade Tools & Materials</span>
              </div>
            </div>

            {/* Card 3: QR Certificate */}
            <div className="gold-border-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold flex items-center justify-center mb-5 shadow-sm">
                  <QrCode className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black font-heading text-navy-900 mb-2">
                  QR-Verified Certificate
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every certificate carries a secure online QR code. Employers and verification agencies can instantly confirm authenticity and course transcript details directly on our live website.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-navy-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Tamper-proof Digital Verification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: SUCCESS STORIES (GRADUATE SHOWCASE)
      ========================================================= */}
      <section id="stories" className="bg-slate-50 py-14 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 text-[11px] font-black uppercase tracking-widest rounded-full bg-gold/15 text-navy-800 border border-gold-brand/40 mb-2">
              Graduate Showcase
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-navy-900 tracking-tight">
              Student Success Stories
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
              See where our certified graduates have taken their practical technical training into demanding industrial roles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INITIAL_SUCCESS_STORIES.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-navy-900 text-gold font-bold flex items-center justify-center text-sm border-2 border-gold-brand shrink-0">
                      {story.studentName.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold font-heading text-navy-950">
                        {story.studentName}
                      </h3>
                      <p className="text-[11px] text-gold-brand font-bold">
                        {story.courseName}
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-2.5 mb-3 border border-slate-100 flex items-start gap-2">
                    <Briefcase className="w-4 h-4 text-navy-700 shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-navy-900">
                      {story.companyOrJob}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &ldquo;{story.story}&rdquo;
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{story.batchYear}</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Passout
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 7: GALLERY PREVIEW (WORKSHOP PHOTOS + LIGHTBOX)
      ========================================================= */}
      <section id="gallery" className="bg-white py-14 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 text-[11px] font-black uppercase tracking-widest rounded-full bg-gold/15 text-navy-800 border border-gold-brand/40 mb-2">
              Workshop Environment
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-navy-900 tracking-tight">
              Practical Training Workshop Gallery
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
              Take an inside look at our active training bays, welding booths, and electrical testing setups in Kot Addu. Click any photo to enlarge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INITIAL_GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all border border-slate-200"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-gold/20 text-gold-light border border-gold/30 mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-extrabold font-heading text-white group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 8: ADMISSION PROCESS (4 STEPS)
      ========================================================= */}
      <section id="admission-process" className="bg-slate-50 py-14 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 text-[11px] font-black uppercase tracking-widest rounded-full bg-gold/15 text-navy-800 border border-gold-brand/40 mb-2">
              Simple 4-Step Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-navy-900 tracking-tight">
              How to Secure Admission
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
              Join the next upcoming training batch with our straightforward registration procedure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 relative shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-full bg-navy-900 text-gold font-extrabold flex items-center justify-center text-base mb-4 border border-gold-brand">
                1
              </div>
              <h3 className="text-base font-extrabold font-heading text-navy-900 mb-1.5">
                Get in Touch
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Call our landline ({INSTITUTE.phone}) or message us on WhatsApp (+92 315 4037212) to inquire about available course seats.
              </p>
              <a
                href={getWhatsAppUrl("Hello, I want to inquire about upcoming batch admissions.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-brandGreen hover:underline inline-flex items-center gap-1"
              >
                <span>Message on WhatsApp</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 relative shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-full bg-navy-900 text-gold font-extrabold flex items-center justify-center text-base mb-4 border border-gold-brand">
                2
              </div>
              <h3 className="text-base font-extrabold font-heading text-navy-900 mb-1.5">
                Submit Documents
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Bring or submit a copy of your National CNIC / B-Form along with passport-sized photographs to the campus office.
              </p>
              <span className="text-[11px] font-semibold text-slate-500">
                Prerequisites verified on visit
              </span>
            </div>

            {/* Step 3: Direct Button to open Admission Form */}
            <div className="bg-white rounded-2xl p-6 border-2 border-gold-brand/80 relative shadow-md hover:shadow-xl transition bg-gold-surface/30">
              <div className="w-10 h-10 rounded-full bg-gold-gradient text-navy-950 font-extrabold flex items-center justify-center text-base mb-4 shadow-sm">
                3
              </div>
              <h3 className="text-base font-extrabold font-heading text-navy-900 mb-1.5">
                Fill the Form
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Complete the admission form online right now or in person at our Kot Addu registration desk.
              </p>
              <button
                onClick={() => openModal()}
                className="w-full py-2 px-3 rounded-lg gold-gradient-btn text-xs font-extrabold uppercase tracking-wide flex items-center justify-center gap-1.5"
              >
                <span>Fill Online Form Now</span>
                <ArrowRight className="w-3 h-3 text-navy-950" />
              </button>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 relative shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-full bg-navy-900 text-gold font-extrabold flex items-center justify-center text-base mb-4 border border-gold-brand">
                4
              </div>
              <h3 className="text-base font-extrabold font-heading text-navy-900 mb-1.5">
                Classes Begin
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Receive your student roll number and commence direct hands-on workshop training under senior instructors.
              </p>
              <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Practical Training Starts
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 9: FAQ PREVIEW (COMMON QUESTIONS, NO FEES)
      ========================================================= */}
      <section id="faq" className="bg-white py-14 sm:py-20 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-3 py-1 text-[11px] font-black uppercase tracking-widest rounded-full bg-gold/15 text-navy-800 border border-gold-brand/40 mb-2">
              Helpful Information
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-navy-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
              Common questions answered clearly. For specific batch schedules, contact our admissions desk.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 overflow-hidden transition-all bg-white"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                  >
                    <span className="text-sm sm:text-base font-extrabold font-heading text-navy-900">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gold-brand shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 10: CONTACT STRIP + ACTION CALLOUT
      ========================================================= */}
      <section className="bg-navy-900 text-white py-12 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 p-6 sm:p-10 rounded-2xl border border-gold-brand/50 shadow-xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>Visit Campus Today</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
                Ready to Master an Industrial Technical Skill?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                Campus: 88 Road, Near Benazir Income Support Office, Building Old Nadra Office, Kot Addu. Call +92 66 2240999 or message on WhatsApp.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => openModal()}
                className="py-3 px-5 rounded-xl gold-gradient-btn text-xs sm:text-sm font-extrabold uppercase tracking-wide shadow-md active:scale-95"
              >
                Apply for Admission
              </button>
              <Link
                href="/contact"
                className="py-3 px-5 rounded-xl bg-navy-800 hover:bg-navy-700 text-white text-xs sm:text-sm font-bold border border-white/20 transition active:scale-95"
              >
                View Campus & Map
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Lightbox for Gallery */}
      {selectedImage && (
        <ImageLightbox
          isOpen={!!selectedImage}
          imageUrl={selectedImage.imageUrl}
          title={selectedImage.title}
          description={selectedImage.description}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}
