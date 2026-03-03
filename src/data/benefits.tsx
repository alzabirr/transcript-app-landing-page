import { FiClock, FiMic, FiTrendingUp, FiZap, FiUsers, FiCheckCircle, FiLock, FiShield, FiCalendar } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Truly Unlimited Transcription",
        description: "Break free from restrictive monthly caps. Meeting Transcript Unlimited is built for long conversations, ensuring you never run out of minutes.",
        bullets: [
            {
                title: "No Recording Limits",
                description: "Record hours of meetings without worrying about single-session cutoffs.",
                icon: <FiClock size={26} />
            },
            {
                title: "No Monthly Caps",
                description: "Transcribe as much as you need every month. No tiered minute plans.",
                icon: <FiTrendingUp size={26} />
            },
            {
                title: "Crystal Clear Audio",
                description: "Advanced audio enhancement focuses on voices while reducing background noise.",
                icon: <FiMic size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "AI-Powered Intelligence",
        description: "Turn your raw audio into actionable insights automatically with our advanced AI processing engine.",
        bullets: [
            {
                title: "Smart Summarization",
                description: "Get concise meeting summaries and key action items instantly.",
                icon: <FiZap size={26} />
            },
            {
                title: "Speaker Diarization",
                description: "Automatically identifies and separates different speakers in the transcript.",
                icon: <FiUsers size={26} />
            },
            {
                title: "Auto Typo Correction",
                description: "AI-driven correction ensures your transcripts are accurate and professional.",
                icon: <FiCheckCircle size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Private & Secure Offline Mode",
        description: "Your sensitive meeting data never leaves your device. We process everything locally for maximum security.",
        bullets: [
            {
                title: "Offline Processing",
                description: "Transcription happens on-device. No internet, no cloud, no leaks.",
                icon: <FiLock size={26} />
            },
            {
                title: "Data Sovereignty",
                description: "You own your data. We don't collect, store, or share your recordings.",
                icon: <FiShield size={26} />
            },
            {
                title: "Calendar Integration",
                description: "Automatically organizes your transcripts based on your meeting schedule.",
                icon: <FiCalendar size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]