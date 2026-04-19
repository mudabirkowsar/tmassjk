'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
    HiOutlineBuildingLibrary,
    HiOutlineAcademicCap,
    HiOutlineMagnifyingGlass,
    HiOutlineArrowRight,
    HiOutlineBuildingOffice2,
    HiOutlineChevronRight
} from "react-icons/hi2";
import { PiSealCheckFill, PiMapPinAreaThin, PiCalendarBlankThin } from "react-icons/pi";

const institutionsData = [
    { _id: 1, name: "Kashmir University", location: "Srinagar", type: "University", status: "Syllabus Integrated", est: "1948" },
    { _id: 2, name: "Baba Ghulam Shah Badshah University", location: "Rajouri", type: "University", status: "Syllabus Integrated", est: "2002" },
    { _id: 3, name: "Islamic University of Science & Technology", location: "Awantipora", type: "University", status: "Syllabus Integrated", est: "2005" },
    { _id: 4, name: "Madrasa Anwar-ul-Uloom", location: "Anantnag", type: "Madrasa", status: "NIOS Registered", est: "1995" },
    { _id: 5, name: "Darul Qalam Academy", location: "Pulwama", type: "Madrasa", status: "NIOS Registered", est: "2010" },
    { _id: 6, name: "Jamia Ahle Sunnat", location: "Jammu", type: "Madrasa", status: "NIOS Registered", est: "1988" },
    { _id: 7, name: "Government Degree College", location: "Sopore", type: "College", status: "Curriculum Affiliated", est: "1951" },
    { _id: 8, name: "Model Degree College", location: "Shopian", type: "College", status: "Curriculum Affiliated", est: "2008" },
    { _id: 9, name: "Sufi Institute of Learning", location: "Baramulla", type: "Madrasa", status: "NIOS Registered", est: "2012" },
];

function AffiliatedInstitutes() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("All");

    const filteredData = useMemo(() => {
        return institutionsData.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.location.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesTab = activeTab === "All" || item.type === activeTab;
            return matchesSearch && matchesTab;
        });
    }, [searchTerm, activeTab]);

    const tabs = ["All", "University", "Madrasa", "College"];

    const handleNavigate = (id) => {
        router.push(`/institutions/institutedetail/${id}`);
    };

    return (
        <main className="bg-brand-background min-h-screen pb-20 font-sans text-brand-black">

            {/* --- MINIMALIST HERO --- */}
            <section className="pt-24 pb-12 px-6 md:px-12 lg:px-20 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight mb-4">
                                Institutional <span className="italic text-brand-primary">Ledger</span>
                            </h1>
                            <p className="text-brand-black text-base md:text-lg max-w-xl opacity-70">
                                The official consolidated directory of affiliated educational bodies in Jammu & Kashmir.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
                            <span>Verified Registry</span>
                            <div className="w-12 h-[1px] bg-brand-primary/30"></div>
                            <span className="text-brand-black">Session 2024-25</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- UTILITY BAR (SEARCH & TABS) --- */}
            <section className="sticky top-0 z-50 bg-brand-background backdrop-blur-md border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between">
                        {/* Search */}
                        <div className="relative flex-1 group border-b lg:border-b-0 lg:border-r border-gray-100 py-4">
                            <HiOutlineMagnifyingGlass className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-primary text-xl" />
                            <input
                                type="text"
                                placeholder="Filter registry by name or location..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-8 pr-4 py-2 bg-transparent outline-none text-sm font-medium placeholder:text-gray-400"
                            />
                        </div>

                        {/* Linear Tabs */}
                        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar lg:pl-10 py-4 lg:py-0">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-5 py-6 text-[10px] font-bold uppercase tracking-widest transition-all relative whitespace-nowrap ${activeTab === tab ? 'text-brand-primary' : 'text-gray-400 hover:text-brand-primary'
                                        }`}
                                >
                                    {tab}s
                                    {activeTab === tab && (
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- LINEAR REGISTRY LIST --- */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-10">

                {/* Table Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-100 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-black">
                    <div className="col-span-1">ID</div>
                    <div className="col-span-5">Institution Name & Type</div>
                    <div className="col-span-2">Location</div>
                    <div className="col-span-2">Affiliation Status</div>
                    <div className="col-span-2 text-right">Action</div>
                </div>

                <div className="divide-y divide-gray-100">
                    {filteredData.length > 0 ? (
                        filteredData.map((item) => (
                            <div
                                key={item._id}
                                onClick={() => handleNavigate(item._id)}
                                className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-6 py-8 md:py-6 hover:bg-brand-primary/[0.02] transition-all cursor-pointer active:scale-[0.99]"
                            >
                                {/* ID */}
                                <div className="hidden md:block col-span-1 text-xs font-mono text-brand-black opacity-50">
                                    0{item._id}
                                </div>

                                {/* Name & Type */}
                                <div className="col-span-1 md:col-span-5 flex flex-col gap-1">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-lg md:text-xl font-serif font-bold group-hover:text-brand-primary transition-colors">
                                            {item.name}
                                        </h3>
                                        <PiSealCheckFill className="text-brand-accent text-lg opacity-40 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 bg-gray-100 text-gray-500 rounded">
                                            {item.type}
                                        </span>
                                        <span className="text-[10px] text-gray-400 font-medium italic">Est. {item.est}</span>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="col-span-1 md:col-span-2 flex items-center gap-2 text-sm text-brand-black">
                                    <PiMapPinAreaThin size={20} className="text-brand-primary" />
                                    {item.location}
                                </div>

                                {/* Status */}
                                <div className="col-span-1 md:col-span-2">
                                    <span className="text-[10px] font-bold text-brand-accent uppercase tracking-wider flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-brand-accent animate-pulse"></div>
                                        {item.status}
                                    </span>
                                </div>

                                {/* Action */}
                                <div className="col-span-1 md:col-span-2 text-right flex justify-start md:justify-end items-center">
                                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#1e293b] group-hover:text-brand-primary transition-all">
                                        View Details <HiOutlineChevronRight className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="py-32 text-center">
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">No entries found matching your query.</p>
                        </div>
                    )}
                </div>

                {/* --- FOOTER CTA --- */}
                <div className="mt-20 p-8 md:p-12 border border-gray-100 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 bg-white shadow-sm">
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-brand-primary">
                            <HiOutlineBuildingOffice2 size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold">Standard Accreditation</h4>
                            <p className="text-brand-black text-sm opacity-60">Download the complete verified list for offline access.</p>
                        </div>
                    </div>
                    <button className="px-10 py-4 bg-[#1e293b] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-brand-primary transition-all shadow-lg shadow-black/5">
                        Download PDF Registry
                    </button>
                </div>

                <p className="text-center mt-12 text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em]">
                    Tanzeem-ul-Madaris Ahle Sunnat Sufi J&K • Education Registry
                </p>
            </section>
        </main>
    );
}

export default AffiliatedInstitutes;