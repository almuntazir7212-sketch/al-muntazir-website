-- =========================================================================
-- AL-MUNTAZIR TECHNICAL TRAINING & TRADE CENTER, KOT ADDU
-- Shared Supabase Database Schema (PostgreSQL)
-- Shared across Public Website (almuntazirttc.com) & Admin Panel App
-- =========================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Courses Table (stores 12 courses with their default 20 subjects)
CREATE TABLE IF NOT EXISTS public.courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  course_name TEXT UNIQUE NOT NULL,
  duration TEXT NOT NULL,
  badge TEXT,
  short_description TEXT,
  subjects JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Students Table
CREATE TABLE IF NOT EXISTS public.students (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_name TEXT NOT NULL,
  father_name TEXT NOT NULL,
  cnic TEXT,
  phone TEXT,
  course_name TEXT NOT NULL,
  duration TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Certificates Table (Stores ONLY details - Flat images generated on the fly!)
CREATE TABLE IF NOT EXISTS public.certificates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  certificate_id TEXT UNIQUE NOT NULL, -- e.g. AMT-2026-0001
  student_id UUID REFERENCES public.students(id) ON DELETE CASCADE,
  issue_date DATE NOT NULL DEFAULT CURRENT_DATE,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'revoked')),
  held_from DATE,
  held_to DATE,
  marks_percentage NUMERIC(5,2) DEFAULT 89.00,
  grade TEXT DEFAULT 'A',
  left_signatory_name TEXT DEFAULT 'TALHA HUSSAIN',
  left_signatory_title TEXT DEFAULT 'Workshop Incharge',
  left_signature_url TEXT DEFAULT '/images/signature_talha.png',
  right_signatory_name TEXT DEFAULT 'IMDAD HUSSAIN',
  right_signatory_title TEXT DEFAULT 'Project Incharge',
  right_signature_url TEXT DEFAULT '/images/signature_imdad.png',
  stamp_url TEXT DEFAULT '/images/stamp.png',
  subjects JSONB NOT NULL DEFAULT '[]'::jsonb, -- Snapshot of 20 subjects at issue time
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Gallery Photos Table
CREATE TABLE IF NOT EXISTS public.gallery_photos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  photo_url TEXT NOT NULL,
  caption TEXT,
  category TEXT DEFAULT 'Workshop',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Success Stories Table
CREATE TABLE IF NOT EXISTS public.success_stories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_name TEXT NOT NULL,
  course_name TEXT NOT NULL,
  job TEXT NOT NULL,
  story TEXT,
  photo_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =========================================================================

ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.success_stories ENABLE ROW LEVEL SECURITY;

-- Public Anonymous Read Policies (For the Public Website)
CREATE POLICY "Public anonymous read courses" ON public.courses FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public anonymous read certificates" ON public.certificates FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public anonymous read students" ON public.students FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public anonymous read gallery" ON public.gallery_photos FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public anonymous read stories" ON public.success_stories FOR SELECT TO anon, authenticated USING (true);

-- Authenticated Admin Full Access Policies (For Admin Panel App)
CREATE POLICY "Admin manage courses" ON public.courses FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin manage students" ON public.students FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin manage certificates" ON public.certificates FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin manage gallery" ON public.gallery_photos FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin manage stories" ON public.success_stories FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- =========================================================================
-- SEED DATA: 12 COURSES WITH THEIR 20 SUBJECTS
-- =========================================================================

