import React from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  GraduationCap, 
  School, 
  ArrowRight, 
  History,
  Award
} from 'lucide-react';

const OurMission = () => {
  return (
    <section className="bg-brand-background py-20 px-4 md:px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION 1: THE NARRATIVE (History & Mission) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          
          {/* Left Side: Large Heading & Label */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-brand-primary"></span>
              <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">Established 2011</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a2e26] leading-tight mb-8">
              A Visionary Movement for <br />
              <span className="italic text-brand-primary">Transformation.</span>
            </h2>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hidden lg:block">
               <img 
                src="https://as1.ftcdn.net/jpg/05/67/94/86/1000_F_567948625_rWnzSw4xyiuBHsyfNfcQy3Ztr1nkpv9J.webp" 
                alt="Landscape of Kashmir" 
                className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e26]/60 to-transparent"></div>
            </div>
          </div>

          {/* Right Side: Detailed Text */}
          <div className="lg:col-span-7 lg:pl-8">
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-brand-primary">
                At the level of Jammu and Kashmir, no Ahle Sunnat organization had previously been established with the objective of promoting the teachings of Sufism through a structured system of education that combined religious, intellectual, and modern sciences.
              </p>
              <p>
                Recognizing this critical gap, <span className="font-bold text-[#1a2e26] border-b-2 border-[#b38b59]/30">Maulvi Ashraf Gauri</span> initiated a visionary movement around 2011–2012. He sought to create a bridge between the sacred traditions of the past and the academic requirements of the modern era.
              </p>
              <div className="bg-white p-8 rounded-xl border-l-4 border-brand-primary shadow-sm my-8">
                <h4 className="text-brand-primary font-bold mb-3 uppercase text-sm tracking-wide">Distinguished Foundational Personalities</h4>
                <p className="text-sm md:text-base italic">
                  Joined by <span className="font-semibold">Maulana Mushtaq Ahmad Khan</span> (Anantnag), 
                  <span className="font-semibold"> Asadullah Misbahi</span>, 
                  <span className="font-semibold"> Pir Syed Hamidullah Haqqani</span>, and 
                  <span className="font-semibold"> Mufti Aslam Misbahi</span> (Jammu).
                </p>
              </div>
              <p>
                Together, they laid the foundation for a transformative educational movement, ensuring that madrasas, colleges, and universities could coexist in a unified, standardized framework.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-brand-primary font-bold group mt-4">
                View Full Movement Timeline 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* --- SECTION 2: THE IMPACT (Statistics) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Madrasas */}
          <div className="bg-[#1a2e26] p-10 rounded-3xl text-white relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 shadow-xl">
            <div className="relative z-10">
              <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mb-12 group-hover:scale-110 transition-transform">
                <School className="w-7 h-7 text-brand-primary" />
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-serif font-bold">49</span>
                    <span className="text-brand-primary text-3xl font-bold">+</span>
                </div>
              <h3 className="text-xl font-bold mb-4">Madrasas Registered</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Successfully registered with NIOS (National Institute of Open Schooling) during 2017-18, standardizing religious frameworks.
              </p>
            </div>
            {/* Aesthetic Background Shape */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-[#b38b59]/20 transition-colors"></div>
          </div>

          {/* Card 2: Universities */}
          <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="bg-[#1a2e26]/5 w-14 h-14 rounded-xl flex items-center justify-center mb-12 group-hover:bg-[#1a2e26] transition-colors">
                <GraduationCap className="w-7 h-7 text-[#1a2e26] group-hover:text-white transition-colors" />
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-serif font-bold text-[#1a2e26]">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1a2e26]">Partner Universities</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sufi syllabus introduced in <span className="font-semibold">Kashmir University, BGSBU,</span> and <span className="font-semibold">IUST Awantipora</span> to bridge academia.
              </p>
            </div>
          </div>

          {/* Card 3: Colleges */}
          <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="bg-brand-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-12 group-hover:bg-brand-primary transition-colors">
                <BookOpen className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" />
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-serif font-bold text-[#1a2e26]">40</span>
                <span className="text-brand-primary text-3xl font-bold">+</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1a2e26]">Affiliated Colleges</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Teachings of Sufism and mysticism incorporated into college curricula across the entirety of Jammu & Kashmir.
              </p>
            </div>
          </div>

        </div>

        {/* --- BOTTOM CTA: Modern Standards --- */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 bg-white rounded-[32px] border border-gray-100 shadow-sm">
            <div className="flex items-center gap-6 mb-6 md:mb-0">
                <div className="hidden sm:flex bg-[#b38b59]/10 p-4 rounded-full">
                    <Award className="text-brand-primary w-8 h-8" />
                </div>
                <div>
                    <h4 className="text-xl font-bold text-[#1a2e26]">Standardizing Education</h4>
                    <p className="text-gray-500">Meeting modern academic requirements for a pressing necessity.</p>
                </div>
            </div>
            <Link href="/curriculum" className="w-full md:w-auto text-center px-8 py-4 bg-[#1a2e26] text-white rounded-xl font-bold hover:bg-[#2a4a3d] transition-colors shadow-lg shadow-[#1a2e26]/20">
                Explore Curriculum
            </Link>
        </div>

      </div>
    </section>
  );
};

export default OurMission;