"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
    HiOutlineBookOpen, 
    HiOutlineAcademicCap, 
    HiOutlineGlobeAlt, 
    HiOutlineBeaker, 
    HiOutlineComputerDesktop,
    HiOutlineLanguage,
    HiOutlineCloudArrowDown,
    HiOutlineCheckCircle,
    HiOutlineSparkles
} from "react-icons/hi2";

const SYLLABUS_CATEGORIES = [
    {
        id: 1,
        title: "Elementary Foundation",
        level: "Primary Level (1st - 5th)",
        icon: <HiOutlineBookOpen />,
        desc: "A balanced start focusing on basic Quranic recitation (Tajweed), Urdu, and fundamental Mathematics and Science.",
        subjects: ["Quranic Qaida", "Basic Fiqh", "English Grammar", "General Science", "Mathematics"]
    },
    {
        id: 2,
        title: "Integrated Secondary",
        level: "Middle Level (6th - 8th)",
        icon: <HiOutlineAcademicCap />,
        desc: "Merging the NIOS framework with Dars-e-Nizami essentials to prepare students for both board exams and religious depth.",
        subjects: ["Tafseer Basics", "Hadith Arba'een", "Social Studies", "Information Technology", "Arabic Language"]
    },
    {
        id: 3,
        title: "Dars-e-Nizami (Alim)",
        level: "Senior Level (High School+)",
        icon: <HiOutlineSparkles />,
        desc: "An intensive study of classical texts, Logic (Mantiq), and Jurisprudence (Usul-al-Fiqh) alongside modern stream subjects.",
        subjects: ["Mantiq & Falsafa", "Advanced Fiqh", "Sufi Literature", "Comparative Religion", "Political Science"]
    }
];

const FEATURES = [
  { title: "NIOS Integrated", desc: "Our syllabus is mapped to the National Institute of Open Schooling for govt. recognition.", icon: <HiOutlineGlobeAlt /> },
  { title: "Sufi Philosophy", desc: "Exclusive modules on 'Ek Rah-e-Irfan' and the teachings of the Saints of J&K.", icon: <HiOutlineSparkles /> },
  { title: "Modern Labs", desc: "Integrated IT and Science practicals even for traditional Madrasa students.", icon: <HiOutlineComputerDesktop /> },
];

export default function CurriculumPage() {
    return (
        <main className="min-h-screen bg-[#fcfcfc] pb-24 font-sans">
            
            {/* --- HERO SECTION --- */}
            <section className="relative bg-slate-900 text-white pt-24 pb-32 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')] bg-repeat" />
                </div>
                
                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full mb-8 border border-emerald-500/30"
                    >
                        <HiOutlineAcademicCap size={18} />
                        <span className="text-xs font-bold uppercase tracking-widest">Academic Excellence</span>
                    </motion.div>
                    
                    <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                        Nurturing <span className="italic text-emerald-400">Soul</span> & <span className="text-slate-200">Intellect</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        A unique integrated curriculum designed to bridge the gap between traditional religious wisdom and modern scientific requirements.
                    </p>
                </div>
            </section>

            {/* --- CORE PILLARS --- */}
            <section className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">
                <div className="grid md:grid-cols-3 gap-6">
                    {FEATURES.map((f, i) => (
                        <div key={i} className="bg-white p-8 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 text-2xl">
                                {f.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">{f.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- DETAILED SYLLABUS SECTION --- */}
            <section className="max-w-6xl mx-auto px-6 mt-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Syllabus <span className="italic text-emerald-600">Structure</span></h2>
                    <p className="text-slate-500">Categorized by academic level and depth of specialization.</p>
                </div>

                <div className="space-y-8">
                    {SYLLABUS_CATEGORIES.map((cat) => (
                        <motion.div 
                            key={cat.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[40px] border border-slate-100 p-8 md:p-12 flex flex-col lg:flex-row gap-12 hover:shadow-lg transition-shadow"
                        >
                            <div className="lg:w-1/3">
                                <div className="w-16 h-16 rounded-3xl bg-slate-900 text-emerald-400 flex items-center justify-center text-3xl mb-6 shadow-lg shadow-emerald-900/20">
                                    {cat.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{cat.title}</h3>
                                <p className="text-emerald-600 font-bold text-xs uppercase tracking-widest mb-4">{cat.level}</p>
                                <p className="text-slate-500 text-sm leading-relaxed">{cat.desc}</p>
                            </div>

                            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
                                {cat.subjects.map((sub, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-emerald-600 transition-all duration-300">
                                        <HiOutlineCheckCircle className="text-emerald-500 group-hover:text-white" />
                                        <span className="text-sm font-bold text-slate-700 group-hover:text-white">{sub}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>


            {/* --- FOOTER CALLOUT --- */}
            <section className="mt-24 text-center px-6">
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.4em]">
                    Tanzeem-ul-Madaris Ahle Sunnat Sufi J&K • Education Policy 2024
                </p>
            </section>
        </main>
    );
}