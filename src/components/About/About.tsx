"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiCpu, FiZap, FiMic, FiGlobe } from 'react-icons/fi';

const cards = [
    {
        icon: <FiShield className="w-6 h-6" />,
        title: "Total Privacy",
        description: "Your voice data never leaves your device. No cloud uploads, no external servers, absolute confidentiality.",
        iconColor: "text-blue-600",
        iconBg: "bg-blue-50",
    },
    {
        icon: <FiCpu className="w-6 h-6" />,
        title: "On-Device AI",
        description: "Advanced AI models run completely offline on your device, delivering instant transcripts without internet.",
        iconColor: "text-blue-600",
        iconBg: "bg-blue-50",
    },
    {
        icon: <FiZap className="w-6 h-6" />,
        title: "Truly Unlimited",
        description: "Zero restrictions, zero subscriptions, and no minute caps. Record and transcribe as much as you need.",
        iconColor: "text-blue-600",
        iconBg: "bg-blue-50",
    },
    {
        icon: <FiMic className="w-6 h-6" />,
        title: "Crystal Clear Audio",
        description: "Intelligent AI-driven noise reduction filters background noise and echoes to isolate clean human voices.",
        iconColor: "text-blue-600",
        iconBg: "bg-blue-50",
    },
    {
        icon: <FiGlobe className="w-6 h-6" />,
        title: "Works Anywhere",
        description: "Transcribe in a plane, basement, or anywhere with zero signal coverage. Fully functional offline.",
        iconColor: "text-blue-600",
        iconBg: "bg-blue-50",
    },
];

const About: React.FC = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (!containerRef.current) return;
        const { scrollLeft } = containerRef.current;
        const children = containerRef.current.children;
        let index = 0;
        let minDiff = Infinity;
        
        for (let i = 0; i < children.length; i++) {
            const child = children[i] as HTMLElement;
            const diff = Math.abs(child.offsetLeft - scrollLeft - containerRef.current.offsetLeft);
            if (diff < minDiff) {
                minDiff = diff;
                index = i;
            }
        }
        setActiveIndex(index);
    };

    return (
        <section id="about" className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-[#F9FAFB]/50">
            {/* Soft Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-100/30 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 tracking-tight leading-tight"
                    >
                        Everything You Need,{' '}
                        <span className="text-black">Nothing You Don't</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-base md:text-lg text-foreground-accent leading-relaxed max-w-2xl mx-auto"
                    >
                        No bloat, no subscriptions, no cloud. Just fast, private, and unlimited transcription — built to work anywhere, anytime, for everyone.
                    </motion.p>
                </div>

                {/* Mobile swipable carousel view */}
                <div className="flex lg:hidden flex-col items-center">
                    <div className="flex justify-center items-center gap-1 text-xs font-bold text-foreground-accent tracking-wider uppercase mb-4 opacity-75">
                        <span>Swipe to explore</span>
                        <span className="animate-pulse">➔</span>
                    </div>

                    <div 
                        ref={containerRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto w-full gap-5 pb-6 pt-2 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-4 -mx-4 justify-start"
                    >
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="cursor-pointer snap-center shrink-0 w-[270px]"
                            >
                                <div className="bg-white dark:bg-black/10 backdrop-blur-md rounded-2xl p-7 border border-black/5 dark:border-white/5 shadow-sm min-h-[250px] flex flex-col justify-between">
                                    <div>
                                        <div className="w-12 h-12 rounded-xl bg-yellow-50 dark:bg-yellow-950/20 flex items-center justify-center mb-5">
                                            {card.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                                            {card.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm md:text-base text-foreground-accent leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex justify-center items-center gap-1.5 mt-2">
                        {cards.map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    activeIndex === index ? 'w-5 bg-yellow-500' : 'w-2 bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Desktop elegant clean Grid layout (No messy tilts) */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-8">
                    {cards.slice(0, 3).map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="bg-white/60 dark:bg-black/10 backdrop-blur-md rounded-3xl p-8 border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-yellow-50 dark:bg-yellow-950/20 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-yellow-100 dark:group-hover:bg-yellow-950/40">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                {card.title}
                            </h3>
                            <p className="text-sm md:text-base text-foreground-accent leading-relaxed">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="hidden lg:grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
                    {cards.slice(3, 5).map((card, index) => (
                        <motion.div
                            key={index + 3}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="bg-white/60 dark:bg-black/10 backdrop-blur-md rounded-3xl p-8 border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-yellow-50 dark:bg-yellow-950/20 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-yellow-100 dark:group-hover:bg-yellow-950/40">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                {card.title}
                            </h3>
                            <p className="text-sm md:text-base text-foreground-accent leading-relaxed">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
