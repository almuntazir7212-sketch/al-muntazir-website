export interface Course {
  id: string;
  name: string;
  nameUrdu: string;
  duration: string;
  durationUrdu: string;
  description: string;
  category: 'Welding' | 'Electrical' | 'Piping' | 'Technical';
  subjects: string[];
}

export interface Student {
  id: string;
  student_name: string;
  father_name: string;
  cnic: string;
  phone: string;
  course_name: string;
  duration: string;
  created_at?: string;
}

export interface Certificate {
  id: string;
  certificate_id: string; // e.g. AMT-2026-0001
  student_id?: string;
  student_name: string;
  father_name: string;
  course_name: string;
  duration: string;
  issue_date: string;
  held_from?: string;
  held_to?: string;
  status: 'active' | 'revoked';
  left_signatory_name: string;
  left_signatory_title: string;
  left_signature_url?: string;
  right_signatory_name: string;
  right_signatory_title: string;
  right_signature_url?: string;
  stamp_url?: string;
  subjects: string[];
  marks_obtained?: string;
  grade?: string;
  created_at?: string;
}

export interface SuccessStory {
  id: string;
  student_name: string;
  course_name: string;
  job: string;
  story: string;
  photo_url?: string;
  created_at?: string;
}

export interface GalleryPhoto {
  id: string;
  photo_url: string;
  caption: string;
  sort_order: number;
  created_at?: string;
}

export interface FaqItem {
  questionUrdu: string;
  question: string;
  answerUrdu: string;
  answer: string;
}

export interface AdmissionStep {
  step: number;
  titleUrdu: string;
  title: string;
  descUrdu: string;
  desc: string;
}

export interface WhyPoint {
  titleUrdu: string;
  title: string;
  descUrdu: string;
  desc: string;
  icon: string;
}
