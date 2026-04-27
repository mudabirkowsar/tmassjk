'use client';
import "../../globals.css";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HiOutlineLockClosed,
    HiOutlineUser,
    HiOutlineShieldCheck,
    HiOutlineEye,
    HiOutlineEyeSlash,
    HiOutlineArrowRight,
    HiOutlineExclamationCircle
} from "react-icons/hi2";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import UserAPI from '../../apis/UserAPI';

function AdminLoginPage() {
    const router = useRouter();
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // Redirect if already logged in
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            router.push('/admin');
        }
    }, [router]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const data = await UserAPI.loginAdmin({ identifier, password });

            if (data.token) {
                // Store authentication data
                localStorage.setItem('token', data.token);
                localStorage.setItem('admin_user', JSON.stringify({
                    name: data.name,
                    email: data.email,
                    role: 'admin'
                }));

                // Smooth redirect
                router.replace('/admin'); 
            } else {
                setError("Unexpected response from server.");
            }
        } catch (err) {
            // err is the Error object thrown from UserAPI
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#f8f9fa] flex items-center justify-center p-6 font-sans">
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]"></div>
                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[120px]"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 w-full max-w-md"
            >
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm border border-slate-100 mb-4">
                        <HiOutlineShieldCheck className="text-blue-600 text-3xl" />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-serif text-slate-900 font-bold">Admin Portal</h1>
                    <p className="text-slate-500 text-sm mt-2 font-medium uppercase tracking-widest">
                        Tanzeem-ul-Madaris J&K
                    </p>
                </div>

                <AnimatePresence mode="wait">
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mb-6 bg-red-50 border border-red-100 p-4 rounded-2xl flex items-center gap-3 text-red-600 text-sm font-medium"
                        >
                            <HiOutlineExclamationCircle className="shrink-0 text-xl" />
                            {error}
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="bg-white rounded-[32px] shadow-2xl shadow-slate-200/60 p-8 md:p-10 border border-slate-100">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-slate-700 text-xs font-bold uppercase tracking-widest mb-2 ml-1">
                                Email or Phone Number
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                                    <HiOutlineUser size={20} />
                                </div>
                                <input
                                    type="text"
                                    required
                                    value={identifier}
                                    onChange={(e) => setIdentifier(e.target.value)}
                                    placeholder="admin@example.com"
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2 ml-1">
                                <label className="block text-slate-700 text-xs font-bold uppercase tracking-widest">
                                    Access Password
                                </label>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                                    <HiOutlineLockClosed size={20} />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
                                >
                                    {showPassword ? <HiOutlineEyeSlash size={20} /> : <HiOutlineEye size={20} />}
                                </button>
                            </div>
                        </div>

                        <button
                            disabled={isLoading}
                            type="submit"
                            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    Secure Login <HiOutlineArrowRight />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-slate-50">
                        <div className="flex items-center gap-3 text-slate-400">
                            <HiOutlineShieldCheck className="shrink-0" />
                            <p className="text-[10px] leading-relaxed italic">
                                Restricted administrative system. Unauthorized access is monitored.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link href="/" className="text-slate-400 text-sm hover:text-blue-600 transition-colors font-medium">
                        ← Back to Public Website
                    </Link>
                </div>
            </motion.div>
        </main>
    );
}

export default AdminLoginPage;