'use client';

import React, { useState, useMemo } from 'react';
import { 
  HiOutlineBell, 
  HiOutlineMegaphone, 
  HiOutlineAcademicCap, 
  HiOutlineCalendarDays,
  HiOutlineMagnifyingGlass,
  HiOutlineArrowDownTray,
  HiOutlineArrowLeft,
  HiOutlineExclamationTriangle,
  HiOutlineChevronRight
} from "react-icons/hi2";
import Link from 'next/link';

export default function UniversityNotifications({ params }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // University Context
  const universityName = "Kashmir University";

  // Detailed Notification Data
  const notifications = [
    { 
        id: 1, 
        title: "Integrated Sufi Syllabus Examination Date Sheet - Autumn 2024", 
        date: "28 Oct 2024", 
        category: "Exams", 
        priority: "High",
        desc: "The final date sheet for the PG Semester III Integrated Sufi Studies has been released. Exams commence from Nov 15."
    },
    { 
        id: 2, 
        title: "Extended Admission Deadline for Mysticism Diploma Courses", 
        date: "25 Oct 2024", 
        category: "Admissions", 
        priority: "Normal",
        desc: "Prospective students can now apply until Oct 31, 2024, via the online portal."
    },
    { 
        id: 3, 
        title: "Annual Sufi Intellectual Conference - Guest Speaker List", 
        date: "20 Oct 2024", 
        category: "Events", 
        priority: "Normal",
        desc: "List of keynote speakers for the upcoming 'Sufism in the Modern Age' conference is now available."
    },
    { 
        id: 4, 
        title: "Winter Break Announcement for Academic Session 2024", 
        date: "15 Oct 2024", 
        category: "General", 
        priority: "Normal",
        desc: "Official notice regarding the winter vacation schedule for all affiliated departments."
    },
    { 
        id: 5, 
        title: "Urgent: Correction in Hall Tickets for Foundation Course", 
        date: "12 Oct 2024", 
        category: "Exams", 
        priority: "Critical",
        desc: "Students are advised to re-download hall tickets due to center code corrections."
    },
  ];

  const categories = ["All", "Admissions", "Exams", "Events", "General"];

  const filteredNotifications = useMemo(() => {
    return notifications.filter(n => {
      const matchesSearch = n.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCat = activeCategory === "All" || n.category === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchTerm, activeCategory]);

  return (
    <main className="bg-brand-background min-h-screen pb-20 font-sans text-[#1e293b]">
      
      {/* --- ELITE BREADCRUMB & TITLE --- */}
      <section className="pt-24 pb-12 px-6 md:px-12 lg:px-20 border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto">
            <Link href="/institutions" className="inline-flex items-center gap-2 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6 hover:gap-3 transition-all">
                <HiOutlineArrowLeft /> Back to {universityName} Profile
            </Link>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight">
                        Notice <span className="italic text-brand-primary">Board.</span>
                    </h1>
                    <p className="text-gray-500 mt-4 max-w-xl">
                        Official updates, academic circulars, and event notifications for {universityName}.
                    </p>
                </div>
                {/* Emergency Alert (Visible if priority is critical) */}
                <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex items-center gap-4 animate-pulse">
                    <HiOutlineExclamationTriangle className="text-amber-600 text-2xl shrink-0" />
                    <div>
                        <p className="text-[10px] font-bold text-amber-800 uppercase tracking-widest">Recent Alert</p>
                        <p className="text-xs font-medium text-amber-700">Check Hall Ticket Corrections</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- FILTER & SEARCH BAR --- */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-4 py-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar w-full md:w-auto">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                            activeCategory === cat ? 'bg-[#1e293b] text-white' : 'text-gray-400 hover:text-[#1e293b]'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Inline Search */}
            <div className="relative w-full md:w-80 group">
                <HiOutlineMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                <input 
                    type="text" 
                    placeholder="Search circulars..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 rounded-xl outline-none border border-transparent focus:border-brand-primary/20 focus:bg-white transition-all text-sm font-medium"
                />
            </div>
        </div>
      </section>

      {/* --- NOTIFICATION FEED --- */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 mt-12 md:mt-20">
        <div className="space-y-6">
            {filteredNotifications.length > 0 ? (
                filteredNotifications.map((notif) => (
                    <div 
                        key={notif.id}
                        className="group relative bg-white border border-gray-100 rounded-[32px] p-6 md:p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-black/[0.03] hover:border-brand-primary/20"
                    >
                        <div className="flex flex-col md:flex-row md:items-start gap-8">
                            {/* Date Column */}
                            <div className="flex flex-col items-center justify-center bg-gray-50 rounded-2xl w-24 h-24 shrink-0 border border-gray-100 group-hover:bg-brand-primary/5 transition-colors">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Oct</span>
                                <span className="text-3xl font-serif font-bold text-[#1e293b]">{notif.date.split(' ')[0]}</span>
                                <span className="text-[10px] font-bold text-brand-primary">{notif.date.split(' ')[2]}</span>
                            </div>

                            {/* Content Column */}
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                                        notif.category === 'Exams' ? 'bg-red-50 text-red-600' :
                                        notif.category === 'Admissions' ? 'bg-emerald-50 text-emerald-600' :
                                        'bg-blue-50 text-blue-600'
                                    }`}>
                                        {notif.category}
                                    </span>
                                    {notif.priority === 'Critical' && (
                                        <span className="flex items-center gap-1 text-[10px] font-black text-red-600 uppercase">
                                            <HiOutlineExclamationTriangle /> Urgent Action
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-xl md:text-2xl font-serif font-bold text-[#1e293b] mb-4 group-hover:text-brand-primary transition-colors leading-tight">
                                    {notif.title}
                                </h3>
                                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
                                    {notif.desc}
                                </p>
                                
                                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                                    <div className="flex items-center gap-4">
                                        <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#1e293b] hover:text-brand-primary transition-colors">
                                            <HiOutlineArrowDownTray /> Download PDF
                                        </button>
                                        <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#1e293b] hover:text-brand-primary transition-colors">
                                            <HiOutlineMegaphone /> Share
                                        </button>
                                    </div>
                                    <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#1e293b] group-hover:bg-brand-primary group-hover:text-white transition-all">
                                        <HiOutlineChevronRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="py-40 text-center bg-gray-50 rounded-[40px] border border-dashed border-gray-200">
                    <HiOutlineBell className="mx-auto text-4xl text-gray-300 mb-4" />
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">No circulars match your search criteria.</p>
                </div>
            )}
        </div>

        {/* --- NEWSLETTER/SUBSCRIPTION --- */}
        <div className="mt-20 p-10 md:p-16 bg-[#1e293b] rounded-[48px] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary opacity-5 skew-x-12 translate-x-10"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="max-w-md">
                    <h4 className="text-2xl md:text-3xl font-serif font-medium mb-4">Stay Synchronized.</h4>
                    <p className="text-white/50 text-sm leading-relaxed font-medium italic">
                        Subscribe to receive real-time notifications for {universityName} 
                        directly in your inbox or mobile device.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <button className="px-10 py-5 bg-brand-primary text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-primary/20">
                        Subscribe via Email
                    </button>
                    <button className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-all">
                        SMS Alerts
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* --- FOOTER REGISTRY CODE --- */}
      <div className="mt-20 text-center pb-10">
          <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.5em]">Tanzeem-ul-Madaris Ahle Sunnat Sufi J&K • Official Channel</p>
      </div>

    </main>
  );
}