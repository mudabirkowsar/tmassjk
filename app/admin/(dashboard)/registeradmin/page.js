"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
    HiOutlineUser, 
    HiOutlineEnvelope, 
    HiOutlinePhone, 
    HiOutlineLockClosed, 
    HiOutlineShieldCheck,
    HiOutlineArrowRight,
    HiOutlineEye,
    HiOutlineEyeSlash
} from "react-icons/hi2";
import UserAPI from '../../../apis/UserAPI';

export default function AdminRegistration() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            return alert("Passwords do not match!");
        }

        setLoading(true);
        try {
            const response = await UserAPI.registerAdmin({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                password: formData.password
            });

            if (response.success) {
                alert("Admin Registered Successfully!");
                router.push('/admin/login');
            }
        } catch (error) {
            alert(error.message || "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6 font-sans">
            <div className="max-w-4xl w-full grid md:grid-cols-2 bg-white rounded-[40px] shadow-2xl shadow-slate-200 overflow-hidden border border-slate-100">
                
                {/* --- LEFT SIDE: INFO --- */}
                <div className="bg-slate-900 p-10 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-primary/20">
                            <HiOutlineShieldCheck size={28} className="text-white" />
                        </div>
                        <h1 className="text-4xl font-serif font-bold mb-6 leading-tight">
                            Create <span className="italic text-brand-primary">Administrative</span> Account
                        </h1>
                        <p className="text-slate-400 text-sm leading-relaxed font-light max-w-xs">
                            Access the central registry to manage institutions, verify students, and update the legacy archive.
                        </p>
                    </div>
                    
                    <div className="relative z-10 pt-12 border-t border-white/10 mt-12">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                            Tanzeem-ul-Madaris Ahle Sunnat Sufi J&K
                        </p>
                    </div>

                    {/* Decorative Shape */}
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"></div>
                </div>

                {/* --- RIGHT SIDE: FORM --- */}
                <div className="p-10 md:p-16">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <InputGroup 
                            label="Full Name" 
                            name="name" 
                            type="text" 
                            placeholder="Maulana Azad" 
                            icon={<HiOutlineUser />} 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                        
                        <InputGroup 
                            label="Email Address" 
                            name="email" 
                            type="email" 
                            placeholder="admin@tanzeem.org" 
                            icon={<HiOutlineEnvelope />} 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />

                        <InputGroup 
                            label="Phone Number" 
                            name="phone" 
                            type="tel" 
                            placeholder="+91 9906XXXXXX" 
                            icon={<HiOutlinePhone />} 
                            value={formData.phone} 
                            onChange={handleChange} 
                            required 
                        />

                        <div className="relative">
                            <InputGroup 
                                label="Access Password" 
                                name="password" 
                                type={showPassword ? "text" : "password"} 
                                placeholder="••••••••" 
                                icon={<HiOutlineLockClosed />} 
                                value={formData.password} 
                                onChange={handleChange} 
                                required 
                            />
                            <button 
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 bottom-4 text-slate-300 hover:text-brand-primary transition-colors"
                            >
                                {showPassword ? <HiOutlineEyeSlash size={18} /> : <HiOutlineEye size={18} />}
                            </button>
                        </div>

                        <InputGroup 
                            label="Confirm Password" 
                            name="confirmPassword" 
                            type="password" 
                            placeholder="••••••••" 
                            icon={<HiOutlineLockClosed />} 
                            value={formData.confirmPassword} 
                            onChange={handleChange} 
                            required 
                        />

                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl shadow-slate-200 mt-8 disabled:opacity-50"
                        >
                            {loading ? "Authorizing..." : "Register Account"}
                            {!loading && <HiOutlineArrowRight />}
                        </button>

                    </form>
                </div>
            </div>
        </main>
    );
}

/* --- HELPER INPUT COMPONENT --- */
const InputGroup = ({ label, icon, ...props }) => (
    <div className="space-y-1.5">
        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">{label}</label>
        <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand-primary transition-colors">
                {icon}
            </div>
            <input 
                {...props} 
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm outline-none focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all text-slate-700 font-medium"
            />
        </div>
    </div>
);