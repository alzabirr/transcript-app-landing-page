import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { IPricing } from "@/types";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, features } = tier;

    return (
        <div className={clsx(
            "w-full max-w-sm mx-auto rounded-xl border lg:max-w-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-400 hover:bg-blue-600 group",
            highlight ? "bg-blue-600 border-blue-400 shadow-xl" : "bg-white border-gray-200"
        )}>
            <div className={clsx("p-6 border-b rounded-t-xl", highlight ? "border-white/20" : "border-gray-200 group-hover:border-white/20")}>
                <h3 className={clsx("text-2xl font-semibold mb-4 transition-colors", highlight ? "text-white" : "group-hover:text-white")}>{name}</h3>
                <p className={clsx("text-3xl md:text-5xl font-bold mb-6 transition-colors", highlight ? "text-white" : "group-hover:text-white")}>
                    <span className={clsx({ "text-white": highlight })}>
                        {typeof price === 'number' ? `$${price}` : price}
                    </span>
                    {typeof price === 'number' && <span className={clsx("text-lg font-normal", highlight ? "text-white/70" : "text-gray-600 group-hover:text-white/70")}>/mo</span>}
                </p>
                {/* <button className={clsx("w-full py-3 px-4 rounded-full transition-colors", { "bg-primary hover:bg-primary-accent": highlight, "bg-hero-background hover:bg-gray-200": !highlight })}>
                    Get Started
                </button> */}
            </div>
            <div className="p-6 mt-1">
                <p className={clsx("font-bold mb-0 transition-colors", highlight ? "text-white" : "group-hover:text-white")}>FEATURES</p>
                <p className={clsx("mb-5 transition-colors", highlight ? "text-white/70" : "text-foreground-accent group-hover:text-white/70")}>Everything in basic, plus...</p>
                <ul className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <BsFillCheckCircleFill className={clsx("h-5 w-5 mr-2 transition-colors", highlight ? "text-white" : "text-secondary group-hover:text-white")} />
                            <span className={clsx("transition-colors", highlight ? "text-white/90" : "text-foreground-accent group-hover:text-white/90")}>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PricingColumn
