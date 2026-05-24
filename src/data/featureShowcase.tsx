import { FiClock, FiWifi, FiMic, FiVolume2, FiAirplay, FiShield, FiUsers, FiCheckCircle, FiStar } from "react-icons/fi";
import { IBenefit } from "@/types";

export const featureShowcases: IBenefit[] = [
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
        imageSrc: "/images/mockup-1.png",
    },
];
