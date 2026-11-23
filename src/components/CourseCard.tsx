"use client";

import React, { useState } from "react";
import { Clock, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { Course } from "@/types";
import { getWhatsAppAdmissionUrl } from "@/lib/constants";
import AdmissionModal from "./AdmissionModal";

interface CourseCardProps {
  course: Course;
  priority?: boolean;
}

export default function CourseCard({ course, priority = false }: CourseCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        id={course.id}
        className={`group relative bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-navy-card hover:shadow-xl hover:-translate-y-1 ${
          priority
            ? "border-gold/60 ring-2 ring-gold/20"
            : "border-slate-200 hover:border-gold/50"
        }`}
      >
        {/* Top Accent Strip */}
        <div className="h-2 w-full bg-gradient-to-r from-navy to-gold" />

        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div>
            {/* Category & Duration Badges */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-navy-50 text-navy-800 border border-navy-100">
                <ShieldCheck className="w-3 h-3 text-gold" />
                {course.category}
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gold-50 text-gold-800 border border-gold-200">
                <Clock className="w-3.5 h-3.5 text-gold-600" />
                <span>{course.duration}</span>
                <span className="font-urdu text-[11px] text-gold-700 ml-1" dir="rtl">{course.durationUrdu}</span>
              </span>
            </div>

            {/* Course Title (English bold + Urdu) */}
            <h3 className="text-xl font-bold text-navy group-hover:text-navy-700 font-heading tracking-tight">
              {course.name}
            </h3>
            <p className="font-urdu text-sm font-semibold text-gold-700 mt-0.5" dir="rtl">
              {course.nameUrdu}
            </p>

            {/* Description */}
            <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
              {course.description}
            </p>

            {/* Practical Modules preview */}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Core Workshop Modules:
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                {course.subjects.slice(0, 4).map((sub, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="truncate">{sub}</span>
                  </li>
                ))}
              </ul>
              {course.subjects.length > 4 && (
                <p className="text-[11px] text-slate-400 mt-1 italic">
                  + 16 more technical subjects in syllabus
                </p>
              )}
            </div>
          </div>

          {/* Action Buttons: WhatsApp Direct & Admission Form */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
            <a
              href={getWhatsAppAdmissionUrl(course.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Apply on WhatsApp</span>
            </a>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-navy-50 hover:bg-gold-50 text-navy-800 hover:text-navy font-semibold text-xs sm:text-sm border border-slate-200 transition-all"
            >
              <span>Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <AdmissionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedCourse={course.name}
      />
    </>
  );
}
