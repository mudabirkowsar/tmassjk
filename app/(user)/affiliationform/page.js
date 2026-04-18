'use client';

import React, { useState } from 'react';
import { 
  HiOutlineBuildingLibrary, 
  HiOutlineUser, 
  HiOutlineMapPin, 
  HiOutlineCheckCircle,
  HiOutlineDocumentCheck,
  HiOutlineChevronRight,
  HiOutlineChevronLeft
} from "react-icons/hi2";

function AffiliationPortal() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <section className="bg-brand-background min-h-screen py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12 md:mb-20">
          <span className="text-brand-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Official Application</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#1e293b] mb-4 leading-tight">
            Institutional <span className="italic text-brand-primary">Affiliation</span>
          </h1>
          <p className="text-brand-gray text-lg opacity-70">Begin your journey toward standardized academic excellence.</p>
        </div>

        {/* --- PROGRESS INDICATOR --- */}
        <div className="flex items-center justify-between mb-12 relative max-w-md mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          <div 
            className="absolute top-1/2 left-0 h-0.5 bg-brand-primary -translate-y-1/2 transition-all duration-500 z-0" 
            style={{ width: `${(step - 1) * 50}%` }}
          ></div>
          
          {[1, 2, 3].map((num) => (
            <div key={num} className="relative z-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                step >= num ? 'bg-brand-primary text-white scale-110 shadow-lg' : 'bg-white text-gray-400 border border-gray-200'
              }`}>
                {step > num ? <HiOutlineCheckCircle size={20} /> : num}
              </div>
              <span className={`absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] uppercase font-bold tracking-widest whitespace-nowrap ${
                step >= num ? 'text-brand-primary' : 'text-gray-400'
              }`}>
                {num === 1 ? 'Identity' : num === 2 ? 'Leadership' : 'Verification'}
              </span>
            </div>
          ))}
        </div>

        {/* --- FORM CARD --- */}
        <div className="bg-white rounded-[40px] shadow-2xl shadow-black/[0.02] border border-gray-100 overflow-hidden mt-16">
          <div className="p-8 md:p-16">
            
            {/* STEP 1: INSTITUTIONAL IDENTITY */}
            {step === 1 && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#1e293b] uppercase tracking-widest ml-1">Institution Name</label>
                    <input type="text" placeholder="Official Name" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#1e293b] uppercase tracking-widest ml-1">Institution Type</label>
                    <select className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-primary/20 outline-none appearance-none">
                      <option>Madrasa (Religious)</option>
                      <option>Primary School</option>
                      <option>High School</option>
                      <option>Post-Graduate College</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#1e293b] uppercase tracking-widest ml-1">District</label>
                    <select className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-primary/20 outline-none appearance-none">
                      <option>Srinagar</option>
                      <option>Jammu</option>
                      <option>Anantnag</option>
                      <option>Baramulla</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#1e293b] uppercase tracking-widest ml-1">Year of Establishment</label>
                    <input type="number" placeholder="YYYY" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-primary/20 outline-none" />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: LEADERSHIP & CONTACT */}
            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#1e293b] uppercase tracking-widest ml-1">Principal Name</label>
                    <input type="text" placeholder="Full Legal Name" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-primary/20 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#1e293b] uppercase tracking-widest ml-1">Contact Phone</label>
                    <input type="tel" placeholder="+91 00000 00000" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-primary/20 outline-none" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-[#1e293b] uppercase tracking-widest ml-1">Official Email Address</label>
                    <input type="email" placeholder="principal@institute.com" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-primary/20 outline-none" />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: INFRASTRUCTURE & SUBMIT */}
            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <p className="text-sm font-medium text-brand-gray mb-6">Please verify that your institution currently maintains the following facilities:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Dedicated Library', 'Computer Lab Access', 'Standard Classrooms', 'Safe Drinking Water', 'Separate Restrooms', 'Emergency Exit Plan'].map((item) => (
                    <label key={item} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl cursor-pointer hover:bg-brand-primary/5 transition-colors border border-transparent hover:border-brand-primary/10">
                      <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-brand-primary focus:ring-brand-primary" />
                      <span className="text-sm font-bold text-[#1e293b]">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* --- NAVIGATION BUTTONS --- */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
              {step > 1 ? (
                <button onClick={prevStep} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gray hover:text-brand-primary transition-colors">
                  <HiOutlineChevronLeft /> Previous Step
                </button>
              ) : <div></div>}

              {step < 3 ? (
                <button onClick={nextStep} className="bg-brand-primary text-white px-10 py-4 rounded-2xl font-bold text-sm shadow-xl shadow-brand-primary/20 hover:bg-brand-secondary transition-all flex items-center gap-2">
                  Next Phase <HiOutlineChevronRight />
                </button>
              ) : (
                <button className="bg-brand-primary text-white px-12 py-4 rounded-2xl font-bold text-sm shadow-xl shadow-brand-primary/20 hover:bg-brand-secondary transition-all flex items-center gap-2">
                  Final Submission <HiOutlineDocumentCheck size={20} />
                </button>
              )}
            </div>

          </div>
        </div>

        {/* --- SUPPORT INFO --- */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                <HiOutlineBuildingLibrary className="text-brand-primary" /> Verified Board Member
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                <HiOutlineMapPin className="text-brand-primary" /> Jammu & Kashmir Jurisdiction
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                <HiOutlineUser className="text-brand-primary" /> Data Secure & Confidential
            </div>
        </div>

      </div>
    </section>
  );
}

export default AffiliationPortal;