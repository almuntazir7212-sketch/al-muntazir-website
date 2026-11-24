"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Building,
} from "lucide-react";
import { INSTITUTE } from "@/data/institute";
import { COURSES } from "@/data/courses";
import { buildContactMessage, getWhatsAppUrl } from "@/lib/utils";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(COURSES[0].name);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const formattedMessage = buildContactMessage({
      fullName,
      phone,
      course,
      message,
    });

    const whatsappUrl = getWhatsAppUrl(formattedMessage, INSTITUTE.primaryWhatsAppClean);
    setSubmitted(true);
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setSubmitted(false);
      setFullName("");
      setPhone("");
      setMessage("");
    }, 1500);
  };

  return (
    <div className="w-full bg-white">
      {/* Page Header (Navy + Gold) */}
      <section className="bg-navy-950 text-white py-14 sm:py-20 border-b-2 border-gold-brand relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 opacity-95" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold-brand/40 text-gold-light text-xs font-bold uppercase tracking-widest mb-3">
            <Building className="w-3.5 h-3.5 text-gold" />
            <span>Kot Addu Campus Desk</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            Contact & Location
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-3 leading-relaxed">
            Reach out to our admissions team, schedule a workshop walkthrough, or visit our campus in Kot Addu.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Contact Cards & Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-black font-heading text-navy-900 mb-1">
                    Campus Address
                  </h3>
                  <div className="flex items-start gap-3 mt-3 text-xs sm:text-sm text-slate-600">
                    <MapPin className="w-5 h-5 text-gold-brand shrink-0 mt-0.5" />
                    <span>{INSTITUTE.address}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-lg font-black font-heading text-navy-900 mb-3">
                    Telephone & WhatsApp
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm">
                    {/* Landline */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-navy-50 flex items-center justify-center text-navy-800 shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400 font-semibold uppercase">Landline (Kot Addu)</p>
                        <a href={`tel:${INSTITUTE.phone}`} className="font-extrabold text-navy-900 hover:text-gold-brand">
                          {INSTITUTE.phone}
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp 1 */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400 font-semibold uppercase">Primary Admissions WhatsApp</p>
                        <a
                          href={getWhatsAppUrl("Hello, I am contacting you from your official website.", INSTITUTE.primaryWhatsAppClean)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-extrabold text-navy-900 hover:text-brandGreen"
                        >
                          {INSTITUTE.primaryWhatsApp}
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp 2 */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400 font-semibold uppercase">Secondary WhatsApp</p>
                        <a
                          href={`https://wa.me/${INSTITUTE.secondaryWhatsAppClean}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-extrabold text-navy-900 hover:text-brandGreen"
                        >
                          {INSTITUTE.secondaryWhatsApp}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Institute Timings */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-lg font-black font-heading text-navy-900 mb-2">
                    Training Hours
                  </h3>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                    <Clock className="w-4 h-4 text-gold-brand shrink-0 mt-0.5" />
                    <span>{INSTITUTE.timingsPlaceholder}</span>
                  </div>
                </div>

                {/* Official Registrations */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Licence: <strong>{INSTITUTE.licenceNo}</strong></span>
                  <span>Trade Mark: <strong>{INSTITUTE.tradeMarkNo}</strong></span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <div className="mb-6">
                  <span className="text-[11px] font-black uppercase tracking-wider text-gold-brand">
                    Direct Inquiry Form
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black font-heading text-navy-900 mt-1">
                    Send an Inquiry to Our Desk
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Filling this form generates an instant formatted inquiry on WhatsApp.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1">
                        Your Full Name *
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
                        Phone / WhatsApp *
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
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1">
                      Interested Technical Trade *
                    </label>
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-gold-brand focus:ring-2 focus:ring-gold-brand/20 outline-none transition bg-white font-medium text-navy-900"
                    >
                      {COURSES.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name} ({c.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1">
                      Your Message or Inquiry
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask about batch timings, workshop equipment, or certificate details..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-gold-brand focus:ring-2 focus:ring-gold-brand/20 outline-none transition resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitted}
                      className="w-full py-3.5 px-6 rounded-xl gold-gradient-btn flex items-center justify-center gap-2 text-sm font-extrabold uppercase tracking-wide shadow-md transition active:scale-[0.98]"
                    >
                      {submitted ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-emerald-800 animate-bounce" />
                          <span>Forwarding to WhatsApp...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-navy-950" />
                          <span>Submit via WhatsApp</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Inquiry delivers directly to admissions desk +92 315 4037212.</span>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Google Maps Embed Section */}
          <div className="mt-12 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-black font-heading text-navy-900">
                  Campus Location Map
                </h3>
                <p className="text-xs text-slate-500">
                  Pull 88 Road, Near Benazir Income Support Office, Building Old Nadra Office, Kot Addu
                </p>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  "Al-Muntazir Technical Training Center Kot Addu 88 Road"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-navy-800 hover:text-gold-brand underline hidden sm:inline"
              >
                Open in Google Maps
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full h-80 sm:h-96 relative bg-slate-100">
              <iframe
                title="Al-Muntazir Technical Training Center Map"
                src="https://maps.google.com/maps?q=Kot%20Addu%2088%20Road&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
