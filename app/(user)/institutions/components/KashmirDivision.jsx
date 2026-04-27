import React, { useState, useEffect } from 'react';
import { HiOutlineArrowRight } from "react-icons/hi2";
import { Data } from '../../../assets/unidata';
import axios from 'axios';
import UserAPI from '../../../apis/UserAPI';

export default function KashmirDivision({ searchTerm }) {
    const [dynamicData, setDynamicData] = useState([]);

    // List of districts belonging to Kashmir Division
    const kashmirDistricts = [
        'Srinagar', 'Anantnag', 'Baramulla', 'Budgam', 'Pulwama', 
        'Kupwara', 'Shopian', 'Ganderbal', 'Kulgam', 'Bandipora'
    ];

    useEffect(() => {
        const fetchVerified = async () => {
            try {
                const response = await UserAPI.getVerifiedAffiliations();
                if (response?.success) {
                    // Filter and transform dynamic data
                    const onlyKashmir = response.data
                        .filter(item => kashmirDistricts.includes(item.district))
                        .map(item => ({
                            name: item.instituteName,
                            location: item.fullAddress,
                            district: item.district,
                            type: item.instituteType,
                            division: "Kashmir" 
                        }));
                    setDynamicData(onlyKashmir);
                }
            } catch (error) {
                console.error("Error fetching verified affiliations:", error);
            }
        };
        fetchVerified();
    }, []);

    // Merge static Data with dynamic backend data
    const combinedData = [...Data, ...dynamicData];

    const filtered = combinedData.filter(item =>
        item.division === "Kashmir" &&
        (
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.district.toLowerCase().includes(searchTerm.toLowerCase())
        )
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