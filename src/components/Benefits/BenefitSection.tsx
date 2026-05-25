"use client"
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion"

import BenefitBullet from "./BenefitBullet";
import { IBenefit } from "@/types";

interface Props {
    benefit: IBenefit;
    imageAtRight?: boolean;
}

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
    const { title, description, imageSrc, bullets, imageClassName } = benefit;

    return (
        <section className="benefit-section">
            <motion.div
                className="flex flex-wrap flex-col items-center justify-center gap-8 lg:flex-row lg:gap-20 lg:flex-nowrap mb-12 lg:mb-24"
                variants={containerVariants}
                initial="onscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <div
                    className={clsx("flex flex-wrap items-center w-full max-w-lg", { "justify-start": imageAtRight, "lg:order-1 justify-end": !imageAtRight })}
                    
                >
                    <div className="w-full  text-center lg:text-left ">
                        <motion.div
                            className="flex flex-col w-full"
                            variants={childVariants}
                        >
                            <h3 className="lg:max-w-2xl text-3xl lg:text-4xl lg:leading-snug font-bold">
                                {title}
                            </h3>

                            <p className="mt-3 mx-auto lg:ml-0 leading-normal text-base lg:text-lg text-foreground-accent">
                                {description}
                            </p>
                        </motion.div>

                        <div className="hidden lg:block mx-auto lg:ml-0 w-full mt-6">
                            {bullets.map((item, index) => (
                                <BenefitBullet key={index} title={item.title} icon={item.icon} description={item.description} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={clsx("mt-5 lg:mt-0", { "lg:order-2": imageAtRight })}>
                    <div className={clsx("w-fit flex", { "justify-start": imageAtRight, "justify-end": !imageAtRight })}>
                        <Image
                            src={imageSrc}
                            alt={title}
                            width={280}
                            height={660}
                            quality={100}
                            sizes="(max-width: 640px) 165px, (max-width: 768px) 205px, (max-width: 1024px) 235px, 270px"
                            className={clsx("h-[330px] w-[165px] object-fill sm:h-[410px] sm:w-[205px] md:h-[470px] md:w-[235px] lg:h-[540px] lg:w-[270px] lg:ml-0 rounded-[24px]", imageClassName)}
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default BenefitSection
