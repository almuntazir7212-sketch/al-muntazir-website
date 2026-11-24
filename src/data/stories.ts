export interface SuccessStory {
  id: string;
  studentName: string;
  courseName: string;
  companyOrJob: string;
  story: string;
  imageUrl?: string;
  batchYear?: string;
}

export const INITIAL_SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "story-1",
    studentName: "Muhammad Farooq",
    courseName: "Multi Welder (4-5 Months)",
    companyOrJob: "Lead Welder at Oil & Gas Fabrication Plant",
    story: "Completed intensive SMAW, MIG, and TIG welding training with hands-on pipe preparation. Verified certificate helped secure immediate employment with overseas contracting company.",
    batchYear: "Class of 2024",
  },
  {
    id: "story-2",
    studentName: "Abdul Rehman",
    courseName: "Industrial Electrician (2 Months)",
    companyOrJob: "Senior Maintenance Technician, Textile Mills",
    story: "Mastered 3-phase power distribution, motor control systems, and PLC basics in the practical workshop. Employed immediately upon graduation.",
    batchYear: "Class of 2024",
  },
  {
    id: "story-3",
    studentName: "Tariq Mahmood",
    courseName: "Pipe Fitter (2 Months)",
    companyOrJob: "Piping Supervisor, Heavy Engineering Projects",
    story: "The isometric drawing and practical flange jointing training gave me the exact technical confidence required by engineering contractors.",
    batchYear: "Class of 2023",
  },
  {
    id: "story-4",
    studentName: "Zahid Ali",
    courseName: "6GR Welder (3 Months)",
    companyOrJob: "Specialized Offshore Pipe Welder",
    story: "Passed high-pressure 6GR weld tests on the first attempt thanks to the strict workshop standards and experienced instructor mentorship.",
    batchYear: "Class of 2023",
  },
];
