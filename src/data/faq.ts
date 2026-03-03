import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `How does the "Unlimited" model work?`,
        answer: 'Unlike other apps that charge per minute or have monthly caps, our Unlimited plan allows you to record and transcribe as much as you need without any extra costs or session limits.',
    },
    {
        question: `Is my meeting data secure?`,
        answer: 'Yes. By default, your audio is processed offline on your device. This means your sensitive conversations never leave your phone or computer, providing total privacy.',
    },
    {
        question: 'Does it support multiple speakers?',
        answer: `Yes! Our advanced speaker diarization identifies and labels different voices in the conversation, making it easy to follow who said what.`
    },
    {
        question: 'What is AI Typo Correction?',
        answer: 'Our AI engine automatically reviews your transcripts to identify and fix common transcription errors, ensuring a much higher accuracy rate for professional use.',
    },
    {
        question: 'Can I use it without an internet connection?',
        answer: 'Absolutely. The core transcription engine runs locally on your device, allowing you to record and transcribe anywhere, anytime, without needing data or WiFi.'
    }
];