"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Institutions", href: "/institutions" },
        { name: "Founders", href: "/founders" },
        { name: "Events", href: "/events" },
        { name: "About", href: "/aboutus" },
        { name: "Images", href: "/imagegallery" },
    ];

    return (
        <nav className="w-full bg-gray-50 border-b border-gray-100 sticky top-0 z-[60]">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-20">

                {/* LOGO */}
                <Link href="/" className="flex-shrink-0">
                    <span className="logo-font text-2xl font-bold text-brand-primary tracking-tight">
                        TMA Sufi J&K
                    </span>
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden lg:flex items-center gap-x-12">
                    <div className="flex items-center gap-x-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-[16px] font-semibold transition-all duration-200 border-b-2 pb-1
                  ${isActive
                                            ? "text-brand-primary border-brand-primary"
                                            : "text-brand-gray border-transparent hover:text-brand-primary hover:border-brand-primary/30"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    <Link
                        href="/affiliationform"
                        className="bg-brand-primary hover:bg-brand-secondary text-white px-7 py-2.5 rounded-lg text-[15px] font-bold transition-all shadow-sm active:scale-95"
                    >
                        Join Us
                    </Link>
                </div>

                {/* MOBILE TOGGLE */}
                <div className="lg:hidden flex items-center">
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        className="text-brand-primary p-2 rounded-md hover:bg-gray-100 transition-colors z-[70] relative"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* OVERLAY */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[50] lg:hidden"
                />
            )}

            {/* MOBILE MENU */}
            <div
                className={`lg:hidden fixed top-20 left-0 w-full bg-white border-t border-gray-100 shadow-lg z-[65] transition-all duration-300 ease-in-out
        ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
            >
                <div className="px-6 py-8 flex flex-col gap-y-6">

                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-xl font-bold transition-colors ${isActive
                                    ? "text-brand-primary"
                                    : "text-brand-gray hover:text-brand-primary"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}

                    <Link
                        href="/affiliationform"
                        onClick={() => setIsOpen(false)}
                        className="w-full block text-center bg-brand-primary text-white py-4 rounded-xl font-bold text-lg mt-2 shadow-md hover:bg-brand-secondary transition"
                    >
                        Join Us
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;