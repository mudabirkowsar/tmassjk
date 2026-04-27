"use client";

import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is installed: npm install axios
import {
  HiOutlineBuildingLibrary,
  HiOutlineUser,
  HiOutlineMapPin,
  HiOutlineDocumentCheck,
  HiOutlineCalendarDays,
  HiOutlineIdentification,
  HiOutlineShieldCheck,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineAcademicCap,
  HiOutlineUsers,
  HiOutlineBanknotes,
  HiOutlineChevronRight,
  HiOutlineGlobeAlt,
  HiOutlineArrowPath // For loading state
} from "react-icons/hi2";

// Set your API Base URL here or in an .env file
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

function AffiliationPortal() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    instituteName: '',
    instituteType: 'Madrasa',
    foundationDate: '',
    registrationNo: '',
    division: '',
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
    accountNo: '',
    agreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/affiliation/submit`, formData);

      if (response.data.success) {
        setSubmitted(true);
        alert("Application submitted successfully!");
        // Optional: Reset form
        // setFormData({...initialState});
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert(error.response?.data?.message || "Something went wrong during submission.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-6">
        <div className="max-w-md w-full bg-white p-10 rounded-[32px] shadow-sm border border-slate-200 text-center">
          <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <HiOutlineDocumentCheck size={40} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Application Received!</h2>
          <p className="text-slate-500 mb-8">Your affiliation request for <span className="font-semibold text-slate-700">{formData.instituteName}</span> has been submitted successfully for review.</p>
          <button
            onClick={() => window.location.reload()}
            className="text-brand-primary font-bold hover:underline"
          >
            Submit another application
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#f8fafc] min-h-screen font-sans text-slate-900 pb-20">

      {/* HEADER SECTION */}
      <div className="bg-white border-b border-slate-200 pt-7 pb-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-brand-primary mb-4 px-4 py-1.5 bg-brand-primary/5 rounded-full">
            <HiOutlineShieldCheck size={20} />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Official Accreditation Portal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
            Institutional <span className="italic text-brand-primary">Affiliation</span> Form
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Please provide accurate details for the registration and formal recognition of your institution
            under the Tanzeem-ul-Madaris Ahle Sunnat Sufi J&K.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-8">
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* SECTION 1: IDENTITY */}
          <div className="bg-white rounded-[20px] shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-8 md:p-12">
              <SectionTitle
                icon={<HiOutlineBuildingLibrary className="text-brand-primary" />}
                title="Institutional Identity"
                subtitle="Primary legal and registration details"
              />
              <div className="grid md:grid-cols-2 gap-8 mt-10">
                <InputGroup icon={<HiOutlineBuildingLibrary />} label="Full Name of Institute" name="instituteName" value={formData.instituteName} onChange={handleChange} placeholder="e.g. Madrasa Noor-ul-Uloom" required />
                <SelectGroup icon={<HiOutlineIdentification />} label="Type of Institution" name="instituteType" value={formData.instituteType} onChange={handleChange} options={['Madrasa', 'School', 'College']} />
                <InputGroup icon={<HiOutlineCalendarDays />} type="date" label="Foundation Date" name="foundationDate" value={formData.foundationDate} onChange={handleChange} required />
                <InputGroup icon={<HiOutlineDocumentCheck />} label="Registration Number" name="registrationNo" value={formData.registrationNo} onChange={handleChange} placeholder="REG-123456" required />
              </div>
            </div>
          </div>

          {/* SECTION 2: GEOGRAPHY */}
          <div className="bg-white rounded-[20px] shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-8 md:p-12">
              <SectionTitle
                icon={<HiOutlineMapPin className="text-brand-primary" />}
                title="Geographic Location"
                subtitle="Physical mapping and jurisdiction details"
              />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                <SelectGroup icon={<HiOutlineGlobeAlt />} label="Division" name="division" value={formData.division} onChange={handleChange} options={['Jammu', 'Kashmir']} />
                <SelectGroup icon={<HiOutlineGlobeAlt />} label="District" name="district" value={formData.district} onChange={handleChange} options={['Srinagar', 'Anantnag', 'Baramulla', 'Jammu', 'Budgam', 'Pulwama', 'Kupwara', 'Shopian']} />
                <InputGroup label="Tehsil" name="tehsil" value={formData.tehsil} onChange={handleChange} placeholder="Enter Tehsil" />
                <InputGroup label="Pincode" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="190001" />
                <div className="md:col-span-2 lg:col-span-3">
                  <InputGroup label="Full Postal Address" name="fullAddress" value={formData.fullAddress} onChange={handleChange} placeholder="Street, Village/Town, Landmark, District, J&K" required />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: LEADERSHIP */}
          <div className="bg-white rounded-[20px] shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-8 md:p-12">
              <SectionTitle
                icon={<HiOutlineUser className="text-brand-primary" />}
                title="Leadership & Administration"
                subtitle="Executive board and contact information"
              />
              <div className="grid md:grid-cols-2 gap-8 mt-10">
                <InputGroup icon={<HiOutlineUser />} label="Principal Name" name="principalName" placeholder="Enter Principal Name" value={formData.principalName} onChange={handleChange} required />
                <InputGroup icon={<HiOutlineAcademicCap />} label="Principal Qualification" name="principalQual" placeholder="Enter Qualification" value={formData.principalQual} onChange={handleChange} />
                <InputGroup label="Secretary Name" name="secretaryName" placeholder="Enter Secretary Name" value={formData.secretaryName} onChange={handleChange} />
                <InputGroup icon={<HiOutlinePhone />} label="Contact Phone" name="contactPhone" value={formData.contactPhone} onChange={handleChange} placeholder="10-digit number" required />
                <div className="md:col-span-2">
                  <InputGroup icon={<HiOutlineEnvelope />} label="Official Email" name="officialEmail" type="email" value={formData.officialEmail} onChange={handleChange} placeholder="admin@institute.com" required />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4: ACADEMIC & FINANCIAL */}
          <div className="bg-white rounded-[20px] shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-8 md:p-12">
              <SectionTitle
                icon={<HiOutlineUsers className="text-brand-primary" />}
                title="Institutional Metrics"
                subtitle="Enrollment, Faculty, and Bank details"
              />
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                <InputGroup label="Total Students" name="totalStudents" type="number" value={formData.totalStudents} placeholder="0" onChange={handleChange} />
                <InputGroup label="Faculty Count" name="facultyCount" type="number" value={formData.facultyCount} placeholder="0" onChange={handleChange} />
                <div className="md:col-span-2">
                  <SelectGroup label="Curriculum Type" name="syllabusType" value={formData.syllabusType} onChange={handleChange} options={['Syllabus Integrated', 'Dars-e-Nizami', 'Hifz Focused']} />
                </div>
                <div className="md:col-span-2">
                  <InputGroup icon={<HiOutlineBanknotes />} label="Bank Name" name="bankName" placeholder="Bank Name" value={formData.bankName} onChange={handleChange} />
                </div>
                <div className="md:col-span-2">
                  <InputGroup label="Account Number" name="accountNo" placeholder="Account Number" value={formData.accountNo} onChange={handleChange} />
                </div>
              </div>
            </div>
          </div>

          {/* FINAL SUBMISSION */}
          <div className="bg-white rounded-[32px] shadow-sm border border-slate-200 p-8 md:p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl mb-8 text-left">
                <label className="flex gap-4 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleChange}
                    className="w-6 h-6 mt-1 accent-brand-primary shrink-0"
                  />
                  <span className="text-sm text-orange-900 leading-relaxed">
                    I, the undersigned, hereby declare that all information provided in this form is true and correct.
                    I understand that any misrepresentation may lead to the cancellation of affiliation.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={!formData.agreed || loading}
                className={`w-full md:w-auto px-12 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 mx-auto ${formData.agreed && !loading
                    ? "bg-brand-primary text-white shadow-xl shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.98]"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                  }`}
              >
                {loading ? (
                  <>Processing <HiOutlineArrowPath className="animate-spin" /></>
                ) : (
                  <>Submit Application <HiOutlineChevronRight /></>
                )}
              </button>
              <p className="text-slate-400 text-xs mt-6 uppercase tracking-[0.2em]">Verified Secure Submission</p>
            </div>
          </div>

        </form>
      </div>
    </main>
  );
}

/* HELPER COMPONENTS */

const SectionTitle = ({ icon, title, subtitle }) => (
  <div className="flex items-start gap-5">
    <div className="w-12 h-12 rounded-2xl bg-brand-primary/5 flex items-center justify-center shrink-0">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
      <p className="text-slate-500 text-sm mt-1">{subtitle}</p>
    </div>
  </div>
);

const InputGroup = ({ label, name, value, onChange, placeholder, type = "text", icon, required = false }) => (
  <div className="space-y-2.5">
    <label className="text-[11px] font-bold uppercase tracking-wider text-black ml-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative group">
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand-primary transition-colors">
          {React.cloneElement(icon, { size: 18 })}
        </div>
      )}
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full ${icon ? 'pl-12' : 'pl-5'} pr-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all text-sm placeholder:text-slate-500`}
      />
    </div>
  </div>
);

const SelectGroup = ({ label, name, value, onChange, options, icon }) => (
  <div className="space-y-2.5">
    <label className="text-[11px] font-bold uppercase tracking-wider text-black ml-1">{label}</label>
    <div className="relative group">
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand-primary transition-colors pointer-events-none">
          {React.cloneElement(icon, { size: 18 })}
        </div>
      )}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full ${icon ? 'pl-12' : 'pl-5'} pr-10 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all text-sm appearance-none cursor-pointer`}
      >
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
        <HiOutlineChevronRight className="rotate-90" size={14} />
      </div>
    </div>
  </div>
);

export default AffiliationPortal;