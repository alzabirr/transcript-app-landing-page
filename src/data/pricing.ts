import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Free',
        price: 0,
        features: [
            'Standard transcription',
            'On-device processing',
            'Basic summaries',
            'Community support',
        ],
    },
    {
        name: 'Unlimited Pro',
        price: 19,
        features: [
            'Truly unlimited minutes',
            'Advanced AI summaries',
            'Speaker diarization',
            'AI typo correction',
            'Priority support',
            'Calendar integration',
        ],
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        features: [
            'Team collaboration',
            'Centralized billing',
            'Advanced security auditing',
            'Dedicated account manager',
            'Custom AI training',
            'API access',
        ],
    },
]