"use client";

import React, { useState } from "react";
import { X, Send, MessageCircle, AlertCircle, CheckCircle } from "lucide-react";
import { COURSES, INSTITUTE_INFO } from "@/lib/constants";

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string;
}

export default function AdmissionModal({
  isOpen,
  onClose,
  selectedCourse,
}: AdmissionModalProps) {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [phone, setPhone] = useState("");
  const [cnic, setCnic] = useState("");
  const [course, setCourse] = useState(selectedCourse || COURSES[0].name);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the WhatsApp message format specified in requirements
    // No database storage is performed.
    const text = 
      `*Online Admission Form — Al-Muntazir Technical Training Center Kot Addu*\n\n` +
      `*Student Name:* ${name.trim()}\n` +
      `*Father Name:* ${fatherName.trim()}\n` +
      `*Phone / Mobile:* ${phone.trim()}\n` +
      `*CNIC / B-Form:* ${cnic.trim()}\n` +
      `*Selected Course:* ${course}\n` +
      (message.trim() ? `*Additional Message:* ${message.trim()}\n\n` : `\n`) +
      `*Submission Date:* ${new Date().toLocaleDateString("en-PK")}`;

    const url = `https://wa.me/${INSTITUTE_INFO.whatsapp1Clean}?text=${encodeURIComponent(text)}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(url, "_blank");
      onClose();
      setSubmitted(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border-2 border-gold/40 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-navy px-6 py-4 text-white flex items-center justify-between border-b-2 border-gold">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
              <h2 className="text-lg font-bold font-heading text-white">Online Admission Form</h2>
            </div>
            <p className="font-urdu text-xs text-gold-300 mt-0.5" dir="rtl">
              آن لائن داخلہ فارم — المنتظر ٹیکنیکل ٹریننگ سینٹر
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="bg-gold-50 border border-gold-200 rounded-lg p-3 text-xs text-navy-900 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-gold-700 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-navy-900">
                Direct WhatsApp Submission:
              </p>
              <p className="text-slate-600">
                Form submit karte hi aapki details WhatsApp par hamare admission desk (+92 315 4037212) par send ho jayengi.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs sm:text-sm">
            {/* Student Name */}
            <div>
              <label className="block font-semibold text-navy mb-1">
                Student Name / طالب علم کا نام <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Muhammad Rizwan"
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-navy text-slate-900"
              />
            </div>

            {/* Father's Name */}
            <div>
              <label className="block font-semibold text-navy mb-1">
                Father's Name / والد کا نام <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
                placeholder="e.g. Ghulam Shabbir"
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-navy text-slate-900"
              />
            </div>

            {/* Phone & CNIC Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-navy mb-1">
                  Mobile / WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0315XXXXXXX"
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-navy text-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-navy mb-1">
                  CNIC / B-Form Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={cnic}
                  onChange={(e) => setCnic(e.target.value)}
                  placeholder="32304-XXXXXXX-X"
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-navy text-slate-900"
                />
              </div>
            </div>

            {/* Course Dropdown */}
            <div>
              <label className="block font-semibold text-navy mb-1">
                Select Course / ٹریڈ منتخب کریں <span className="text-red-500">*</span>
              </label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-navy text-slate-900 bg-white"
              >
                {COURSES.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name} — ({c.duration})
                  </option>
                ))}
              </select>
            </div>

            {/* Optional Message */}
            <div>
              <label className="block font-semibold text-navy mb-1">
                Message / کوئی سوال یا وضاحت (Optional)
              </label>
              <textarea
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Koi sawal ya information jo aap poochna chahein..."
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-navy text-slate-900"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={submitted}
                className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold flex items-center justify-center gap-2 shadow-lg transition-all transform hover:scale-[1.01] active:scale-[0.99] text-sm"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-white animate-bounce" />
                    <span>Opening WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5" />
                    <span>Submit & Send via WhatsApp (+92 315 4037212)</span>
                    <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
