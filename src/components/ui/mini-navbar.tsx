"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';
import { ThemeSwitcher } from './ThemeSwitcher';



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
                width={36}
                height={36}
                className="w-8 h-8 object-contain"
            />
            <span className="hidden sm:block text-white font-bold text-lg tracking-tight">
                {siteDetails.siteName}
            </span>
        </Link>
    );

    const downloadButtonElement = (
        <div className="relative group w-full sm:w-auto">
            {/* glow */}
            <div className="absolute inset-0 -m-2 rounded-full hidden sm:block
                            bg-yellow-200 opacity-20 blur-lg pointer-events-none
                            transition-all duration-300
                            group-hover:opacity-40 group-hover:blur-xl group-hover:-m-3" />
            <Link
                href="#cta"
                className="relative z-10 px-6 py-2 text-sm font-semibold text-black
                           bg-gradient-to-br from-yellow-300 to-yellow-500
                           rounded-full hover:from-yellow-400 hover:to-yellow-600
                           transition-all duration-200 inline-flex items-center justify-center whitespace-nowrap"
            >
                Download App
            </Link>
        </div>
    );

    return (
        <header
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100]
                        flex flex-col items-center
                        px-8 py-3
                        ${headerShapeClass}
                        border border-white/10
                        bg-[rgba(15,15,15,0.15)]
                        backdrop-blur-2xl

                        w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] sm:max-w-[1300px]
                        transition-[border-radius] duration-300 ease-in-out`}
        >
            <div className="relative flex items-center justify-between w-full">

                {/* Logo */}
                <div className="flex items-center shrink-0">
                    {logoElement}
                </div>

                {/* Desktop nav links — absolutely centered */}
                <nav className="hidden sm:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
                    {menuItems.map((item) => (
                        <Link
                            key={item.url}
                            href={item.url}
                            className="text-sm font-bold text-black hover:text-black/70 transition-colors duration-200"
                        >
                            {item.text}
                        </Link>
                    ))}
                </nav>

                {/* Desktop right actions */}
                <div className="hidden sm:flex items-center gap-4 shrink-0">
                    {downloadButtonElement}
                    <ThemeSwitcher />
                </div>

                {/* Mobile hamburger */}
                <button
                    className="sm:hidden flex items-center justify-center w-8 h-8 text-white/70 focus:outline-none"
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
                <nav className="flex flex-col items-center space-y-4 w-full pb-4 border-t border-white/10 pt-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.url}
                            href={item.url}
                            className="text-white/60 hover:text-white transition-colors w-full text-center text-sm"
                            onClick={toggleMenu}
                        >
                            {item.text}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center justify-center gap-4 w-full mt-2 pb-2">
                    {downloadButtonElement}
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    );
}
