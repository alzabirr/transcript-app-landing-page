import { FiAirplay, FiClock, FiMic, FiTrendingUp, FiZap, FiUsers, FiCheckCircle, FiStar } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Built for Longer Meetings",
        description: "Capture meetings over 2+ hours without any interruption or data loss. No session limits, no cutoffs — record as long as you need.",
        bullets: [
            {
                title: "No Recording Time Limits",
                description: "Record meetings for hours on end without worrying about single-session cutoffs.",
                icon: <FiClock size={26} />,
            },
            {
                title: "Continuous Background Recording",
                description: "App keeps recording even when your screen turns off or you switch apps.",
                icon: <FiAirplay size={26} />,
            },
            {
                title: "Never Miss a Word",
                description: "Every minute of your meeting is captured and ready to transcribe instantly.",
                icon: <FiStar size={26} />,
            },
        ],
        imageSrc: "/images/mockup-2.webp",
    },
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
        imageSrc: "/images/mockup-1.png"
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
        imageSrc: "/images/trans.png"
    },
]
