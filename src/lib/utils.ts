import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { INSTITUTE } from "@/data/institute";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Builds direct WhatsApp URL with pre-filled message
 */
export function getWhatsAppUrl(message?: string, number = INSTITUTE.primaryWhatsAppClean): string {
  const base = `https://wa.me/${number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds pre-filled admission application message for WhatsApp
 */
export function buildAdmissionMessage(data: {
  fullName: string;
  fatherName: string;
  phone: string;
  cnic: string;
  course: string;
  message?: string;
}): string {
  return [
    `*NEW ADMISSION INQUIRY*`,
    `------------------------------------`,
    `*Institute:* ${INSTITUTE.fullNameWithCity}`,
    `*Student Name:* ${data.fullName.trim()}`,
    `*Father Name:* ${data.fatherName.trim()}`,
    `*Phone:* ${data.phone.trim()}`,
    `*CNIC:* ${data.cnic.trim()}`,
    `*Selected Course:* ${data.course.trim()}`,
    data.message ? `*Message:* ${data.message.trim()}` : null,
    `------------------------------------`,
    `Sent from official website (${INSTITUTE.domain})`,
  ]
    .filter(Boolean)
    .join("\n");
}

/**
 * Builds course inquiry message for WhatsApp
 */
export function buildCourseInquiryMessage(courseName: string): string {
  return `Hello, I want to apply for the *${courseName}* course at Al-Muntazir Technical Training & Trade Center, Kot Addu. Please share the admission procedure and schedule.`;
}

/**
 * Builds contact form inquiry message for WhatsApp
 */
export function buildContactMessage(data: {
  fullName: string;
  phone: string;
  course: string;
  message: string;
}): string {
  return [
    `*WEBSITE CONTACT INQUIRY*`,
    `------------------------------------`,
    `*Full Name:* ${data.fullName.trim()}`,
    `*Phone:* ${data.phone.trim()}`,
    `*Interested Course:* ${data.course.trim()}`,
    `*Message:* ${data.message.trim()}`,
    `------------------------------------`,
    `Sent from ${INSTITUTE.domain}`,
  ].join("\n");
}
