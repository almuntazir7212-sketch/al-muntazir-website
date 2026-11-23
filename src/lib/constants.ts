import { Course, FaqItem, AdmissionStep, WhyPoint, SuccessStory, GalleryPhoto } from "@/types";

export const INSTITUTE_INFO = {
  name: "Al-Muntazir Technical Training & Trade Center",
  nameUrdu: "المنتظر ٹیکنیکل ٹریننگ اینڈ ٹریڈ سینٹر کوٹ ادو",
  shortName: "Al-Muntazir TTC",
  tagline: "Empowering Youth with Certified Technical Skills & Practical Trade Training in Kot Addu",
  taglineUrdu: "کوٹ ادو میں باوقار فنی تعلیم، عملی تربیت اور تسلیم شدہ سرٹیفکیٹ کا بااعتماد ادارہ",
  owner: "Haji Imdad Hussain",
  ownerTitle: "Project Incharge / Founder",
  licenceNo: "H.213918-6",
  tradeMarkNo: "909294",
  domain: "almuntazirttc.com",
  address: "88 Road, Near Benazir Income Support Office, Building Old Nadra Office, Kot Addu",
  addressUrdu: "۸۸ روڈ، نزد بے نظیر انکم سپورٹ آفس، بلڈنگ پرانا نادرا آفس، کوٹ ادو",
  phone: "+92 66 2240999",
  whatsapp1: "+92 315 4037212",
  whatsapp2: "+92 333 4060028",
  whatsapp1Clean: "923154037212",
  whatsapp2Clean: "923334060028",
  timing: "Mon - Sat: 8:00 AM - 5:00 PM (Admission Desk Open)",
  email: "info@almuntazirttc.com",
};

export const getWhatsAppAdmissionUrl = (courseName?: string, name?: string) => {
  let message = `Assalam o Alaikum! Mujhe Al-Muntazir Technical Training Center mein admission ke bare mein maloomat chahiye.`;
  if (name) {
    message = `Assalam o Alaikum! Mera naam ${name} hai aur mujhe Al-Muntazir Technical Training Center mein admission lena hai.`;
  }
  if (courseName) {
    message += ` Course: ${courseName}.`;
  }
  return `https://wa.me/${INSTITUTE_INFO.whatsapp1Clean}?text=${encodeURIComponent(message)}`;
};

