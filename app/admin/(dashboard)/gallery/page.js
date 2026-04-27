"use client";

import React, { useState, useEffect } from 'react';
import {
  HiOutlinePlus,
  HiOutlinePencilSquare,
  HiOutlineTrash,
  HiOutlineXMark,
  HiCheckBadge,
  HiOutlinePhoto,
  HiOutlineArrowUpTray // Added for upload icon
} from "react-icons/hi2";
import UserAPI from '../../../apis/UserAPI'; // Adjust path as needed

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function AdminGalleryPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null); // To store the binary file

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    desc: '',
    category: 'Archive',
    order: 0
  });

  const categories = ["Founder", "Event", "Archive", "Campus", "Education", "Modernization"];

  // 1. Fetch Items
  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await UserAPI.getGalleryItems();
      if (response.success) {
        setItems(response.data);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Failed to load gallery items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // 2. Handle File Selection
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // 3. Handle Add/Edit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData for Multer (Multipart/form-data)
    const data = new FormData();
    data.append('name', formData.name);
    data.append('role', formData.role);
    data.append('desc', formData.desc);
    data.append('category', formData.category);
    data.append('order', formData.order);

    if (selectedFile) {
      data.append('image', selectedFile); // 'image' matches upload.single('image') in backend
    }

    try {
      if (editingId) {
        await UserAPI.updateGalleryItem(editingId, data);
        alert("Item updated successfully");
      } else {
        if (!selectedFile) return alert("Please select an image to upload");
        await UserAPI.addGalleryItem(data);
        alert("New item added to archive");
      }
      closeModal();
      fetchItems();
    } catch (error) {
      alert("Error saving: " + (error.message || "Server Error"));
    }
  };

  // 4. Handle Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to remove this item from the legacy archive?")) return;
    try {
      await UserAPI.deleteGalleryItem(id);
      fetchItems();
    } catch (error) {
      alert("Delete failed");
    }
  };

  // 5. Modal Helpers
  const openEditModal = (item) => {
    setEditingId(item._id);
    setFormData({
      name: item.name,
      role: item.role,
      desc: item.desc,
      category: item.category,
      order: item.order
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setSelectedFile(null);
    setFormData({ name: '', role: '', desc: '', category: 'Archive', order: 0 });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Gallery Archive</h1>
          <p className="text-slate-500 mt-1">Manage institutional founders, events, and milestones.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-2xl font-bold shadow-lg shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <HiOutlinePlus strokeWidth={2} /> Add New Entry
        </button>
      </div>

      {/* DATA GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full py-20 text-center text-slate-400 font-medium">Loading Archive...</div>
        ) : items.length === 0 ? (
          <div className="col-span-full py-20 text-center text-slate-400">No items in the gallery.</div>
        ) : (
          items.map((item) => (
            <div key={item._id} className="bg-white rounded-[24px] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="aspect-video relative overflow-hidden bg-slate-100">
                {/* Note: Prepended API_BASE_URL for static uploads */}
                <img
                  src={`${API_BASE_URL}${item.image}`}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-800 flex items-center gap-1">
                    {item.name} {item.category === "Founder" && <HiCheckBadge className="text-blue-500" />}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">Order: {item.order}</span>
                </div>
                <p className="text-xs font-medium text-brand-primary uppercase mb-3 tracking-wider">{item.role}</p>
                <p className="text-slate-500 text-sm line-clamp-2 mb-6 italic">"{item.desc}"</p>

                <div className="flex gap-2 pt-4 border-t border-slate-50">
                  <button
                    onClick={() => openEditModal(item)}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-50 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors"
                  >
                    <HiOutlinePencilSquare /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-red-50 text-red-600 rounded-xl text-xs font-bold hover:bg-red-100 transition-colors"
                  >
                    <HiOutlineTrash /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* FORM MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-xl rounded-[32px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h2 className="text-xl font-bold text-slate-800">{editingId ? 'Edit Entry' : 'New Archive Entry'}</h2>
              <button onClick={closeModal} className="p-2 hover:bg-white rounded-full transition-colors shadow-sm">
                <HiOutlineXMark size={20} className="text-slate-400" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <Input label="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Maulana Azad" required />
                <Input label="Role" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} placeholder="e.g. Chief Founder" required />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm outline-none focus:border-brand-primary transition-all cursor-pointer"
                  >
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <Input label="Display Order" type="number" value={formData.order} onChange={(e) => setFormData({ ...formData, order: e.target.value })} placeholder="0" />
              </div>

              {/* UPLOAD FIELD */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                  {editingId ? "Change Image (Optional)" : "Upload Image *"}
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300">
                    <HiOutlineArrowUpTray />
                  </div>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm outline-none focus:border-brand-primary focus:bg-white transition-all file:hidden cursor-pointer"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 pointer-events-none">
                    {selectedFile ? selectedFile.name : "Select JPG/PNG"}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Description / Legacy Quote</label>
                <textarea
                  value={formData.desc}
                  onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm outline-none focus:border-brand-primary transition-all resize-none"
                  placeholder="Tell the story or provide a quote..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-lg hover:bg-black transition-all mt-4"
              >
                {editingId ? 'Save Changes' : 'Publish to Gallery'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

const Input = ({ label, icon, ...props }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">{label}</label>
    <div className="relative group">
      {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300">{icon}</div>}
      <input
        {...props}
        className={`w-full ${icon ? 'pl-11' : 'pl-4'} pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm outline-none focus:border-brand-primary focus:bg-white transition-all`}
      />
    </div>
  </div>
);