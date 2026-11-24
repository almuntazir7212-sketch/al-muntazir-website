"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AdmissionContextType {
  isOpen: boolean;
  selectedCourse: string;
  openModal: (courseName?: string) => void;
  closeModal: () => void;
}

const AdmissionContext = createContext<AdmissionContextType | undefined>(undefined);

export function AdmissionProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const openModal = (courseName?: string) => {
    setSelectedCourse(courseName || "Multi Welder");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AdmissionContext.Provider value={{ isOpen, selectedCourse, openModal, closeModal }}>
      {children}
    </AdmissionContext.Provider>
  );
}

export function useAdmissionModal() {
  const context = useContext(AdmissionContext);
  if (!context) {
    throw new Error("useAdmissionModal must be used within an AdmissionProvider");
  }
  return context;
}
