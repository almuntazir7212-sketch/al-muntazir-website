"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
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
    "Hello! I am visiting the Al-Muntazir Technical Training Center website and would like to ask a question.",
    INSTITUTE.primaryWhatsAppClean
  );

  return (
    <aside
      aria-label="Contact options"
      className={`fixed bottom-5 z-40 transition-all duration-500 ease-out ${
        isScrolling
          ? "left-4 sm:left-6 bottom-5 translate-x-0"
          : "right-4 sm:right-6 bottom-5 translate-x-0"
      }`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Admissions on WhatsApp"
        className="group flex items-center gap-2.5 p-3 sm:px-4 sm:py-3 rounded-full bg-brandGreen text-white font-bold text-xs sm:text-sm shadow-xl hover:bg-brandGreen-hover hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/30"
      >
        <MessageCircle className="w-6 h-6 animate-pulse" />
        <span className="hidden sm:inline font-extrabold tracking-wide drop-shadow-sm">
          WhatsApp Admission Desk
        </span>
      </a>
    </aside>
  );
}
