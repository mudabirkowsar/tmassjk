"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  HiOutlineBuildingLibrary,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineEye,
  HiOutlineTrash,
  HiOutlineClock,
  HiOutlineFunnel,
  HiOutlineChevronLeft,
  HiOutlineArrowsUpDown
} from "react-icons/hi2";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function AdminAffiliationPage() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState(null); // For the Detail Modal
  const [filter, setFilter] = useState("all");

  // 1. Fetch Applications
  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/api/affiliation`);
      if (response.data.success) {
        setApplications(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to load applications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  // 2. Update Status
  const handleUpdateStatus = async (id, newStatus) => {
    const remarks = prompt(`Enter remarks for ${newStatus}:`) || "";
    try {
      const response = await axios.patch(`${API_BASE_URL}/api/affiliation/status/${id}`, {
        status: newStatus,
        adminRemarks: remarks
      });
      if (response.data.success) {
        alert(`Status updated to ${newStatus}`);
        setSelectedApp(null);
        fetchApplications(); // Refresh list
      }
    } catch (error) {
      alert("Update failed: " + error.message);
    }
  };

  // 3. Delete Application
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this application?")) return;
    try {
      await axios.delete(`${API_BASE_URL}/api/affiliation/${id}`);
      fetchApplications();
    } catch (error) {
      alert("Delete failed");
    }
  };

  const filteredApps = filter === "all"
    ? applications
    : applications.filter(app => app.status === filter);

  const stats = {
    total: applications.length,
    pending: applications.filter(a => a.status === 'submitted').length,
    approved: applications.filter(a => a.status === 'approved').length,
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Affiliation Management</h1>
          <p className="text-slate-500 mt-1">Review and manage institutional accreditation requests.</p>
        </div>

        <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
          {['all', 'submitted', 'approved', 'rejected'].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${filter === s ? "bg-brand-primary text-white shadow-md" : "text-slate-500 hover:bg-slate-50"
                }`}
            >
              {s === 'submitted' ? 'Pending' : s}
            </button>
          ))}
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard label="Total Applications" count={stats.total} icon={<HiOutlineBuildingLibrary />} color="blue" />
        <StatCard label="Pending Review" count={stats.pending} icon={<HiOutlineClock />} color="amber" />
        <StatCard label="Approved Partners" count={stats.approved} icon={<HiOutlineCheckCircle />} color="green" />
      </div>

      {/* DATA TABLE */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-200">
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-400">Institution</th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-400">Location</th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-400">Type</th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-400">Status</th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-400 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr><td colSpan="5" className="p-10 text-center text-slate-400">Loading data...</td></tr>
            ) : filteredApps.length === 0 ? (
              <tr><td colSpan="5" className="p-10 text-center text-slate-400">No applications found.</td></tr>
            ) : (
              filteredApps.map((app) => (
                <tr key={app._id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-800">{app.instituteName}</div>
                    <div className="text-xs text-slate-400">{app.registrationNo}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{app.district}, {app.tehsil}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                      {app.instituteType}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={app.status} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 transition-opacity">
                      <button onClick={() => setSelectedApp(app)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <HiOutlineEye size={18} />
                      </button>
                      <button onClick={() => handleDelete(app._id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <HiOutlineTrash size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* DETAIL MODAL */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[32px] shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-slate-100 px-8 py-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">Application Details</h2>
              <button onClick={() => setSelectedApp(null)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <HiOutlineXCircle size={24} className="text-slate-400" />
              </button>
            </div>

            <div className="p-8 grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <DetailItem label="Principal" value={selectedApp.principalName} sub={selectedApp.principalQual} />
                <DetailItem label="Contact" value={selectedApp.contactPhone} sub={selectedApp.officialEmail} />
                <DetailItem label="Address" value={selectedApp.fullAddress} sub={`${selectedApp.district}, ${selectedApp.pincode}`} />
                <DetailItem label="Bank Details" value={selectedApp.bankName} sub={selectedApp.accountNo} />
              </div>
              <div className="space-y-6">
                <DetailItem label="Total Students" value={selectedApp.totalStudents} />
                <DetailItem label="Faculty Count" value={selectedApp.facultyCount} />
                <DetailItem label="Syllabus" value={selectedApp.syllabusType} />
                <DetailItem label="Admin Remarks" value={selectedApp.adminRemarks || "No remarks yet"} color="text-brand-primary" />
              </div>
            </div>

            <div className="bg-slate-50 px-8 py-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Update Status:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleUpdateStatus(selectedApp._id, 'approved')}
                    className="flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-200"
                  >
                    <HiOutlineCheckCircle /> Approve
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedApp._id, 'rejected')}
                    className="flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-200"
                  >
                    <HiOutlineXCircle /> Reject
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedApp._id, 'under_review')}
                    className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-900 transition-all shadow-lg shadow-slate-200"
                  >
                    Reviewing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* HELPER COMPONENTS */

const StatCard = ({ label, count, icon, color }) => {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    amber: "bg-amber-50 text-amber-600",
    green: "bg-green-50 text-green-600",
  };
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-5">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-2xl ${colors[color]}`}>
        {icon}
      </div>
      <div>
        <div className="text-2xl font-black text-slate-800 tracking-tight">{count}</div>
        <div className="text-sm text-slate-500 font-medium">{label}</div>
      </div>
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const styles = {
    submitted: "bg-amber-50 text-amber-700 border-amber-100",
    under_review: "bg-purple-50 text-purple-700 border-purple-100",
    approved: "bg-green-50 text-green-700 border-green-100",
    rejected: "bg-red-50 text-red-700 border-red-100",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${styles[status]}`}>
      {status.replace('_', ' ')}
    </span>
  );
};

const DetailItem = ({ label, value, sub, color = "text-slate-800" }) => (
  <div className="space-y-1">
    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</div>
    <div className={`font-bold ${color}`}>{value || "N/A"}</div>
    {sub && <div className="text-sm text-slate-500 leading-relaxed">{sub}</div>}
  </div>
);