"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/", active: true },
        { name: "Institutions", href: "#", active: false },
        { name: "Founders", href: "#", active: false },
        { name: "Timeline", href: "#", active: false },
        { name: "About", href: "#", active: false },
    ];

    return (
        <nav className="w-full bg-gray-50 border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-20">

                {/* LEFT SIDE: Logo */}
                <Link href="/" className="flex-shrink-0">
                    <span className="text-2xl font-bold text-brand-primary tracking-tight">
                        Tanzeem-ul-Madaris
                    </span>
                </Link>

                {/* RIGHT SIDE: Navigation Group (Links + Button) */}
                <div className="hidden lg:flex items-center gap-x-12">
                    {/* Links */}
                    <div className="flex items-center gap-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[16px] font-semibold transition-all duration-200 border-b-2 pb-1
                  ${link.active
                                        ? "text-brand-primary border-brand-primary"
                                        : "text-brand-gray border-transparent hover:text-brand-primary hover:border-brand-primary/30"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Call to Action Button */}
                    <button className="bg-brand-primary hover:bg-brand-secondary text-white px-7 py-2.5 rounded-lg text-[15px] font-bold transition-all shadow-sm active:scale-95">
                        Join Us
                    </button>
                </div>

                {/* MOBILE: Toggle Button */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-brand-primary p-2 rounded-md hover:bg-gray-50 transition-colors"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* MOBILE MENU: Full width dropdown */}
            <div
                className={`lg:hidden bg-white border-t border-gray-100 transition-all duration-300 ease-in-out overflow-hidden
        ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="px-6 py-8 flex flex-col gap-y-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-xl font-bold ${link.active ? "text-brand-primary" : "text-brand-gray"}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg mt-2">
                        Join Us
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;