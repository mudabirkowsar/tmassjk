'use client';

import React, { useState, useEffect } from 'react';
import {
    HiOutlineEnvelope,
    HiOutlinePhone,
    HiOutlineClock,
    HiOutlineCalendar,
    HiOutlineMoon
} from "react-icons/hi2";

function TopNavbar() {
    const [dateTime, setDateTime] = useState(new Date());
    const [mounted, setMounted] = useState(false);
    const [hijri, setHijri] = useState({
        day: '',
        month: '',
        year: ''
    });

    useEffect(() => {
        setMounted(true);

        const timer = setInterval(() => {
            const now = new Date();
            setDateTime(now);

            // Extract Hijri parts cleanly
            const parts = new Intl.DateTimeFormat('en-u-ca-islamic', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            }).formatToParts(now);

            const hijriObj = {
                day: parts.find(p => p.type === 'day')?.value,
                month: parts.find(p => p.type === 'month')?.value,
                year: parts.find(p => p.type === 'year')?.value
            };

            setHijri(hijriObj);

        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const gregorianDate = dateTime.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });

    const timeString = dateTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    if (!mounted) {
        return (
            <div className="h-12 bg-gradient-to-r from-slate-50 via-white to-emerald-50 border-b border-slate-200 w-full animate-pulse"></div>
        );
    }

    return (
        <div className="w-full bg-gradient-to-r from-slate-50 via-white to-emerald-50 border-b border-slate-200 py-2 px-4 md:px-8 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-3">

                {/* LEFT SIDE */}
                <div className="flex items-center gap-4 md:gap-6">
                    <a
                        href="mailto:tanzeemulmadarissahlesunnatsufi@gmail.com"
                        className="flex items-center gap-2 text-slate-600 hover:text-emerald-700 transition-colors group"
                    >
                        <div className="p-1 bg-white rounded-full shadow-sm border border-slate-100 group-hover:border-emerald-200">
                            <HiOutlineEnvelope size={14} className="text-emerald-600" />
                        </div>
                        <span className="text-[11px] md:text-xs font-bold tracking-tight">
                            tanzeemulmadarissahlesunnatsufi@gmail.com
                        </span>
                    </a>

                    <div className="h-3 w-px bg-slate-300 hidden sm:block"></div>

                    <a
                        href="tel:+911941234567"
                        className="flex items-center gap-2 text-slate-600 hover:text-emerald-700 transition-colors group"
                    >
                        <div className="p-1 bg-white rounded-full shadow-sm border border-slate-100 group-hover:border-emerald-200">
                            <HiOutlinePhone size={14} className="text-emerald-600" />
                        </div>
                        <span className="text-[11px] md:text-xs font-bold tracking-tight">
                            +91 194-1234567
                        </span>
                    </a>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">

                    {/* Hijri Date */}
                    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-emerald-100 px-3 py-1 rounded-full shadow-sm">
                        <HiOutlineMoon size={14} className="text-emerald-700" />
                        <span className="text-[10px] md:text-[11px] font-bold text-emerald-800 uppercase tracking-wide">
                            {hijri.day} {hijri.month} {hijri.year}
                            <span className="opacity-60 ml-1 text-[9px]">AH</span>
                        </span>
                    </div>

                    {/* Date + Time */}
                    <div className="flex items-center gap-4 border-l border-slate-300 pl-4">

                        {/* Gregorian */}
                        <div className="hidden sm:flex items-center gap-2 text-slate-600">
                            <HiOutlineCalendar size={16} className="text-slate-400" />
                            <span className="text-[11px] font-bold uppercase tracking-tighter">
                                {gregorianDate}
                            </span>
                        </div>

                        {/* Clock */}
                        <div className="flex items-center gap-2">
                            <div className="hidden sm:block h-3 w-px bg-slate-300 mx-1"></div>
                            <HiOutlineClock size={16} className="text-emerald-600 animate-pulse" />
                            <span className="text-[11px] font-mono font-black text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-sm min-w-[84px] text-center">
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