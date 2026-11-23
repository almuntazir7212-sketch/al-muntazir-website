import Link from "next/link";
import {
  MessageCircle,
  GraduationCap,
  Wrench,
  ShieldCheck,
  Award,
  Briefcase,
  Users,
  ChevronRight,
  Phone,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  MapPin,
} from "lucide-react";
import {
  INSTITUTE_INFO,
  COURSES,
  WHY_US,
  ADMISSION_STEPS,
  FAQ_ITEMS,
  getWhatsAppAdmissionUrl,
} from "@/lib/constants";
import { getGalleryPhotos, getSuccessStories } from "@/lib/supabase";
import CourseCard from "@/components/CourseCard";
import GalleryLightbox from "@/components/GalleryLightbox";
import Image from "next/image";

// Revalidate data periodically
export const revalidate = 60;

export default async function HomePage() {
  const [successStories, galleryPhotos] = await Promise.all([
    getSuccessStories(),
    getGalleryPhotos(),
  ]);

  const whyIcons: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-6 h-6 text-gold" />,
    Wrench: <Wrench className="w-6 h-6 text-gold" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-gold" />,
    Award: <Award className="w-6 h-6 text-gold" />,
    Briefcase: <Briefcase className="w-6 h-6 text-gold" />,
    Users: <Users className="w-6 h-6 text-gold" />,
  };

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 2: HERO SECTION */}
      <section className="relative bg-gradient-to-b from-navy to-navy-950 text-white pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#B08D2A_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
            {/* Admission Open Announcement Banner */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm shadow-gold-glow animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>New Monthly Batches Starting Soon — Admission Open</span>
              <span className="font-urdu text-xs text-gold ml-1" dir="rtl">داخلہ جاری ہے</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-white leading-tight">
                Al-Muntazir Technical Training & Trade Center
              </h1>
              <p className="font-urdu text-xl sm:text-2xl md:text-3xl text-gold font-bold leading-normal" dir="rtl">
                المنتظر ٹیکنیکل ٹریننگ اینڈ ٹریڈ سینٹر کوٹ ادو
              </p>
            </div>

            {/* Tagline / Subtitle */}
            <p className="text-slate-300 text-sm sm:text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
              Govt. Licensed Technical Training Institute (Licence H.213918-6) providing hands-on practical workshop training in 12 technical trades with QR-verified qualifications.
            </p>

            <p className="font-urdu text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed" dir="rtl">
              صنعتی معیار کی جدید ورکشاپس، تجربہ کار اساتذہ اور سرکاری تسلیم شدہ سرٹیفکیٹ کے ساتھ باوقار روزگار کی ضمانت۔
            </p>

            {/* Hero CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-sm sm:text-base shadow-gold-glow transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View All 12 Courses</span>
                <span className="font-urdu text-xs" dir="rtl">کورسز دیکھیں</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>

              <a
                href={getWhatsAppAdmissionUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp Par Rabta Karein</span>
                <span className="font-urdu text-xs" dir="rtl">واٹس ایپ رابطہ</span>
              </a>
            </div>

            {/* Trust Highlights Strip under Hero */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full border-t border-navy-800/80 text-left">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-navy-900/60 border border-navy-800">
                <ShieldCheck className="w-7 h-7 text-gold flex-shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Licence No.</div>
                  <div className="text-xs sm:text-sm font-bold text-white font-mono">{INSTITUTE_INFO.licenceNo}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-navy-900/60 border border-navy-800">
                <Award className="w-7 h-7 text-gold flex-shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Trade Mark No.</div>
                  <div className="text-xs sm:text-sm font-bold text-white font-mono">{INSTITUTE_INFO.tradeMarkNo}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-navy-900/60 border border-navy-800">
                <Wrench className="w-7 h-7 text-gold flex-shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Practical Trades</div>
                  <div className="text-xs sm:text-sm font-bold text-white">12 Trade Courses</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-navy-900/60 border border-navy-800">
                <CheckCircle2 className="w-7 h-7 text-emerald-400 flex-shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Verification</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-300">Live QR Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY AL-MUNTAZIR */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="text-gold font-bold text-xs uppercase tracking-widest font-sans">
              Our Core Strengths & Trust
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-navy">
              Why Al-Muntazir Technical Training Center?
            </h2>
            <p className="font-urdu text-lg sm:text-xl font-semibold text-gold-700" dir="rtl">
              المنتظر ٹیکنیکل ٹریننگ سینٹر کا انتخاب کیوں کریں؟
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We focus on hands-on practical competence, safety, and certified trade excellence to prepare you for rewarding careers in industrial projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {WHY_US.map((point, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-gold/60 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-navy-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {whyIcons[point.icon] || <CheckCircle2 className="w-6 h-6 text-gold" />}
                  </div>
                  <h3 className="text-lg font-bold text-navy font-heading mb-1">
                    {point.title}
                  </h3>
                  <p className="font-urdu text-sm font-semibold text-gold-700 mb-3" dir="rtl">
                    {point.titleUrdu}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                    {point.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <p className="font-urdu text-xs text-slate-500 leading-relaxed" dir="rtl">
                    {point.descUrdu}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: POPULAR COURSES PREVIEW */}
      <section className="py-16 sm:py-24 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-gold font-bold text-xs uppercase tracking-widest">
                Job-Oriented Technical Trades
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-heading text-navy mt-1">
                Popular Technical Trade Courses
              </h2>
              <p className="font-urdu text-lg sm:text-xl font-semibold text-gold-700 mt-1" dir="rtl">
                ہمارے مقبول اور مانگ والے ٹیکنیکل کورسز
              </p>
            </div>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-gold transition-colors self-start md:self-auto"
            >
              <span>View all 12 courses</span>
              <span className="font-urdu text-xs" dir="rtl">تمام کورسز</span>
              <ChevronRight className="w-4 h-4 text-gold" />
            </Link>
          </div>

          {/* Show top 6 popular courses */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.slice(0, 6).map((course, idx) => (
              <CourseCard key={course.id} course={course} priority={idx === 0} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-navy hover:bg-navy-700 text-white font-bold text-sm shadow-md transition-all"
            >
              <span>Explore All 12 Courses & Syllabi</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: SUCCESS STORIES */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="text-gold font-bold text-xs uppercase tracking-widest font-sans">
              Our Passed-out Students
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-navy">
              Student Success Stories
            </h2>
            <p className="font-urdu text-lg sm:text-xl font-semibold text-gold-700" dir="rtl">
              ہمارے کامیاب طلبہ کی کہانیاں اور روزگار
            </p>
            <p className="text-slate-600 text-sm sm:text-base">
              Real technicians trained at Al-Muntazir TTC who successfully qualified trade tests and secured positions across industrial engineering projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-gold/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-navy-800 border-2 border-gold flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                      {story.photo_url ? (
                        <Image
                          src={story.photo_url}
                          alt={story.student_name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <span>{story.student_name.charAt(0)}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-navy text-sm sm:text-base font-heading">
                        {story.student_name}
                      </h3>
                      <p className="text-xs text-gold-700 font-semibold">
                        {story.course_name}
                      </p>
                    </div>
                  </div>

                  <div className="inline-block px-2.5 py-1 rounded bg-navy-100 text-navy-900 text-xs font-semibold">
                    💼 {story.job}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{story.story}"
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-600 font-medium">
                    <CheckCircle2 className="w-3 h-3" /> Certified Graduate
                  </span>
                  <span>Kot Addu</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: GALLERY PREVIEW */}
      <section className="py-16 sm:py-24 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-gold font-bold text-xs uppercase tracking-widest font-sans">
              Practical Campus Life
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white">
              Workshop & Training Gallery
            </h2>
            <p className="font-urdu text-lg sm:text-xl font-semibold text-gold" dir="rtl">
              ورکشاپ اور پریکٹیکل ٹریننگ کی جھلکیاں
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">
              Take a look inside our real workshops, pipe welding booths, electrical simulation boards, and safety demonstration sessions.
            </p>
          </div>

          <GalleryLightbox photos={galleryPhotos} limit={6} />
        </div>
      </section>

      {/* SECTION 7: ADMISSION PROCESS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="text-gold font-bold text-xs uppercase tracking-widest font-sans">
              Simple 4 Steps
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-navy">
              Admission Process / داخلہ کا آسان طریقہ
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Starting your technical career is straightforward. Follow these four simple steps to enroll in your desired trade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {ADMISSION_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative bg-slate-50 rounded-2xl p-6 border-2 border-slate-200 hover:border-gold transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold text-navy-950 font-black text-xl flex items-center justify-center mb-4 shadow-gold-glow">
                    0{step.step}
                  </div>
                  <h3 className="font-bold text-navy text-base font-heading mb-1">
                    {step.title}
                  </h3>
                  <p className="font-urdu text-sm font-semibold text-gold-700 mb-2" dir="rtl">
                    {step.titleUrdu}
                  </p>
                  <p className="text-slate-600 text-xs leading-relaxed mb-3">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <p className="font-urdu text-xs text-slate-500 leading-relaxed" dir="rtl">
                    {step.descUrdu}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-gold-50 border border-gold-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-bold text-navy text-base">Ready to visit our admission desk?</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Our office is located at 88 Road, Near Benazir Income Support Office, Kot Addu.
              </p>
            </div>
            <a
              href={`tel:${INSTITUTE_INFO.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy text-white hover:bg-navy-800 text-xs sm:text-sm font-semibold flex-shrink-0"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>Call: {INSTITUTE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ PREVIEW */}
      <section className="py-16 sm:py-24 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-2">
            <span className="text-gold font-bold text-xs uppercase tracking-widest font-sans">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-navy">
              Common Questions / عام سوالات کے جوابات
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Have questions regarding course durations, QR certificates, job guidance, or admission requirements?
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-navy text-base font-heading flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    <span>{item.question}</span>
                  </h3>
                  <span className="font-urdu text-sm font-semibold text-gold-700 hidden sm:block" dir="rtl">
                    {item.questionUrdu}
                  </span>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.answer}
                </p>
                <p className="font-urdu text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-2" dir="rtl">
                  {item.answerUrdu}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            <span>Kisi mazeed maloomat ke liye hamare WhatsApp number par rabta karein: </span>
            <a
              href={`https://wa.me/${INSTITUTE_INFO.whatsapp1Clean}`}
              className="text-emerald-600 font-bold hover:underline"
            >
              {INSTITUTE_INFO.whatsapp1}
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 9: CONTACT STRIP */}
      <section className="py-12 bg-navy text-white border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-bold uppercase tracking-wider">
                Direct Contact Desk
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Visit Us in Kot Addu or Reach Out on WhatsApp
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm flex items-center justify-center lg:justify-start gap-1.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span>{INSTITUTE_INFO.address}</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${INSTITUTE_INFO.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-white font-semibold text-xs sm:text-sm border border-navy-700 shadow"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>{INSTITUTE_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${INSTITUTE_INFO.whatsapp1Clean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {INSTITUTE_INFO.whatsapp1}</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-xs sm:text-sm shadow-gold-glow"
              >
                <span>Contact Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
