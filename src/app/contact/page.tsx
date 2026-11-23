"use client";

import React, { useState } from "react";
import { INSTITUTE_INFO, COURSES } from "@/lib/constants";
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(COURSES[0].name);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text =
      `*Contact Form Inquiry — Al-Muntazir Technical Training Center*\n\n` +
      `*Name:* ${name.trim()}\n` +
      `*Phone / WhatsApp:* ${phone.trim()}\n` +
      `*Interested Trade:* ${course}\n` +
      (message.trim() ? `*Message:* ${message.trim()}\n\n` : `\n`) +
      `*Date:* ${new Date().toLocaleDateString("en-PK")}`;

    const url = `https://wa.me/${INSTITUTE_INFO.whatsapp1Clean}?text=${encodeURIComponent(text)}`;

    setSent(true);
    setTimeout(() => {
      window.open(url, "_blank");
      setSent(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Banner */}
      <section className="bg-navy text-white py-14 sm:py-20 border-b-4 border-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B08D2A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/20 text-gold-300 text-xs font-semibold tracking-wider uppercase border border-gold/40">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>Campus & Admission Desk</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white">
              Contact & Location
            </h1>
            <p className="font-urdu text-xl sm:text-2xl font-bold text-gold" dir="rtl">
              رابطہ اور ادارہ کی لوکیشن — کوٹ ادو
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We welcome prospective students, parents, and company representatives to visit our campus in Kot Addu. For quick inquiries, feel free to call our landline or message on WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Details + Form */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column: Direct Contact Info & Timings */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-6">
              <h2 className="text-2xl font-bold font-heading text-navy">
                Institute Contact Details
              </h2>
              <p className="font-urdu text-sm font-semibold text-gold-700 -mt-3" dir="rtl">
                رابطہ کی مکمل تفصیلات
              </p>

              <div className="space-y-5 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <strong className="block text-navy font-semibold text-base">Campus Address:</strong>
                    <span className="text-slate-600 leading-relaxed block mt-0.5">
                      {INSTITUTE_INFO.address}
                    </span>
                    <span className="font-urdu text-xs text-gold-700 block mt-1" dir="rtl">
                      {INSTITUTE_INFO.addressUrdu}
                    </span>
                  </div>
                </div>

                {/* Landline */}
                <div className="flex items-start gap-3.5 border-t border-slate-100 pt-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <strong className="block text-navy font-semibold text-base">Landline Number:</strong>
                    <a
                      href={`tel:${INSTITUTE_INFO.phone.replace(/\s+/g, "")}`}
                      className="text-navy-700 hover:text-gold font-bold text-lg block mt-0.5"
                    >
                      {INSTITUTE_INFO.phone}
                    </a>
                    <span className="text-xs text-slate-500">Official office desk for inquiries</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5 border-t border-slate-100 pt-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <strong className="block text-navy font-semibold text-base">WhatsApp Support Desk:</strong>
                    <div className="flex flex-col gap-1 text-sm font-bold">
                      <a
                        href={`https://wa.me/${INSTITUTE_INFO.whatsapp1Clean}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700"
                      >
                        {INSTITUTE_INFO.whatsapp1} (Primary)
                      </a>
                      <a
                        href={`https://wa.me/${INSTITUTE_INFO.whatsapp2Clean}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700"
                      >
                        {INSTITUTE_INFO.whatsapp2}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3.5 border-t border-slate-100 pt-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <strong className="block text-navy font-semibold text-base">Campus Timings:</strong>
                    <span className="text-slate-600 block mt-0.5">{INSTITUTE_INFO.timing}</span>
                    <span className="text-xs text-slate-500">Sunday Closed (WhatsApp inquiries active)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-md overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 mb-2 text-xs font-semibold text-navy">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-gold" /> Kot Addu Campus Map Location
                </span>
                <span className="text-slate-400">Pull 88 Road</span>
              </div>
              <div className="relative w-full h-72 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <iframe
                  title="Al-Muntazir Technical Training Center Kot Addu Map Location"
                  src="https://maps.google.com/maps?q=Kot+Addu,+Punjab,+Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-gold/40 shadow-xl space-y-6">
              <div>
                <h2 className="text-2xl font-bold font-heading text-navy">
                  Send Us a Direct Message
                </h2>
                <p className="font-urdu text-sm font-semibold text-gold-700 mt-0.5" dir="rtl">
                  براہ راست پیغام بھیجیں — بذریعہ واٹس ایپ
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-2">
                  Fill in your details below. Clicking submit will automatically open WhatsApp with your message pre-written to <strong>{INSTITUTE_INFO.whatsapp1}</strong>.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block font-semibold text-navy mb-1">
                    Your Full Name / آپ کا نام <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Muhammad Rizwan"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold text-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-navy mb-1">
                    Mobile / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0315XXXXXXX"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold text-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-navy mb-1">
                    Trade Course of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold text-slate-900 bg-white"
                  >
                    {COURSES.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name} — ({c.duration})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-navy mb-1">
                    Message / Question (Optional)
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask about batch timings, hostel guidance, or course requirements..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold text-slate-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sent}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  {sent ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 animate-spin" />
                      <span>Opening WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5 fill-current" />
                      <span>Send to WhatsApp (+92 315 4037212)</span>
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </form>

              <div className="pt-2 text-center text-xs text-slate-500">
                <span>Immediate inquiries: Call landline </span>
                <a href={`tel:${INSTITUTE_INFO.phone.replace(/\s+/g, "")}`} className="font-bold text-navy hover:underline">
                  {INSTITUTE_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
