'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HiOutlineUsers,
    HiOutlineAcademicCap,
    HiOutlineDocumentCheck,
    HiOutlineQueueList,
    HiOutlineChartBar,
    HiOutlineCalendarDays,
    HiOutlineArrowLeftOnRectangle,
    HiOutlineShieldCheck,
    HiOutlineChevronRight,
    HiOutlineXMark
} from "react-icons/hi2";

const menuItems = [
    {
        name: 'Manage Institute',
        path: '/admin/institutes',
        icon: <HiOutlineAcademicCap size={22} />
    },
    {
        name: 'Manage Result',
        path: '/admin/results',
        icon: <HiOutlineDocumentCheck size={22} />
    },
    {
        name: 'Manage Events',
        path: '/admin/events',
        icon: <HiOutlineCalendarDays size={22} />
    },
    {
        name: 'Registry Gallery',
        path: '/admin/gallery',
        icon: <HiOutlineQueueList size={22} />
    },
];

function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleLogout = () => {
        // 1. Clear the token from local storage
        localStorage.removeItem('token');
        // 2. Redirect to login page
        router.push('/admin/login');
    };

    return (
        <>
            <aside
                className={`h-screen bg-white border-r border-slate-100 flex flex-col transition-all duration-300 sticky top-0 ${isCollapsed ? 'w-20' : 'w-72'
                    }`}
            >
                {/* --- LOGO SECTION --- */}
                <div className="p-6 mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-brand-primary/20">
                            <HiOutlineShieldCheck className="text-white text-2xl" />
                        </div>
                        {!isCollapsed && (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="overflow-hidden whitespace-nowrap"
                            >
                                <h2 className="text-slate-900 font-bold leading-tight">Admin Console</h2>
                                <p className="text-[10px] text-brand-primary font-bold uppercase tracking-widest">Registry Portal</p>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* --- NAVIGATION LINKS --- */}
                <nav className="flex-1 px-4 space-y-1">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link key={item.path} href={item.path}>
                                <div className={`
                                    relative flex items-center gap-4 px-3 py-3.5 rounded-xl transition-all duration-300 group
                                    ${isActive
                                        ? 'bg-brand-primary/5 text-brand-primary'
                                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                                    }
                                `}>
                                    {/* Active Indicator Bar */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute left-0 w-1 h-6 bg-brand-primary rounded-r-full"
                                        />
                                    )}

                                    <div className={`${isActive ? 'text-brand-primary' : 'text-slate-400 group-hover:text-slate-900'}`}>
                                        {item.icon}
                                    </div>

                                    {!isCollapsed && (
                                        <span className="font-bold text-sm flex-1 tracking-tight">
                                            {item.name}
                                        </span>
                                    )}

                                    {!isCollapsed && isActive && (
                                        <HiOutlineChevronRight size={14} className="opacity-50" />
                                    )}
                                </div>
                            </Link>
                        );
                    })}
                </nav>

                {/* --- BOTTOM SECTION: USER & LOGOUT --- */}
                <div className="p-4 mt-auto space-y-2">
                    <button
                        onClick={() => setShowLogoutModal(true)}
                        className={`
                            w-full flex items-center gap-4 px-3 py-3.5 rounded-xl text-red-500 hover:bg-red-50 transition-all group
                            ${isCollapsed ? 'justify-center' : ''}
                        `}
                    >
                        <HiOutlineArrowLeftOnRectangle size={22} />
                        {!isCollapsed && <span className="font-bold text-sm tracking-tight">Logout</span>}
                    </button>

                    {/* Collapse Toggle Button */}
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="w-full flex items-center justify-center py-2 text-slate-300 hover:text-slate-500 transition-colors"
                    >
                        <div className={`transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}>
                            <HiOutlineChevronRight size={20} />
                        </div>
                    </button>
                </div>
            </aside>

            {/* --- LOGOUT CONFIRMATION MODAL --- */}
            <AnimatePresence>
                {showLogoutModal && (
                    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white rounded-[32px] p-8 max-w-sm w-full shadow-2xl text-center relative overflow-hidden"
                        >
                            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <HiOutlineArrowLeftOnRectangle size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Confirm Logout</h3>
                            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                                Are you sure you want to end your session? You will need to login again to access the management portal.
                            </p>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowLogoutModal(false)}
                                    className="flex-1 px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="flex-1 px-6 py-3 bg-red-500 text-white rounded-xl font-bold text-sm shadow-lg shadow-red-200 hover:bg-red-600 transition-all"
                                >
                                    Yes, Logout
                                </button>
                            </div>
                            <button
                                onClick={() => setShowLogoutModal(false)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <HiOutlineXMark size={20} />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Sidebar;