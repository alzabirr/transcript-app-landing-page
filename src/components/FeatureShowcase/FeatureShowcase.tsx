import BenefitSection from "@/components/Benefits/BenefitSection";
import { featureShowcases } from "@/data/featureShowcase";

const FeatureShowcase: React.FC = () => {
    return (
        <div id="feature-showcase-0">
            {featureShowcases.map((feature, index) => (
                <div key={index} id={`feature-showcase-${index}`}>
                    <BenefitSection
                        benefit={feature}
                        imageAtRight={index % 2 === 0}
                    />
                </div>
            ))}
        </div>
    );
};

export default FeatureShowcase;
