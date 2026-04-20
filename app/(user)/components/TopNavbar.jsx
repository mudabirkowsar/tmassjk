'use client';

import React, { useState, useEffect } from 'react';
import {
    HiOutlineEnvelope,
    HiOutlinePhone,
    HiOutlineClock,
    HiOutlineCalendar,
    HiOutlineMoon // Added for Hijri representation
} from "react-icons/hi2";

function TopNavbar() {
    const [dateTime, setDateTime] = useState(new Date());
    const [mounted, setMounted] = useState(false);

    // Update time every second
    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Formatter for Gregorian Date
    const gregorianDate = dateTime.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });

    // Formatter for Live Time
    const timeString = dateTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // Formatter for Islamic (Hijri) Date
    // Using 'i-long' for month names like "Ramadan" or "Rabi' al-awwal"
    const islamicDate = new Intl.DateTimeFormat('en-u-ca-islamic-uma-nu-latn', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(dateTime);

    // Prevent hydration mismatch in Next.js
    if (!mounted) return (
        <div className="h-12 bg-white border-b border-slate-100 w-full animate-pulse"></div>
    );

    return (
        <div className="w-full bg-white border-b border-slate-200 py-2 px-4 md:px-8 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-3">

                {/* --- LEFT SIDE: CONTACT INFO --- */}
                <div className="flex items-center gap-4 md:gap-6">
                    <a
                        href="mailto:info@tanzeemulmadaris.com"
                        className="flex items-center gap-2 text-slate-500 hover:text-emerald-700 transition-colors group"
                    >
                        <HiOutlineEnvelope size={16} className="text-emerald-600" />
                        <span className="text-[11px] md:text-xs font-semibold tracking-tight">
                            info@tanzeemulmadaris.com
                        </span>
                    </a>

                    <div className="h-3 w-px bg-slate-200 hidden sm:block"></div>

                    <a
                        href="tel:+911941234567"
                        className="flex items-center gap-2 text-slate-500 hover:text-emerald-700 transition-colors group"
                    >
                        <HiOutlinePhone size={16} className="text-emerald-600" />
                        <span className="text-[11px] md:text-xs font-semibold tracking-tight">
                            +91 194-1234567
                        </span>
                    </a>
                </div>

                {/* --- RIGHT SIDE: HIJRI, GREGORIAN & TIME --- */}
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">

                    {/* Islamic (Hijri) Date Badge */}
                    <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-lg">
                        <HiOutlineMoon size={14} className="text-emerald-700" />
                        <span className="text-[10px] md:text-[11px] font-bold text-emerald-800 uppercase tracking-wide">
                            {islamicDate} <span className="opacity-60 ml-0.5 text-[9px]">AH</span>
                        </span>
                    </div>

                    {/* Desktop/Tablet Date & Time Group */}
                    <div className="flex items-center gap-4 border-l border-slate-200 pl-4">

                        {/* Gregorian Date */}
                        <div className="hidden sm:flex items-center gap-2 text-slate-500">
                            <HiOutlineCalendar size={16} />
                            <span className="text-[11px] font-bold uppercase tracking-tighter">
                                {gregorianDate}
                            </span>
                        </div>

                        {/* Live Digital Clock */}
                        <div className="flex items-center gap-2">
                            <div className="hidden sm:block h-3 w-px bg-slate-200 mx-1"></div>
                            <HiOutlineClock size={16} className="text-emerald-600" />
                            <span className="text-[11px] font-mono font-black text-slate-700 bg-slate-50 px-2 py-0.5 rounded border border-slate-200 shadow-sm min-w-[80px] text-center">
                                {timeString}
                            </span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default TopNavbar;