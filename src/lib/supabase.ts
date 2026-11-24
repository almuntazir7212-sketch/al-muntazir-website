import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

/**
 * Shared Supabase Client
 * Note: If environment variables are not yet populated (e.g. during local build
 * or before the user connects their Supabase credentials), queries return null/empty
 * and fallback demo records are utilized seamlessly.
 */
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export interface StudentRecord {
  id: string;
  student_name: string;
  father_name: string;
  cnic?: string;
  phone?: string;
  course_name: string;
  duration: string;
  created_at?: string;
}

export interface CertificateRecord {
  id: string;
  certificate_id: string;
  student_id: string;
  issue_date: string;
  status: "active" | "revoked";
  left_signatory_name: string;
  left_signatory_title: string;
  left_signature_url?: string;
  right_signatory_name: string;
  right_signatory_title: string;
  right_signature_url?: string;
  stamp_url?: string;
  subjects: string[];
  students?: StudentRecord;
  student_name?: string;
  father_name?: string;
  course_name?: string;
  duration?: string;
  marks_percentage?: number;
  grade?: string;
  held_from?: string;
  held_to?: string;
}
