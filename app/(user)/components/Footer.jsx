import React from 'react';
import Link from 'next/link';
// Corrected imports for HeroIcons v2 (hi2)
import {
    HiEnvelope,
    HiPhone,
    HiMapPin,
    HiArrowRight
} from "react-icons/hi2";
// Social icons from FontAwesome (fa)
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube
} from "react-icons/fa";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-primary text-white pt-16 pb-8 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* COLUMN 1: ABOUT */}
                    <div className="flex flex-col space-y-6">
                        <h2 className="text-2xl font-serif font-bold tracking-tight">
                            Ahle Sunnat <br /> <span className="text-brand-card-green opacity-90">Education Movement</span>
                        </h2>
                        <p className="text-white/70 leading-relaxed text-sm md:text-base">
                            A visionary initiative dedicated to harmonizing spiritual Sufi teachings
                            with modern academic sciences across Jammu & Kashmir since 2011.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.facebook.com/share/1BJUNHGJrf/?mibextid=wwXIfr" className="p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                <FaFacebookF size={18} />
                            </Link>
                            <Link href="https://www.facebook.com/share/1BJUNHGJrf/?mibextid=wwXIfr" className="p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                <FaTwitter size={18} />
                            </Link>
                            <Link href="https://www.instagram.com/tanzeem.ul.madaris.sufii.jk?igsh=MXBheWs0M2lscjh1ag==" className="p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                <FaInstagram size={18} />
                            </Link>
                            <Link href="#" className="p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                <FaYoutube size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* COLUMN 2: QUICK LINKS */}
                    <div className="flex flex-col space-y-6">
                        <h3 className="text-lg font-bold border-b border-white/10 pb-2">Quick Navigation</h3>
                        <ul className="space-y-4">
                            {['Home', 'Our Mission', 'Founder Biography', 'Educational Timeline', 'Our Institutions'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-white/70 hover:text-white flex items-center gap-2 group transition-all">
                                        {/* Note: HiArrowRight instead of HiOutlineArrowRight */}
                                        <HiArrowRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-accent" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 3: INSTITUTIONS */}
                    <div className="flex flex-col space-y-6">
                        <h3 className="text-lg font-bold border-b border-white/10 pb-2">Our Impact</h3>
                        <ul className="space-y-4">
                            <li className="flex flex-col">
                                <span className="text-brand-accent font-bold">49+ Madrasas</span>
                                <span className="text-xs text-white/50">NIOS Registered Framework</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="text-brand-accent font-bold">3 Universities</span>
                                <span className="text-xs text-white/50">Integrated Sufi Syllabus</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="text-brand-accent font-bold">40+ Colleges</span>
                                <span className="text-xs text-white/50">Across Jammu & Kashmir</span>
                            </li>
                        </ul>
                    </div>

                    {/* COLUMN 4: CONTACT */}
                    <div className="flex flex-col space-y-6">
                        <h3 className="text-lg font-bold border-b border-white/10 pb-2">Get In Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 text-white/70">
                                <HiMapPin size={24} className="text-brand-accent shrink-0" />
                                <p className="text-sm">Jammu & Kashmir Higher Education Board Office, Srinagar/Jammu.</p>
                            </div>
                            <div className="flex items-center gap-4 text-white/70">
                                <HiPhone size={20} className="text-brand-accent shrink-0" />
                                <p className="text-sm">+91 (194) 123-4567</p>
                            </div>
                            <div className="flex items-center gap-4 text-white/70">
                                <HiEnvelope size={20} className="text-brand-accent shrink-0" />
                                <a href="mailto:tanzeemulmadarissahlesunnatsufi@gmail.com" className="text-sm">tanzeemulmadarissahlesunnatsufi@gmail.com</a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* BOTTOM DIVIDER */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
                    <p>© {currentYear} Ahle Sunnat Education Movement. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;