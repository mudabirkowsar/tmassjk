'use client';

import Link from 'next/link';
import React from 'react';
import { HiOutlineArrowLongRight, HiOutlineDocumentCheck, HiOutlineInformationCircle } from "react-icons/hi2";

function HeroSection() {
    return (
        <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
            
            {/* --- 1. MULTI-LAYERED BACKGROUND --- */}
            <div className="absolute inset-0 z-0">
                {/* Background Image */}
                <img 
                    src="/bg/bgimg.jpg" 
                    alt="Kashmir Valley Heritage" 
                    className="w-full h-full object-cover"
                />
                
                {/* Brand Overlay */}
                <div className="absolute inset-0 bg-[#002d1a]/85 mix-blend-multiply"></div>
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e26]/90 via-[#1a2e26]/40 to-[#FAF9F6]/10"></div>
                
                {/* Subtle Grid Accent */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            {/* --- 2. MAIN CONTENT (Optimized Spacing for Single Screen) --- */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center h-full justify-center py-4">
                
                {/* Header Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 md:mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#08B36A] animate-pulse"></span>
                    <span className="text-[9px] md:text-xs uppercase tracking-[0.4em] font-bold text-white/90">
                        Official Jammu & Kashmir Board
                    </span>
                </div>

                {/* Arabic Calligraphy */}
                <div className="relative mb-2 md:mb-4 group">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-medium leading-tight drop-shadow-lg">
                        اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ
                    </h2>
                    <div className="absolute -inset-4 bg-brand-primary/20 blur-3xl rounded-full opacity-40"></div>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] tracking-tight mb-4 md:mb-6 max-w-5xl">
                    Tanzeem-ul-Madaris <br />
                    <span className="italic text-brand-card-green">Ahle Sunnat Sufi</span>
                </h1>

                {/* Sub-heading */}
                <p className="text-sm md:text-lg lg:text-xl text-white/80 max-w-3xl font-medium leading-relaxed mb-8 md:mb-12 px-4">
                    A visionary movement for educational transformation—harmonizing spiritual 
                    depth with modern academic excellence across the Valley.
                </p>

                {/* --- 3. CTA BUTTONS --- */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl px-4 mb-10 md:mb-16">
                    
                    {/* Primary Button */}
                    <Link 
                        href="/affiliationform" 
                        className="w-full sm:w-auto px-8 py-3.5 bg-brand-primary text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-brand-secondary transition-all shadow-xl hover:scale-105 active:scale-95 group text-sm md:text-base"
                    >
                        <HiOutlineDocumentCheck size={20} />
                        Apply for Affiliation
                        <HiOutlineArrowLongRight className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300" />
                    </Link>

                    {/* Secondary Button */}
                    <Link 
                        href="/aboutus" 
                        className="w-full sm:w-auto px-8 py-3.5 bg-white/10 backdrop-blur-xl border border-white/30 text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-brand-primary transition-all shadow-lg hover:scale-105 active:scale-95 group text-sm md:text-base"
                    >
                        <HiOutlineInformationCircle size={20} />
                        Our Journey
                        <HiOutlineArrowLongRight className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300" />
                    </Link>
                </div>

                {/* --- BOTTOM STATS (Anchored at the bottom) --- */}
                <div className="grid grid-cols-3 gap-6 md:gap-16 text-white/60">
                   <div className="flex flex-col">
                        <span className="text-xl md:text-3xl font-serif font-bold text-white">49+</span>
                        <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Madrasas</span>
                   </div>
                   <div className="flex flex-col border-x border-white/10 px-6 md:px-12">
                        <span className="text-xl md:text-3xl font-serif font-bold text-white">40+</span>
                        <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Colleges</span>
                   </div>
                   <div className="flex flex-col">
                        <span className="text-xl md:text-3xl font-serif font-bold text-white">3</span>
                        <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Universities</span>
                   </div>
                </div>

            </div>

            {/* Subtle Scroll Indicator (Optional, stays at the very bottom) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block">
                <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center p-1">
                    <div className="w-1 h-1.5 bg-brand-card-green rounded-full animate-bounce"></div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;