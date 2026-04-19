'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    HiOutlineArrowDownTray,
    HiOutlinePlus,
    HiOutlineEllipsisHorizontal,
    HiCheckBadge
} from "react-icons/hi2";

const founders = [
    { id: 1, name: "Maulvi Ashraf Gauri", role: "Chief Founder", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600" },
    { id: 2, name: "Maulana Mushtaq Khan", role: "Co-Founder", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600" },
    { id: 3, name: "Pir Syed Hamidullah", role: "Founding Member", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600" },
    { id: 4, name: "Mufti Aslam Misbahi", role: "Founding Member", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600" },
];

const generalArchive = [
    { id: 5, title: "Executive Council Meeting", category: "Leadership", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000" },
    { id: 6, title: "University Integration", category: "Academic", image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800" },
    { id: 7, title: "Traditional Library", category: "Madrasa", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800" },
    { id: 8, title: "Sufi Conference 2023", category: "Events", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800" },
    { id: 9, title: "Digital Research Lab", category: "Modern", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800" },
    { id: 10, title: "Curriculum Planning", category: "Team", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000" },
    { id: 11, title: "Regional Field Team", category: "Team", image: "https://images.unsplash.com/photo-1523240715181-01489bb286a1?q=80&w=1000" },
    { id: 12, title: "Madrasa Architecture", category: "Heritage", image: "https://images.unsplash.com/photo-1590076214667-c0f33b98c442?q=80&w=800" },
    { id: 13, title: "Annual Certification", category: "Events", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800" },
];

const PinCard = ({ image, title, sub, isFounder = false }) => (
    <div className="break-inside-avoid mb-6 group cursor-zoom-in">
        <div className="relative overflow-hidden rounded-[20px] md:rounded-[32px] bg-gray-100 shadow-sm transition-all duration-300">
            <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
        </div>

        {/* Caption */}
        <div className="mt-3 px-2">
            <h4 className="text-xs md:text-sm font-bold text-[#1e293b] leading-tight flex items-center gap-1">
                {title} {isFounder && <HiCheckBadge className="text-brand-primary" />}
            </h4>
            <p className="text-[9px] md:text-[11px] text-gray-400 font-medium uppercase tracking-wider mt-1">
                {sub}
            </p>
        </div>
    </div>
);

export default function PinterestGallery() {
    return (
        <main className="bg-brand-background min-h-screen py-10 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20 font-sans">
            <div className="max-w-[1600px] mx-auto">

                {/* --- HEADER --- */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-8 h-[1px] bg-brand-primary"></span>
                            <span className="text-brand-primary font-bold uppercase tracking-[0.3em] text-[10px]">Official Registry</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif text-[#1e293b]">
                            The Visual <span className="italic text-brand-primary">Legacy.</span>
                        </h1>
                    </div>
                    <p className="text-gray-400 text-sm md:text-base max-w-xs font-medium leading-relaxed">
                        A chronological and institutional collection documenting our journey since 2011.
                    </p>
                </div>

                {/* --- SECTION 1: FOUNDERS (TOP) --- */}
                <section className="mb-20">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 mb-8 flex items-center gap-4">
                        Founding Personalities <span className="h-[1px] flex-1 bg-gray-100"></span>
                    </h2>
                    {/* Pinterest Layout for Founders */}
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-6">
                        {founders.map(person => (
                            <PinCard
                                key={person.id}
                                image={person.image}
                                title={person.name}
                                sub={person.role}
                                isFounder={true}
                            />
                        ))}
                    </div>
                </section>

                {/* --- SECTION 2: THE REST (MASONRY STREAM) --- */}
                <section>
                    <h2 className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 mb-8 flex items-center gap-4">
                        Institutional Archive <span className="h-[1px] flex-1 bg-gray-100"></span>
                    </h2>
                    {/* Pinterest Layout for General Content */}
                    <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6">
                        {generalArchive.map(item => (
                            <PinCard
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                sub={item.category}
                            />
                        ))}
                    </div>
                </section>

                {/* --- FOOTER STATEMENT --- */}
                <footer className="mt-32 pt-12 border-t border-gray-100">
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                            <a href="#" className="hover:text-brand-primary">Media Guidelines</a>
                            <a href="#" className="hover:text-brand-primary">Copyright Notice</a>
                            <a href="#" className="hover:text-brand-primary">Resource Access</a>
                        </div>
                        <p className="text-gray-300 font-bold uppercase tracking-[0.5em] text-[10px]">
                            Tanzeem-ul-Madaris Ahle Sunnat Sufi J&K
                        </p>
                    </div>
                </footer>

            </div>
        </main>
    );
}