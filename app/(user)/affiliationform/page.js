'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiOutlineBuildingLibrary, 
  HiOutlineUser, 
  HiOutlineMapPin, 
  HiOutlineCheckCircle,
  HiOutlineDocumentCheck,
  HiOutlineArrowRight,
  HiOutlineArrowLeft,
  HiOutlineCalendarDays,
  HiOutlineIdentification,
  HiOutlineShieldCheck
} from "react-icons/hi2";

function AffiliationPortal() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    instituteName: '',
    instituteType: 'Madrasa',
    foundationDate: '',
    registrationNo: '',
    district: 'Srinagar',
    tehsil: '',
    fullAddress: '',
    pincode: '',
    principalName: '',
    principalQual: '',
    secretaryName: '',
    contactPhone: '',
    officialEmail: '',
    totalStudents: '',
    facultyCount: '',
    syllabusType: 'Syllabus Integrated',
    bankName: '',
    accountNo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const stepsInfo = [
    { title: "Institutional Identity", desc: "Legal names and registry status" },
    { title: "Geographic Location", desc: "Physical mapping and jurisdiction" },
    { title: "Administrative Leadership", desc: "Executive board and contacts" },
    { title: "Academic Infrastructure", desc: "Enrollment and faculty metrics" },
    { title: "Legal Declaration", desc: "Compliance and affirmation" }
  ];

  const progress = (step / 5) * 100;

  return (
    <main className="bg-[#fcfcfd] min-h-screen py-12 md:py-5 font-sans text-slate-900">
      
      {/* --- BACKGROUND ACCENT --- */}
      <div className="fixed top-0 left-0 w-full h-1/2 bg-slate-900 -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- TOP BRANDING --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 text-brand-primary">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl shadow-brand-primary/20">
               <HiOutlineShieldCheck size={28} />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">Accreditation Portal</h2>
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-50">Tanzeem-ul-Madaris Ahle Sunnat Sufi J&K</p>
            </div>
          </div>
          
          {/* Circular Progress Metric */}
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
              <div className="relative w-10 h-10">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path className="stroke-white/10 fill-none" strokeWidth="3" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <motion.path 
                    className="stroke-brand-primary fill-none" 
                    strokeWidth="3" 
                    strokeDasharray={`${progress}, 100`} 
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">
                  {Math.round(progress)}%
                </div>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase opacity-50">Current Progress</p>
                <p className="text-xs font-bold">Step {step} of 5</p>
              </div>
          </div>
        </div>

        {/* --- MAIN APPLICATION CANVAS --- */}
        <div className="bg-white rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Info Panel */}
            <div className="lg:col-span-4 bg-slate-50/50 p-10 md:p-14 border-r border-slate-100">
               <span className="text-brand-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Section 0{step}</span>
               <h3 className="text-3xl font-serif text-slate-900 mb-6 leading-tight">
                  {stepsInfo[step-1].title}
               </h3>
               <p className="text-slate-500 text-sm leading-relaxed mb-10">
                  {stepsInfo[step-1].desc}. Ensure all fields marked with an asterisk match your institutional deeds.
               </p>
               
               <div className="space-y-4">
                  {stepsInfo.map((s, idx) => (
                    <div key={idx} className={`flex items-center gap-3 transition-all duration-500 ${step === idx + 1 ? 'opacity-100 translate-x-2' : 'opacity-20'}`}>
                      <div className={`w-2 h-2 rounded-full ${step === idx + 1 ? 'bg-brand-primary' : 'bg-slate-300'}`} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{s.title}</span>
                    </div>
                  ))}
               </div>
            </div>

            {/* Right Form Panel */}
            <div className="lg:col-span-8 p-10 md:p-16 lg:p-20 min-h-[600px] flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="flex-1"
                  >
                    {/* STEP 1 */}
                    {step === 1 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                        <InputGroup label="Institute Name" name="instituteName" placeholder="Full Registered Title" value={formData.instituteName} onChange={handleChange} />
                        <SelectGroup label="Institute Category" name="instituteType" value={formData.instituteType} onChange={handleChange} options={['Madrasa', 'School', 'College']} />
                        <DateGroup label="Foundation Date" name="foundationDate" value={formData.foundationDate} onChange={handleChange} />
                        <InputGroup label="Registration Number" name="registrationNo" placeholder="REG-JK-000" value={formData.registrationNo} onChange={handleChange} />
                      </div>
                    )}

                    {/* STEP 2 */}
                    {step === 2 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                        <SelectGroup label="District" name="district" value={formData.district} onChange={handleChange} options={['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Rajouri']} />
                        <InputGroup label="Tehsil" name="tehsil" placeholder="Local Tehsil" value={formData.tehsil} onChange={handleChange} />
                        <div className="md:col-span-2">
                          <InputGroup label="Complete Physical Address" name="fullAddress" placeholder="Street, landmarks, village..." value={formData.fullAddress} onChange={handleChange} />
                        </div>
                        <InputGroup label="Pincode" name="pincode" placeholder="190001" value={formData.pincode} onChange={handleChange} />
                      </div>
                    )}

                    {/* STEP 3 */}
                    {step === 3 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                        <InputGroup label="Head / Principal Name" name="principalName" placeholder="Full Legal Name" value={formData.principalName} onChange={handleChange} />
                        <InputGroup label="Highest Qualification" name="principalQual" placeholder="M.A / Fazil / PhD" value={formData.principalQual} onChange={handleChange} />
                        <InputGroup label="Phone Number" name="contactPhone" placeholder="+91" value={formData.contactPhone} onChange={handleChange} />
                        <InputGroup label="Institutional Email" name="officialEmail" placeholder="admin@domain.com" value={formData.officialEmail} onChange={handleChange} />
                      </div>
                    )}

                    {/* STEP 4 */}
                    {step === 4 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                        <InputGroup label="Student Enrollment" name="totalStudents" placeholder="Current total" value={formData.totalStudents} onChange={handleChange} />
                        <InputGroup label="Faculty Strength" name="facultyCount" placeholder="Active teachers" value={formData.facultyCount} onChange={handleChange} />
                        <InputGroup label="Primary Bank" name="bankName" placeholder="Branch name" value={formData.bankName} onChange={handleChange} />
                        <InputGroup label="Audit Account No" name="accountNo" placeholder="For transparent records" value={formData.accountNo} onChange={handleChange} />
                      </div>
                    )}

                    {/* STEP 5 */}
                    {step === 5 && (
                      <div className="space-y-6">
                        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                          <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <HiOutlineShieldCheck className="text-brand-primary" /> Affirmation Statement
                          </h4>
                          <p className="text-sm text-slate-500 leading-relaxed italic">
                            "I confirm that the institution mentioned above operates under the Sufi ethical framework 
                            and agrees to standardized audits by the Tanzeem-ul-Madaris board. All academic 
                            and financial records provided are authentic."
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           {['Physical Audit Ready', 'Staff Verified'].map(t => (
                             <div key={t} className="px-4 py-3 bg-white border border-slate-100 rounded-xl text-[10px] font-bold uppercase flex items-center gap-2">
                               <HiOutlineCheckCircle className="text-brand-primary" /> {t}
                             </div>
                           ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* --- FLOATING FOOTER NAVIGATION --- */}
                <div className="mt-20 flex items-center justify-between border-t border-slate-50 pt-10">
                   <button 
                    onClick={prevStep} 
                    disabled={step === 1}
                    className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all ${
                      step === 1 ? 'opacity-0' : 'text-slate-400 hover:text-brand-primary'
                    }`}
                   >
                     <HiOutlineArrowLeft /> Back
                   </button>

                   <div className="flex items-center gap-4">
                      <span className="hidden md:block text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                        Draft Auto-saved
                      </span>
                      {step < 5 ? (
                        <button 
                          onClick={nextStep} 
                          className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-brand-primary transition-all flex items-center gap-2 shadow-xl shadow-slate-900/10"
                        >
                          Next Section <HiOutlineArrowRight />
                        </button>
                      ) : (
                        <button className="bg-brand-primary text-white px-12 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-2 shadow-xl shadow-brand-primary/20">
                          Submit Application <HiOutlineDocumentCheck size={18} />
                        </button>
                      )}
                   </div>
                </div>
            </div>

          </div>
        </div>

        {/* --- SECURITY TAGS --- */}
        <div className="mt-12 flex justify-center gap-8 md:gap-16">
           <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-400">
             <HiOutlineIdentification className="text-brand-primary" size={16} /> Data Encryption Standard
           </div>
           <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-400">
             <HiOutlineBuildingLibrary className="text-brand-primary" size={16} /> Board Compliance 2.0
           </div>
        </div>

      </div>
    </main>
  );
}

/* --- REUSABLE COMPONENTS --- */

const InputGroup = ({ label, name, placeholder, value, onChange }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
      {label}
    </label>
    <input 
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-slate-50/50 border border-black rounded-2xl px-6 py-4 text-sm font-medium outline-none focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all placeholder:text-slate-300"
    />
  </div>
);

const SelectGroup = ({ label, name, value, onChange, options }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
      {label}
    </label>
    <div className="relative">
      <select 
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-slate-50/50 border border-black rounded-2xl px-6 py-4 text-sm font-medium outline-none focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 appearance-none cursor-pointer"
      >
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <HiOutlineArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-slate-300 pointer-events-none" />
    </div>
  </div>
);

const DateGroup = ({ label, name, value, onChange }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
      {label}
    </label>
    <div className="relative">
      <input 
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-slate-50/50 border border-black rounded-2xl px-6 py-4 text-sm font-medium outline-none focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all"
      />
      <HiOutlineCalendarDays className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
    </div>
  </div>
);

export default AffiliationPortal;