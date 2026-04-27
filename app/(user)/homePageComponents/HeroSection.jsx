'use client';

import Link from 'next/link';
import React from 'react';
import { HiOutlineArrowLongRight, HiOutlineDocumentCheck, HiOutlineInformationCircle } from "react-icons/hi2";

function HeroSection() {
    return (
        // <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#FAF9F6]">

        <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#FFFFFF]">
            {/* --- 1. MINIMALIST BACKGROUND --- */}
            <div className="absolute inset-0 z-0">

                {/* Soft Radial Gradient for focus */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            </div>

            {/* --- 2. MAIN CONTENT --- */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center h-full justify-center py-6">

                {/* Arabic Calligraphy (Styled for Light Mode) */}
                <div className="relative mb-6">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl text-emerald-900/20 font-serif font-medium leading-tight select-none">
                        اَللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَآلِ مُحَمَّدٍ
                    </h2>
                    {/* Secondary visible layer */}
                    <h2 className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl text-emerald-800 font-serif font-medium leading-tight drop-shadow-sm opacity-90">
                        اَللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَآلِ مُحَمَّدٍ
                    </h2>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-slate-900 leading-[1.1] tracking-tight mb-6 max-w-5xl">
                    Tanzeem-ul-Madaris <br />
                    <span className="text-emerald-700 italic">Ahle Sunnat Sufi</span>
                </h1>

                {/* Sub-heading */}
                <p className="text-base md:text-xl text-slate-600 max-w-2xl font-medium leading-relaxed mb-10 px-4">
                    Preserving heritage, empowering futures. A visionary movement for
                    educational transformation harmonizing spiritual wisdom with academic excellence.
                </p>

                {/* --- 3. CTA BUTTONS --- */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl px-4 mb-20">

                    {/* Primary Button */}
                    <Link
                        href="/affiliationform"
                        className="w-full sm:w-auto px-10 py-4 bg-emerald-800 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-900/10 hover:scale-[1.02] active:scale-95 group text-sm md:text-base"
                    >
                        <HiOutlineDocumentCheck size={22} />
                        Apply for Affiliation
                        <HiOutlineArrowLongRight className="transition-transform group-hover:translate-x-1" />
                    </Link>

                    {/* Secondary Button */}
                    <Link
                        href="/aboutus"
                        className="w-full sm:w-auto px-10 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transition-all shadow-sm hover:scale-[1.02] active:scale-95 group text-sm md:text-base"
                    >
                        <HiOutlineInformationCircle size={22} />
                        Our Journey
                    </Link>
                </div>

                {/* --- 4. BOTTOM STATS (Refined for White BG) --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-4xl">
                    <div className="flex flex-col items-center md:items-start p-6 rounded-2xl bg-white shadow-sm border border-slate-100">
                        <span className="text-3xl md:text-4xl font-serif font-bold text-emerald-800">49+</span>
                        <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-slate-400 mt-1">Registered Madrasas</span>
                    </div>
                    <div className="flex flex-col items-center md:items-start p-6 rounded-2xl bg-white shadow-sm border border-slate-100">
                        <span className="text-3xl md:text-4xl font-serif font-bold text-emerald-800">40+</span>
                        <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-slate-400 mt-1">Affiliated Colleges</span>
                    </div>
                    <div className="flex flex-col items-center md:items-start p-6 rounded-2xl bg-white shadow-sm border border-slate-100">
                        <span className="text-3xl md:text-4xl font-serif font-bold text-emerald-800">03</span>
                        <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-slate-400 mt-1">Associated Universities</span>
                    </div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
                <div className="w-6 h-10 rounded-full border-2 border-slate-200 flex justify-center p-1.5">
                    <div className="w-1 h-2 bg-emerald-600 rounded-full animate-bounce"></div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;