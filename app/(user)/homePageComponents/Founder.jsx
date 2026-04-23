import Link from 'next/link';
import React from 'react';
import { HiOutlineBookOpen } from "react-icons/hi2";

function Founder() {
    return (
        <section className="bg-brand-background py-16 md:py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* LEFT SIDE: IMAGE CONTAINER */}
                <div className="relative group">
                    {/* Subtle shadow glow behind image */}
                    <div className="absolute -inset-4 bg-brand-primary/5 rounded-[40px] blur-2xl group-hover:bg-brand-primary/10 transition-all duration-700"></div>

                    <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-8 border-white">
                        {/* Replace the src with your actual image path */}
                        <img
                            src="/founderandother/img3.png"
                            // src="/founderandother/img3.jpg"
                            alt="Maulvi Mohammad Ashraf"
                            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE: CONTENT */}
                <div className="flex flex-col">
                    <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4">
                        The Visionary Heart
                    </span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1e293b] font-medium leading-tight mb-6">
                        Maulvi Mohammad Ashraf
                    </h2>

                    <blockquote className="text-brand-gray italic font-serif text-xl md:text-2xl leading-relaxed mb-8 opacity-90 border-l-0">
                        "The ink of a scholar is holier than the blood of a martyr when it flows for the heart's enlightenment."
                    </blockquote>

                    <p className="text-brand-gray text-lg leading-relaxed mb-10 max-w-xl">
                        Our beloved founder, Maulvi Mohammad Ashraf, envisioned a future where the spiritual heritage
                        of Jammu & Kashmir would not be lost to modernity, but rather enriched by it. His life's work
                        has been dedicated to establishing an educational framework that produces graduates who are
                        as technologically savvy as they are spiritually grounded.
                    </p>

                    {/* STATS ROW */}
                    <div className="flex flex-wrap items-center gap-8 md:gap-12 mb-12">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-brand-primary">35+ Years</span>
                            <span className="text-xs uppercase tracking-tighter font-bold text-brand-gray opacity-70">
                                Academic Service
                            </span>
                        </div>

                        {/* Vertical Divider */}
                        <div className="hidden sm:block w-px h-12 bg-gray-200"></div>

                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-brand-primary">Founder</span>
                            <span className="text-xs uppercase tracking-tighter font-bold text-brand-gray opacity-70">
                                Chief Patron
                            </span>
                        </div>
                    </div>

                    {/* BUTTON */}
                    <div>
                        <Link href='/' className="inline-flex items-center gap-3 bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#1e293b] px-8 py-4 rounded-xl font-bold transition-all transform active:scale-95 shadow-sm">
                            <HiOutlineBookOpen className="text-xl" />
                            Read the Full Biography
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Founder;