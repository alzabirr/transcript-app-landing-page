import { ctaDetails } from "@/data/cta"

import AppStoreButton from "./AppStoreButton"
import PlayStoreButton from "./PlayStoreButton"

const CTA: React.FC = () => {
    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20">
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    <div className="neu-card rounded-[28px] absolute inset-0 -z-10 h-full w-full overflow-hidden">
                        <div className="schematic-grid absolute inset-0 opacity-70"></div>
                        <div className="absolute left-1/2 top-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/55 to-transparent"></div>
                    </div>

                    <div className="h-full flex flex-col items-center justify-center text-foreground text-center px-5">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">{ctaDetails.heading}</h2>

                        <p className="mx-auto max-w-xl text-foreground-accent md:px-5">{ctaDetails.subheading}</p>

                        <div className="mt-4 flex flex-col sm:flex-row items-center sm:gap-4">
                        <AppStoreButton />
                        <PlayStoreButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
