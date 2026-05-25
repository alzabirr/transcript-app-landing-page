import React from 'react';
import Image from 'next/image';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex min-h-[920px] items-start justify-center px-5 pb-20 pt-24 md:min-h-[980px] md:pt-28 lg:min-h-[1040px] lg:pt-30 overflow-hidden"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="schematic-grid absolute inset-0 h-full w-full bg-hero-background" />
            </div>

            <div className="grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="text-center lg:text-left">
                    <div className="neu-pressed mx-auto mb-6 w-fit rounded-[20px] px-4 py-2 font-mono text-xs font-medium uppercase text-primary lg:mx-0">
                        Offline AI transcription
                    </div>
                    <h1 className="text-4xl font-bold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-6xl">{heroDetails.heading}</h1>
                    <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-foreground-accent lg:mx-0">{heroDetails.subheading}</p>
                    <div className="mt-7 flex flex-col items-center sm:flex-row sm:gap-4 lg:items-start">
                    <AppStoreButton dark />
                    <PlayStoreButton dark />
                    </div>
                </div>

                <div className="relative mx-auto flex min-h-[430px] w-full max-w-[560px] items-center justify-center">
                    <div className="absolute h-[300px] w-[300px] rounded-full border border-primary/25 sm:h-[390px] sm:w-[390px]" />
                    <div className="absolute h-[210px] w-[210px] rounded-full border border-white/80 sm:h-[280px] sm:w-[280px]" />
                    <Image
                        src={heroDetails.centerImageSrc}
                        width={340}
                        height={340}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 340px"
                        priority={true}
                        unoptimized={true}
                        alt="app mockup"
                        className='relative z-10 h-auto w-[200px] sm:w-[280px] md:w-[320px]'
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