INSERT INTO public.courses (course_name, duration, badge, short_description, subjects) VALUES
(
  'Multi Welder',
  '4–5 Months',
  'Flagship Trade',
  'Comprehensive mastery in SMAW, MIG/MAG, and TIG welding across steel plates and pipes.',
  '["Safety Orientation", "Classification of Electrodes", "Welding Applications", "Welding Procedures", "SMAW & MIG Welders", "Safety in Welding", "Electrodes", "Welding Metallurgy", "Schedules & Variables", "Gas Cutting", "Principles of Welding", "Covered Electrodes", "Types of Joints", "Pre-Weld Preparations", "Non Destructive Tests", "Welding Equipment", "Arc Welding Positions", "Welding Symbols", "Welding Defects", "WPS & WPQR"]'::jsonb
),
(
  'Argon Welder',
  '3 Months',
  'High Demand',
  'Specialized Gas Tungsten Arc Welding (TIG) training for precision root passes on pipes and high-grade alloys.',
  '["Safety Orientation", "TIG Welding Principles", "Argon Gas Properties", "Tungsten Electrodes", "AC & DC Welding", "Safety in TIG Welding", "Gas Shielding", "Filler Metals", "Welding Positions", "Joint Preparation", "Principles of Argon Welding", "Power Sources", "Torch Handling", "Welding Symbols", "Pipe Welding", "Welding Equipment", "Stainless Steel Welding", "Aluminium Welding", "Welding Defects", "Inspection & Testing"]'::jsonb
),
(
  'Electric Welder',
  '3 Months',
  NULL,
  'Industrial Shielded Metal Arc Welding (SMAW) focusing on structural fabrications and heavy welding joints.',
  '["Safety Orientation", "Arc Welding Principles", "Electrodes & Types", "Power Sources", "Welding Positions", "Safety in Arc Welding", "Electrode Selection", "Arc Length Control", "Welding Joints", "Metal Preparation", "Principles of Welding", "SMAW Process", "Welding Metallurgy", "Welding Symbols", "Gas Cutting", "Welding Equipment", "Mild Steel Welding", "Hard Facing", "Welding Defects", "Inspection & Testing"]'::jsonb
),
(
  '6GR Welder',
  '3 Months',
  'Advanced Trade',
  'Rigorous 6G and 6GR inclined pipe welding with restricted ring for offshore and heavy process plant standards.',
  '["Safety Orientation", "Pipe Welding Principles", "6G Position Welding", "6GR Position Welding", "Root Pass Techniques", "Safety in Pipe Welding", "Electrodes for Pipe", "Hot Pass & Fill Pass", "Cap Pass", "Pipe Joint Preparation", "Principles of Welding", "Pipe Beveling", "Welding Metallurgy", "Welding Symbols", "WPS & PQR", "Welding Equipment", "GTAW Root Pass", "SMAW Fill & Cap", "Welding Defects", "NDT & Inspection"]'::jsonb
),
(
  'Pipe Fitter',
  '2 Months',
  'Core Trade',
  'Industrial piping installation, flange alignment, pipe cutting, threading, and isometric blueprint reading.',
  '["Safety Orientation", "Pipe Fittings & Flanges", "Pipe Cutting Methods", "Pipe Erection & Installation", "Welding Joints in Piping", "Safety in Pipe Fitting", "Valves & Accessories", "Pipe Threading", "Pipe Supports & Hangers", "Piping Drawings & Isometrics", "Measuring & Marking Tools", "Gaskets & Jointing Materials", "Pipe Bending Techniques", "Pressure Testing", "Piping Symbols & Codes", "Pipe Materials & Types", "Flange Jointing & Bolting", "Pipe Fabrication", "Pipe Insulation & Painting", "Maintenance & Repair"]'::jsonb
),
(
  'Pipe Fabricator',
  '3 Months',
  NULL,
  'Advanced piping layout, offset calculations, mitre cut development, and high-pressure spool fabrication.',
  '["Safety Orientation", "Pipe Materials", "Pipe Cutting Methods", "Pipe Bending", "Fabrication Drawings", "Safety in Fabrication", "Pipe Fittings & Flanges", "Measuring & Marking", "Pipe Threading", "Welding Joints", "Fabrication Principles", "Pipe Supports", "Isometric Drawings", "Pressure Testing", "Piping Symbols", "Fabrication Equipment", "Flange Jointing", "Pipe Erection", "Insulation & Painting", "Inspection & Testing"]'::jsonb
),
(
  'Fire Watcher',
  '2 Months',
  NULL,
  'Certified site safety monitoring, hot work permit compliance, gas detection, and emergency hazard response.',
  '["Safety Orientation", "Fire Prevention", "Hot Work Permits", "Fire Triangle", "PPE for Hot Work", "Fire Hazards", "Extinguisher Types", "Fire Watch Duties", "Gas Detection", "Emergency Response", "Principles of Fire Safety", "Welding Hazards", "Confined Space Safety", "Fire Alarm Systems", "Evacuation Procedures", "Safety Equipment", "First Aid Basics", "Incident Reporting", "Housekeeping", "Safety Regulations"]'::jsonb
),
(
  'Instrument Technician',
  '2 Months',
  NULL,
  'Industrial instrumentation calibration, pressure/temperature sensors, pneumatic systems, and process control loops.',
  '["Safety Orientation", "Instrumentation Basics", "Pressure Measurement", "Temperature Measurement", "Flow Measurement", "Safety in Instrumentation", "Level Measurement", "Transmitters", "Control Valves", "Calibration Basics", "Principles of Measurement", "Pneumatic Instruments", "Electronic Instruments", "Control Loops", "PLC Basics", "Instrument Equipment", "Loop Checking", "Troubleshooting", "Instrument Drawings", "Maintenance & Testing"]'::jsonb
),
(
  'Electrical Technician',
  '2 Months',
  NULL,
  'Electrical equipment installation, circuit diagnostics, transformer maintenance, and safety protective devices.',
  '["Safety Orientation", "Electrical Fundamentals", "Ohm''s Law", "DC Circuits", "AC Circuits", "Electrical Safety", "Measuring Instruments", "Wiring Systems", "Earthing", "Protective Devices", "Principles of Electricity", "Motors & Generators", "Transformers", "Lighting Systems", "Cable Jointing", "Electrical Equipment", "Control Panels", "Troubleshooting", "Electrical Drawings", "Testing & Inspection"]'::jsonb
),
(
  'Industrial Electrician',
  '2 Months',
  'Industry Preferred',
  'Heavy plant power distribution, 3-phase motor starters, switchgear maintenance, and industrial control panel wiring.',
  '["Safety Orientation", "Industrial Wiring", "Three Phase Systems", "Motors & Starters", "Control Circuits", "Industrial Safety", "Power Distribution", "Switchgear", "PLC Fundamentals", "Sensors & Relays", "Principles of Industrial Electricity", "Transformers", "Motor Control", "VFD Basics", "Pneumatic Controls", "Industrial Equipment", "Panel Wiring", "Troubleshooting", "Electrical Drawings", "Testing & Commissioning"]'::jsonb
),
(
  'Building Electrician',
  '2 Months',
  NULL,
  'Commercial and residential concealed conduit wiring, distribution boards, lighting circuits, and load calculations.',
  '["Safety Orientation", "Domestic Wiring", "Lighting Circuits", "Power Circuits", "Earthing Systems", "Electrical Safety", "Wiring Accessories", "Switches & Sockets", "Distribution Boards", "Cable Selection", "Principles of Building Wiring", "Conduit Wiring", "Concealed Wiring", "Fans & Appliances", "Energy Meters", "Building Equipment", "Testing & Inspection", "Fault Finding", "Electrical Drawings", "Safety Regulations"]'::jsonb
),
(
  'Plumber',
  '2 Months',
  NULL,
  'Modern water supply installation, sanitary ware fitting, high-pressure PPRC/UPVC piping, and leak diagnostics.',
  '["Safety Orientation", "Plumbing Tools", "Pipe Materials", "Water Supply Systems", "Drainage Systems", "Plumbing Safety", "Pipe Fittings", "Pipe Jointing", "Sanitary Fixtures", "Valves & Taps", "Principles of Plumbing", "Pipe Installation", "Water Tanks", "Sewerage Systems", "Plumbing Drawings", "Plumbing Equipment", "Hot Water Systems", "Leak Detection", "Maintenance & Repair", "Testing & Inspection"]'::jsonb
)
ON CONFLICT (course_name) DO NOTHING;

