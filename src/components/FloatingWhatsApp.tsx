"use client";

import React, { useState, useEffect } from "react";
import { INSTITUTE } from "@/data/institute";
import { getWhatsAppUrl } from "@/lib/utils";

export default function FloatingWhatsApp() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 500); // 500ms after scrolling stops, return to bottom-right
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const whatsappUrl = getWhatsAppUrl(
    "Hello! I am visiting the Al-Muntazir Technical Training & Trade Center website and would like to ask a question.",
    INSTITUTE.primaryWhatsAppClean
  );

  return (
    <aside
      aria-label="Contact options"
      className={`fixed bottom-5 right-4 sm:right-6 z-40 transition-all duration-500 ease-out ${
        isScrolling
          ? "translate-x-28 opacity-0 pointer-events-none"
          : "translate-x-0 opacity-100 pointer-events-auto"
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Subtle expanding ripple rings */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] whatsapp-ripple-1 pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] whatsapp-ripple-2 pointer-events-none"
        />

        {/* Circular WhatsApp Button (Icon Only) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 active:scale-95 border-2 border-white/20"
        >
          <svg
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="currentColor"
            aria-hidden="true"
            className="drop-shadow-sm"
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.8-.37-4.02-1.07l-.29-.17-3.12.82.83-3.04-.19-.3a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.17-.48-.29" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
