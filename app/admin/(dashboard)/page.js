"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineBuildingLibrary,
  HiOutlineUsers,
  HiOutlineDocumentCheck,
  HiOutlinePhoto,
  HiOutlineShieldCheck,
  HiOutlineMapPin,
  HiOutlinePresentationChartLine,
  HiOutlineBellAlert,
  HiOutlineClock,
  HiOutlineSparkles,
  HiOutlineArrowRight,
  HiOutlinePlus
} from "react-icons/hi2";

// --- STATIC DATASETS ---
const STATS = [
  { label: 'Registered Madrasas', value: '148', icon: <HiOutlineBuildingLibrary />, color: 'bg-emerald-500', trend: '+12 this year' },
  { label: 'Enrolled Students', value: '12,450', icon: <HiOutlineUsers />, color: 'bg-blue-500', trend: 'Verified' },
  { label: 'Results Declared', value: '8,201', icon: <HiOutlineDocumentCheck />, color: 'bg-purple-500', trend: 'Session 2023-24' },
  { label: 'Legacy Archives', value: '52', icon: <HiOutlinePhoto />, color: 'bg-amber-500', trend: 'Founder Gallery' },
];

const RECENT_LOGS = [
  { id: 1, type: 'Affiliation', msg: 'Darul Uloom Noor-i-Irfan submitted a new application.', time: '12 mins ago' },
  { id: 2, type: 'Result', msg: 'Annual Hifz examination results uploaded for 12 centers.', time: '1 hour ago' },
  { id: 3, type: 'Gallery', msg: 'High-resolution archive added for "Founder Founders 2011".', time: '3 hours ago' },
];

const DISTRICT_BREAKDOWN = [
  { district: 'Anantnag', count: 42 },
  { district: 'Srinagar', count: 28 },
  { district: 'Pulwama', count: 22 },
  { district: 'Shopian', count: 18 },
  { district: 'Budgam', count: 15 },
  { district: 'Jammu', count: 23 },
];

export default function AdminDashboard() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-[1500px] mx-auto pb-20 space-y-10">

      {/* --- HEADER SECTION --- */}
      <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-3">
            <HiOutlineShieldCheck size={18} />
            Tanzeem-ul-Madaris Central Command
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
            Administrative <span className="italic text-emerald-600">Console.</span>
          </h1>
          <div className="flex items-center gap-4 mt-4 text-slate-400 text-xs">
            <span className="flex items-center gap-1.5"><HiOutlineClock /> {currentTime || "--:--:--"}</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>{new Date().toDateString()}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="px-6 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-600 font-bold text-xs hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
            Export Report
          </button>
          <button className="px-6 py-3.5 bg-slate-900 text-white rounded-2xl font-bold text-xs shadow-xl shadow-slate-200 hover:bg-black transition-all flex items-center gap-2">
            <HiOutlinePlus strokeWidth={2.5} /> New Entry
          </button>
        </div>
      </header>

      {/* --- TOP STATISTICS --- */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white p-7 rounded-[32px] border border-slate-100 shadow-sm relative group"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all group-hover:scale-110 ${stat.color} bg-opacity-10 ${stat.color.replace('bg-', 'text-')}`}>
              {stat.icon}
            </div>
            <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</h3>
            <div className="text-3xl font-black text-slate-800 tracking-tight">{stat.value}</div>
            <p className="text-[10px] text-emerald-500 font-bold mt-2">{stat.trend}</p>
          </motion.div>
        ))}
      </section>

      {/* --- MAIN DASHBOARD BODY --- */}
      <div className="grid lg:grid-cols-3 gap-10">

        {/* --- LEFT: REGISTRY & DISTRICTS --- */}
        <div className="lg:col-span-2 space-y-10">

          {/* SUFI WISDOM QUOTE */}
          <div className="bg-emerald-900 rounded-[40px] p-10 text-white relative overflow-hidden">
            <div className="relative z-10">
              <HiOutlineSparkles className="text-emerald-400 mb-4" size={32} />
              <p className="text-2xl font-serif italic leading-relaxed mb-6">
                "The first step in knowledge is to listen, then to be quiet and attentive, then to preserve it, then to practice it, and then to spread it."
              </p>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">
                — Wisdom of the Ancestors
              </span>
            </div>
            <div className="absolute top-[-20px] right-[-20px] w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          {/* DISTRICT BREAKDOWN */}
          <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <HiOutlineMapPin className="text-emerald-500" /> Regional Coverage
              </h3>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Institutes by District</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {DISTRICT_BREAKDOWN.map((d, i) => (
                <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-emerald-200 transition-all cursor-default group">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">{d.district}</p>
                  <p className="text-xl font-black text-slate-800 group-hover:text-emerald-600 transition-colors">{d.count}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* --- RIGHT: SYSTEM HEALTH & ACTIVITY --- */}
        <div className="space-y-8">

          {/* RECENT LOGS */}
          <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center justify-between">
              Recent Logs
              <HiOutlinePresentationChartLine className="text-slate-300" />
            </h3>
            <div className="space-y-6">
              {RECENT_LOGS.map(log => (
                <div key={log.id} className="flex gap-4 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0 group-hover:scale-150 transition-all"></div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-0.5">{log.type}</p>
                    <p className="text-sm text-slate-700 leading-snug">{log.msg}</p>
                    <p className="text-[10px] text-slate-300 mt-1">{log.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 bg-slate-50 text-slate-500 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
              View Activity Audit <HiOutlineArrowRight />
            </button>
          </div>

          {/* SERVER STATUS */}
          <div className="bg-slate-50 rounded-[40px] p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-bold text-slate-900">Cloud Systems Active</span>
            </div>

            <div className="space-y-5">
              <HealthRow label="Registry DB" value="99.9%" />
              <HealthRow label="Media Storage" value="45%" />
              <HealthRow label="Security Layers" value="Active" />
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-3 text-emerald-600 bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                <HiOutlineBellAlert size={20} />
                <p className="text-[10px] font-bold leading-relaxed italic">
                  "System backup successful. All 49 registered Madaris files are synced."
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

// --- SMALL UI HELPERS ---

function HealthRow({ label, value }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
      <span className="text-xs font-black text-slate-800">{value}</span>
    </div>
  );
}