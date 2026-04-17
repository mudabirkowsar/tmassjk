import React from 'react';
import { HiOutlineSparkles } from "react-icons/hi2";
import { PiBooksLight } from "react-icons/pi";

/**
 * @param {string} label - The small top text (e.g., "Prophetic Guidance")
 * @param {string} textBefore - Text appearing before the highlighted word
 * @param {string} highlight - The word/phrase to be italicized and underlined
 * @param {string} textAfter - Text appearing after the highlighted word
 * @param {string} reference - The source or citation (e.g., "Sunan Ibn Majah")
 * @param {ReactIcon} BgIcon - The icon component for the watermark
 */

function HadithSpotlight({ 
    label = "Prophetic Guidance", 
    textBefore = "The seeking of knowledge is", 
    highlight = "obligatory", 
    textAfter = "upon every Muslim.", 
    reference = "Sunan Ibn Majah",
    BgIcon = PiBooksLight // Defaults to the book icon
}) {
    return (
        <section className="bg-brand-background py-20 px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative">

                {/* Decorative Watermark Icon - Renders whatever icon component is passed */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-primary/[0.03] pointer-events-none">
                    <BgIcon size={300} />
                </div>

                <div className="relative z-10">
                    <div className="flex items-center justify-center gap-2 mb-8 text-brand-primary">
                        <HiOutlineSparkles className="animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-[0.3em]">
                            {label}
                        </span>
                        <HiOutlineSparkles className="animate-pulse" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-serif leading-tight text-[#1e293b] mb-10">
                        "{textBefore} <br className="hidden md:block" />
                        <span className="italic text-brand-primary underline decoration-brand-accent/30 underline-offset-8">
                            {highlight}
                        </span> {textAfter}"
                    </h2>

                    <div className="flex flex-col items-center">
                        <div className="h-px w-16 bg-brand-accent mb-4"></div>
                        <p className="text-brand-gray font-bold tracking-widest text-xs uppercase">
                            {reference}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HadithSpotlight;