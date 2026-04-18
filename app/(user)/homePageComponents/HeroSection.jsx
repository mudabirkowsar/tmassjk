import Link from 'next/link';
import React from 'react';

function HeroSection() {
    return (
        <nav className="relative min-h-[90vh] bg-brand-background flex flex-col justify-center items-center overflow-hidden">

            {/* Background Grid Accent for a professional "blueprint/structural" feel */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="relative max-w-6xl mx-auto px-6 py-12 flex flex-col items-center text-center">

                {/* 1. Header Badge */}
                <div className="mb-6">
                    <span className="text-[12px] uppercase tracking-[0.2em] font-bold text-brand-accent border-b-2 border-brand-accent/30 pb-1">
                        Jammu & Kashmir Board
                    </span>
                </div>

                {/* 2. Arabic Calligraphy with subtle background glow */}
                <div className="relative mb-6">
                    <h2 className="text-4xl md:text-6xl text-brand-primary font-semibold leading-relaxed">
                        اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ
                    </h2>
                </div>

                {/* 3. Main Heading - Simple, Bold, Massive */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6 max-w-4xl">
                    Tanzeem-ul-Madaris Ahle Sunnat Sufi
                </h1>

                {/* 4. Sub-heading */}
                <p className="text-lg md:text-xl text-brand-gray max-w-4xl font-normal leading-relaxed mb-14">
                    Promoting the teachings of Sufism through a structured system of education that combines religious, intellectual, and modern sciences—from madrasas to colleges and universities.
                </p>

                <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">

                    {/* CTA 1 */}
                    <div className="relative group cursor-pointer rounded-2xl p-[1px] bg-gradient-to-r from-transparent via-[#08B36A]/30 to-transparent hover:via-[#08B36A] transition-all duration-500">

                        <div className="bg-white rounded-2xl p-8 h-full flex flex-col justify-between transition-all duration-300 group-hover:shadow-2xl">

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    Explore Our Journey
                                </h3>
                                <p className="text-brand-gray text-sm leading-relaxed mb-6">
                                    Discover our history, values, timeline, and the founders behind this institution.
                                </p>
                            </div>

                            <Link href="/aboutus" className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-[#08B36A]">
                                    Learn More
                                </span>

                                {/* Arrow animation */}
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#08B36A]/10 group-hover:bg-[#08B36A] transition-all duration-300">
                                    <svg
                                        className="w-5 h-5 text-[#08B36A] group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </Link>

                        </div>
                    </div>

                    {/* CTA 2 */}
                    <div className="relative group cursor-pointer rounded-2xl p-[1px] bg-gradient-to-r from-transparent via-[#08B36A]/30 to-transparent hover:via-[#08B36A] transition-all duration-500">

                        <div className="bg-white rounded-2xl p-8 h-full flex flex-col justify-between transition-all duration-300 group-hover:shadow-2xl">

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    Apply for Affiliation
                                </h3>
                                <p className="text-brand-gray text-sm leading-relaxed mb-6">
                                    Join our network by registering your Madrasa or institution officially.
                                </p>
                            </div>

                            <Link href="/affiliationform" className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-[#08B36A]">
                                    Get Started
                                </span>

                                {/* Arrow animation */}
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#08B36A]/10 group-hover:bg-[#08B36A] transition-all duration-300">
                                    <svg
                                        className="w-5 h-5 text-[#08B36A] group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </Link>

                        </div>
                    </div>

                </div>

            </div>
        </nav>
    );
}

export default HeroSection;