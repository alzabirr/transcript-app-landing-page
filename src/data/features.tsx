import React from "react";
import { FiGlobe, FiDownload, FiCloud, FiLock, FiSearch, FiEdit3 } from "react-icons/fi";

export const features = [
  {
    title: "Multi-Language Support",
    description: "Transcribe audio in over 30 languages with high accuracy and fast turnaround.",
    icon: <FiGlobe size={24} />
  },
  {
    title: "Multiple Export Formats",
    description: "Export your transcripts easily as PDF, DOCX, TXT, or SRT files for subtitles.",
    icon: <FiDownload size={24} />
  },
  {
    title: "Cloud Synchronization",
    description: "Access your recordings and transcripts from any device, anytime, anywhere.",
    icon: <FiCloud size={24} />
  },
  {
    title: "Bank-Grade Security",
    description: "Your data is encrypted in transit and at rest ensuring complete privacy.",
    icon: <FiLock size={24} />
  },
  {
    title: "Smart Search",
    description: "Search across all your transcripts to find exactly what was said in seconds.",
    icon: <FiSearch size={24} />
  },
  {
    title: "Rich Text Editor",
    description: "Edit transcripts while listening to the synced audio playback seamlessly.",
    icon: <FiEdit3 size={24} />
  }
];
