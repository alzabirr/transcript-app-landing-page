import React from 'react';
import Image from 'next/image';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-14 pt-28 md:pt-36 px-5 overflow-hidden"
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

                <div className="relative mx-auto flex min-h-[450px] w-full max-w-[620px] items-center justify-center">
                    <div className="absolute h-[360px] w-[360px] rounded-full border border-primary/25 sm:h-[450px] sm:w-[450px]" />
                    <div className="absolute h-[250px] w-[250px] rounded-full border border-white/80 sm:h-[330px] sm:w-[330px]" />
                    <div className="absolute left-[10%] top-[22%] hidden h-px w-[30%] rotate-12 bg-gradient-to-r from-transparent via-primary to-transparent sm:block" />
                    <div className="absolute bottom-[24%] right-[8%] hidden h-px w-[32%] -rotate-12 bg-gradient-to-r from-transparent via-primary to-transparent sm:block" />
                    <div className="absolute right-[2%] top-[15%] hidden rounded-[20px] px-4 py-3 text-sm font-medium text-foreground sm:block neu-card-soft">
                        Local model
                    </div>
                    <div className="absolute bottom-[16%] left-[2%] hidden rounded-[20px] px-4 py-3 text-sm font-medium text-foreground sm:block neu-card-soft">
                        Private notes
                    </div>
                    <div className="neu-card relative z-10 rounded-[32px] p-5">
                        <Image
                            src={heroDetails.centerImageSrc}
                            width={400}
                            height={350}
                            quality={100}
                            sizes="(max-width: 768px) 100vw, 400px"
                            priority={true}
                            unoptimized={true}
                            alt="app mockup"
                            className='relative z-10 h-auto w-[250px] sm:w-[320px] md:w-[360px]'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
