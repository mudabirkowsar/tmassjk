'use client';

import React from 'react';
import {
    HiOutlineCheckCircle,
    HiOutlineRocketLaunch,
    HiOutlineUsers,
    HiOutlineAcademicCap,
    HiOutlineBuildingLibrary,
    HiOutlineGlobeAlt,
    HiOutlineArrowRight
} from "react-icons/hi2";

const timelineData = [
    {
        year: "2011",
        phase: "Visionary Phase",
        title: "Foundation of the Movement",
        desc: "Maulvi Ashraf Gauri initiated a movement to promote Sufi teachings through structured modern and religious sciences, bridging a critical educational gap.",
        icon: <HiOutlineRocketLaunch />
    },
    {
        year: "2013",
        phase: "Strategic Growth",
        title: "Intellectual Consolidation",
        desc: "Scholars like Maulana Mushtaq Ahmad Khan and Pir Syed Hamidullah Haqqani joined to formalize the theological and academic framework.",
        icon: <HiOutlineUsers />
    },
    {
        year: "2017",
        phase: "Recognition",
        title: "National Standardization",
        desc: "Registered 49+ Madrasas under NIOS, providing students with recognized national academic certification for the first time.",
        icon: <HiOutlineAcademicCap />
    },
    {
        year: "2019",
        phase: "Integration",
        title: "Higher Education Reach",
        desc: "Introduced Sufi syllabus in Kashmir University, BGSBU, and IUST, bridging traditional and modern academia.",
        icon: <HiOutlineBuildingLibrary />
    },
    {
        year: "Present",
        phase: "Sustainability",
        title: "Regional Impact",
        desc: "Expanded to 40+ colleges across J&K, ensuring spiritual and intellectual rigor are accessible region-wide.",
        icon: <HiOutlineGlobeAlt />
    }
];

const TimelinePage = () => {
    return (
        <main className="bg-brand-background min-h-screen py-8 md:py-12 font-sans text-[#1e293b]">
            <div className="max-w-5xl mx-auto px-6">

                {/* --- COMPACT HEADER --- */}
                <header className="mb-8 md:mb-10 border-b border-gray-100 pb-0">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-0 h-[2px] bg-brand-primary"></span>
                                <span className="text-brand-primary font-bold uppercase tracking-widest text-[10px]">Movement History</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1e293b]">
                                Institutional <span className="italic text-brand-primary">Evolution.</span>
                            </h1>
                        </div>
                        <p className="text-gray-500 text-sm md:text-base max-w-sm leading-relaxed">
                            A chronological record of our journey toward standardizing
                            Sufi education in Jammu & Kashmir.
                        </p>
                    </div>
                </header>

                {/* --- COMPACT VERTICAL TIMELINE --- */}
                <div className="relative">
                    {/* Continuous Vertical Line */}
                    <div className="absolute left-3 md:left-[160px] top-0 bottom-0 w-[1px] bg-gray-200"></div>

                    <div className="space-y-12">
                        {timelineData.map((item, idx) => (
                            <div key={idx} className="relative grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 md:gap-16 group">

                                {/* 1. Date & Phase (The Left Side) */}
                                <div className="pl-10 md:pl-0 md:text-right pt-1">
                                    <span className="block text-2xl font-serif font-bold text-brand-primary leading-none mb-1">
                                        {item.year}
                                    </span>
                                    <span className="block text-[10px] font-bold uppercase tracking-tighter text-gray-400">
                                        {item.phase}
                                    </span>
                                </div>

                                {/* 2. Content & Icon (The Right Side) */}
                                <div className="relative pl-10 md:pl-4">

                                    {/* The Bullet Icon on the Line */}
                                    <div className="absolute -left-[38px] md:-left-[26px] top-1 w-5 h-5 rounded-full bg-white border-2 border-brand-primary flex items-center justify-center z-10 group-hover:bg-brand-primary transition-colors duration-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary group-hover:bg-white"></div>
                                    </div>

                                    <div className="max-w-2xl">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-brand-primary opacity-60 group-hover:opacity-100 transition-opacity">
                                                {React.cloneElement(item.icon, { size: 18 })}
                                            </span>
                                            <h3 className="text-xl font-bold text-[#1e293b] group-hover:text-brand-primary transition-colors">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

                {/* --- COMPACT FOOTER SUMMARY --- */}
                <footer className="mt-24 pt-10 border-t border-gray-100">
                    <div className="bg-[#1e293b] rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
                        {/* Subtle Texture */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(circle, white 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                            <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white shrink-0">
                                <HiOutlineCheckCircle size={24} />
                            </div>
                            <div className="text-center md:text-left">
                                <h4 className="text-lg font-bold">Standardized Excellence Since 2011</h4>
                                <p className="text-white/50 text-xs md:text-sm uppercase tracking-widest mt-1">Verified Institutional Record</p>
                            </div>
                        </div>

                        <button className="relative z-10 px-8 py-3 bg-brand-primary text-white rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-brand-primary/90 transition-all flex items-center gap-2 group">
                            Partner With Us
                            <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <p className="text-center mt-10 text-[10px] font-bold text-gray-300 uppercase tracking-[0.4em]">
                        Tanzeem-ul-Madaris Ahle Sunnat Sufi J&K
                    </p>
                </footer>

            </div>
        </main>
    );
};

export default TimelinePage;