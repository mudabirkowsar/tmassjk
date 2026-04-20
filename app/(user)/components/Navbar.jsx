"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Institutions", href: "/institutions" },
        { name: "Founders", href: "/founders" },
        { name: "Events", href: "/events" },
        { name: "About", href: "/aboutus" },
        { name: "Images", href: "/imagegallery" },
    ];

    return (
        <>
            {/* 
               1. Increased z-index to 999 to beat any other element on the page 
               2. Added "isolate" to create a new stacking context
            */}
            <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-[999] h-20 flex items-center isolate">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between w-full">

                    {/* LOGO */}
                    <Link href="/" className="relative z-[1001]">
                        <span className="logo-font text-xl md:text-2xl font-bold text-brand-primary tracking-tight">
                            TMA Sufi J&K
                        </span>
                    </Link>

                    {/* DESKTOP NAV */}
                    <div className="hidden lg:flex items-center gap-x-8 xl:gap-x-12">
                        <div className="flex items-center gap-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-[16px] font-semibold transition-all border-b-2 pb-1 ${pathname === link.href
                                            ? "text-brand-primary border-brand-primary"
                                            : "text-brand-gray border-transparent hover:text-brand-primary"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <Link
                            href="/affiliationform"
                            className="bg-brand-primary text-white px-7 py-2.5 rounded-lg font-bold"
                        >
                            Join Us
                        </Link>
                    </div>

                    {/* MOBILE TOGGLE BUTTON 
                        FIXED: Changed z-150 to z-[1001] (with brackets)
                        ADDED: type="button" and larger padding for better touch
                    */}
                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(!isOpen);
                        }}
                        className="lg:hidden relative z-[1001] p-4 -mr-2 text-brand-primary cursor-pointer border border-transparent active:bg-gray-100 rounded-lg"
                        style={{ touchAction: "manipulation" }}
                    >
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </nav>

            {/* FULL SCREEN MOBILE MENU OVERLAY */}
            <div
                className={`fixed inset-0 z-[998] lg:hidden transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"
                    }`}
            >
                {/* Dark Backdrop */}
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />

                {/* Menu Content (Drawer) */}
                <div
                    className={`absolute top-0 right-0 w-[280px] sm:w-[350px] h-full bg-white shadow-2xl transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="flex flex-col pt-24 px-8 gap-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-xl font-bold py-2 ${pathname === link.href ? "text-brand-primary" : "text-gray-700"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/affiliationform"
                            onClick={() => setIsOpen(false)}
                            className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-center"
                        >
                            Join Us
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;