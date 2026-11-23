"use client";

import React, { useState } from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  lightText?: boolean;
}

export default function Logo({
  className = "",
  size = 52,
  showText = true,
  lightText = true,
}: LogoProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Mark */}
      <div 
        className="relative flex-shrink-0 flex items-center justify-center rounded-full border-2 border-gold/70 bg-navy-900 shadow-md overflow-hidden"
        style={{ width: size, height: size }}
      >
        {!imageError ? (
          <Image
            src="/images/logo.png"
            alt="Al-Muntazir Technical Training & Trade Center Logo"
            width={size}
            height={size}
            className="object-contain p-1"
            onError={() => setImageError(true)}
            priority
          />
        ) : (
          /* High-fidelity fallback crest if user hasn't dropped logo.png into public/images/ yet */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-navy-900 to-navy-800 text-gold p-1 select-none">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor">
              {/* Outer decorative ring */}
              <circle cx="50" cy="50" r="46" stroke="#B08D2A" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="41" stroke="#B08D2A" strokeWidth="1" strokeDasharray="3 2" />
              {/* Center Emblem: Technical Torch & Wrench / Welder flame */}
              <path
                d="M50 20 L54 36 L66 38 L57 47 L60 62 L50 54 L40 62 L43 47 L34 38 L46 36 Z"
                fill="#B08D2A"
                opacity="0.9"
              />
              <path
                d="M32 72 Q50 64 68 72"
                stroke="#B08D2A"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <text
                x="50"
                y="85"
                textAnchor="middle"
                fontSize="11"
                fontWeight="bold"
                fill="#FFFFFF"
                letterSpacing="1"
              >
                AMTTC
              </text>
            </svg>
          </div>
        )}
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-heading font-bold tracking-tight text-sm sm:text-base md:text-lg leading-tight uppercase ${
              lightText ? "text-white" : "text-navy"
            }`}
          >
            Al-Muntazir
          </span>
          <span
            className={`text-[10px] sm:text-[11px] md:text-xs font-medium tracking-wide uppercase ${
              lightText ? "text-gold-200" : "text-gold-600"
            }`}
          >
            Technical Training & Trade Center
          </span>
          <span
            className={`font-urdu text-[11px] sm:text-xs font-semibold leading-none mt-0.5 ${
              lightText ? "text-gold" : "text-navy-700"
            }`}
            dir="rtl"
          >
            المنتظر ٹیکنیکل ٹریننگ سینٹر کوٹ ادو
          </span>
        </div>
      )}
    </div>
  );
}
