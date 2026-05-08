"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HiOutlineMagnifyingGlass,
    HiOutlinePrinter,
    HiOutlineAcademicCap,
    HiOutlineDocumentText,
    HiOutlineUser,
    HiOutlineBuildingLibrary,
    HiOutlineArrowPath,
    HiOutlineCheckBadge,
    HiOutlineInformationCircle,
    HiOutlineHeart
} from "react-icons/hi2";
import UserAPI from '../../apis/UserAPI';

export default function StudentResultPortal() {
    const [rollNo, setRollNo] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!rollNo) return;

        setLoading(true);
        setError("");
        setResult(null);

        try {
            // Using your provided API function
            const response = await UserAPI.searchResults(rollNo);

            if (response.success) {
                const data = response.data;

                // Mapping the flat DB fields to the array format for the UI table
                const formattedSubjects = [
                    { name: "Quran (Hifz/Tajweed)", marksObtained: data.quran, totalMarks: 100 },
                    { name: "Jaam e Irfan", marksObtained: data.jaamEirfan, totalMarks: 100 },
                    { name: "Mathematics", marksObtained: data.math, totalMarks: 100 },
                    { name: "English Language", marksObtained: data.english, totalMarks: 100 },
                    { name: "Science", marksObtained: data.science, totalMarks: 100 },
                    { name: "Sst (Social Science)", marksObtained: data.sst, totalMarks: 100 },
                    { name: "Urdu Literature", marksObtained: data.urdu, totalMarks: 100 },
                    { name: "IT (Information Tech)", marksObtained: data.it, totalMarks: 100 },
                ];

                setResult({ ...data, subjects: formattedSubjects });
            } else {
                setError("Result not found. Please check your Roll Number or Enrollment No.");
            }
        } catch (err) {
            setError(err.message || "An error occurred while fetching the result.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#fcfcfc] pb-10 md:pb-20 font-sans print:bg-white print:pb-0 overflow-x-hidden">

            {/* HEADER - Hides on Print */}
            <div className="bg-white border-b border-slate-200 pt-10 md:pt-16 pb-16 md:pb-20 px-4 md:px-6 text-center print:hidden">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 text-brand-primary mb-4 px-3 py-1.5 bg-brand-primary/5 rounded-full">
                        <HiOutlineCheckBadge size={18} className="shrink-0" />
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">Board of Examination Portal</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-3 leading-tight">
                        Search <span className="italic text-brand-primary">Student Result</span>
                    </h1>
                    <p className="text-slate-500 max-w-xl mx-auto font-light leading-relaxed text-xs md:text-base px-2">
                        Enter the unique Roll Number or Enrollment Number provided by the institution.
                    </p>
                </div>
            </div>

            {/* SEARCH BOX - Hides on Print */}
            <div className="w-full max-w-2xl mx-auto px-4 md:px-6 -mt-8 md:-mt-10 print:hidden relative z-10">
                <form onSubmit={handleSearch} className="bg-white p-2 md:p-2.5 rounded-[22px] md:rounded-[28px] shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col md:flex-row gap-2 md:gap-3">
                    <div className="relative flex-1">
                        <div className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-slate-400">
                            <HiOutlineMagnifyingGlass size={18} />
                        </div>
                        <input
                            type="text"
                            placeholder="Enter Roll No"
                            value={rollNo}
                            onChange={(e) => setRollNo(e.target.value)}
                            className="w-full pl-11 md:pl-14 pr-4 py-3.5 md:py-4.5 rounded-[16px] md:rounded-[20px] bg-slate-50 border-2 border-transparent focus:border-brand-primary/10 focus:bg-white outline-none text-slate-800 font-bold tracking-widest transition-all text-sm md:text-base"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-brand-primary text-white px-8 md:px-10 py-3.5 md:py-4.5 rounded-[16px] md:rounded-[20px] font-bold hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70 text-sm md:text-base"
                    >
                        {loading ? <HiOutlineArrowPath className="animate-spin" /> : "Search Result"}
                    </button>
                </form>
                {error && <p className="mt-4 text-center text-red-500 text-[10px] font-bold uppercase tracking-wider px-4">{error}</p>}
            </div>

            {/* RESULT VIEWER */}
            <AnimatePresence>
                {result && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full max-w-5xl mx-auto px-2 md:px-6 mt-8 md:mt-12 print:mt-0"
                    >
                        <div className="bg-white rounded-[24px] md:rounded-[32px] border border-slate-200 shadow-sm overflow-hidden print:border-none print:shadow-none">

                            {/* MARKSHEET BANNER */}
                            <div className="bg-slate-50 px-5 md:px-12 py-6 md:py-10 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                                <div className="text-center md:text-left">
                                    <h2 className="text-lg md:text-2xl font-serif font-bold text-slate-900 uppercase tracking-tight">Provisional Marksheet</h2>
                                    <p className="text-brand-primary font-bold text-[9px] md:text-xs uppercase tracking-[0.2em] mt-1">Session {result.year}</p>
                                </div>
                                <button
                                    onClick={() => window.print()}
                                    className="w-full md:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-[10px] font-bold text-slate-600 hover:bg-slate-50 transition-all print:hidden shadow-sm"
                                >
                                    <HiOutlinePrinter size={14} /> Print Result
                                </button>
                            </div>

                            {/* STUDENT IDENTITY SECTION */}
                            <div className="p-5 md:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 bg-white">
                                <IdentityBox label="Student Name" value={result.studentName} icon={<HiOutlineUser />} />
                                <IdentityBox label="Father's Name" value={result.fatherName} icon={<HiOutlineUser />} />
                                <IdentityBox label="Mother's Name" value={result.motherName} icon={<HiOutlineHeart />} />
                                <IdentityBox label="Roll Number" value={result.rollNo} icon={<HiOutlineDocumentText />} />
                                <div className="sm:col-span-2">
                                    <IdentityBox label="Enrollment No" value={result.enrollmentNo} icon={<HiOutlineCheckBadge />} />
                                </div>
                                <div className="sm:col-span-2">
                                    <IdentityBox label="Institution" value={result.instituteName} icon={<HiOutlineBuildingLibrary />} />
                                </div>
                            </div>

                            {/* SUBJECTS TABLE */}
                            <div className="px-4 md:px-12 pb-10">
                                <div className="w-full">
                                    <table className="w-full table-fixed text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-slate-100 text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] text-slate-400">
                                                <th className="py-4 px-1 w-[55%]">Subject</th>
                                                <th className="py-4 text-center w-[20%]">Max</th>
                                                <th className="py-4 text-right px-1 w-[25%]">Marks</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50">
                                            {result.subjects.map((sub, i) => (
                                                <tr key={i} className="text-slate-700">
                                                    <td className="py-3.5 px-1 font-bold text-slate-800 text-[11px] md:text-sm leading-tight">{sub.name}</td>
                                                    <td className="py-3.5 text-center font-mono text-slate-400 text-[11px] md:text-sm">{sub.totalMarks}</td>
                                                    <td className="py-3.5 text-right px-1 font-black text-slate-900 text-[11px] md:text-sm">{sub.marksObtained}</td>
                                                </tr>
                                            ))}
                                            {/* AGGREGATE ROW */}
                                            <tr className="bg-slate-900 text-white">
                                                <td className="py-4 px-3 font-bold uppercase tracking-widest text-[9px] md:text-xs rounded-l-xl">Total Aggregate</td>
                                                <td className="py-4 text-center font-bold font-mono text-xs md:text-base">{result.totalMax}</td>
                                                <td className="py-4 px-3 text-right font-black text-lg md:text-2xl text-brand-primary rounded-r-xl">{result.obtainedMarks}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* FINAL ANALYTICS */}
                                <div className="mt-6 grid grid-cols-3 gap-2 md:gap-4">
                                    <div className="bg-slate-50 p-3 md:p-6 rounded-xl md:rounded-2xl border border-slate-100 text-center">
                                        <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Per%</p>
                                        <p className="text-sm md:text-2xl font-black text-slate-800">{result.percentage}%</p>
                                    </div>
                                    <div className="bg-slate-50 p-3 md:p-6 rounded-xl md:rounded-2xl border border-slate-100 text-center">
                                        <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Grade</p>
                                        <p className="text-sm md:text-2xl font-black text-slate-800">{result.grade || "N/A"}</p>
                                    </div>
                                    <div className={`p-3 md:p-6 rounded-xl md:rounded-2xl border text-center ${result.status === 'Pass' ? 'bg-green-50 border-green-100 text-green-700' : 'bg-red-50 border-red-100 text-red-700'}`}>
                                        <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest mb-1 opacity-60">Status</p>
                                        <p className="text-sm md:text-2xl font-black uppercase">{result.status}</p>
                                    </div>
                                </div>
                            </div>

                            {/* FOOTER */}
                            <div className="p-6 bg-slate-50/50 border-t border-slate-100 text-center">
                                <p className="text-[8px] md:text-[9px] text-slate-400 uppercase tracking-[0.15em] font-medium leading-relaxed">
                                    This is a digital statement. <br className="md:hidden" />
                                    Original marksheet issued by the Board.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}

// UI HELPER COMPONENT
const IdentityBox = ({ label, value, icon }) => (
    <div className="flex items-start gap-3 overflow-hidden">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 shrink-0 border border-slate-100">
            {React.cloneElement(icon, { size: 16 })}
        </div>
        <div className="min-w-0 flex-1">
            <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
            <p className="text-slate-800 font-bold text-xs md:text-base leading-tight break-words">{value}</p>
        </div>
    </div>
);