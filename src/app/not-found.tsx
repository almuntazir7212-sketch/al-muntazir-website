import Link from "next/link";
import { ArrowLeft, Home, BookOpen, MessageCircle } from "lucide-react";
import { INSTITUTE_INFO } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border-2 border-slate-200 shadow-xl text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-navy text-gold font-heading font-black text-3xl mx-auto flex items-center justify-center border-2 border-gold shadow-gold-glow">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold font-heading text-navy">
            Page Not Found / صفحہ نہیں ملا
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            The page you are looking for does not exist or may have been moved.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy hover:bg-navy-800 text-white font-bold text-xs sm:text-sm shadow transition-all"
          >
            <Home className="w-4 h-4 text-gold" />
            <span>Go to Homepage / ہوم پیج</span>
          </Link>

          <Link
            href="/courses"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy font-semibold text-xs sm:text-sm transition-all"
          >
            <BookOpen className="w-4 h-4 text-gold-700" />
            <span>View All 12 Courses</span>
          </Link>

          <a
            href={`https://wa.me/${INSTITUTE_INFO.whatsapp1Clean}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Need Help? Contact on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
