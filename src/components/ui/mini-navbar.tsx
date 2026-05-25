"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';




export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
    const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const toggleMenu = () => setIsOpen(prev => !prev);

    useEffect(() => {
        if (shapeTimeoutRef.current) clearTimeout(shapeTimeoutRef.current);

        if (isOpen) {
            setHeaderShapeClass('rounded-2xl');
        } else {
            shapeTimeoutRef.current = setTimeout(() => {
                setHeaderShapeClass('rounded-full');
            }, 300);
        }

        return () => {
            if (shapeTimeoutRef.current) clearTimeout(shapeTimeoutRef.current);
        };
    }, [isOpen]);

    const logoElement = (
        <Link href="/" className="flex items-center gap-2.5">
            <Image
                src={siteDetails.siteLogo}
                alt={siteDetails.siteName}
                width={40}
                height={47}
                className="h-7 w-auto object-contain sm:h-8"
                priority
            />
            <span className="hidden sm:block text-foreground font-bold text-lg tracking-normal">
                Meeting Transcript
            </span>
        </Link>
    );

    const downloadButtonElement = (
        <div className="relative group w-full sm:w-auto">
            <Link
                href="#cta"
                className="relative z-10 px-6 py-2.5 text-sm font-semibold text-white
                           bg-primary rounded-[20px] hover:bg-primary-accent
                           shadow-[0_2px_8px_rgba(44,44,44,0.08)]
                           transition-all duration-200 inline-flex items-center justify-center whitespace-nowrap
                           active:translate-y-px"
            >
                Download App
            </Link>
        </div>
    );

    return (
        <header
            className={`fixed top-6 right-4 z-[100] sm:left-1/2 sm:right-auto sm:-translate-x-1/2
                        flex flex-col items-center
                        sm:px-8 sm:py-3
                        ${headerShapeClass}
                        border border-white/70
                        bg-[#F4F6F8]/80
                        backdrop-blur-xl
                        shadow-[0_2px_12px_rgba(44,44,44,0.06)]

                        ${isOpen ? 'w-56 px-5 py-3' : 'w-8 p-0'} sm:w-[calc(100%-4rem)] sm:max-w-[1300px]
                        transition-[border-radius] duration-300 ease-in-out`}
        >
            <div className="relative flex items-center justify-end w-full sm:justify-between">

                {/* Logo */}
                <div className="hidden items-center shrink-0 sm:flex">
                    {logoElement}
                </div>

                {/* Desktop nav links — absolutely centered */}
                <nav className="hidden sm:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
                    {menuItems.map((item) => (
                        <Link
                            key={item.url}
                            href={item.url}
                            className="text-sm font-medium text-foreground-accent hover:text-primary transition-colors duration-200"
                        >
                            {item.text}
                        </Link>
                    ))}
                </nav>

                {/* Desktop right actions */}
                <div className="hidden sm:flex items-center gap-4 shrink-0">
                    {downloadButtonElement}

                </div>

                {/* Mobile hamburger */}
                <button
                    className="sm:hidden flex items-center justify-center w-8 h-8 text-foreground-accent hover:text-primary focus:outline-none"
                    onClick={toggleMenu}
                    aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile expanded menu */}
            <div
                className={`sm:hidden flex flex-col items-center w-full
                            transition-all ease-in-out duration-300 overflow-hidden
                            ${isOpen ? 'max-h-[1000px] opacity-100 pt-4' : 'max-h-0 opacity-0 pt-0 pointer-events-none'}`}
            >
                <nav className="flex flex-col items-center space-y-4 w-full pb-4 border-t border-white/70 pt-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.url}
                            href={item.url}
                            className="text-foreground-accent hover:text-primary transition-colors w-full text-center text-sm"
                            onClick={toggleMenu}
                        >
                            {item.text}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center justify-center gap-4 w-full mt-2 pb-2">
                    {downloadButtonElement}

                </div>
            </div>
        </header>
    );
}
