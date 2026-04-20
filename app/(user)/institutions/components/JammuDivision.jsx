import React from 'react';
import { HiOutlineArrowRight } from "react-icons/hi2";

const jammuData = [
    { name: "Jamia Usmania Madrasa Bontalab Jammu", location: "Bontalab", district: "Jammu", type: "Madrasa" },
    { name: "Madrasa Taleem-ul Quran Faizan Madina", location: "Doda City", district: "Doda", type: "Madrasa" },
    { name: "Darul-Uloom-Raza-E-Mustafa Al-Mandi", location: "Mandi", district: "Poonch", type: "Madrasa" },
    { name: "Darul-ULoom Gousia Nizamia Mehander", location: "Mehander", district: "Poonch", type: "Madrasa" },
    { name: "Madrasa Qadriya Bonch", location: "Bonch", district: "Poonch", type: "Madrasa" },
    { name: "Madrasa Anwar-ul-Quran", location: "Doda City", district: "Doda", type: "Madrasa" },
    { name: "Madrasa Jala-ul-Quran", location: "Doda City", district: "Doda", type: "Madrasa" },
    { name: "Jamia Raza-Ull-Mustafa Darhal", location: "Darhal", district: "Rajouri", type: "Madrasa" },
    { name: "Darul-uloom Jeelania Hussaina Islamabad", location: "Islamabad", district: "Poonch", type: "Madrasa" },
    { name: "Darul-Uloom Zia-ul Islam Loran Mandi", location: "Loran Mandi", district: "Poonch", type: "Madrasa" },
    { name: "Jamia Madina Tul-Islam Seri Chowhana", location: "Seri Chowhana", district: "Poonch", type: "Madrasa" },
    { name: "Jamia Fatima Tuz-Zehra Dingla Haveli", location: "Dingla", district: "Poonch", type: "Madrasa" },
    { name: "Madrasa Ashrafiya Noor-Ul-Islam Khanetar", location: "Khanetar", district: "Poonch", type: "Madrasa" },
    { name: "Jamia Anwarul-Uloom City Poonch", location: "City Poonch", district: "Poonch", type: "Madrasa" },
    { name: "Madrasa Moiniya Nizamia Thana Mandi", location: "Thana Mandi", district: "Rajouri", type: "Madrasa" },
    { name: "Madrasa Raza ul Islam Markazi Jamia Masjid", location: "Tehsil Mandi", district: "Poonch", type: "Madrasa" },
    { name: "Darul-Uloom Raziva Sultania Surnkote", location: "Surankote", district: "Poonch", type: "Madrasa" },
    { name: "Darul-Ulcom-Mujadid-Al-fisani Bhatandi", location: "Bhatandi", district: "Jammu", type: "Madrasa" },
    { name: "Jamia Gulshani-Fatima", location: "Rajouri City", district: "Rajouri", type: "Madrasa" },
    { name: "Jamia Mohmoodia Rahat-uloom", location: "Rajouri City", district: "Rajouri", type: "Madrasa" },
    { name: "Darul uloom Raza-e-Mustfa Markazi AlaPeer", location: "Mandi", district: "Poonch", type: "Madrasa" },
    { name: "Madrasa Zia ul Quran Trarnwali Bufliaz", location: "Surankote", district: "Poonch", type: "Madrasa" },
    { name: "Darul Uloom Riziviya Ashrafiya", location: "Rajouri City", district: "Rajouri", type: "Madrasa" },
    { name: "Madrasa Jamia Zia Ul Quran Kallar Kattal", location: "Surankote", district: "Poonch", type: "Madrasa" },
    { name: "Model institute Of Education Sanai", location: "Surankote", district: "Poonch", type: "Institute" },
    { name: "Darul uloom Payam -E- Raza Zero Mor", location: "Talwari", district: "Reasi", type: "Madrasa" },
    { name: "Jamia Raza ul Islam Markazi Jamia Masjid", location: "Teshil Mandi", district: "Poonch", type: "Madrasa" }
];

export default function JammuDivision({ searchTerm }) {
    const filtered = jammuData.filter(item => 
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