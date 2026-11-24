"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, ShieldCheck } from "lucide-react";
import { INSTITUTE } from "@/data/institute";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-lg border-b border-gold-brand/40 py-2.5"
          : "bg-navy-900 border-b border-gold-brand/30 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 lg:gap-4">
          {/* Logo & Institute Name: strictly single line, VIP style */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-2.5 shrink min-w-0 group focus:outline-none"
            title={INSTITUTE.fullNameWithCity}
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-gold-brand shadow-md bg-white shrink-0">
              <Image
                src="/images/logo.png"
                alt="Al-Muntazir Logo"
                fill
                sizes="(max-width: 640px) 40px, 44px"
                className="object-contain"
                priority
              />
            </div>
            <div className="whitespace-nowrap overflow-hidden min-w-0">
              <span className="block text-xs sm:text-sm md:text-base lg:text-lg font-black font-heading tracking-tight text-white group-hover:text-gold transition-colors truncate">
                Al-Muntazir
                <span className="text-gold-light font-normal text-xs sm:text-sm md:text-base ml-1.5">
                  Technical Training &amp; Trade Center
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation: items strictly on ONE line, never wrapped */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 shrink-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-bold tracking-wide transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-gold border-b-2 border-gold pb-0.5"
                      : "text-slate-200 hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons: Standard Blue Call + Green WhatsApp */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Standard Blue Call Button */}
            <a
              href={`tel:${INSTITUTE.phone}`}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-brandBlue hover:bg-brandBlue-hover text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 whitespace-nowrap"
              title="Call Kot Addu Landline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>

            {/* Standard Green WhatsApp Button */}
            <a
              href={getWhatsAppUrl("Hello, I would like to inquire about admissions at Al-Muntazir Technical Training Center.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-brandGreen hover:bg-brandGreen-hover text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 whitespace-nowrap"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-slate-200 hover:text-gold hover:bg-navy-800 transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950 border-t border-gold-brand/40 px-4 pt-3 pb-5 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-bold transition ${
                    isActive
                      ? "bg-navy-800 text-gold font-extrabold"
                      : "text-slate-200 hover:bg-navy-900 hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-navy-800/80 flex items-center justify-between text-xs text-slate-400 px-2">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-gold" />
              Licence No: {INSTITUTE.licenceNo}
            </span>
            <span className="text-slate-400">Trade Mark: {INSTITUTE.tradeMarkNo}</span>
          </div>
        </div>
      )}
    </header>
  );
}
