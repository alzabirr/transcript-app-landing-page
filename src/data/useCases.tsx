import React from "react";
import { FiBookOpen, FiMic, FiBriefcase, FiRadio } from "react-icons/fi";

export const useCases = [
  {
    title: "Students",
    description: "Record long lectures and get instant summaries. Focus on understanding rather than taking notes.",
    icon: <FiBookOpen size={32} />
  },
  {
    title: "Journalists",
    description: "Capture interviews accurately. Instantly transcribe and highlight key quotes for your articles.",
    icon: <FiMic size={32} />
  },
  {
    title: "Professionals",
    description: "Keep track of long meetings and decisions. Generate action items without lifting a finger.",
    icon: <FiBriefcase size={32} />
  },
  {
    title: "Podcasters",
    description: "Generate accurate transcripts for your episodes to boost SEO and accessibility for your audience.",
    icon: <FiRadio size={32} />
  }
];
