import React from 'react';
import Link from 'next/link';
import { HiOutlineSparkles, HiOutlineAcademicCap, HiOutlineEnvelope } from "react-icons/hi2";
import { PiQuotesFill, PiBookOpenLight, PiScrollLight } from "react-icons/pi";

const foundingScholars = [
  {
    name: "Maulana Mushtaq Ahmad Khan",
    location: "Anantnag",
    role: "Founding Member",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    bio: "A distinguished scholar instrumental in the initial intellectual framework of the movement in South Kashmir."
  },
  {
    name: "Asadullah Misbahi",
    location: "Srinagar",
    role: "Founding Member",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    bio: "Expert in traditional theology who helped bridge the gap between classical Madrasa learning and modern academic requirements."
  },
  {
    name: "Pir Syed Hamidullah Haqqani",
    location: "Central Kashmir",
    role: "Founding Member",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    bio: "Provided the spiritual and administrative guidance necessary to establish a region-wide educational network."
  },
  {
    name: "Mufti Aslam Misbahi",
    location: "Jammu",
    role: "Founding Member",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
    bio: "Led the movement's expansion into the Jammu region, ensuring a unified syllabus across diverse geographies."
  }
];

function FoundersPage() {
  return (
    <main className="bg-brand-background min-h-screen font-sans">
      
      {/* --- 1. HERO TITLE --- */}
      <section className="pt-24 pb-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-brand-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6">
            Architects of Vision
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#1e293b] leading-tight mb-8">
            The Founding <span className="italic text-brand-primary">Collective</span>
          </h1>
          <p className="text-brand-gray text-lg md:text-xl max-w-2xl mx-auto opacity-70 leading-relaxed">
            Established in 2011–2012, this movement was built on the collective wisdom 
            of scholars dedicated to the harmonization of the heart and the mind.
          </p>
        </div>
      </section>

      {/* --- 2. THE INITIATOR SPOTLIGHT (Maulvi Ashraf Gauri) --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="bg-white rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl shadow-black/[0.04] border border-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Image Side */}
            <div className="relative h-[500px] lg:h-auto overflow-hidden group">
              <img 
                src="/founderandother/img3.jpg" 
                alt="Maulvi Ashraf Gauri" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply"></div>
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/80 to-transparent text-white">
                 <p className="text-xs font-bold uppercase tracking-widest text-brand-card-green mb-2">Initiator & Visionary</p>
                 <h2 className="text-3xl md:text-4xl font-serif font-bold">Maulvi Ashraf Gauri</h2>
              </div>
            </div>

            {/* Narrative Side */}
            <div className="p-10 md:p-20 flex flex-col justify-center">
              <PiQuotesFill className="text-brand-primary text-5xl mb-8 opacity-20" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1e293b] mb-8 leading-snug">
                "Recognizing the gap, he initiated a visionary movement for educational transformation."
              </h3>
              <div className="space-y-6 text-brand-gray text-lg leading-relaxed opacity-90">
                <p>
                  Initiated around 2011–2012, <strong>Maulvi Ashraf Gauri</strong> envisioned a system that 
                  combined religious, intellectual, and modern sciences across Jammu & Kashmir.
                </p>
                <p>
                  His tireless efforts focused on standardizing and registering the educational 
                  framework of Madaris, aligning them with modern academic requirements.
                </p>
              </div>
              <div className="mt-10 pt-10 border-t border-gray-100 flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <PiScrollLight size={24} />
                </div>
                <p className="text-sm font-bold text-brand-primary uppercase tracking-widest">Est. 2011 Movement</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 3. THE SCHOLARS GRID --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24">
        <div className="text-center mb-20">
            <h3 className="text-3xl md:text-4xl font-serif text-[#1e293b] mb-4">Distinguished Founding Scholars</h3>
            <div className="h-1 w-20 bg-brand-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {foundingScholars.map((scholar, index) => (
            <div key={index} className="group flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
              
              {/* Scholar Image with Frame */}
              <div className="relative shrink-0">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-[40px] overflow-hidden shadow-xl group-hover:-translate-y-2 transition-transform duration-500">
                    <img 
                        src={scholar.image} 
                        alt={scholar.name} 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
                {/* Decorative Icon */}
                <div className="absolute -bottom-2 -right-2 bg-brand-primary text-white p-3 rounded-2xl shadow-lg">
                    <HiOutlineAcademicCap size={20} />
                </div>
              </div>

              {/* Scholar Details */}
              <div className="flex flex-col justify-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-2">
                    {scholar.location} — {scholar.role}
                </span>
                <h4 className="text-2xl md:text-3xl font-serif font-bold text-[#1e293b] mb-4 leading-tight">
                    {scholar.name}
                </h4>
                <p className="text-brand-gray text-base leading-relaxed opacity-70 mb-6 italic">
                    "{scholar.bio}"
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                    <button className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-brand-primary transition-colors flex items-center gap-2">
                        Biography <HiOutlineEnvelope />
                    </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* --- 4. CLOSING TRIBUTE --- */}
      <section className="bg-brand-accent py-24 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mt-32 blur-3xl"></div>
        <div className="max-w-3xl mx-auto relative z-10">
            <PiBookOpenLight className="mx-auto text-6xl mb-8 opacity-20" />
            <h3 className="text-2xl md:text-4xl font-serif italic mb-10 leading-relaxed">
                "Together, they laid the foundation for a transformative educational 
                movement in Jammu and Kashmir, aligned with the needs of the modern era."
            </h3>
            <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-white/30"></div>
                <span className="text-xs font-bold uppercase tracking-[0.3em]">United in Purpose</span>
                <div className="h-px w-12 bg-white/30"></div>
            </div>
        </div>
      </section>

    </main>
  );
}

export default FoundersPage;