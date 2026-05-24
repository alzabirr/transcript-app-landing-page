"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { IFeatureShowcase } from "@/data/featureShowcase";

interface Props {
    feature: IFeatureShowcase;
    index: number;
}

const FeatureShowcaseCard: React.FC<Props> = ({ feature, index }) => {
    const { title, subtitle, imageSrc, imageAlt } = feature;

    return (
        <section
            id={`feature-showcase-${index}`}
            className="relative overflow-hidden"
            style={{ backgroundColor: "#FBCFAD" }}
        >
            {/* Bottom coral/orange blob — exactly like reference */}
            <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{ height: "52%" }}
            >
                <svg
                    viewBox="0 0 800 420"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "100%", height: "100%", display: "block" }}
                >
                    <ellipse cx="400" cy="380" rx="520" ry="280" fill="#E8682A" opacity="0.90" />
                    <ellipse cx="400" cy="420" rx="600" ry="260" fill="#D45A1E" opacity="0.70" />
                </svg>
            </div>

            {/* Content wrapper */}
            <div className="relative z-10 flex flex-col items-center text-center px-5 pt-16 pb-0">

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        fontFamily: "Manrope, sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(2rem, 6vw, 3rem)",
                        lineHeight: 1.15,
                        color: "#111111",
                        maxWidth: "340px",
                    }}
                >
                    {title}
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{
                        marginTop: "12px",
                        fontWeight: 700,
                        fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
                        color: "#222222",
                        maxWidth: "300px",
                    }}
                >
                    {subtitle}
                </motion.p>

                {/* Phone mockup — large, sitting on the blob */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, delay: 0.2 }}
                    style={{ marginTop: "40px", position: "relative", zIndex: 20 }}
                >
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={280}
                        height={560}
                        quality={100}
                        sizes="(max-width: 640px) 230px, 280px"
                        unoptimized
                        style={{
                            objectFit: "contain",
                            maxHeight: "520px",
                            filter: "drop-shadow(0px 20px 50px rgba(0,0,0,0.35))",
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default FeatureShowcaseCard;
