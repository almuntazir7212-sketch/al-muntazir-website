"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, Award, MapPin } from "lucide-react";
import Logo from "./Logo";
import { INSTITUTE_INFO } from "@/lib/constants";
import AdmissionModal from "./AdmissionModal";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);

  const navLinks = [
    { name: "Home", urdu: "ہوم", href: "/" },
    { name: "Courses", urdu: "کورسز", href: "/courses" },
    { name: "About / Bharosa", urdu: "ہمارے بارے میں", href: "/about" },
    { name: "Contact", urdu: "رابطہ", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-navy border-b border-navy-700 shadow-lg">
        {/* Top Info Strip */}
        <div className="bg-navy-950 text-slate-300 text-xs py-1.5 px-4 sm:px-6 border-b border-navy-800">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-4 text-[11px] sm:text-xs">
              <span className="flex items-center gap-1.5 text-gold-300">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span className="hidden sm:inline">88 Road, Near Benazir Office,</span> Kot Addu
              </span>
              <span className="hidden md:flex items-center gap-1 text-slate-300 border-l border-navy-700 pl-4">
                <Award className="w-3.5 h-3.5 text-gold" />
                Licence: <strong className="text-white ml-0.5">{INSTITUTE_INFO.licenceNo}</strong>
              </span>
              <span className="hidden lg:flex items-center gap-1 text-slate-300 border-l border-navy-700 pl-4">
                Trade Mark No: <strong className="text-white ml-0.5">{INSTITUTE_INFO.tradeMarkNo}</strong>
              </span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
              <a
                href={`tel:${INSTITUTE_INFO.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-1 hover:text-gold transition-colors font-semibold text-white"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>{INSTITUTE_INFO.phone}</span>
              </a>
              <a
                href={`https://wa.me/${INSTITUTE_INFO.whatsapp1Clean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium border-l border-navy-700 pl-3"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">WhatsApp:</span>
                <span>{INSTITUTE_INFO.whatsapp1}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between gap-4">
          {/* Logo Placeholder / Brand */}
          <Link href="/" className="hover:opacity-95 transition-opacity">
            <Logo size={46} showText={true} lightText={true} />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all flex flex-col items-center ${
                    active
                      ? "bg-navy-700 text-gold shadow-inner border border-gold/30 font-semibold"
                      : "text-slate-100 hover:text-gold hover:bg-navy-800"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="font-urdu text-[11px] -mt-0.5 opacity-80" dir="rtl">{link.urdu}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Gold Admission Open Badge/Button */}
            <button
              onClick={() => setAdmissionModalOpen(true)}
              className="relative group bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm shadow-gold-glow flex items-center gap-1.5 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-700 animate-ping" />
              <span>Admission Open</span>
              <span className="font-urdu text-xs font-semibold mr-0.5" dir="rtl">داخلہ جاری</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-200 hover:text-gold rounded-lg hover:bg-navy-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-navy-900 border-t border-navy-700 px-4 pt-3 pb-5 space-y-2 animate-fadeIn">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium ${
                      active
                        ? "bg-navy-700 text-gold border-l-4 border-gold"
                        : "text-slate-200 hover:bg-navy-800 hover:text-gold"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="font-urdu text-xs text-gold/80" dir="rtl">{link.urdu}</span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-navy-800 space-y-2">
              <a
                href={`tel:${INSTITUTE_INFO.phone.replace(/\s+/g, "")}`}
                className="w-full flex items-center justify-center gap-2 bg-navy-800 text-white hover:text-gold px-4 py-2.5 rounded-lg text-sm font-semibold border border-navy-700"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call: {INSTITUTE_INFO.phone}</span>
              </a>
              <a
                href={`https://wa.me/${INSTITUTE_INFO.whatsapp1Clean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {INSTITUTE_INFO.whatsapp1}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Online Admission Modal */}
      <AdmissionModal
        isOpen={admissionModalOpen}
        onClose={() => setAdmissionModalOpen(false)}
      />
    </>
  );
}
