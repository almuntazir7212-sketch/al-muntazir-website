export interface Course {
  id: string;
  name: string;
  duration: string;
  shortDescription: string;
  badge?: string;
  subjects: string[];
}

export const COURSES: Course[] = [
  {
    id: "multi-welder",
    name: "Multi Welder",
    duration: "4–5 Months",
    badge: "Flagship Trade",
    shortDescription: "Comprehensive mastery in SMAW, MIG/MAG, and TIG welding across steel plates and pipes.",
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
    duration: "3 Months",
    badge: "High Demand",
    shortDescription: "Specialized Gas Tungsten Arc Welding (TIG) training for precision root passes on pipes and high-grade alloys.",
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
    duration: "3 Months",
    shortDescription: "Industrial Shielded Metal Arc Welding (SMAW) focusing on structural fabrications and heavy welding joints.",
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
    duration: "3 Months",
    badge: "Advanced Trade",
    shortDescription: "Rigorous 6G and 6GR inclined pipe welding with restricted ring for offshore and heavy process plant standards.",
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
    duration: "2 Months",
    badge: "Core Trade",
    shortDescription: "Industrial piping installation, flange alignment, pipe cutting, threading, and isometric blueprint reading.",
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
    duration: "3 Months",
    shortDescription: "Advanced piping layout, offset calculations, mitre cut development, and high-pressure spool fabrication.",
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
    duration: "2 Months",
    shortDescription: "Certified site safety monitoring, hot work permit compliance, gas detection, and emergency hazard response.",
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
    duration: "2 Months",
    shortDescription: "Industrial instrumentation calibration, pressure/temperature sensors, pneumatic systems, and process control loops.",
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
    duration: "2 Months",
    shortDescription: "Electrical equipment installation, circuit diagnostics, transformer maintenance, and safety protective devices.",
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
    duration: "2 Months",
    badge: "Industry Preferred",
    shortDescription: "Heavy plant power distribution, 3-phase motor starters, switchgear maintenance, and industrial control panel wiring.",
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
    duration: "2 Months",
    shortDescription: "Commercial and residential concealed conduit wiring, distribution boards, lighting circuits, and load calculations.",
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
    duration: "2 Months",
    shortDescription: "Modern water supply installation, sanitary ware fitting, high-pressure PPRC/UPVC piping, and leak diagnostics.",
    subjects: [
      "Safety Orientation", "Plumbing Tools", "Pipe Materials", "Water Supply Systems", "Drainage Systems",
      "Plumbing Safety", "Pipe Fittings", "Pipe Jointing", "Sanitary Fixtures", "Valves & Taps",
      "Principles of Plumbing", "Pipe Installation", "Water Tanks", "Sewerage Systems", "Plumbing Drawings",
      "Plumbing Equipment", "Hot Water Systems", "Leak Detection", "Maintenance & Repair", "Testing & Inspection"
    ],
  },
];
