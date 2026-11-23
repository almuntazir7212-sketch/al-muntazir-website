"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Award, CheckCircle, Clock } from "lucide-react";
import Logo from "./Logo";
import { INSTITUTE_INFO, COURSES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t-4 border-gold pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-10 border-b border-navy-800">
          {/* Col 1: Institute Info */}
          <div className="space-y-4">
            <Logo size={56} showText={true} lightText={true} />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Al-Muntazir Technical Training & Trade Center Kot Addu is a government registered technical training institute committed to practical trade excellence and certified technical qualifications.
            </p>
            <p className="font-urdu text-xs text-gold/90 leading-relaxed" dir="rtl">
              کوٹ ادو میں فنی مہارت، عملی ٹریننگ اور تسلیم شدہ سرٹیفکیٹ کا بااعتماد ادارہ۔
            </p>
            <div className="pt-1 flex flex-col gap-1.5 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-gold" />
                Govt. Licence No: <strong className="text-white ml-1">{INSTITUTE_INFO.licenceNo}</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-gold" />
                Registered Trade Mark No: <strong className="text-white ml-1">{INSTITUTE_INFO.tradeMarkNo}</strong>
              </span>
              <span className="text-slate-400">
                Founder / Project Incharge: <strong className="text-white ml-1">{INSTITUTE_INFO.owner}</strong>
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links & Trust */}
          <div className="space-y-4">
            <h3 className="text-gold font-bold text-base uppercase tracking-wider font-heading flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-full" />
              Quick Links / صفحات
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-gold transition-colors flex items-center gap-2">
                  <span className="text-gold">›</span> Home / ہوم
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-gold transition-colors flex items-center gap-2">
                  <span className="text-gold">›</span> All 12 Courses / تمام کورسز
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors flex items-center gap-2">
                  <span className="text-gold">›</span> About / Bharosa / تعارف و اعتبار
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors flex items-center gap-2">
                  <span className="text-gold">›</span> Contact & Location / رابطہ
                </Link>
              </li>
            </ul>

            <div className="bg-navy-900 border border-navy-700/80 rounded-lg p-3 text-xs text-slate-300 space-y-1">
              <div className="font-semibold text-gold flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-gold" />
                Official QR Verification
              </div>
              <p className="text-[11px] text-slate-400">
                Every certificate issued by our center carries a unique QR code verifying directly via almuntazirttc.com.
              </p>
            </div>
          </div>

          {/* Col 3: Popular Courses */}
          <div className="space-y-4">
            <h3 className="text-gold font-bold text-base uppercase tracking-wider font-heading flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-full" />
              Technical Trades / کورسز
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5 text-xs">
              {COURSES.slice(0, 6).map((c) => (
                <Link
                  key={c.id}
                  href={`/courses#${c.id}`}
                  className="hover:text-gold transition-colors flex items-center justify-between py-1 border-b border-navy-900"
                >
                  <span className="font-medium">{c.name}</span>
                  <span className="text-gold-300 text-[11px] font-sans">({c.duration})</span>
                </Link>
              ))}
              <Link
                href="/courses"
                className="text-gold hover:text-gold-300 font-semibold text-xs pt-1 flex items-center gap-1"
              >
                View all 12 courses →
              </Link>
            </div>
          </div>

          {/* Col 4: Contact & Campus */}
          <div className="space-y-4">
            <h3 className="text-gold font-bold text-base uppercase tracking-wider font-heading flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-full" />
              Contact Us / رابطہ کی تفصیل
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-white block font-medium">Campus Address:</strong>
                  <span className="text-slate-400 text-xs">{INSTITUTE_INFO.address}</span>
                  <span className="font-urdu block text-[11px] text-gold/80 mt-0.5" dir="rtl">{INSTITUTE_INFO.addressUrdu}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Landline:</strong>
                  <a href={`tel:${INSTITUTE_INFO.phone.replace(/\s+/g, "")}`} className="hover:text-gold text-slate-300 text-xs">
                    {INSTITUTE_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-white block font-medium">WhatsApp Rabta:</strong>
                  <div className="flex flex-col gap-0.5 text-xs">
                    <a
                      href={`https://wa.me/${INSTITUTE_INFO.whatsapp1Clean}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-medium"
                    >
                      {INSTITUTE_INFO.whatsapp1} (Primary)
                    </a>
                    <a
                      href={`https://wa.me/${INSTITUTE_INFO.whatsapp2Clean}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-medium"
                    >
                      {INSTITUTE_INFO.whatsapp2}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                <div>
                  <span className="text-slate-400 text-xs">{INSTITUTE_INFO.timing}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div>
            <p>© {new Date().getFullYear()} {INSTITUTE_INFO.name}, Kot Addu. All Rights Reserved.</p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Govt. Licence No: {INSTITUTE_INFO.licenceNo} • Trade Mark No: {INSTITUTE_INFO.tradeMarkNo} • Domain: {INSTITUTE_INFO.domain}
            </p>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span className="font-urdu" dir="rtl">فنی تربیت برائے باوقار مستقبل</span>
            <span>•</span>
            <span className="text-gold">Kot Addu, Punjab, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
