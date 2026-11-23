import { createClient } from "@supabase/supabase-js";
import { Certificate, GalleryPhoto, SuccessStory } from "@/types";
import { INITIAL_GALLERY_PHOTOS, INITIAL_SUCCESS_STORIES } from "./constants";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes("your-project")
);

// Graceful client: if not configured, returns null or a stub
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Fetch verified certificate by certificate_id (e.g. AMT-2026-0001)
 */
export async function getCertificateById(certificateId: string): Promise<Certificate | null> {
  const cleanId = certificateId.trim().toUpperCase();

  // 1. Try Supabase if configured
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("certificates")
        .select(`
          id,
          certificate_id,
          student_id,
          issue_date,
          status,
          left_signatory_name,
          left_signatory_title,
          left_signature_url,
          right_signatory_name,
          right_signatory_title,
          right_signature_url,
          stamp_url,
          subjects,
          created_at,
          students (
            student_name,
            father_name,
            course_name,
            duration
          )
        `)
        .eq("certificate_id", cleanId)
        .maybeSingle();

      if (!error && data) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const student = (data as any).students;
        return {
          id: data.id,
          certificate_id: data.certificate_id,
          student_id: data.student_id,
          student_name: student?.student_name || "Certified Student",
          father_name: student?.father_name || "Father Name",
          course_name: student?.course_name || "Technical Course",
          duration: student?.duration || "3 Months",
          issue_date: data.issue_date,
          status: data.status as 'active' | 'revoked',
          left_signatory_name: data.left_signatory_name || "TALHA HUSSAIN",
          left_signatory_title: data.left_signatory_title || "Workshop Incharge",
          left_signature_url: data.left_signature_url,
          right_signatory_name: data.right_signatory_name || "IMDAD HUSSAIN",
          right_signatory_title: data.right_signatory_title || "Project Incharge",
          right_signature_url: data.right_signature_url,
          stamp_url: data.stamp_url,
          subjects: Array.isArray(data.subjects) ? data.subjects : [],
          created_at: data.created_at,
        };
      }
    } catch (err) {
      console.warn("Supabase certificate query error:", err);
    }
  }

  // 2. Demo fallback for test verification: AMT-2026-0001 and AMT-2026-0002
  if (cleanId === "AMT-2026-0001" || cleanId === "AMT-TEST-0001") {
    return {
      id: "demo-cert-1",
      certificate_id: cleanId,
      student_name: "Muhammad Rizwan",
      father_name: "Ghulam Shabbir",
      course_name: "Multi Welder",
      duration: "4–5 Months",
      issue_date: "2026-10-15",
      held_from: "15-05-2026",
      held_to: "15-10-2026",
      status: "active",
      left_signatory_name: "TALHA HUSSAIN",
      left_signatory_title: "Workshop Incharge",
      right_signatory_name: "IMDAD HUSSAIN",
      right_signatory_title: "Project Incharge",
      subjects: [
        "Safety Orientation", "Classification of Electrodes", "Welding Applications", "Welding Procedures", "SMAW & MIG Welders",
        "Safety in Welding", "Electrodes", "Welding Metallurgy", "Schedules & Variables", "Gas Cutting",
        "Principles of Welding", "Covered Electrodes", "Types of Joints", "Pre-Weld Preparations", "Non Destructive Tests",
        "Welding Equipment", "Arc Welding Positions", "Welding Symbols", "Welding Defects", "WPS & WPQR"
      ],
      marks_obtained: "88",
      grade: "A",
    };
  }

  if (cleanId === "AMT-2026-0002") {
    return {
      id: "demo-cert-2",
      certificate_id: "AMT-2026-0002",
      student_name: "Tariq Mehmood",
      father_name: "Abdul Majeed",
      course_name: "Pipe Fitter",
      duration: "2 Months",
      issue_date: "2026-11-01",
      held_from: "01-09-2026",
      held_to: "01-11-2026",
      status: "active",
      left_signatory_name: "TALHA HUSSAIN",
      left_signatory_title: "Workshop Incharge",
      right_signatory_name: "IMDAD HUSSAIN",
      right_signatory_title: "Project Incharge",
      subjects: [
        "Safety Orientation", "Pipe Fittings & Flanges", "Pipe Cutting Methods", "Pipe Erection & Installation", "Welding Joints in Piping",
        "Safety in Pipe Fitting", "Valves & Accessories", "Pipe Threading", "Pipe Supports & Hangers", "Piping Drawings & Isometrics",
        "Measuring & Marking Tools", "Gaskets & Jointing Materials", "Pipe Bending Techniques", "Pressure Testing", "Piping Symbols & Codes",
        "Pipe Materials & Types", "Flange Jointing & Bolting", "Pipe Fabrication", "Pipe Insulation & Painting", "Maintenance & Repair"
      ],
      marks_obtained: "91",
      grade: "A+",
    };
  }

  return null;
}

/**
 * Fetch gallery photos from Supabase with fallback to INITIAL_GALLERY_PHOTOS
 */
export async function getGalleryPhotos(): Promise<GalleryPhoto[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("gallery_photos")
        .select("*")
        .order("sort_order", { ascending: true });

      if (!error && data && data.length > 0) {
        return data as GalleryPhoto[];
      }
    } catch (err) {
      console.warn("Failed to fetch gallery photos from Supabase, using fallback:", err);
    }
  }
  return INITIAL_GALLERY_PHOTOS;
}

/**
 * Fetch success stories from Supabase with fallback to INITIAL_SUCCESS_STORIES
 */
export async function getSuccessStories(): Promise<SuccessStory[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("success_stories")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data && data.length > 0) {
        return data as SuccessStory[];
      }
    } catch (err) {
      console.warn("Failed to fetch success stories from Supabase, using fallback:", err);
    }
  }
  return INITIAL_SUCCESS_STORIES;
}