export const COURSES: Course[] = [
  {
    id: "multi-welder",
    name: "Multi Welder",
    nameUrdu: "ملٹی ویلڈر کورس",
    duration: "4–5 Months",
    durationUrdu: "۴ تا ۵ ماہ",
    category: "Welding",
    description: "Complete hands-on training in SMAW, MIG/MAG, and basic GTAW processes with industry-grade pipe and plate welding.",
    subjects: [
      "Safety Orientation", "Classification of Electrodes", "Welding Applications", "Welding Procedures", "SMAW & MIG Welders",
      "Safety in Welding", "Electrodes", "Welding Metallurgy", "Schedules & Variables", "Gas Cutting",
      "Principles of Welding", "Covered Electrodes", "Types of Joints", "Pre-Weld Preparations", "Non Destructive Tests",
      "Welding Equipment", "Arc Welding Positions", "Welding Symbols", "Welding Defects", "WPS & WPQR"
    ],
  },
  {
    id: "argon-welder",
    name: "Argon Welder",
    nameUrdu: "آرگون ویلڈر (TIG)",
    duration: "3 Months",
    durationUrdu: "۳ ماہ",
    category: "Welding",
    description: "Specialized TIG (GTAW) argon welding for stainless steel, carbon steel, and non-ferrous metals with root pass mastery.",
    subjects: [
      "Safety Orientation", "TIG Welding Principles", "Argon Gas Properties", "Tungsten Electrodes", "AC & DC Welding",
      "Safety in TIG Welding", "Gas Shielding", "Filler Metals", "Welding Positions", "Joint Preparation",
      "Principles of Argon Welding", "Power Sources", "Torch Handling", "Welding Symbols", "Pipe Welding",
      "Welding Equipment", "Stainless Steel Welding", "Aluminium Welding", "Welding Defects", "Inspection & Testing"
    ],
  },
  {
    id: "electric-welder",
    name: "Electric Welder",
    nameUrdu: "الیکٹرک آرک ویلڈر",
    duration: "3 Months",
    durationUrdu: "۳ ماہ",
    category: "Welding",
    description: "Shielded Metal Arc Welding (SMAW) focusing on structural joints, multiple positions (1G to 4G), and quality testing.",
    subjects: [
      "Safety Orientation", "Arc Welding Principles", "Electrodes & Types", "Power Sources", "Welding Positions",
      "Safety in Arc Welding", "Electrode Selection", "Arc Length Control", "Welding Joints", "Metal Preparation",
      "Principles of Welding", "SMAW Process", "Welding Metallurgy", "Welding Symbols", "Gas Cutting",
      "Welding Equipment", "Mild Steel Welding", "Hard Facing", "Welding Defects", "Inspection & Testing"
    ],
  },
  {
    id: "6gr-welder",
    name: "6GR Welder",
    nameUrdu: "6GR پائپ ویلڈر",
    duration: "3 Months",
    durationUrdu: "۳ ماہ",
    category: "Welding",
    description: "Advanced high-precision pipe welding in 6G and 6GR inclined positions with restriction ring under rigorous NDT criteria.",
    subjects: [
      "Safety Orientation", "Pipe Welding Principles", "6G Position Welding", "6GR Position Welding", "Root Pass Techniques",
      "Safety in Pipe Welding", "Electrodes for Pipe", "Hot Pass & Fill Pass", "Cap Pass", "Pipe Joint Preparation",
      "Principles of Welding", "Pipe Beveling", "Welding Metallurgy", "Welding Symbols", "WPS & PQR",
      "Welding Equipment", "GTAW Root Pass", "SMAW Fill & Cap", "Welding Defects", "NDT & Inspection"
    ],
  },
  {
    id: "pipe-fitter",
    name: "Pipe Fitter",
    nameUrdu: "پائپ فٹر کورس",
    duration: "2 Months",
    durationUrdu: "۲ ماہ",
    category: "Piping",
    description: "Blueprint reading, piping isometric layouts, flange alignment, pipe cutting, beveling, and industrial fitting.",
    subjects: [
      "Safety Orientation", "Pipe Fittings & Flanges", "Pipe Cutting Methods", "Pipe Erection & Installation", "Welding Joints in Piping",
      "Safety in Pipe Fitting", "Valves & Accessories", "Pipe Threading", "Pipe Supports & Hangers", "Piping Drawings & Isometrics",
      "Measuring & Marking Tools", "Gaskets & Jointing Materials", "Pipe Bending Techniques", "Pressure Testing", "Piping Symbols & Codes",
      "Pipe Materials & Types", "Flange Jointing & Bolting", "Pipe Fabrication", "Pipe Insulation & Painting", "Maintenance & Repair"
    ],
  },
  {
    id: "pipe-fabricator",
    name: "Pipe Fabricator",
    nameUrdu: "پائپ فیبریکیٹر",
    duration: "3 Months",
    durationUrdu: "۳ ماہ",
    category: "Piping",
    description: "Fabrication of pipe spools, tees, reducers, elbows, isometric drawings, calculation formulas, and vessel connections.",
    subjects: [
      "Safety Orientation", "Pipe Materials", "Pipe Cutting Methods", "Pipe Bending", "Fabrication Drawings",
      "Safety in Fabrication", "Pipe Fittings & Flanges", "Measuring & Marking", "Pipe Threading", "Welding Joints",
      "Fabrication Principles", "Pipe Supports", "Isometric Drawings", "Pressure Testing", "Piping Symbols",
      "Fabrication Equipment", "Flange Jointing", "Pipe Erection", "Insulation & Painting", "Inspection & Testing"
    ],
  },
  {
    id: "fire-watcher",
    name: "Fire Watcher",
    nameUrdu: "فائر واچر (حفاظتی کورس)",
    duration: "2 Months",
    durationUrdu: "۲ ماہ",
    category: "Technical",
    description: "Industrial safety protocols, hot work permit monitoring, fire extinguisher operations, hazard control, and emergency response.",
    subjects: [
      "Safety Orientation", "Fire Prevention", "Hot Work Permits", "Fire Triangle", "PPE for Hot Work",
      "Fire Hazards", "Extinguisher Types", "Fire Watch Duties", "Gas Detection", "Emergency Response",
      "Principles of Fire Safety", "Welding Hazards", "Confined Space Safety", "Fire Alarm Systems", "Evacuation Procedures",
      "Safety Equipment", "First Aid Basics", "Incident Reporting", "Housekeeping", "Safety Regulations"
    ],
  },
  {
    id: "instrument-technician",
    name: "Instrument Technician",
    nameUrdu: "انسٹرومنٹ ٹیکنیشن",
    duration: "2 Months",
    durationUrdu: "۲ ماہ",
    category: "Technical",
    description: "Calibration, installation, and troubleshooting of pressure, temperature, flow, level transmitters, and control valves.",
    subjects: [
      "Safety Orientation", "Instrumentation Basics", "Pressure Measurement", "Temperature Measurement", "Flow Measurement",
      "Safety in Instrumentation", "Level Measurement", "Transmitters", "Control Valves", "Calibration Basics",
      "Principles of Measurement", "Pneumatic Instruments", "Electronic Instruments", "Control Loops", "PLC Basics",
      "Instrument Equipment", "Loop Checking", "Troubleshooting", "Instrument Drawings", "Maintenance & Testing"
    ],
  },
  {
    id: "electrical-technician",
    name: "Electrical Technician",
    nameUrdu: "الیکٹریکل ٹیکنیشن",
    duration: "2 Months",
    durationUrdu: "۲ ماہ",
    category: "Electrical",
    description: "Electrical power systems, motor controls, circuit protection, power panels, testing equipment, and industrial earthing.",
    subjects: [
      "Safety Orientation", "Electrical Fundamentals", "Ohm's Law", "DC Circuits", "AC Circuits",
      "Electrical Safety", "Measuring Instruments", "Wiring Systems", "Earthing", "Protective Devices",
      "Principles of Electricity", "Motors & Generators", "Transformers", "Lighting Systems", "Cable Jointing",
      "Electrical Equipment", "Control Panels", "Troubleshooting", "Electrical Drawings", "Testing & Inspection"
    ],
  },
  {
    id: "industrial-electrician",
    name: "Industrial Electrician",
    nameUrdu: "انڈسٹریل الیکٹریشن",
    duration: "2 Months",
    durationUrdu: "۲ ماہ",
    category: "Electrical",
    description: "3-phase motors, star-delta starters, relay logic, control circuits, switchgear, panel wiring, and industrial plant systems.",
    subjects: [
      "Safety Orientation", "Industrial Wiring", "Three Phase Systems", "Motors & Starters", "Control Circuits",
      "Industrial Safety", "Power Distribution", "Switchgear", "PLC Fundamentals", "Sensors & Relays",
      "Principles of Industrial Electricity", "Transformers", "Motor Control", "VFD Basics", "Pneumatic Controls",
      "Industrial Equipment", "Panel Wiring", "Troubleshooting", "Electrical Drawings", "Testing & Commissioning"
    ],
  },
  {
    id: "building-electrician",
    name: "Building Electrician",
    nameUrdu: "بلڈنگ الیکٹریشن",
    duration: "2 Months",
    durationUrdu: "۲ ماہ",
    category: "Electrical",
    description: "Domestic and commercial conduit wiring, distribution boards, lighting installation, UPS/inverter wiring, and safety earthing.",
    subjects: [
      "Safety Orientation", "Domestic Wiring", "Lighting Circuits", "Power Circuits", "Earthing Systems",
      "Electrical Safety", "Wiring Accessories", "Switches & Sockets", "Distribution Boards", "Cable Selection",
      "Principles of Building Wiring", "Conduit Wiring", "Concealed Wiring", "Fans & Appliances", "Energy Meters",
      "Building Equipment", "Testing & Inspection", "Fault Finding", "Electrical Drawings", "Safety Regulations"
    ],
  },
  {
    id: "plumber",
    name: "Plumber",
    nameUrdu: "پلمبر کورس",
    duration: "2 Months",
    durationUrdu: "۲ ماہ",
    category: "Technical",
    description: "PPRC, CPVC, GI and PVC pipe installation, sanitary fitting, drainage slopes, water supply pumps, and leak diagnostics.",
    subjects: [
      "Safety Orientation", "Plumbing Tools", "Pipe Materials", "Water Supply Systems", "Drainage Systems",
      "Plumbing Safety", "Pipe Fittings", "Pipe Jointing", "Sanitary Fixtures", "Valves & Taps",
      "Principles of Plumbing", "Pipe Installation", "Water Tanks", "Sewerage Systems", "Plumbing Drawings",
      "Plumbing Equipment", "Hot Water Systems", "Leak Detection", "Maintenance & Repair", "Testing & Inspection"
    ],
  },
];

