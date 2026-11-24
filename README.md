# Al-Muntazir Technical Training & Trade Center — Public Website

> **VIP-Style Production Website (Next.js 14, App Router, TypeScript, Tailwind CSS)**  
> **Domain:** `almuntazirttc.com`  
> **Campus:** 88 Road, Near Benazir Income Support Office, Building Old Nadra Office, Kot Addu  
> **Owner:** Haji Imdad Hussain  
> **Government Licence:** `H.213918-6` | **Trade Mark:** `909294`  
> **Landline:** `+92 66 2240999`  
> **WhatsApp:** `+92 315 4037212` & `+92 333 4060028`  

---

## 1. Project Overview & Architecture

This repository contains the **Public Website** for Al-Muntazir Technical Training & Trade Center. Per project specifications:
- **Two Separate Applications:** 
  1. **Public Website (This Project):** Read-only public portal (Home, Courses, About, Contact, plus QR Verification `/verify/[id]`). Deployed to `almuntazirttc.com`.
  2. **Admin Panel (Separate Project):** Admin-only application deployed separately to `admin.almuntazirttc.com` for student management, certificate issuance, photo uploads, and stories.
- **Shared Backend:** Both projects connect to the same **Supabase** project (PostgreSQL database & Storage).

---

## 2. Pages & Features Included

- **Home (`/`):**
  1. *Header:* Dark navy (#0B2C4D), compact logo + single-line institute name, navigation (Home, Courses, About Us, Contact), Blue "Call" button + Green "WhatsApp" button.
  2. *Hero:* Welder background with dark navy overlay, gold kicker `ADMISSIONS OPEN • KOT ADDU`, bold heading `"Learn a Skill. Build Your Future."`, subtext, Gold "Admission Form" button + Green "Chat on WhatsApp" button.
  3. *Stats Strip:* 12 Courses | 2–5 Months Durations | H.213918-6 Licence No. | Kot Addu Center (2x2 grid on mobile).
  4. *Popular Courses:* Course trade chips with durations + link to full Courses page.
  5. *Why Al-Muntazir:* 3 VIP cards with gold top borders (A Licensed Institute, Practical Training, QR Certificate).
  6. *Success Stories:* Passed-out graduate showcase with trade and employer details.
  7. *Workshop Gallery:* Practical training photo grid with interactive lightbox preview.
  8. *Admission Process:* 4 clear steps (Get in Touch, Submit Documents, Fill the Form, Classes Begin).
  9. *FAQ:* 5 key questions answered clearly without any fee figures.
  10. *Contact Strip & VIP Footer:* Complete campus credentials, licence, trademark, and direct links.
- **Courses (`/courses`):** All 12 certified trades with duration badges, full descriptions, interactive 20-subject curriculum accordion, and WhatsApp application buttons.
- **About (`/about`):** Center overview, founder & project incharge Haji Imdad Hussain, Government Licence and Trademark credentials, practical workshop ethos.
- **Contact (`/contact`):** Landline and WhatsApp contacts, Kot Addu address, interactive WhatsApp inquiry form, and Google Maps embed.
- **QR Certificate Verification (`/verify/[id]`):**
  - Instant online verification loaded directly from the shared Supabase database.
  - Displays Verified status (green), student name, father's name, course, duration, issue date, and Certificate ID.
  - Zero privacy leaks: CNIC and phone numbers are hidden from public view.
  - **On-Demand Certificate Visualizer (Exact V13 Spec):** Flat A4 Landscape image rendered dynamically on canvas (double gold & navy frame, corner diamonds, central watermark crest, logo, QR code with ID top-right, subjects table, Talha Hussain signature on left, Imdad Hussain signature + blue stamp on right). Allows one-click high-resolution PNG download and printing.
- **Floating WhatsApp Button:** Fixed floating button with smart scroll detection that slides out of view during scroll and returns to bottom-right when stopped.

---

## 3. Local Development Setup

### Prerequisites
- Node.js 18+ (tested on Node 20 / 24)
- npm or pnpm

### Quick Start
```bash
# 1. Install dependencies
npm install

# 2. Setup environment variables (optional for local testing, built-in demo data works out of the box)
cp .env.example .env.local

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 4. Shared Supabase Setup

1. Create a project at [supabase.com](https://supabase.com).
2. Go to **SQL Editor** in your Supabase dashboard.
3. Open `supabase/schema.sql` from this repository, paste its contents into the editor, and click **Run**.
4. This creates:
   - `courses` table (with all 12 courses and their default 20 subjects).
   - `students` table.
   - `certificates` table (only certificate details are stored, zero storage overhead).
   - `gallery_photos` and `success_stories` tables.
   - Row Level Security (RLS) policies allowing public read access for this website.
5. In **Project Settings -> API**, copy your **Project URL** and **Publishable/Anon Key**.
6. Set them in your environment:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

---

## 5. Deployment on Cloudflare Pages (GitHub Auto-Deploy)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: Al-Muntazir Technical Training Center website"
   git branch -M main
   git remote add origin https://github.com/your-username/al-muntazir-website.git
   git push -u origin main
   ```
2. **Cloudflare Dashboard:**
   - Go to **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
   - Select your `al-muntazir-website` repository.
   - **Framework preset:** `Next.js`.
   - **Build command:** `npx @cloudflare/next-on-pages` (or standard `npm run build`).
   - **Build output directory:** `.vercel/output/static` (or `.next` depending on adapter).
3. **Environment Variables:**
   - Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. **Custom Domain:**
   - In Pages project -> **Custom domains** -> Add `almuntazirttc.com`.
   - Follow Cloudflare DNS instructions to point nameservers.
5. **Auto-Deploy:**
   - Any commit pushed to the `main` branch triggers an automated build and deployment in 1–2 minutes!

---

## 6. Official Institute Credentials

- **Name:** Al-Muntazir Technical Training & Trade Center
- **Owner:** Haji Imdad Hussain
- **Licence No:** H.213918-6
- **Trade Mark No:** 909294
- **Address:** 88 Road, Near Benazir Income Support Office, Building Old Nadra Office, Kot Addu
- **Phone:** +92 66 2240999
- **Admissions WhatsApp:** +92 315 4037212
