"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    HiOutlineAcademicCap,
    HiOutlineShieldCheck,
    HiOutlineBookOpen,
    HiOutlineHeart,
    HiOutlineLightBulb,
    HiOutlineGlobeAsiaAustralia,
    HiOutlineSparkles,
    HiOutlineFlag
} from "react-icons/hi2";

export default function BiographyPage() {
    return (
        <main className="min-h-screen bg-[#fcfcfc] pb-20 font-sans">

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
                        <HiOutlineSparkles size={18} />
                        <span className="text-xs font-bold uppercase tracking-widest">A Legacy of Knowledge & Resilience</span>
                    </motion.div>

                    <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                        Maulvi Ashraf <span className="italic text-emerald-400">Gauri</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto font-light italic">
                        "Pioneering the Educational & Research Revolution across Jammu & Kashmir."
                    </p>
                </div>
            </section>

            {/* --- MAIN CONTENT CONTAINER --- */}
            <div className="max-w-6xl mx-auto px-6 -mt-16">

                {/* --- STATS / QUICK OVERVIEW --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    <StatCard icon={<HiOutlineAcademicCap />} label="Institutions Registered" value="49+" />
                    <StatCard icon={<HiOutlineBookOpen />} label="Movement Began" value="2011" />
                    <StatCard icon={<HiOutlineHeart />} label="Major Surgeries" value="35" />
                    <StatCard icon={<HiOutlineFlag />} label="Official Recognition" value="State-Level" />
                </div>

                <div className="grid lg:grid-cols-3 gap-12">

                    {/* --- LEFT COLUMN: THE STORY --- */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* CHAPTER 1: THE VISION */}
                        <Chapter title="The Genesis of a Movement">
                            <p>
                                At the level of Jammu and Kashmir, no Ahle Sunnat organization had previously been established with the objective of promoting Sufism through a structured system of education. Recognizing this gap, <strong>Maulvi Ashraf Gauri</strong> initiated a visionary movement around 2011–2012.
                            </p>
                            <p className="mt-4">
                                Alongside distinguished personalities like Maulana Mushtaq Ahmad Khan and Mufti Aslam Misbahi, they laid the foundation for the <strong>Tanzeem-ul-Madaris Ahle Sunnat Sufi J&K</strong>, a platform designed to standardize religious education aligned with modern academic requirements.
                            </p>
                        </Chapter>

                        {/* CHAPTER 2: EDUCATIONAL REVOLUTION */}
                        <Chapter title="Integrating Modernity with Tradition">
                            <p>
                                One of the most significant achievements was the registration of madrasas with the <strong>National Institute of Open Schooling (NIOS)</strong>. This ensured that certificates of orphaned and underprivileged students gained government-level recognition.
                            </p>
                            <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500 my-6">
                                <p className="text-emerald-900 font-medium italic">
                                    "For the first time in history, Maulvi Ashraf Gauri’s book 'Ek Rah-e-Irfan' was incorporated into a university curriculum—marking a milestone in the academic recognition of Sufi thought."
                                </p>
                            </div>
                            <p>
                                The team managed to introduce the Sufi (Tasawuf) Syllabus into 40 colleges and three major universities: Kashmir University, BGSBU, and IUST Awantipora.
                            </p>
                        </Chapter>

                        {/* CHAPTER 3: SACRIFICE & RESILIENCE */}
                        <Chapter title="The Price of Revolution">
                            <p>
                                This journey was marked by immense personal sacrifice. Maulvi Ashraf Gauri faced severe opposition and survived a life-threatening attack on <strong>July 6, 2018</strong>. He sustained injuries that required approximately <strong>35 major surgeries</strong> over two years.
                            </p>
                            <p className="mt-4">
                                Despite sacrificing personal wealth and enduring profound physical hardship, his unwavering commitment led to a historic educational transformation across all districts of Jammu and Kashmir.
                            </p>
                        </Chapter>

                        {/* POETRY CALLOUT */}
                        <div className="bg-slate-900 text-white p-10 rounded-[40px] text-center my-12 shadow-xl">
                            <p className="text-xl md:text-2xl font-serif italic mb-4">
                                "Those whose intentions are firm, those whose eyes are on God, they are not frightened by turbulent waves."
                            </p>
                            <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs">— Allama Iqbal</p>
                        </div>

                        {/* CHAPTER 4: SOCIAL WELFARE */}
                        <Chapter title="Beyond the Classroom">
                            <p>
                                Maulvi Ashraf's work extended to social welfare and infrastructure. From building the <strong>Baba Dawood Khaki (RA) Central Mosque</strong> to facilitating electricity (65 K.V transformer) and constructing bridges for the Kheeripura neighborhood, his leadership addressed the basic needs of the masses.
                            </p>
                            <p className="mt-4">
                                A gifted athlete, he was also a captain of regional cricket teams, using sports as a tool to engage and motivate the youth of the valley.
                            </p>
                        </Chapter>

                    </div>

                    {/* --- RIGHT COLUMN: QUICK INFO & TIMELINE --- */}
                    <div className="space-y-8">

                        {/* MILESTONE LIST */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                            <h4 className="text-slate-900 font-bold mb-6 flex items-center gap-2">
                                <HiOutlineLightBulb className="text-emerald-500" /> Key Foundations
                            </h4>
                            <div className="space-y-6">
                                <Milestone date="2002" title="Madrasa Usman-Zin-Noorain" desc="Parigam Pulwama" />
                                <Milestone date="2003" title="Madrasa Hanfia Char Sadaat" desc="Kasbah Yar Pulwama" />
                                <Milestone date="2004" title="Banaat Hazrat Fatima Zahra" desc="Wularhama Salar Pahalgam" />
                                <Milestone date="2005" title="Sheikh-ul-Aalam Public School" desc="Guree Anantnag" />
                                <Milestone date="2017" title="State-Level Registration" desc="49 Madaris & Schools Registered" />
                            </div>
                        </div>

                        {/* CURRENT ROLES */}
                        <div className="bg-emerald-900 text-white p-8 rounded-3xl shadow-lg">
                            <h4 className="font-bold mb-6 flex items-center gap-2">
                                <HiOutlineGlobeAsiaAustralia /> Modern Engagement
                            </h4>
                            <ul className="space-y-4 text-sm text-emerald-100">
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                                    Member, Government Hajj Committee (J&K).
                                </li>
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                                    Meeting with PM of India & Vice President (2023-24).
                                </li>
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                                    Renovation of Ziyarat Baba Hyder Reshi (35 Lakh INR).
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* --- CLOSING POETIC STORY --- */}
                <div className="mt-24 max-w-4xl mx-auto border-t border-slate-100 pt-16">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-serif font-bold text-slate-900 italic">The Story of the Sea</h3>
                    </div>
                    <div className="bg-white p-10 md:p-16 rounded-[40px] border border-slate-100 shadow-sm text-slate-600 leading-relaxed italic text-lg text-center">
                        <p className="mb-4">
                            "A little girl wrote on the bank that the sea is a thief... A fisherman wrote the sea is my cradle... An old mother wrote the sea is murderous... A man found a diamond and wrote the sea is a treasure."
                        </p>
                        <p className="mb-4">
                            "When a huge wave came and washed everything away, the sea remained silent in its place."
                        </p>
                        <p className="text-slate-400 text-sm font-normal not-italic mt-8">
                            The body is made of dust, it is about to be destroyed... but those who live down to earth are always happy, they feel the pain of others.
                        </p>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-slate-900 font-serif text-2xl italic">
                            "I'm not bent, I'm not sold out, I'm not hiding somewhere,<br />
                            Look for me in the ranks of those who are standing firm"
                        </p>
                        <p className="text-slate-400 text-xs mt-4 uppercase tracking-[0.3em] font-bold">— Alama Iqbal</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

/* --- HELPER COMPONENTS --- */

function StatCard({ icon, label, value }) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
            <div className="text-emerald-500 mb-2 flex justify-center">{React.cloneElement(icon, { size: 24 })}</div>
            <div className="text-2xl font-black text-slate-800 tracking-tight">{value}</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</div>
        </div>
    );
}

function Chapter({ title, children }) {
    return (
        <section>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-emerald-500" /> {title}
            </h2>
            <div className="text-slate-600 leading-relaxed space-y-4 text-lg">
                {children}
            </div>
        </section>
    );
}

function Milestone({ date, title, desc }) {
    return (
        <div className="flex gap-4 group">
            <div className="text-emerald-500 font-black text-sm font-mono mt-1">{date}</div>
            <div>
                <div className="font-bold text-slate-800 text-sm group-hover:text-emerald-600 transition-colors">{title}</div>
                <div className="text-xs text-slate-400">{desc}</div>
            </div>
        </div>
    );
}