import React from 'react';
import { features } from '@/data/features';

const FeaturesGrid: React.FC = () => {
    // Duplicate items to ensure smooth infinite scroll
    const items = [...features, ...features];

    return (
        <div className="relative w-full overflow-hidden flex flex-col py-4 group max-w-[100vw]">
            {/* Fade edges */}
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

            <div className="flex space-x-6 animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] w-max">
                {items.map((feature, index) => (
                    <div
                        key={index}
                        className="group flex-none w-[350px] flex items-start space-x-5 p-6 rounded-3xl bg-background border border-border/20 hover:border-primary/30 hover:bg-muted/30 transition-all duration-300 hover:shadow-lg"
                    >
                        <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                            {feature.icon}
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-base text-foreground-accent/90 leading-relaxed">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesGrid;
