import React from 'react';
import {
    HiOutlineAcademicCap,
    HiOutlineUserGroup,
    HiOutlineHeart,
    HiOutlineLightBulb
} from "react-icons/hi2";
import { PiBrainLight, PiHandHeartLight } from "react-icons/pi";

function FaithFoundation() {
    return (
        <section className="bg-brand-background py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">

                {/* --- SECTION HEADER --- */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1e293b] mb-4">
                        Foundation of our Faith
                    </h2>
                    <p className="text-brand-gray text-lg max-w-2xl mx-auto opacity-80">
                        The pillars that uphold our educational mission and spiritual guidance.
                    </p>
                </div>

                {/* --- ASYMMETRIC GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">

                    {/* CARD 1: Spiritual Depth (White, Wide) */}
                    <div className="md:col-span-6 lg:col-span-6 bg-white rounded-[24px] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col items-start min-h-[320px]">
                        <div className="text-brand-primary mb-8">
                            <PiBrainLight size={40} />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-[#1e293b] mb-6">
                            Spiritual Depth
                        </h3>
                        <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                            Moving beyond rote learning to reach the heart. We emphasize Tasawwuf
                            as the inward dimension of the Islamic faith, fostering a personal
                            connection with the Divine.
                        </p>
                    </div>

                    {/* CARD 2: Academic Rigor (Green, Standard) */}
                    <div className="md:col-span-3 lg:col-span-3 bg-brand-primary rounded-[24px] p-8 md:p-10 shadow-xl shadow-brand-primary/20 text-white flex flex-col items-start min-h-[400px]">
                        <div className="text-white mb-8 opacity-90">
                            <HiOutlineAcademicCap size={40} />
                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-6">
                            Academic Rigor
                        </h3>
                        <p className="text-white/80 leading-relaxed text-base">
                            Excellence in worldly sciences is as mandatory as excellence in
                            sacred ones. We hold our students to the highest international standards.
                        </p>
                    </div>

                    {/* CARD 3: Inclusivity (White, Tall) */}
                    <div className="md:col-span-3 lg:col-span-3 bg-white rounded-[24px] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center row-span-1 md:row-span-2">
                        <div className="text-brand-primary mb-8">
                            <HiOutlineUserGroup size={50} />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-[#1e293b] mb-6">
                            Inclusivity
                        </h3>
                        <p className="text-brand-gray leading-relaxed text-base">
                            Open to all seekers who respect the sacred tradition, fostering
                            a community of diverse voices united by spiritual purpose.
                        </p>
                    </div>

                    {/* CARD 4: Community Service (Darker Green, Wide Bottom) */}
                    {/* Note: I'm using a slightly darker variant to match the image depth */}
                    <div className="md:col-span-9 lg:col-span-9 bg-[#1a5d3b] rounded-[24px] p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        {/* Circular Icon container */}
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                            <PiHandHeartLight size={44} className="text-white/90" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-serif font-bold mb-4">
                                Community Service
                            </h3>
                            <p className="text-white/80 leading-relaxed text-base md:text-lg">
                                Khidmat-e-Khalq: Knowledge that doesn't manifest as service to humanity is incomplete.
                                Our students are active participants in Valley's social welfare.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default FaithFoundation;