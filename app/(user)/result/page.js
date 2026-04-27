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
        <main className="min-h-screen bg-[#fcfcfc] pb-20 font-sans print:bg-white print:pb-0">

            {/* HEADER - Hides on Print */}
            <div className="bg-white border-b border-slate-200 pt-16 pb-20 px-6 text-center print:hidden">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 text-brand-primary mb-4 px-4 py-1.5 bg-brand-primary/5 rounded-full">
                        <HiOutlineCheckBadge size={20} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Board of Examination Portal</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
                        Search <span className="italic text-brand-primary">Student Result</span>
                    </h1>
                    <p className="text-slate-500 max-w-xl mx-auto font-light leading-relaxed text-sm md:text-base">
                        Enter the unique Roll Number or Enrollment Number provided by the institution to access the digital statement of marks.
                    </p>
                </div>
            </div>

            {/* SEARCH BOX - Hides on Print */}
            <div className="max-w-2xl mx-auto px-6 -mt-10 print:hidden">
                <form onSubmit={handleSearch} className="bg-white p-2.5 rounded-[28px] shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row gap-3">
                    <div className="relative flex-1">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                            <HiOutlineMagnifyingGlass size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="Enter Roll No or Enrollment No"
                            value={rollNo}
                            onChange={(e) => setRollNo(e.target.value)}
                            className="w-full pl-14 pr-6 py-4.5 rounded-[20px] bg-slate-50 border-2 border-transparent focus:border-brand-primary/10 focus:bg-white outline-none text-slate-800 font-bold tracking-widest transition-all"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-brand-primary text-white px-10 py-4.5 rounded-[20px] font-bold hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                        {loading ? <HiOutlineArrowPath className="animate-spin" /> : "Search Result"}
                    </button>
                </form>
                {error && <p className="mt-4 text-center text-red-500 text-xs font-bold uppercase tracking-wider">{error}</p>}
            </div>

            {/* RESULT VIEWER */}
            <AnimatePresence>
                {result && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-5xl mx-auto px-6 mt-12 print:mt-0"
                    >
                        <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden print:border-none print:shadow-none">

                            {/* MARKSHEET BANNER */}
                            <div className="bg-slate-50 px-8 md:px-12 py-10 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                                <div className="text-center md:text-left">
                                    <h2 className="text-2xl font-serif font-bold text-slate-900 uppercase tracking-tight">Provisional Marksheet</h2>
                                    <p className="text-brand-primary font-bold text-xs uppercase tracking-[0.2em] mt-1">Session {result.year}</p>
                                </div>
                                <button
                                    onClick={() => window.print()}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all print:hidden shadow-sm"
                                >
                                    <HiOutlinePrinter /> Print Original
                                </button>
                            </div>

                            {/* STUDENT IDENTITY SECTION */}
                            <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-white">
                                <IdentityBox label="Student Name" value={result.studentName} icon={<HiOutlineUser />} />
                                <IdentityBox label="Father's Name" value={result.fatherName} icon={<HiOutlineUser />} />
                                <IdentityBox label="Mother's Name" value={result.motherName} icon={<HiOutlineHeart />} />
                                <IdentityBox label="Roll Number" value={result.rollNo} icon={<HiOutlineDocumentText />} />
                                <div className="lg:col-span-2">
                                    <IdentityBox label="Enrollment Number" value={result.enrollmentNo} icon={<HiOutlineCheckBadge />} />
                                </div>
                                <div className="lg:col-span-2">
                                    <IdentityBox label="Institution" value={result.instituteName} icon={<HiOutlineBuildingLibrary />} />
                                </div>
                            </div>

                            {/* SUBJECTS TABLE */}
                            <div className="px-8 md:px-12 pb-12">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b border-slate-100 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                                <th className="py-4 px-2">Subject Name</th>
                                                <th className="py-4 text-center">Max Marks</th>
                                                <th className="py-4 text-right">Marks Obtained</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50">
                                            {result.subjects.map((sub, i) => (
                                                <tr key={i} className="text-slate-700">
                                                    <td className="py-4 px-2 font-bold text-slate-800">{sub.name}</td>
                                                    <td className="py-4 text-center font-mono text-slate-400">{sub.totalMarks}</td>
                                                    <td className="py-4 text-right font-black text-slate-900">{sub.marksObtained}</td>
                                                </tr>
                                            ))}
                                            {/* AGGREGATE ROW */}
                                            <tr className="bg-slate-900 text-white rounded-xl">
                                                <td className="py-6 px-6 font-bold uppercase tracking-widest text-xs">Grand Total Aggregate</td>
                                                <td className="py-6 text-center font-bold font-mono">{result.totalMax}</td>
                                                <td className="py-6 px-6 text-right font-black text-2xl text-brand-primary">{result.obtainedMarks}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* FINAL ANALYTICS */}
                                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Percentage</p>
                                        <p className="text-2xl font-black text-slate-800">{result.percentage}%</p>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Final Grade</p>
                                        <p className="text-2xl font-black text-slate-800">{result.grade || "N/A"}</p>
                                    </div>
                                    <div className={`p-6 rounded-2xl border text-center ${result.status === 'Pass' ? 'bg-green-50 border-green-100 text-green-700' : 'bg-red-50 border-red-100 text-red-700'}`}>
                                        <p className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60">Status</p>
                                        <p className="text-2xl font-black uppercase">{result.status}</p>
                                    </div>
                                </div>
                            </div>

                            {/* FOOTER */}
                            <div className="p-8 bg-slate-50/50 border-t border-slate-100 text-center">
                                <p className="text-[9px] text-slate-400 uppercase tracking-[0.3em] font-medium leading-loose">
                                    This statement is issued for immediate information to the candidate. <br />
                                    Original Marksheets are issued by the Board of Examination, Tanzeem-ul-Madaris.
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
    <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 shrink-0 border border-slate-100">
            {React.cloneElement(icon, { size: 18 })}
        </div>
        <div className="overflow-hidden">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
            <p className="text-slate-800 font-bold truncate text-sm md:text-base leading-tight">{value}</p>
        </div>
    </div>
);