export const WHY_US: WhyPoint[] = [
  {
    icon: "GraduationCap",
    title: "Experienced & Expert Instructors",
    titleUrdu: "تجربہ کار اور ماہر اساتذہ",
    desc: "Decades of industry experience providing personal mentorship and technical guidance to every student.",
    descUrdu: "صنعتی شعبے کے طویل تجربہ کار ماہرین جو ہر طالب علم پر انفرادی توجہ دیتے ہیں۔",
  },
  {
    icon: "Wrench",
    title: "Hands-on Practical Training",
    titleUrdu: "مکمل پریکٹیکل اور ورکشاپ ٹریننگ",
    desc: "Over 80% workshop training on real machines, pipes, and electrical panels, not just theoretical book knowledge.",
    descUrdu: "صرف کتابی باتیں نہیں بلکہ جدید ورکشاپس میں اصل مشینوں اور پائپوں پر عملی مشق۔",
  },
  {
    icon: "ShieldCheck",
    title: "Government Registered & Licensed",
    titleUrdu: "گورنمنٹ لائسنس یافتہ ادارہ",
    desc: `Official Government Licence No. ${INSTITUTE_INFO.licenceNo} and Registered Trade Mark No. ${INSTITUTE_INFO.tradeMarkNo}.`,
    descUrdu: `سرکاری لائسنس نمبر ${INSTITUTE_INFO.licenceNo} اور ٹریڈ مارک نمبر ${INSTITUTE_INFO.tradeMarkNo} کا قانونی و تسلیم شدہ ادارہ۔`,
  },
  {
    icon: "Award",
    title: "QR-Verified Certificate",
    titleUrdu: "آن لائن تصدیق شدہ سرٹیفکیٹ",
    desc: "Every certificate features an instant QR verification code acceptable across companies and employers nationwide.",
    descUrdu: "ہر سرٹیفکیٹ پر منفرد کیو آر کوڈ جسے کمپنیاں اور ٹھیکیدار آن لائن موقع پر تصدیق کر سکتے ہیں۔",
  },
  {
    icon: "Briefcase",
    title: "Career & Job Guidance",
    titleUrdu: "روزگار اور جاب کے لیے رہنمائی",
    desc: "Career mentorship, interview preparation, trade test guidance, and references for passed-out technicians.",
    descUrdu: "کورس مکمل کرنے پر صنعتی فیکٹریوں اور پروجیکٹس میں ٹریڈ ٹیسٹ اور ملازمت کے لیے مکمل رہنمائی۔",
  },
  {
    icon: "Users",
    title: "Hostel & Outstation Assistance",
    titleUrdu: "بیرون شہر طلبہ کے لیے رہنمائی",
    desc: "Guidance and assistance for students arriving from surrounding districts seeking safe boarding facilities nearby.",
    descUrdu: "دیگر اضلاع اور دور دراز علاقوں سے آنے والے طلبہ کے لیے رہائش کی مناسب رہنمائی۔",
  },
];

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    step: 1,
    title: "Contact or Visit the Campus",
    titleUrdu: "رابطہ یا وزٹ کریں",
    desc: `Call our landline ${INSTITUTE_INFO.phone}, WhatsApp us on ${INSTITUTE_INFO.whatsapp1}, or visit our campus on 88 Road Kot Addu.`,
    descUrdu: `ہمارے لینڈ لائن ${INSTITUTE_INFO.phone} یا واٹس ایپ ${INSTITUTE_INFO.whatsapp1} پر رابطہ کریں یا کیمپس وزٹ کریں۔`,
  },
  {
    step: 2,
    title: "Submit Required Documents",
    titleUrdu: "ضروری دستاویزات لائیں",
    desc: "Bring a photocopy of your CNIC / B-Form, educational certificates (if any), and passport-size photographs.",
    descUrdu: "شناختی کارڈ یا بے فارم کی کاپی، پاسپورٹ سائز تصاویر اور سابقہ تعلیمی کاغذات (اگر ہوں) ہمراہ لائیں۔",
  },
  {
    step: 3,
    title: "Fill Admission Form & Confirm Trade",
    titleUrdu: "فارم پر کریں اور داخلہ کنفرم کریں",
    desc: "Select your preferred trade from our 12 technical courses and complete the enrollment procedure at the admission desk.",
    descUrdu: "اپنی پسند کا ٹریڈ کورس منتخب کریں اور ایڈمیشن ڈیسک پر داخلہ فارم مکمل کر کے تصدیق کروائیں۔",
  },
  {
    step: 4,
    title: "Commence Workshop Classes",
    titleUrdu: "پریکٹیکل کلاسز کا آغاز",
    desc: "Receive your workshop safety gear and start intensive practical training with our expert technical instructors.",
    descUrdu: "سیفٹی سامان کے ساتھ ورکشاپ میں ماہر اساتذہ کی زیر نگرانی عملی تربیت کا باقاعدہ آغاز کریں۔",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is the duration of the training courses?",
    questionUrdu: "کورسز کا دورانیہ کتنا ہے؟",
    answer: "Our trade courses range from 2 months to 5 months depending on the discipline (Multi Welder is 4-5 months; Argon, Electric Welder, 6GR, and Pipe Fabricator are 3 months; technicians, electricians, fitters, and plumbers are 2 months).",
    answerUrdu: "مختلف کورسز کا دورانیہ ۲ ماہ سے ۵ ماہ ہے۔ ملٹی ویلڈر ۴ تا ۵ ماہ، آرگون، ۶ جی آر اور فیبریکیٹر ۳ ماہ، جبکہ الیکٹریشن، پائپ فٹر، پلمبر اور دیگر ٹیکنیشن کورسز ۲ ماہ کے ہیں۔",
  },
  {
    question: "Do students receive an official certificate upon course completion?",
    questionUrdu: "کیا کورس مکمل ہونے پر تصدیق شدہ سرٹیفکیٹ ملتا ہے؟",
    answer: "Yes, every qualified student receives an official Institute Certificate with a unique QR code linked directly to our verification database at almuntazirttc.com.",
    answerUrdu: "جی ہاں، ہر کامیاب طالب علم کو ادارے کا آفیشل سرٹیفکیٹ دیا جاتا ہے جس پر مخصوص کیو آر کوڈ ہوتا ہے، جسے کوئی بھی کمپنی آن لائن فوری طور پر تصدیق کر سکتی ہے۔",
  },
  {
    question: "When are admissions open and when do new batches start?",
    questionUrdu: "داخلے کب شروع ہوتے ہیں اور نیا بیج کب آتا ہے؟",
    answer: "Admissions remain open year-round for new monthly batches. Please reach out to our admission office via WhatsApp or phone to confirm the current batch schedule.",
    answerUrdu: "ہمارے ہاں سال بھر نئے ماہانہ بیجز میں داخلے جاری رہتے ہیں۔ فوری رابطہ کے لیے ہمارے واٹس ایپ یا فون پر موجودہ بیج کا ٹائم معلوم کریں۔",
  },
  {
    question: "Is there job and trade test assistance after the course?",
    questionUrdu: "کیا کورس کے بعد ملازمت حاصل کرنے میں مدد کی جاتی ہے؟",
    answer: "Yes, we actively guide our students regarding industrial job openings, plant shutdowns, factory vacancies, trade tests, and interview technicalities.",
    answerUrdu: "جی ہاں، ہم اپنے پاس آؤٹ طلبہ کو فیکٹریوں، پلانٹس، شٹ ڈاؤن کے کاموں اور ٹریڈ ٹیسٹ پاس کرنے کے لیے مکمل رہنمائی اور معاونت فراہم کرتے ہیں۔",
  },
  {
    question: "Is hostel or lodging guidance available for students from outside Kot Addu?",
    questionUrdu: "کیا باہر کے اضلاع سے آنے والے طلبہ کے لیے رہائش کی سہولت ہے؟",
    answer: "Yes, we guide and facilitate outstation students in finding safe, budget-friendly private hostel or shared accommodation close to the campus.",
    answerUrdu: "جی بالکل، دیگر شہروں اور دور دراز علاقوں سے آنے والے طلبہ کو کیمپس کے قریب مناسب اور محفوظ ہاسٹل کی فراہمی میں مکمل رہنمائی فراہم کی جاتی ہے۔",
  },
];

