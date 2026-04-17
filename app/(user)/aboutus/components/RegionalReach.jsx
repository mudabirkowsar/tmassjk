import React from 'react';
import { HiMapPin, HiOutlineInformationCircle } from "react-icons/hi2";

function RegionalReach() {
    const districts = [
        { name: "Anantnag District", centers: "124 Centers" },
        { name: "Pulwama District", centers: "89 Centers" },
        { name: "Srinagar Metropolitan", centers: "56 Centers" },
        { name: "Baramulla District", centers: "72 Centers" },
    ];

    return (
        <section className="bg-brand-background py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* --- LEFT SIDE: TEXT & DISTRICT LIST --- */}
                <div className="flex flex-col">
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1e293b] font-medium mb-6">
                        Reach Across the Valley
                    </h2>

                    <p className="text-brand-gray text-lg leading-relaxed mb-10 max-w-xl">
                        From the peaks of Anantnag to the fields of Pulwama, our light reaches every corner of Jammu & Kashmir.
                    </p>

                    <div className="space-y-4">
                        {districts.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white flex items-center justify-between p-5 md:p-6 rounded-2xl hover:shadow-xl transition-all duration-500 border border-gray-100 group cursor-default"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-brand-primary/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                                        <HiMapPin size={20} />
                                    </div>
                                    <span className="font-bold text-[#1e293b] md:text-lg">
                                        {item.name}
                                    </span>
                                </div>
                                <span className="font-bold text-brand-primary md:text-lg">
                                    {item.centers}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-brand-gray/60 text-sm italic">
                        <HiOutlineInformationCircle />
                        <span>Map data updated for the 2024 academic cycle</span>
                    </div>
                </div>

                {/* --- RIGHT SIDE: REAL MAP (STYLIZED) --- */}
                <div className="relative group">
                    {/* Outer Glow Effect */}
                    <div className="absolute -inset-4 bg-brand-primary/10 rounded-[40px] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-[10px] border-white bg-brand-primary aspect-video md:aspect-[4/3] lg:aspect-square xl:aspect-video">

                        {/* REAL GOOGLE MAP IFRAME */}
                        {/* I have set the coordinates to central Srinagar, J&K */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105829.45330376373!2d74.72439167232386!3d34.08364539864233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1855686e3c505%3A0x4feddfa11a9b9285!2sSrinagar!5e0!3m2!1sen!2sin!4v1710345678901!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(1) invert(0.92) sepia(1) hue-rotate(100deg) saturate(250%) brightness(0.7)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Real Map of J&K Centers"
                            className="absolute inset-0 w-full h-full"
                        ></iframe>

                        {/* AESTHETIC OVERLAY (Makes it feel more like a custom dashboard) */}
                        <div className="absolute inset-0 pointer-events-none border-[1px] border-white/20 rounded-[22px] m-4"></div>

                        {/* Branding Watermark on Map */}
                        <div className="absolute bottom-6 left-6 bg-brand-primary/90 backdrop-blur-md px-4 py-2 rounded-xl text-white text-[10px] font-bold uppercase tracking-widest shadow-lg border border-white/10">
                            Network Coverage
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default RegionalReach;