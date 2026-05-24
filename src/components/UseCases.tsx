import React from 'react';
import { useCases } from '@/data/useCases';

const UseCases: React.FC = () => {
    // Duplicate items to ensure smooth infinite scroll
    const items = [...useCases, ...useCases, ...useCases];

    return (
        <div className="relative w-full overflow-hidden flex flex-col py-4 group">
            {/* Fade edges */}
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex space-x-6 animate-[marquee-reverse_35s_linear_infinite] group-hover:[animation-play-state:paused] w-max">
                {items.map((useCase, index) => (
                    <div
                        key={index}
                        className="group relative flex-none w-[320px] p-8 bg-background/50 backdrop-blur-sm rounded-3xl border border-border/30 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] shadow-sm flex flex-col items-center text-center sm:items-start sm:text-left overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative mb-6 text-primary bg-primary/10 group-hover:bg-primary group-hover:text-white p-4 rounded-2xl inline-flex transition-colors duration-300">
                            {useCase.icon}
                        </div>
                        <h3 className="relative text-xl font-bold text-secondary mb-3">{useCase.title}</h3>
                        <p className="relative text-foreground-accent leading-relaxed">{useCase.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UseCases;
