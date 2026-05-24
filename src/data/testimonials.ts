import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Sarah Mitchell',
        role: 'Project Manager',
        message: `${siteDetails.siteName} has completely changed how our team handles meeting notes. The AI summaries save us hours every week, and the offline mode means we can use it even in our basement conference room.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'David Chen',
        role: 'Freelance Journalist',
        message: `As a journalist, I need reliable, unlimited transcription. ${siteDetails.siteName} delivers that perfectly — no minute caps, no cloud uploads. My interview recordings stay completely private on my device.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Priya Sharma',
        role: 'University Researcher',
        message: `The speaker diarization feature is incredible. I record 3-hour focus groups and ${siteDetails.siteName} separates every speaker automatically. It's the best transcription tool I've ever used.`,
        avatar: '/images/testimonial-3.webp',
    },
];