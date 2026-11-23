"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { GalleryPhoto } from "@/types";

interface GalleryLightboxProps {
  photos: GalleryPhoto[];
  limit?: number;
}

export default function GalleryLightbox({ photos, limit }: GalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const displayPhotos = limit ? photos.slice(0, limit) : photos;

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % displayPhotos.length);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + displayPhotos.length) % displayPhotos.length);
  };

  return (
    <>
      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayPhotos.map((photo, index) => (
          <div
            key={photo.id || index}
            onClick={() => setSelectedIndex(index)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 bg-navy-900 border border-slate-200"
          >
            <Image
              src={photo.photo_url}
              alt={photo.caption || "Workshop practical training at Al-Muntazir TTC"}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Hover icon */}
            <div className="absolute top-3 right-3 p-2 rounded-full bg-navy-900/70 text-gold backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ZoomIn className="w-4 h-4" />
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 inset-x-0 p-4 text-white">
              <span className="text-xs font-semibold text-gold tracking-wide uppercase block">
                Workshop Practical
              </span>
              <p className="text-sm font-medium text-slate-100 leading-snug">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/95 backdrop-blur-md animate-fadeIn">
          {/* Close button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-navy-800 text-slate-200 hover:text-white hover:bg-navy-700 transition-colors z-50"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-navy-800/80 text-white hover:bg-gold hover:text-navy transition-colors z-50"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-navy-800/80 text-white hover:bg-gold hover:text-navy transition-colors z-50"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption */}
          <div className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center">
            <div className="relative w-full h-[65vh] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={displayPhotos[selectedIndex].photo_url}
                alt={displayPhotos[selectedIndex].caption}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-white font-medium text-base sm:text-lg">
                {displayPhotos[selectedIndex].caption}
              </p>
              <p className="text-xs text-gold-400 mt-1">
                Photo {selectedIndex + 1} of {displayPhotos.length} • Al-Muntazir Technical Training Center
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
