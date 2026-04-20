import React from 'react';
import { HiOutlineBookOpen, HiOutlineDocumentText, HiOutlineAcademicCap } from "react-icons/hi2";
import { PiBooksThin, PiScrollThin } from "react-icons/pi";

const syllabusData = [
    // --- PRIMARY PRESCRIBED BOOKS ---
    { 
        author: "Moulana Mohammad Ashraf", 
        work: "Rah e Irfan", 
        type: "Prescribed Textbook", 
        isSyllabus: true, 
        university: "Kashmir University" 
    },
    { 
        author: "Moulana Mohammad Ashraf", 
        work: "Jam e Irfan", 
        type: "Secondary Core Text", 
        isSyllabus: false 
    },
    // --- CLASSICAL SCHOLARS ---
    { author: "Ali Hijri", work: "Kashful Mahjoob", type: "Core Literature" },
    { author: "Imam Gazali", work: "Kemyah-e-Sadat / Ihya Ulum-id-Deen", type: "Philosophy & Ethics" },
    { author: "Ibne Arabi", work: "Fusus-ul-Hikam", type: "Metaphysics" },
    { author: "Molana Roomi", work: "Masnavi Sharif", type: "Poetic Wisdom" },
    { author: "Suharwardy", work: "Awariful Ma'arif", type: "Tasawwuf" },
    { author: "Junayad Baghdadi", work: "The Concept of Sobriety", type: "Theological Doctrine" },
    { author: "Khawaja Moin-ud-din Chisti", work: "Life & Role (Biography)", type: "Historical Study" },
    { author: "Shiekh Bahauddin Naqasbandi", work: "Life & Role (Biography)", type: "Historical Study" },
    { author: "Sheikh-ul-Aalam", work: "Kashmiri Poetry (Shruks)", type: "Local Literature" },
    { author: "Hazrat Amir-e-Kabir", work: "Behejatul-Asrar", type: "Spiritual Treatise" },
    { author: "Annemerie Schimmel", work: "The Wings of Gabriel", type: "Modern Research" },
    { author: "Imam Ahmad Raza", work: "Raza Movement / Al-Hujattul-Muntahima", type: "Contemporary Thought" },
    { author: "Sheikh Syed Abdul Qadir Jeelani", work: "Bahjatul-Asrar / Guniyat-ul-Talibeen", type: "Core Sufism" },
    { author: "Shiekh Hamza Magdoomi", work: "Bhajatul Arifeen", type: "Regional History" },
    { author: "Prof. Nicholson", work: "Gabriel's Wings (Commentary)", type: "Academic Translation" },
    { author: "Lala Arifa", work: "Mystic Poetry (Vaakhs)", type: "Regional Wisdom" },
    { author: "Shah Asrar", work: "Role and Life / Biography", type: "Biographical" },
    { author: "Baba Ghulam Shah Badshah", work: "Role and Life / Biography", type: "Biographical" },
    { author: "G-Shaib", work: "Biography", type: "Biographical" }
];

export default function Syllabus({ searchTerm }) {
    const filtered = syllabusData.filter(item => 
        item.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.work.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-12">
            
            {/* --- MAIN SYLLABUS TABLE --- */}
            <div className="w-full">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                    <div className="flex items-center gap-3 text-brand-primary">
                        <PiBooksThin className="text-2xl" />
                        <h2 className="text-xs font-black uppercase tracking-[0.3em]">Sufism & Tasawwuf Curriculum</h2>
                    </div>
                </div>

                <div className="overflow-x-auto no-scrollbar border border-slate-100 rounded-lg bg-white shadow-sm">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-100">
                                <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-slate-400 w-16">No.</th>
                                <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Literature / Work</th>
                                <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Scholar / Author</th>
                                <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-slate-400 hidden lg:table-cell">Status</th>
                                <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Access</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {filtered.map((item, index) => (
                                <tr key={index} className={`group transition-colors ${item.isSyllabus ? 'bg-brand-primary/[0.04]' : 'hover:bg-brand-primary/[0.02]'}`}>
                                    <td className="py-5 px-6 font-mono text-xs text-slate-300 group-hover:text-brand-primary font-bold">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </td>
                                    <td className="py-5 px-6">
                                        <div className="flex flex-col">
                                            <span className="text-base font-serif font-bold text-slate-800 group-hover:text-brand-primary transition-colors leading-tight">
                                                {item.work}
                                            </span>
                                            {item.university && (
                                                <div className="flex items-center gap-1 mt-1 text-[9px] font-bold text-brand-primary uppercase tracking-widest">
                                                    <HiOutlineAcademicCap size={12} />
                                                    {item.university} Syllabus
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                    <td className="py-5 px-6 italic text-slate-600 font-medium text-sm">
                                        {item.author}
                                    </td>
                                    <td className="py-5 px-6 hidden lg:table-cell">
                                        <span className={`text-[9px] font-bold px-2 py-1 rounded uppercase tracking-tighter ${item.isSyllabus ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                                            {item.type}
                                        </span>
                                    </td>
                                    <td className="py-5 px-6 text-right">
                                        <button className="text-[9px] font-black uppercase tracking-widest text-brand-primary border border-brand-primary/20 px-3 py-1.5 rounded hover:bg-brand-primary hover:text-white transition-all">
                                            Digital Copy
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* --- ACHIEVEMENTS SECTION --- */}
            <div className="bg-brand-primary/[0.03] border-l-4 border-brand-primary p-8 md:p-12 rounded-r-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 p-4 opacity-5 translate-x-1/4 -translate-y-1/4">
                    <PiScrollThin size={200} />
                </div>
                
                <div className="relative z-10">
                    <div className="flex items-center gap-2 text-brand-primary mb-4">
                        <span className="h-px w-8 bg-brand-primary"></span>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Historical Milestone</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 max-w-2xl">
                        Achievements of Sufi Organisation led by <span className="italic text-brand-primary">Moulana Mohammad Ashraf Sb Qibla</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-600 leading-relaxed font-medium">
                        <p>
                            Through the visionary leadership of Moulana Mohammad Ashraf, core Sufism texts like <span className="text-brand-primary font-bold italic">Rah e Irfan</span> have been successfully integrated into the formal syllabus of <span className="font-bold">Kashmir University</span>.
                        </p>
                        <p>
                            This organization continues to publish foundational works such as <span className="text-brand-primary font-bold italic">Jam e Irfan</span>, bridging the gap between historical Tasawwuf and modern academic scholarship.
                        </p>
                    </div>
                    <button className="mt-8 flex items-center gap-3 text-xs font-black uppercase tracking-widest bg-brand-primary text-white px-6 py-3 rounded hover:shadow-lg transition-all">
                        <HiOutlineDocumentText size={18} />
                        View Full Achievement Ledger
                    </button>
                </div>
            </div>
        </div>
    );
}