import React from 'react';
import Link from 'next/link';
import { HiCalendarDays, HiOutlineArrowLongRight } from "react-icons/hi2";

const EventsCTA = () => {
    return (
        <div className="bg-brand-background  max-w-7xl mx-auto px-0 py-4 md:py-3">
            {/* Container with a subtle brand background */}
            <div className="bg-brand-primary/5 rounded-[32px] md:rounded-[48px] p-4 md:p-8 lg:p-12 relative overflow-hidden group">

                {/* Decorative Background Icon */}
                <div className="absolute -right-10 -bottom-10 text-brand-primary/5 group-hover:text-brand-primary/10 transition-colors duration-700">
                    <HiCalendarDays size={300} />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">

                    {/* CONTENT SIDE */}
                    <div className="flex-1">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                            <div className="bg-brand-primary p-2.5 rounded-xl text-white shadow-lg">
                                <HiCalendarDays size={24} />
                            </div>
                            <span className="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs">
                                Community & Action
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1e293b] font-bold leading-tight mb-4">
                            Don't Miss Our Next <br className="hidden md:block" /> <span className="text-brand-primary italic">Sacred Gathering</span>
                        </h2>

                        <p className="text-brand-gray text-lg md:text-xl max-w-xl opacity-80 leading-relaxed">
                            Stay updated with our latest conferences, workshops, and community leadership summits happening across Jammu & Kashmir.
                        </p>
                    </div>

                    {/* BUTTON SIDE */}
                    <div className="shrink-0">
                        <Link
                            href="/events"
                            className="inline-flex items-center gap-4 bg-brand-primary text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-brand-primary/20 hover:shadow-2xl hover:bg-brand-secondary transition-all transform hover:-translate-y-1 active:scale-95 group/btn"
                        >
                            Explore All Events
                            <HiOutlineArrowLongRight className="text-2xl group-hover/btn:translate-x-2 transition-transform" />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EventsCTA;