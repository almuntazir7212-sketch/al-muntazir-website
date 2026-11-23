"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { INSTITUTE_INFO } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      {/* Tooltip on hover / small screen */}
      {showTooltip && (
        <div className="bg-navy-900 text-white text-xs py-2 px-3.5 rounded-lg shadow-xl border border-gold/40 flex items-center gap-2 animate-fadeIn max-w-[210px]">
          <div className="space-y-0.5 text-left">
            <p className="font-semibold text-gold">Admission Inquiry?</p>
            <p className="font-urdu text-[11px] text-slate-200" dir="rtl">
              واٹس ایپ پر فوری رابطہ کریں
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/${INSTITUTE_INFO.whatsapp1Clean}?text=${encodeURIComponent(
          "Assalam o Alaikum! Mujhe Al-Muntazir Technical Training Center Kot Addu ke courses aur admission ke bare mein maloomat chahiye."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 active:scale-95 border-2 border-white focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat on WhatsApp +92 315 4037212"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping group-hover:opacity-60" />

        <MessageCircle className="w-8 h-8 relative z-10 fill-current" />
      </a>
    </div>
  );
}
