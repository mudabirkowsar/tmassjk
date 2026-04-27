"use client";

import React, { useState, useEffect } from 'react';
import { 
  HiOutlineDocumentArrowUp, 
  HiOutlineTrash, 
  HiOutlineMagnifyingGlass,
  HiOutlinePlus,
  HiOutlineXMark,
  HiOutlineUserGroup,
  HiOutlineCheckCircle,
  HiOutlineDocumentText,
  HiOutlineArrowPath,
  HiOutlineAcademicCap 
} from "react-icons/hi2";
import UserAPI from '../../../apis/UserAPI';

export default function AdminResultsPage() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // 1. Fetch all results using fetchAllResult()
  const loadData = async () => {
    try {
      setLoading(true);
      const response = await UserAPI.fetchAllResult();
      if (response.success) {
        setResults(response.data);
      }
    } catch (error) {
      console.error("Error fetching results:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // 2. Handle CSV Upload using uploadResult(file)
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) return alert("Please select a CSV file first");

    try {
      setUploading(true);
      const response = await UserAPI.uploadResult(selectedFile);
      
      if (response.success) {
        alert(response.message || "Results uploaded successfully");
        setIsModalOpen(false);
        setSelectedFile(null);
        loadData(); // Refresh the table
      }
    } catch (error) {
      alert(error.message || "Upload failed. Please check CSV format.");
    } finally {
      setUploading(false);
    }
  };

  // 3. Handle Delete using deleteResult(id)
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student record?")) return;
    try {
      const response = await UserAPI.deleteResult(id);
      if (response.success) {
        loadData(); // Refresh table
      }
    } catch (error) {
      alert("Delete failed: " + error.message);
    }
  };

  // Filter results for the table view
  const filteredResults = results.filter(r => 
    r.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.rollNo.includes(searchTerm) ||
    r.enrollmentNo.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Result Console</h1>
          <p className="text-slate-500 mt-1">Manage examinations and bulk result declarations.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-2xl font-bold shadow-lg shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <HiOutlinePlus strokeWidth={2.5} /> Upload CSV Sheet
        </button>
      </div>

      {/* QUICK STATS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard label="Declared Results" value={results.length} icon={<HiOutlineUserGroup />} color="blue" />
        <StatCard label="Passed Candidates" value={results.filter(r => r.status === 'Pass').length} icon={<HiOutlineCheckCircle />} color="green" />
        <StatCard label="Re-appear Status" value={results.filter(r => r.status === 'Re-appear').length} icon={<HiOutlineDocumentText />} color="red" />
      </div>

      {/* TABLE SECTION */}
      <div className="max-w-7xl mx-auto bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <HiOutlineMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Filter by Student, Roll or Enrollment..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-xl text-sm outline-none focus:ring-4 focus:ring-brand-primary/5 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button onClick={loadData} className="p-3 text-slate-400 hover:text-brand-primary transition-colors">
             <HiOutlineArrowPath className={loading ? "animate-spin" : ""} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <tr>
                <th className="px-8 py-5">Full Name & Details</th>
                <th className="px-8 py-5">Identities</th>
                <th className="px-8 py-5">Performance</th>
                <th className="px-8 py-5 text-center">Outcome</th>
                <th className="px-8 py-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                <tr><td colSpan="5" className="px-8 py-20 text-center text-slate-300 font-serif italic">Syncing with database...</td></tr>
              ) : filteredResults.length === 0 ? (
                <tr><td colSpan="5" className="px-8 py-20 text-center text-slate-400">No records available.</td></tr>
              ) : (
                filteredResults.map((res) => (
                  <tr key={res._id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="font-bold text-slate-800">{res.studentName}</div>
                      <div className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">F: {res.fatherName} | M: {res.motherName}</div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="text-sm font-medium text-slate-600">{res.enrollmentNo}</div>
                      <div className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">ROLL: {res.rollNo}</div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="text-sm font-black text-slate-700">{res.percentage}%</div>
                      <div className="text-[10px] text-slate-400">Agg: {res.obtainedMarks}/800</div>
                    </td>
                    <td className="px-8 py-5 text-center">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        res.status === 'Pass' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-red-50 text-red-600 border border-red-100'
                      }`}>
                        {res.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button 
                        onClick={() => handleDelete(res._id)}
                        className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"
                      >
                        <HiOutlineTrash size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* UPLOAD MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in duration-200">
            <div className="px-10 py-8 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Bulk Import Results</h2>
                <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mt-1">Excel (CSV) Integration</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <HiOutlineXMark size={24} className="text-slate-400" />
              </button>
            </div>

            <form onSubmit={handleUpload} className="p-10">
              <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center mb-8 relative group hover:border-brand-primary/30 transition-all">
                <input 
                  type="file" 
                  accept=".csv"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <HiOutlineDocumentArrowUp className="mx-auto text-slate-300 mb-4 group-hover:text-brand-primary transition-colors" size={48} />
                <p className="text-sm font-bold text-slate-700">
                  {selectedFile ? selectedFile.name : "Choose CSV Result Sheet"}
                </p>
                <p className="text-xs text-slate-400 mt-2">Maximum file size: 5MB</p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-5 mb-8 border border-blue-100">
                <p className="text-[10px] text-blue-700 font-black uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                   <HiOutlineAcademicCap /> Required Columns:
                </p>
                <p className="text-[11px] text-blue-600 leading-relaxed font-medium">
                  StudentName, FatherName, MotherName, EnrollmentNo, RollNo, Quran, JaamEirfan, Math, English, Science, Sst, Urdu, IT, Year.
                </p>
              </div>

              <button 
                type="submit"
                disabled={uploading}
                className="w-full py-5 bg-slate-900 text-white rounded-[20px] font-bold shadow-xl hover:bg-black transition-all flex items-center justify-center gap-3 disabled:opacity-50 active:scale-95"
              >
                {uploading ? (
                  <>Processing CSV <HiOutlineArrowPath className="animate-spin" /></>
                ) : (
                  "Initiate Bulk Processing"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Stats UI Component
function StatCard({ label, value, icon, color }) {
  const themes = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    green: "bg-emerald-50 text-emerald-600 border-emerald-100",
    red: "bg-red-50 text-red-600 border-red-100"
  };
  return (
    <div className={`bg-white p-6 rounded-[28px] border-2 shadow-sm flex items-center gap-6 ${themes[color]}`}>
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 text-3xl bg-white shadow-sm`}>
        {icon}
      </div>
      <div>
        <div className="text-3xl font-black tracking-tighter text-slate-800">{value}</div>
        <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{label}</div>
      </div>
    </div>
  );
}