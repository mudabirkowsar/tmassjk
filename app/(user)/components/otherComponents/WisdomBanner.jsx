import React from 'react';
import { PiQuotesFill } from "react-icons/pi";

function WisdomBanner() {
    return (
        <div className="max-w-7xl mx-auto px-0 py-0">
            <div className="bg-brand-primary rounded-[40px] md:rounded-[60px] p-6 md:p-10 text-white relative overflow-hidden shadow-2xl">

                {/* Subtle Geometric Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    <PiQuotesFill size={60} className="text-brand-card-green mb-8 opacity-50" />

                    <h3 className="text-2xl md:text-4xl font-serif italic leading-relaxed max-w-3xl mb-10">
                        "Knowledge without action is insanity, <br className="hidden md:block" />
                        and action without knowledge is vanity."
                    </h3>

                    <div className="flex items-center gap-4">
                        <span className="h-px w-8 bg-white/30"></span>
                        <span className="text-sm font-bold tracking-widest uppercase text-brand-card-green">
                            Imam Al-Ghazali (R.A)
                        </span>
                        <span className="h-px w-8 bg-white/30"></span>
                    </div>
                </div>

                {/* Floating Design Element */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
}

export default WisdomBanner;