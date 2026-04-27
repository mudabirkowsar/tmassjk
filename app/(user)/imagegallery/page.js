'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    HiOutlineXMark, 
    HiCheckBadge, 
    HiOutlineMagnifyingGlass,
    HiOutlineCamera
} from "react-icons/hi2";
import UserAPI from '../../apis/UserAPI';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function ProfessionalGallery() {
    const [allMedia, setAllMedia] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch dynamic gallery items from backend
    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const response = await UserAPI.getGalleryItems();
                if (response.success) {
                    setAllMedia(response.data);
                }
            } catch (error) {
                console.error("Error loading gallery:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchGallery();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#fdfdfb] flex items-center justify-center font-serif italic text-slate-400">
                Loading Archive...
            </div>
        );
    }

    return (
        <main className="bg-[#fdfdfb] min-h-screen py-10 md:py-24 px-3 sm:px-8 lg:px-16 font-sans">
            <div className="max-w-[1500px] mx-auto">
                
                {/* --- HEADER --- */}
                <header className="mb-10 md:mb-20 text-center">
                    <div className="flex justify-center items-center gap-2 mb-3">
                        <span className="w-8 h-[1px] bg-brand-primary/40"></span>
                        <span className="text-brand-primary font-bold uppercase tracking-[0.2em] text-[9px] md:text-xs">
                            Institutional Archive
                        </span>
                        <span className="w-8 h-[1px] bg-brand-primary/40"></span>
                    </div>
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif text-slate-900 mb-4">
                        The Visual <span className="italic text-brand-primary">Legacy.</span>
                    </h1>
                    <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-lg font-light leading-relaxed px-4">
                        A curated gallery capturing the founders and milestones of our journey.
                    </p>
                </header>

                {/* --- GALLERY GRID --- */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
                    {allMedia.map((item) => (
                        <motion.div
                            key={item._id}
                            layoutId={`card-${item._id}`}
                            onClick={() => setSelectedImage(item)}
                            className="group relative cursor-pointer overflow-hidden rounded-xl md:rounded-2xl aspect-[4/5] bg-gray-100 shadow-sm transition-all duration-500"
                        >
                            {/* Dynamic Image from Backend */}
                            <img
                                src={`${API_BASE_URL}${item.image}`}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 md:p-8">
                                <div className="text-white">
                                    <span className="text-brand-primary text-[8px] md:text-[10px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-2 py-0.5 rounded mb-2 inline-block">
                                        {item.category}
                                    </span>
                                    <h3 className="text-sm md:text-2xl font-serif mb-1 flex items-center gap-1">
                                        {item.name} 
                                        {item.category === "Founder" && <HiCheckBadge className="text-blue-400 text-xs md:text-xl" />}
                                    </h3>
                                    <p className="hidden md:block text-gray-300 text-xs font-light line-clamp-2">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                            
                            <div className="absolute top-2 right-2 md:hidden">
                                <div className="bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm">
                                    <HiOutlineMagnifyingGlass className="text-brand-primary" size={12} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- LIGHTBOX (EXPANDED VIEW) --- */}
                <AnimatePresence>
                    {selectedImage && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-10">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedImage(null)}
                                className="absolute inset-0 bg-slate-950/98 backdrop-blur-md"
                            />

                            {/* Close Button */}
                            <button 
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 md:top-10 md:right-10 text-white/40 hover:text-white transition-colors z-10"
                            >
                                <HiOutlineXMark size={28} className="md:w-10 md:h-10" />
                            </button>

                            {/* Content Card */}
                            <motion.div
                                layoutId={`card-${selectedImage._id}`}
                                className="relative max-w-5xl w-full bg-white rounded-2xl md:rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
                            >
                                {/* Expanded Image */}
                                <div className="w-full md:w-3/5 h-[30vh] md:h-[75vh]">
                                    <img
                                        src={`${API_BASE_URL}${selectedImage.image}`}
                                        alt={selectedImage.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Text Sidebar */}
                                <div className="w-full md:w-2/5 p-6 md:p-12 flex flex-col justify-center">
                                    <span className="text-brand-primary font-bold uppercase tracking-widest text-[9px] md:text-xs mb-2 md:mb-4 block">
                                        {selectedImage.category} • {selectedImage.role}
                                    </span>
                                    <h2 className="text-2xl md:text-5xl font-serif text-slate-900 mb-4 md:mb-6 flex items-center gap-2 leading-tight">
                                        {selectedImage.name}
                                        {selectedImage.category === "Founder" && <HiCheckBadge className="text-brand-primary" />}
                                    </h2>
                                    <div className="h-0.5 w-12 bg-brand-primary/30 mb-4 md:mb-8"></div>
                                    <p className="text-slate-600 text-sm md:text-lg leading-relaxed font-light italic">
                                        "{selectedImage.desc}"
                                    </p>
                                    
                                    <div className="mt-6 md:mt-12 flex items-center gap-3">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-300">
                                            <HiOutlineCamera size={16} />
                                        </div>
                                        <div className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-snug">
                                            Official Resource <br /> Tanzeem-ul-Madaris
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                {/* --- FOOTER --- */}
                <footer className="mt-16 md:mt-24 pt-8 border-t border-slate-100 text-center">
                    <p className="text-slate-300 font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px]">
                        Tanzeem-ul-Madaris Ahle Sunnat Sufi J&K
                    </p>
                </footer>
            </div>
        </main>
    );
}