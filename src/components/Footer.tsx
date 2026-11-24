import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, MapPin, Award, CheckCircle, ExternalLink } from "lucide-react";
import { INSTITUTE } from "@/data/institute";
import { COURSES } from "@/data/courses";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t-2 border-gold-brand">
      {/* Top Banner with Trust Highlights */}
      <div className="bg-navy-900 border-b border-navy-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold-brand flex items-center justify-center text-gold shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase font-extrabold tracking-wider text-gold">Government Licensed</p>
                <p className="text-sm font-bold text-white">Licence No: {INSTITUTE.licenceNo}</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold-brand flex items-center justify-center text-gold shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase font-extrabold tracking-wider text-gold">Registered Trademark</p>
                <p className="text-sm font-bold text-white">Trade Mark No: {INSTITUTE.tradeMarkNo}</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold-brand flex items-center justify-center text-gold shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase font-extrabold tracking-wider text-gold">Main Campus Kot Addu</p>
                <p className="text-sm font-bold text-white">88 Road, Near Benazir Office</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Institute Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold-brand bg-white shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Al-Muntazir Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-white font-extrabold font-heading text-base leading-tight">
                  AL-MUNTAZIR
                </h4>
                <p className="text-xs text-gold font-medium">Technical Training & Trade Center</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-300">
              Premier technical vocational training institute in Kot Addu. Providing world-class practical workshop training in certified industrial trades under the supervision of Haji Imdad Hussain.
            </p>
            <div className="pt-2 text-xs space-y-1 text-slate-400">
              <p><strong className="text-slate-200">Owner:</strong> {INSTITUTE.owner}</p>
              <p><strong className="text-slate-200">Licence No:</strong> {INSTITUTE.licenceNo}</p>
              <p><strong className="text-slate-200">Trade Mark No:</strong> {INSTITUTE.tradeMarkNo}</p>
            </div>
          </div>

          {/* Col 2: Quick Links & Sections */}
          <div>
            <h4 className="text-white font-extrabold font-heading text-sm uppercase tracking-wider mb-4 border-l-2 border-gold-brand pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <Link href="/" className="hover:text-gold transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-gold transition">
                  All 12 Technical Courses
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition">
                  About the Institute & Leadership
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition">
                  Contact & Campus Map
                </Link>
              </li>
              <li className="pt-2 border-t border-navy-800">
                <Link href="/#stories" className="text-slate-300 hover:text-gold transition flex items-center gap-1">
                  <span>Success Stories</span>
                  <ExternalLink className="w-3 h-3 text-gold" />
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="text-slate-300 hover:text-gold transition flex items-center gap-1">
                  <span>Workshop Gallery</span>
                  <ExternalLink className="w-3 h-3 text-gold" />
                </Link>
              </li>
              <li>
                <Link href="/#admission-process" className="text-slate-300 hover:text-gold transition flex items-center gap-1">
                  <span>Admission Process</span>
                  <ExternalLink className="w-3 h-3 text-gold" />
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-slate-300 hover:text-gold transition flex items-center gap-1">
                  <span>Frequently Asked Questions</span>
                  <ExternalLink className="w-3 h-3 text-gold" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Courses */}
          <div>
            <h4 className="text-white font-extrabold font-heading text-sm uppercase tracking-wider mb-4 border-l-2 border-gold-brand pl-2.5">
              Technical Trades
            </h4>
            <ul className="space-y-2 text-xs">
              {COURSES.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/courses#${c.id}`}
                    className="hover:text-gold transition flex items-center justify-between"
                  >
                    <span>{c.name}</span>
                    <span className="text-[11px] text-slate-400 font-medium">{c.duration}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/courses" className="text-gold font-bold hover:underline inline-block">
                  View All 12 Courses &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div>
            <h4 className="text-white font-extrabold font-heading text-sm uppercase tracking-wider mb-4 border-l-2 border-gold-brand pl-2.5">
              Campus Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-slate-300">{INSTITUTE.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-400 uppercase">Landline (Kot Addu)</p>
                  <a href={`tel:${INSTITUTE.phone}`} className="text-white font-bold hover:text-gold">
                    {INSTITUTE.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-brandGreen shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-400 uppercase">Primary WhatsApp</p>
                  <a
                    href={getWhatsAppUrl("Hello, I am contacting you from the official website.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold hover:text-brandGreen"
                  >
                    {INSTITUTE.primaryWhatsApp}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-brandGreen shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-400 uppercase">Secondary WhatsApp</p>
                  <a
                    href={`https://wa.me/${INSTITUTE.secondaryWhatsAppClean}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold hover:text-brandGreen"
                  >
                    {INSTITUTE.secondaryWhatsApp}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-navy-800 text-center md:flex md:justify-between md:items-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {INSTITUTE.fullNameWithCity}. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center justify-center gap-2">
            <span>Licence: {INSTITUTE.licenceNo}</span>
            <span>•</span>
            <span>Trade Mark: {INSTITUTE.tradeMarkNo}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
