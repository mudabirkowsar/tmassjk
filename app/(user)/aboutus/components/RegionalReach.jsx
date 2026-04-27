'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiMapPin, HiOutlineInformationCircle, HiOutlineGlobeAlt } from "react-icons/hi2";

function RegionalReach() {
    const districts = [
        { name: "Anantnag District", centers: "124 Centers" },
        { name: "Pulwama District", centers: "89 Centers" },
        { name: "Srinagar Metropolitan", centers: "56 Centers" },
        { name: "Baramulla District", centers: "72 Centers" },
    ];

    return (
        <section className="bg-[#fcfcfd] py-16 md:py-0 px-6 md:px-0 lg:px-0 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* --- LEFT SIDE: TEXT & DISTRICT LIST --- */}
                <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary">
                            <HiOutlineGlobeAlt size={20} />
                        </span>
                        <span className="text-brand-primary font-bold uppercase tracking-[0.3em] text-[10px]">Regional Network</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-serif text-[#1e293b] leading-tight mb-8">
                        The Reach of <span className="italic text-brand-primary">Knowledge.</span>
                    </h2>

                    <p className="text-slate-500 text-lg leading-relaxed mb-12 max-w-xl font-light">
                        Standardizing Islamic education through a vast network of accredited centers across the northern landscape of Jammu & Kashmir.
                    </p>

                    <div className="grid grid-cols-1 gap-4">
                        {districts.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                key={index}
                                className="bg-white flex items-center justify-between p-5 md:p-6 rounded-2xl hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 border border-slate-100 group cursor-default"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                                        <HiMapPin size={22} />
                                    </div>
                                    <div>
                                        <span className="font-bold text-[#1e293b] md:text-lg block">
                                            {item.name}
                                        </span>
                                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Verified District</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="font-bold text-brand-primary md:text-xl block">
                                        {item.centers.split(' ')[0]}
                                    </span>
                                    <span className="text-[10px] text-slate-400 font-bold uppercase">Centers</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-10 flex items-center gap-2 text-slate-400 text-xs font-medium italic">
                        <HiOutlineInformationCircle size={16} className="text-brand-primary" />
                        <span>Registry data synchronized for the current academic cycle</span>
                    </div>
                </div>

                {/* --- RIGHT SIDE: PROFESSIONAL WHITE MAP --- */}
                <div className="relative group">
                    {/* Shadow Decoration */}
                    <div className="absolute -inset-4 bg-slate-200/50 rounded-[50px] blur-3xl opacity-50"></div>

                    <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-[1px] border-slate-200 bg-white aspect-square md:aspect-[4/3] lg:aspect-square">

                        {/* Map Header Overlay */}
                        <div className="absolute top-6 left-6 right-6 z-10 flex justify-between items-center pointer-events-none">
                            <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
                                <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                    Live Coverage Map
                                </span>
                            </div>
                        </div>

                        {/* GOOGLE MAP IFRAME WITH PROFESSIONAL WHITE FILTER */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105829.45330376373!2d74.72439167232386!3d34.08364539864233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1855686e3c505%3A0x4feddfa11a9b9285!2sSrinagar!5e0!3m2!1sen!2sin!4v1710345678901!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                filter: 'grayscale(100%) invert(8%) contrast(1.2) brightness(1.1) opacity(0.9)'
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Regional Map"
                            className="absolute inset-0 w-full h-full"
                        ></iframe>

                        {/* Interactive UI Overlays */}
                        <div className="absolute inset-0 pointer-events-none border-[20px] border-white/10 rounded-[40px]"></div>

                        {/* Floating Stats on Map */}
                        {/* <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
                            <div className="bg-slate-900/90 backdrop-blur-xl p-5 rounded-2xl flex items-center justify-between border border-white/10 shadow-2xl">
                                <div>
                                    <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.2em] mb-1">Total Presence</p>
                                    <h4 className="text-white text-2xl font-serif">450+ Active Units</h4>
                                </div>
                                <div className="h-10 w-[1px] bg-white/10 mx-4"></div>
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] text-white font-bold">
                                            {i}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* Decorative Background Element */}
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -z-10"></div>
                </div>

            </div>
        </section>
    );
}

export default RegionalReach;