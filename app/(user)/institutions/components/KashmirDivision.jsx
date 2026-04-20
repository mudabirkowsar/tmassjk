import React from 'react';
import { HiOutlineArrowRight } from "react-icons/hi2";

const kashmirData = [
    { name: "Kashmir University", location: "Srinagar", district: "Srinagar", type: "University" },
    { name: "IUST Awantipora", location: "Awantipora", district: "Pulwama", type: "University" },
    { name: "Darul Uloom Haganiya Soibugh", location: "Soibugh", district: "Budgam", type: "Madrasa" },
    { name: "Darul-Uloom Qurieshi Sheeri", location: "Sheeri", district: "Baramulla", type: "Madrasa" },
    { name: "Markazul-Mariful Islamia Zadder", location: "Zadder", district: "Anantnag", type: "Madrasa" },
    { name: "Darul-ULoom Noor-Irfan Guree", location: "Bijbehara", district: "Anantnag", type: "Madrasa" },
    { name: "Darul-ULoom Jamia Sabriya Kanzul-Iman", location: "Zoowra", district: "Shopian", type: "Madrasa" },
    { name: "Darul-Uloom Shah Wali-ullah", location: "Dardipora", district: "Kupwara", type: "Madrasa" },
    { name: "Darul-Uloom-Noor-e-Anwar", location: "Phalgam", district: "Anantnag", type: "Madrasa" },
    { name: "Madrasa/D Usman-zi-Noorian", location: "Parigam", district: "Pulwama", type: "Madrasa" },
    { name: "Shiekh-ul-Alam Hanfiya Madrasa", location: "Guree Bijbehara", district: "Anantnag", type: "Madrasa" },
    { name: "Madrasa Gousul Qadirya Rizvi", location: "Khanbal", district: "Anantnag", type: "Madrasa" },
    { name: "Madrasa Syed Ahmad Roomi", location: "Veeri", district: "Anantnag", type: "Madrasa" },
    { name: "Darul-Uloom Sultanul Arifeen", location: "Trichal", district: "Pulwama", type: "Madrasa" },
    { name: "Darul-Uloom Faizain-Madina Arwah", location: "Beerwah", district: "Budgam", type: "Madrasa" },
    { name: "Madrasa Chaar Sadnat Qasbiyar", location: "Pulwama", district: "Pulwama", type: "Madrasa" },
    { name: "Madrasa Bazem-e Mohammida", location: "Mirgund", district: "Anantnag", type: "Madrasa" },
    { name: "Darul-Uloom-Hanfiaya Karimiya", location: "Yaripora", district: "Kulgam", type: "Madrasa" },
    { name: "Markaza Idra Rooma Reshi", location: "Rahmoo", district: "Pulwama", type: "Madrasa" },
    { name: "Darul-Uloom Hanfiya Bukhariya", location: "Alamgung", district: "Shopian", type: "Madrasa" },
    { name: "Jamia Hidayatul Banat", location: "Kralhar Kansipora", district: "Baramulla", type: "Madrasa" },
    { name: "Siraj ul-Ilm Institute Of Maturidi Theology", location: "Kurigam", district: "Anantnag", type: "Academy" },
    { name: "Darul Uloom Hazrat Almadar-e-Kashmir", location: "Buchan Shangus", district: "Anantnag", type: "Madrasa" },
    { name: "Madrasa Kanzul Eimaan", location: "Rakhi Brah", district: "Anantnag", type: "Madrasa" }
];

export default function KashmirDivision({ searchTerm }) {
    const filtered = kashmirData.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.district.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full overflow-x-auto no-scrollbar">
            <table className="w-full border-collapse text-left">
                <thead>
                    <tr className="border-b border-slate-200">
                        <th className="py-4 px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 w-16">#</th>
                        <th className="py-4 px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Institution Name</th>
                        <th className="py-4 px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hidden md:table-cell">Location</th>
                        <th className="py-4 px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">District</th>
                        <th className="py-4 px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hidden lg:table-cell">Category</th>
                        <th className="py-4 px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {filtered.map((item, index) => (
                        <tr key={index} className="group hover:bg-slate-50/80 transition-colors cursor-pointer">
                            <td className="py-6 px-4 font-mono text-sm text-slate-400 group-hover:text-brand-primary transition-colors">
                                {(index + 1).toString().padStart(2, '0')}
                            </td>
                            <td className="py-6 px-4">
                                <div className="flex flex-col">
                                    <span className="text-base md:text-lg font-serif font-bold text-slate-800 group-hover:text-brand-primary transition-colors leading-tight">
                                        {item.name}
                                    </span>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase mt-1 md:hidden">
                                        {item.location}
                                    </span>
                                </div>
                            </td>
                            <td className="py-6 px-4 text-sm text-slate-600 font-medium hidden md:table-cell">
                                {item.location}
                            </td>
                            <td className="py-6 px-4">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-1 rounded">
                                    {item.district}
                                </span>
                            </td>
                            <td className="py-6 px-4 hidden lg:table-cell">
                                <span className="text-[10px] font-black text-brand-primary/60 uppercase tracking-widest">
                                    {item.type}
                                </span>
                            </td>
                            <td className="py-6 px-4 text-right">
                                <button className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-brand-primary transition-all">
                                    <span className="hidden md:inline">Details</span>
                                    <HiOutlineArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {filtered.length === 0 && (
                <div className="py-20 text-center text-slate-400 font-serif italic">
                    No records found matching your search.
                </div>
            )}
        </div>
    );
}