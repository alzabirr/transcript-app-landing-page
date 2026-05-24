"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import { faqs } from "@/data/faq";

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="py-6 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="">
                    <p className="hidden lg:block text-sm text-foreground-accent">FAQ&apos;S</p>
                    <h2 className="my-3 text-xl lg:text-2xl font-bold !leading-snug lg:max-w-sm text-center lg:text-left">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="w-full lg:max-w-2xl mx-auto border-b">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-7">
                            <Disclosure>
                                {({ open }) => (
                                    <div>
                                        <DisclosureButton className="flex items-center justify-between w-full px-4 pt-7 text-left border-t">
                                            <span className="text-lg lg:text-xl font-semibold">{faq.question}</span>
                                            {open ? <BiMinus className="w-5 h-5 text-secondary" /> : <BiPlus className="w-5 h-5 text-secondary" />}
                                        </DisclosureButton>
                                        <DisclosurePanel className="px-4 pt-4 pb-2 text-foreground-accent">
                                            {faq.answer}
                                        </DisclosurePanel>
                                    </div>
                                )}
                            </Disclosure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
