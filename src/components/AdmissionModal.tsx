"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { useAdmissionModal } from "./AdmissionContext";
import { COURSES } from "@/data/courses";
import { INSTITUTE } from "@/data/institute";
import { buildAdmissionMessage, getWhatsAppUrl } from "@/lib/utils";

export default function AdmissionModal() {
  const { isOpen, selectedCourse, closeModal } = useAdmissionModal();
  const [fullName, setFullName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [phone, setPhone] = useState("");
  const [cnic, setCnic] = useState("");
  const [course, setCourse] = useState(selectedCourse || "Multi Welder");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync course when selectedCourse changes from outside
  React.useEffect(() => {
    if (selectedCourse) {
      setCourse(selectedCourse);
    }
  }, [selectedCourse]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !course) return;

    const formattedMessage = buildAdmissionMessage({
      fullName,
      fatherName,
      phone,
      cnic,
      course,
      message,
    });

    const whatsappUrl = getWhatsAppUrl(formattedMessage, INSTITUTE.primaryWhatsAppClean);
    setIsSubmitted(true);

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setIsSubmitted(false);
      closeModal();
      setFullName("");
      setFatherName("");
      setPhone("");
      setCnic("");
      setMessage("");
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-gold-border/60"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Strip */}
        <div className="bg-navy-900 px-6 py-5 text-white relative border-b-2 border-gold-brand flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-block px-2 py-0.5 text-[11px] font-extrabold uppercase tracking-wider rounded bg-gold-gradient text-navy-950">
                Official Application
              </span>
              <span className="text-xs text-slate-300">Licence #{INSTITUTE.licenceNo}</span>
            </div>
            <h3 className="text-xl font-extrabold font-heading text-white tracking-tight">
              Apply for Admission
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Submit your inquiry directly to our official admissions desk on WhatsApp.
            </p>
          </div>
          <button
            onClick={closeModal}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1">
                Student Full Name *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Talha Hussain"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-gold-brand focus:ring-2 focus:ring-gold-brand/20 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1">
                Father&apos;s Name *
              </label>
              <input
                type="text"
                required
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
                placeholder="e.g. Ghulam Hussain"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-gold-brand focus:ring-2 focus:ring-gold-brand/20 outline-none transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1">
                Mobile / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 03154037212"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-gold-brand focus:ring-2 focus:ring-gold-brand/20 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1">
                CNIC Number (Optional)
              </label>
              <input
                type="text"
                value={cnic}
                onChange={(e) => setCnic(e.target.value)}
                placeholder="e.g. 36302-2480530-9"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-gold-brand focus:ring-2 focus:ring-gold-brand/20 outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1">
              Select Technical Course *
            </label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-gold-brand focus:ring-2 focus:ring-gold-brand/20 outline-none transition bg-white font-medium text-navy-900"
            >
              {COURSES.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name} — {c.duration}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1">
              Questions or Notes (Optional)
            </label>
            <textarea
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. Inquiring about next batch start date or practical workshop timings"
              className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:border-gold-brand focus:ring-2 focus:ring-gold-brand/20 outline-none transition resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full py-3 px-4 rounded-xl gold-gradient-btn flex items-center justify-center gap-2 text-sm font-extrabold uppercase tracking-wider shadow-lg transition active:scale-[0.98]"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-800 animate-bounce" />
                  <span>Connecting to WhatsApp...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-navy-900" />
                  <span>Submit Admission Form via WhatsApp</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Direct WhatsApp transmission to +92 315 4037212. Zero database storage.</span>
          </div>
        </form>
      </div>
    </div>
  );
}
