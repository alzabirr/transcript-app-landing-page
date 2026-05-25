"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiCpu, FiZap, FiMic, FiGlobe } from 'react-icons/fi';

const cards = [
    {
        icon: <FiShield className="w-6 h-6" />,
        title: "Total Privacy",
        description: "Your voice data never leaves your device. No cloud uploads, no external servers, absolute confidentiality.",
        iconColor: "text-primary",
        iconBg: "neu-pressed",
    },
    {
        icon: <FiCpu className="w-6 h-6" />,
        title: "On-Device AI",
        description: "Advanced AI models run completely offline on your device, delivering instant transcripts without internet.",
        iconColor: "text-primary",
        iconBg: "neu-pressed",
    },
    {
        icon: <FiZap className="w-6 h-6" />,
        title: "Truly Unlimited",
        description: "Zero restrictions, zero subscriptions, and no minute caps. Record and transcribe as much as you need.",
        iconColor: "text-primary",
        iconBg: "neu-pressed",
    },
    {
        icon: <FiMic className="w-6 h-6" />,
        title: "Crystal Clear Audio",
        description: "Intelligent AI-driven noise reduction filters background noise and echoes to isolate clean human voices.",
        iconColor: "text-primary",
        iconBg: "neu-pressed",
    },
    {
        icon: <FiGlobe className="w-6 h-6" />,
        title: "Works Anywhere",
        description: "Transcribe in a plane, basement, or anywhere with zero signal coverage. Fully functional offline.",
        iconColor: "text-primary",
        iconBg: "neu-pressed",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.93 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.55,
            delay: i * 0.12,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
    }),
};

const headerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
};

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
        <section id="about" className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-x-0 top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <motion.h2
                        variants={headerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 tracking-tight leading-tight"
                    >
                        Everything You Need,{' '}
                        <span className="text-primary">Nothing You Don&apos;t</span>
                    </motion.h2>
                    <motion.p
                        variants={headerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        className="text-base md:text-lg text-foreground-accent leading-relaxed max-w-2xl mx-auto"
                    >
                        No bloat, no subscriptions, no cloud. Just fast, private, and unlimited transcription built to work anywhere, anytime, for everyone.
                    </motion.p>
                </div>

                {/* Mobile swipable carousel view */}
                <div className="flex lg:hidden flex-col items-center">
                    <div className="flex justify-center items-center gap-1 text-xs font-bold text-foreground-accent tracking-wider uppercase mb-4 opacity-75">
                        <span>Swipe to explore</span>
                        <span className="h-px w-8 bg-primary" aria-hidden="true" />
                    </div>

                    <div
                        ref={containerRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto w-full gap-5 pb-6 pt-2 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-4 -mx-4 justify-start"
                    >
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-40px" }}
                                className="cursor-pointer snap-center shrink-0 w-[270px]"
                            >
                                <div className="neu-card-soft rounded-[20px] p-7 min-h-[250px] flex flex-col justify-between">
                                    <div>
                                        <div className="w-12 h-12 rounded-[16px] neu-pressed text-primary flex items-center justify-center mb-5">
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
                                    activeIndex === index ? 'w-5 bg-primary' : 'w-2 bg-[#D1D9E6]'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Desktop Grid — top 3 cards */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-8">
                    {cards.slice(0, 3).map((card, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.22 } }}
                            className="neu-card-soft rounded-[20px] p-8 transition-all duration-300 group cursor-pointer"
                        >
                            <div className="w-14 h-14 rounded-[18px] neu-pressed text-primary flex items-center justify-center mb-6 transition-colors duration-300">
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

                {/* Desktop Grid — bottom 2 cards */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
                    {cards.slice(3, 5).map((card, index) => (
                        <motion.div
                            key={index + 3}
                            custom={index + 3}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.22 } }}
                            className="neu-card-soft rounded-[20px] p-8 transition-all duration-300 group cursor-pointer"
                        >
                            <div className="w-14 h-14 rounded-[18px] neu-pressed text-primary flex items-center justify-center mb-6 transition-colors duration-300">
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
