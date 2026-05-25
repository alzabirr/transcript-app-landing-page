import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';
import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

const Footer: React.FC = () => {
    const socialLinks = Object.entries(footerDetails.socials).filter(
        (entry): entry is [string, string] => Boolean(entry[1])
    );

    return (
        <footer className="bg-hero-background px-5 pb-8 pt-14 text-foreground">
            <div className="neu-card-soft mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 rounded-[28px] px-6 py-10 md:grid-cols-[1.35fr_0.8fr_0.85fr] lg:px-10">
                <div>
                    <Link href="/" className="flex w-fit items-center gap-3">
                        <Image
                            src={siteDetails.siteLogo}
                            alt={siteDetails.siteName}
                            width={32}
                            height={32}
                            className="h-8 w-8 object-contain"
                        />
                        <h3 className="manrope text-xl font-semibold cursor-pointer text-foreground">
                            Meeting Transcript Unlimited
                        </h3>
                    </Link>
                    <p className="mt-4 max-w-md text-sm leading-6 text-foreground-accent">
                        {footerDetails.subheading}
                    </p>
                    <div className="mt-5 flex origin-left scale-[0.75] flex-col items-start gap-4 sm:flex-row sm:gap-5">
                        <AppStoreButton dark />
                        <PlayStoreButton dark />
                    </div>
                </div>
                <div>
                    <h4 className="mb-4 font-mono text-xs font-semibold uppercase text-primary">Quick Links</h4>
                    <ul className="space-y-3 text-sm text-foreground-accent">
                        {footerDetails.quickLinks.map(link => (
                            <li key={link.text}>
                                <Link href={link.url} className="transition-colors hover:text-primary">{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="mb-4 font-mono text-xs font-semibold uppercase text-primary">Contact Us</h4>

                    {footerDetails.email && <a href={`mailto:${footerDetails.email}`} className="block text-sm text-foreground-accent transition-colors hover:text-primary">Email: {footerDetails.email}</a>}

                    {footerDetails.telephone && <a href={`tel:${footerDetails.telephone}`} className="mt-3 block text-sm text-foreground-accent transition-colors hover:text-primary">Phone: {footerDetails.telephone}</a>}

                    {socialLinks.length > 0 && (
                        <div className="mt-5 flex items-center gap-5 flex-wrap">
                            {socialLinks.map(([platformName, url]) => (
                                <Link
                                    href={url}
                                    key={platformName}
                                    aria-label={platformName}
                                >
                                    {getPlatformIconByName(platformName)}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="mx-auto mt-6 max-w-7xl px-6 text-center text-xs text-foreground-accent">
                <p>Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;


