export const INITIAL_SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "story-1",
    student_name: "Muhammad Rizwan",
    course_name: "Multi Welder (SMAW & MIG)",
    job: "Industrial Welder at Power Plant Project",
    story: "Al-Muntazir TTC ki practical training ne mujhe pehli hi dafa trade test pass karne mein madad di. Aaj main ek baizzat rozgar kama raha hoon.",
  },
  {
    id: "story-2",
    student_name: "Ali Hassan",
    course_name: "Industrial Electrician",
    job: "Control Panel Technician at Textile Mill",
    story: "Motor controls aur star-delta wiring ka live practical yahan sikhne ko mila jis ki badolat foran industrial sector mein job mil gayi.",
  },
  {
    id: "story-3",
    student_name: "Tariq Mehmood",
    course_name: "Pipe Fitter",
    job: "Piping Technician at Fertilizer Plant",
    story: "Isometric drawings aur flange alignment ki behtareen understanding mili. QR verified certificate ne company mein verification aasan bana di.",
  },
  {
    id: "story-4",
    student_name: "Zubair Ahmad",
    course_name: "Argon Welder (TIG)",
    job: "High Pressure TIG Welder at Engineering Fabricators",
    story: "Ustad Talha Hussain aur Haji Imdad Sahab ki zati tawajjah se TIG welding ke root pass mein perfection haasil hui.",
  },
];

export const INITIAL_GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-1",
    photo_url: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    caption: "Multi Welder Practical Training in Workshop",
    sort_order: 1,
  },
  {
    id: "gal-2",
    photo_url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    caption: "Pipe Fitting & Flange Alignment Session",
    sort_order: 2,
  },
  {
    id: "gal-3",
    photo_url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    caption: "Industrial Electrician Motor Controls & Wiring",
    sort_order: 3,
  },
  {
    id: "gal-4",
    photo_url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    caption: "Pipe Fabrication & Spool Assembly",
    sort_order: 4,
  },
  {
    id: "gal-5",
    photo_url: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=800&q=80",
    caption: "Argon (TIG) Welding on Stainless Steel",
    sort_order: 5,
  },
  {
    id: "gal-6",
    photo_url: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80",
    caption: "Trade Test Preparation & Safety Orientation",
    sort_order: 6,
  },
];
