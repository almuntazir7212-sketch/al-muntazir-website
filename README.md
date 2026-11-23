# Al-Muntazir Technical Training & Trade Center — Public Website

> **Official Website:** [almuntazirttc.com](https://almuntazirttc.com)  
> **Institute:** Al-Muntazir Technical Training & Trade Center, Kot Addu  
> **Licence No:** H.213918-6 | **Trade Mark No:** 909294  
> **Owner / Project Incharge:** Haji Imdad Hussain  
> **Tech Stack:** Next.js (App Router, TypeScript), Tailwind CSS, Supabase (PostgreSQL), Lucide React

---

## 📌 Architectural Overview (Two Separate Projects)

As per system architecture:
- **Project A (This Repository): Public Website** — Hosted on Cloudflare Pages connected to `almuntazirttc.com`. It serves visitors, students, and employers. Contains Home, Courses, About, Contact, and the live QR Verification page (`/verify/[id]`). **Read-only access** to the shared Supabase backend.
- **Project B: Admin Panel App** — Separate Next.js application (hosted at `admin.almuntazirttc.com`), providing authenticated management for students, certificate generation, gallery uploads, and settings. **Writes** to the shared Supabase backend.
- **Shared Backend:** Both applications share **one Supabase project** (database and storage).

---

## 🌐 Public Pages & Features

1. **Home (`/`)**:
   - Institute identity, Govt Licence No. `H.213918-6` and Trade Mark No. `909294`.
   - "Admission Open" dynamic announcement banner.
   - Dual Hero CTAs: "View All 12 Courses" and "WhatsApp Par Rabta Karein".
   - **Why Al-Muntazir:** 6 core strength pillars with bilingual descriptions.
   - **Popular Courses:** Quick preview cards with durations and instant WhatsApp application.
   - **Success Stories:** Real graduated technicians and their verified jobs.
   - **Gallery:** Workshop and practical training photos with interactive lightbox modal.
   - **Admission Process:** 4 clear steps (Contact -> Documents -> Form -> Classes).
   - **FAQ:** Common questions answered (course durations, certificates, hostel guidance, job guidance). **Zero fee amounts shown.**
   - **Contact Strip:** Address, phone, and direct WhatsApp links.

2. **Courses (`/courses`)**:
   - Comprehensive catalog of all **12 technical trades** across 4 categories:
     1. Multi Welder (4–5 Months)
     2. Argon Welder (3 Months)
     3. Electric Welder (3 Months)
     4. 6GR Welder (3 Months)
     5. Pipe Fitter (2 Months)
     6. Pipe Fabricator (3 Months)
     7. Fire Watcher (2 Months)
     8. Instrument Technician (2 Months)
     9. Electrical Technician (2 Months)
     10. Industrial Electrician (2 Months)
     11. Building Electrician (2 Months)
     12. Plumber (2 Months)
   - Every card features course duration, English technical trade name, Urdu heading, practical modules preview, and "Apply on WhatsApp" button with pre-filled trade message.
   - **Strictly NO fee displayed on any card.**

3. **About / Bharosa (`/about`)**:
   - Detailed history and mission of Al-Muntazir TTC in Kot Addu.
   - Founder profile: **Haji Imdad Hussain**.
   - Trust points: Govt. Licence `H.213918-6`, Trade Mark `909294`, and online QR verification explanation for industrial employers.

4. **Contact (`/contact`)**:
   - Official address: *88 Road, Near Benazir Income Support Office, Building Old Nadra Office, Kot Addu*.
   - Landline: `+92 66 2240999`.
   - WhatsApp numbers: `+92 315 4037212` (Primary) and `+92 333 4060028`.
   - Google Maps interactive embed for Kot Addu campus.
   - Direct Contact Form that formats user message and delivers via WhatsApp to `+92 315 4037212`.
   - Campus timings notice.

5. **Certificate Verification (`/verify/[id]`)**:
   - Scanned via QR code on certificates or opened directly via verification link.
   - Reads live from Supabase `certificates` and `students` tables.
   - **Verified State:** Green badge "✓ Official Record Verified", Student Name, Father's Name, Trade, Duration, Issue Date, Grade, and dynamically generated V12 certificate image preview matching institute specifications.
   - **Download Flat Image:** One-click high-resolution PNG generation preventing editable PDF tampering.
   - **Privacy Protected:** CNIC and phone numbers are never displayed publicly.
   - **No Public Search:** Cannot be searched by name or CNIC; accessible only via unique certificate link.
   - **Not Found State:** Clear warning and official verification helpline numbers.

---

## 🗄️ Shared Supabase Database Schema

Run the following SQL in your Supabase SQL Editor:

```sql
-- 1. Students Table
CREATE TABLE IF NOT EXISTS students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name TEXT NOT NULL,
  father_name TEXT NOT NULL,
  cnic TEXT NOT NULL,
  phone TEXT NOT NULL,
  course_name TEXT NOT NULL,
  duration TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Certificates Table
CREATE TABLE IF NOT EXISTS certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  certificate_id TEXT UNIQUE NOT NULL, -- e.g. AMT-2026-0001
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  issue_date DATE NOT NULL,
  held_from TEXT,
  held_to TEXT,
  marks_obtained TEXT,
  grade TEXT,
  status TEXT NOT NULL DEFAULT 'active', -- 'active' or 'revoked'
  left_signatory_name TEXT DEFAULT 'TALHA HUSSAIN',
  left_signatory_title TEXT DEFAULT 'Workshop Incharge',
  left_signature_url TEXT,
  right_signatory_name TEXT DEFAULT 'IMDAD HUSSAIN',
  right_signatory_title TEXT DEFAULT 'Project Incharge',
  right_signature_url TEXT,
  stamp_url TEXT,
  subjects JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Gallery Photos Table
CREATE TABLE IF NOT EXISTS gallery_photos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  photo_url TEXT NOT NULL,
  caption TEXT NOT NULL,
  sort_order INTEGER DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. Success Stories Table
CREATE TABLE IF NOT EXISTS success_stories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name TEXT NOT NULL,
  course_name TEXT NOT NULL,
  job TEXT NOT NULL,
  story TEXT NOT NULL,
  photo_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE success_stories ENABLE ROW LEVEL SECURITY;

-- Public READ-ONLY policies for the Website (using anon key)
CREATE POLICY "Public Read Certificates" ON certificates FOR SELECT USING (status = 'active');
CREATE POLICY "Public Read Students" ON students FOR SELECT USING (true);
CREATE POLICY "Public Read Gallery" ON gallery_photos FOR SELECT USING (true);
CREATE POLICY "Public Read Stories" ON success_stories FOR SELECT USING (true);
```

---

## 🚀 Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/al-muntazir-website.git
   cd al-muntazir-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```
   Add your Supabase project credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-publishable-key
   NEXT_PUBLIC_SITE_URL=https://almuntazirttc.com
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Test built-in verification link:**
   - [http://localhost:3000/verify/AMT-2026-0001](http://localhost:3000/verify/AMT-2026-0001) (Pre-configured demo verification)
   - [http://localhost:3000/verify/INVALID-ID](http://localhost:3000/verify/INVALID-ID) (Test unverified state)

---

## ☁️ Deployment on Cloudflare Pages (GitHub Auto-Deploy)

1. Push your repository to GitHub (`al-muntazir-website`).
2. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Select your GitHub repository (`al-muntazir-website`).
4. Set Build Settings:
   - **Framework preset:** `Next.js`
   - **Build command:** `npx @cloudflare/next-on-pages` or `npm run build`
   - **Output directory:** `.vercel/output/static` (or `.next`)
5. Under **Environment variables**, add:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase Publishable Key
   - `NODE_VERSION`: `20`
6. Click **Save and Deploy**.
7. Once deployed, add your Custom Domain `almuntazirttc.com` under **Custom domains**.

---

## 🔒 Verification & Compliance Checklist

- [x] **Strictly 4 public pages:** Home, Courses, About, Contact (+ `/verify/[id]` QR route).
- [x] **No Demands / Overseas section.**
- [x] **No Fee structure or fee amounts anywhere.**
- [x] **No public search for certificates** (verification only via unique QR link).
- [x] **Phone numbers verified:**
  - Landline: `+92 66 2240999`
  - WhatsApp: `+92 315 4037212` and `+92 333 4060028`
  - Old number `03017885508` is completely excluded.
- [x] **No admin panel or login inside this repository** (strictly isolated to the separate Admin Panel app).
- [x] **Colors:** Navy `#0B2C4D` and Gold `#B08D2A`.
- [x] **Bilingual:** Urdu headings and English course nomenclature.
- [x] **SEO:** Complete dynamic metadata, OpenGraph cards, `robots.txt`, and `sitemap.xml`.
