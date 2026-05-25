import React from 'react';
import { features } from '@/data/features';

const FeaturesGrid: React.FC = () => {
    // Duplicate items to ensure smooth infinite scroll
    const items = [...features, ...features];

    return (
        <div className="relative w-full overflow-hidden flex flex-col py-4 group/marquee max-w-[100vw]">
            {/* Fade edges */}
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

            <div className="flex space-x-6 animate-[marquee_40s_linear_infinite] group-hover/marquee:[animation-play-state:paused] w-max py-4">
                {items.map((feature, index) => (
                    <div
                        key={index}
                        className="group flex-none w-[280px] flex items-center space-x-3 p-4 rounded-[20px] neu-card-soft transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-[16px] neu-pressed text-primary group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            {React.cloneElement(feature.icon as React.ReactElement, { size: 18 })}
                        </div>
                        <div className="flex-1">
                            <h3 className="text-base font-semibold text-secondary mb-0.5 group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-xs text-foreground-accent/90 leading-tight line-clamp-2">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesGrid;
