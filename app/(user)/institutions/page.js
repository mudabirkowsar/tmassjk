'use client';

import React, { useState } from 'react';
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import KashmirDivision from './components/KashmirDivision';
import JammuDivision from './components/JammuDivision';
import Syllabus from './components/Syllabus';
import Books from './components/Books';


export default function AffiliatedInstitutes() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("Kashmir Division");

    const tabs = ["Kashmir Division", "Jammu Division", "Syllabus", "Books"];

    // Logic to switch between components
    const renderContent = () => {
        switch (activeTab) {
            case "Kashmir Division":
                return <KashmirDivision searchTerm={searchTerm} />;
            case "Jammu Division":
                return <JammuDivision searchTerm={searchTerm} />;
            case "Syllabus":
                return <Syllabus searchTerm={searchTerm} />;
            case "Books":
                return <Books searchTerm={searchTerm} />;
            default:
                return <KashmirDivision searchTerm={searchTerm} />;
        }
    };

    return (
        <main className="bg-brand-background min-h-screen pb-20 font-sans text-brand-black">
            
            {/* --- HERO SECTION --- */}
            <section className="pt-4 pb-4 px-6 md:px-12 lg:px-20 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight mb-4">
                        Institutional <span className="italic text-brand-primary">Ledger</span>
                    </h1>
                    <p className="text-brand-black text-base opacity-70">
                        Viewing records for: <span className="font-bold text-brand-primary">{activeTab}</span>
                    </p>
                </div>
            </section>

            {/* --- STICKY NAV & SEARCH --- */}
            <section className="sticky top-20 z-[40] bg-white/80 backdrop-blur-md border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between">
                        
                        {/* Search Bar */}
                        <div className="relative flex-1 group border-b lg:border-b-0 lg:border-r border-gray-100 py-4">
                            <HiOutlineMagnifyingGlass className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-primary text-xl" />
                            <input
                                type="text"
                                placeholder={`Search ${activeTab}...`}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-8 pr-4 py-2 bg-transparent outline-none text-sm font-medium"
                            />
                        </div>

                        {/* Navigation Tabs */}
                        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-2 lg:py-0 lg:pl-10">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-5 py-5 text-[10px] font-bold uppercase tracking-widest cursor-pointer transition-all relative whitespace-nowrap ${
                                        activeTab === tab ? 'text-brand-primary' : 'text-gray-400'
                                    }`}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DYNAMIC CONTENT AREA --- */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-10">
                {renderContent()}
            </section>
        </main>
    );
}