"use client";

import React, { useState } from "react";
import {
  Clock,
  MessageCircle,
  FileText,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { COURSES, Course } from "@/data/courses";
import { INSTITUTE } from "@/data/institute";
import { useAdmissionModal } from "@/components/AdmissionContext";
import { getWhatsAppUrl, buildCourseInquiryMessage } from "@/lib/utils";

export default function CoursesPage() {
  const { openModal } = useAdmissionModal();
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const toggleExpand = (courseId: string) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  return (
    <div className="w-full bg-white">
      {/* Page Header (Navy + Gold) */}
      <section className="bg-navy-950 text-white py-14 sm:py-20 border-b-2 border-gold-brand relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 opacity-95" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold-brand/40 text-gold-light text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Comprehensive Trade Curriculum</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            Certified Technical Courses
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-3 leading-relaxed">
            All 12 technical trades offered at Al-Muntazir Technical Training & Trade Center. Every program combines rigorous workshop practice with official QR-verified credentials.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {COURSES.map((course: Course) => {
              const isExpanded = expandedCourse === course.id;
              const whatsappUrl = getWhatsAppUrl(
                buildCourseInquiryMessage(course.name),
                INSTITUTE.primaryWhatsAppClean
              );

              return (
                <div
                  id={course.id}
                  key={course.id}
                  className="gold-border-card rounded-2xl p-6 flex flex-col justify-between scroll-mt-24"
                >
                  <div>
                    {/* Top Meta */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-900 text-gold text-xs font-extrabold uppercase tracking-wider">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{course.duration}</span>
                      </span>
                      {course.badge && (
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-gold/15 text-navy-900 border border-gold-brand/40">
                          {course.badge}
                        </span>
                      )}
                    </div>

                    {/* Course Title */}
                    <h2 className="text-xl sm:text-2xl font-black font-heading text-navy-900 tracking-tight mb-2">
                      {course.name}
                    </h2>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {course.shortDescription}
                    </p>

                    {/* Verified Subjects Accordion */}
                    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white mb-6">
                      <button
                        onClick={() => toggleExpand(course.id)}
                        className="w-full px-3.5 py-2.5 text-left flex items-center justify-between gap-2 bg-slate-50 hover:bg-slate-100/80 transition text-xs font-bold text-navy-900"
                      >
                        <span className="flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-gold-brand" />
                          <span>Curriculum & Subjects ({course.subjects.length})</span>
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-slate-500" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="p-3 bg-white border-t border-slate-100">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-56 overflow-y-auto pr-1">
                            {course.subjects.map((subj, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-1.5 text-[11px] text-slate-600 leading-snug"
                              >
                                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{subj}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions: Apply on WhatsApp + Online Form Modal */}
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-brandGreen hover:bg-brandGreen-hover text-white text-xs sm:text-sm font-extrabold uppercase tracking-wide flex items-center justify-center gap-2 shadow-sm transition active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Apply on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => openModal(course.name)}
                      className="w-full py-2 px-4 rounded-xl bg-navy-50 hover:bg-navy-100 text-navy-900 text-xs font-bold transition flex items-center justify-center gap-2"
                    >
                      <FileText className="w-3.5 h-3.5 text-gold-brand" />
                      <span>Fill Online Admission Form</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Trust Banner */}
          <div className="mt-16 bg-navy-900 text-white rounded-2xl p-8 sm:p-10 border border-gold-brand/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-xs uppercase font-extrabold tracking-wider text-gold flex items-center justify-center md:justify-start gap-2 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Certified Verification Guarantee</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
                Every trade awards a QR-verified certificate.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Authorized under Government Licence No. {INSTITUTE.licenceNo} and registered Trade Mark No. {INSTITUTE.tradeMarkNo}.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => openModal()}
                className="py-3 px-6 rounded-xl gold-gradient-btn text-xs sm:text-sm font-extrabold uppercase tracking-wide shadow-md active:scale-95"
              >
                Start Your Admission
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
