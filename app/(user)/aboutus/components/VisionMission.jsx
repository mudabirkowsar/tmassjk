import React from 'react';
import { HiOutlineEye, HiOutlineSparkles } from "react-icons/hi2";

function VisionMission() {
    return (
        <section className="bg-brand-background py-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                {/* --- THE VISION CARD (White) --- */}
                <div className="bg-white rounded-[32px] p-10 md:p-14 shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
                    {/* Icon Container */}
                    <div className="w-14 h-14 bg-[#e6f1ec] rounded-full flex items-center justify-center text-brand-primary mb-8">
                        <HiOutlineEye size={28} />
                    </div>

                    <h3 className="text-3xl font-serif font-bold text-[#1e293b] mb-6">
                        The Vision
                    </h3>

                    <p className="text-brand-gray text-lg leading-relaxed">
                        To cultivate an educational ecosystem where spiritual enlightenment
                        and scientific inquiry coexist, producing leaders who embody the
                        compassionate essence of Sufi wisdom in the modern world.
                    </p>
                </div>

                {/* --- THE MISSION CARD (Brand Green) --- */}
                <div className="bg-brand-primary rounded-[32px] p-10 md:p-14 shadow-xl shadow-brand-primary/20 flex flex-col items-start hover:-translate-y-1 transition-all duration-300">
                    {/* Icon Container */}
                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white mb-8">
                        <HiOutlineSparkles size={28} />
                    </div>

                    <h3 className="text-3xl font-serif font-bold text-white mb-6">
                        The Mission
                    </h3>

                    <p className="text-white/80 text-lg leading-relaxed">
                        To standardize and elevate the curriculum of traditional Madaris
                        across Jammu & Kashmir, integrating contemporary pedagogy with
                        the sacred traditions of the Ahle Sunnat Sufi path.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default VisionMission;