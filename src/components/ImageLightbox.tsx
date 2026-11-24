"use client";

import React from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  description: string;
  onClose: () => void;
}

export default function ImageLightbox({
  isOpen,
  imageUrl,
  title,
  description,
  onClose,
}: LightboxProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-navy-900 rounded-2xl overflow-hidden shadow-2xl border border-gold-brand/40"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-navy-950/80 hover:bg-gold hover:text-navy-950 text-white flex items-center justify-center transition-colors"
          aria-label="Close image preview"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative w-full h-[60vh] min-h-[300px] bg-navy-950">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="p-6 bg-navy-900 text-white border-t border-navy-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold font-heading text-white">{title}</h3>
            <p className="text-sm text-slate-300 mt-1">{description}</p>
          </div>
          <span className="inline-block px-3 py-1 rounded bg-gold/20 text-gold border border-gold/40 text-xs font-bold shrink-0">
            Al-Muntazir Practical Workshop
          </span>
        </div>
      </div>
    </div>
  );
}