-- =========================================================================
-- SEED INITIAL SAMPLE STUDENT & CERTIFICATE
-- =========================================================================

INSERT INTO public.students (id, student_name, father_name, cnic, phone, course_name, duration)
VALUES ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Talha Hussain', 'Ghulam Hussain', '36302-2480530-9', '03154037212', 'Multi Welder', '4–5 Months')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.certificates (
  certificate_id,
  student_id,
  issue_date,
  held_from,
  held_to,
  marks_percentage,
  grade,
  status,
  left_signatory_name,
  left_signatory_title,
  right_signatory_name,
  right_signatory_title,
  subjects
)
VALUES (
  'AMT-2026-0001',
  'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  '2024-12-25',
  '2024-01-05',
  '2024-12-25',
  89,
  'A',
  'active',
  'TALHA HUSSAIN',
  'Workshop Incharge',
  'IMDAD HUSSAIN',
  'Project Incharge',
  '["Safety Orientation", "Classification of Electrodes", "Welding Applications", "Welding Procedures", "SMAW & MIG Welders", "Safety in Welding", "Electrodes", "Welding Metallurgy", "Schedules & Variables", "Gas Cutting", "Principles of Welding", "Covered Electrodes", "Types of Joints", "Pre-Weld Preparations", "Non Destructive Tests", "Welding Equipment", "Arc Welding Positions", "Welding Symbols", "Welding Defects", "WPS & WPQR"]'::jsonb
)
ON CONFLICT (certificate_id) DO NOTHING;
