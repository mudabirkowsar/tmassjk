'use client';

import React, { useState, useEffect } from 'react';
import {
    HiOutlineMapPin,
    HiOutlineClock,
    HiOutlineUserGroup,
    HiOutlineCalendarDays,
    HiOutlineArrowRight,
    HiOutlinePlus,
    HiOutlinePencilSquare,
    HiOutlineTrash,
    HiXMark,
    HiOutlinePhoto
} from "react-icons/hi2";
import UserAPI from '../../../apis/UserAPI';

// Added API Base URL constant
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

function EventsPage() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    // UI States
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingEvent, setEditingEvent] = useState(null);

    // Form States
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        eventDateAndTime: '',
        eventLocation: '',
        scholars: '',
        islamicDate: '',
        images: []
    });

    useEffect(() => {
        fetchEvents();
        // Check if user is logged in (has token)
        const token = localStorage.getItem('token');
        if (token) setIsAdmin(true);
    }, []);

    const fetchEvents = async () => {
        try {
            setLoading(true);
            const data = await UserAPI.getAllEvents();
            setEvents(data);
        } catch (err) {
            setError("Failed to load events.");
        } finally {
            setLoading(false);
        }
    };

    // Helper to construct the exact image URL
    const getImageUrl = (imagePath) => {
        if (!imagePath) return "";
        const formattedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
        return `${API_BASE_URL}${formattedPath}`;
    };

    // --- HANDLERS ---

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, images: e.target.files });
    };

    const openAddModal = () => {
        setEditingEvent(null);
        setFormData({ name: '', description: '', eventDateAndTime: '', eventLocation: '', scholars: '', islamicDate: '', images: [] });
        setIsModalOpen(true);
    };

    const openEditModal = (event) => {
        setEditingEvent(event);
        setFormData({
            name: event.name,
            description: event.description,
            eventDateAndTime: event.eventDateAndTime.split('T')[0], // format for date input
            eventLocation: event.eventLocation,
            scholars: event.scholars,
            islamicDate: event.islamicDate || '',
            images: []
        });
        setIsModalOpen(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach(key => {
            if (key === 'images') {
                for (let i = 0; i < formData.images.length; i++) {
                    data.append('images', formData.images[i]);
                }
            } else {
                data.append(key, formData[key]);
            }
        });

        try {
            if (editingEvent) {
                await UserAPI.updateEvent(editingEvent._id, data);
            } else {
                await UserAPI.createEvent(data);
            }
            setIsModalOpen(false);
            fetchEvents();
        } catch (err) {
            alert("Error saving event");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this event?")) {
            try {
                await UserAPI.deleteEvent(id);
                fetchEvents();
            } catch (err) {
                alert("Error deleting event");
            }
        }
    };

    const formatEventDate = (dateString) => {
        const date = new Date(dateString);
        return {
            day: date.getDate(),
            month: date.toLocaleString('default', { month: 'short' }).toUpperCase(),
            year: date.getFullYear(),
            time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc]">
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-brand-primary/10 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-t-brand-primary rounded-full animate-spin"></div>
                </div>
                <p className="mt-6 text-slate-400 font-medium tracking-[0.2em] text-[10px] uppercase">Synchronizing Events</p>
            </div>
        );
    }

    return (
        <main className="bg-[#f8fafc] min-h-screen font-sans selection:bg-brand-primary/10">

            {/* --- ADMIN HEADER / DASHBOARD CONTROLS --- */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-serif text-slate-900 tracking-tight">Event Registry</h1>
                        <p className="text-slate-500 text-sm mt-1">Manage and view all upcoming spiritual gatherings.</p>
                    </div>
                    {isAdmin && (
                        <button
                            onClick={openAddModal}
                            className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/30 hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
                        >
                            <HiOutlinePlus size={20} className="stroke-2" />
                            <span>Create New Event</span>
                        </button>
                    )}
                </div>
            </div>

            {/* --- EVENTS GRID --- */}
            <section className="py-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
                {error ? (
                    <div className="flex items-center gap-4 p-6 bg-red-50 border border-red-100 rounded-2xl text-red-600">
                        <div className="bg-red-100 p-2 rounded-full font-bold">!</div>
                        <p className="font-semibold">{error}</p>
                    </div>
                ) : events.length === 0 ? (
                    <div className="text-center py-32 bg-white rounded-[32px] border border-dashed border-slate-200">
                        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <HiOutlineCalendarDays className="text-slate-300 text-3xl" />
                        </div>
                        <h3 className="text-slate-900 font-bold text-lg">No events found</h3>
                        <p className="text-slate-400 text-sm max-w-xs mx-auto mt-2">There are currently no events scheduled in the database.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event) => {
                            const { day, month, year, time } = formatEventDate(event.eventDateAndTime);
                            return (
                                <div key={event._id} className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-brand-primary/30 shadow-sm hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-500 flex flex-col relative">

                                    {/* Image Container */}
                                    <div className="relative aspect-[16/11] overflow-hidden">
                                        <img
                                            src={getImageUrl(event.images[0])}
                                            alt={event.name}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Date Badge */}
                                        <div className="absolute top-5 left-5 bg-white/95 backdrop-blur shadow-xl rounded-2xl p-3 min-w-[65px] text-center border border-white/20">
                                            <span className="block text-xl font-black text-slate-900 leading-none">{day}</span>
                                            <span className="block text-[9px] font-bold uppercase tracking-widest mt-1 text-brand-primary">{month}</span>
                                        </div>

                                        {/* Quick Admin Actions on Hover */}
                                        {isAdmin && (
                                            <div className="absolute top-5 right-5 flex gap-2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                                <button onClick={() => openEditModal(event)} className="p-2.5 bg-white rounded-xl text-slate-700 hover:text-blue-600 shadow-xl transition-colors">
                                                    <HiOutlinePencilSquare size={18} />
                                                </button>
                                                <button onClick={() => handleDelete(event._id)} className="p-2.5 bg-white rounded-xl text-slate-700 hover:text-red-600 shadow-xl transition-colors">
                                                    <HiOutlineTrash size={18} />
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-2 mb-3">
                                            {event.islamicDate && (
                                                <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-primary/5 text-brand-primary px-2.5 py-1 rounded-md">
                                                    {event.islamicDate}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-brand-primary transition-colors line-clamp-1">{event.name}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">{event.description}</p>

                                        <div className="mt-auto pt-6 border-t border-slate-50 space-y-3">
                                            <div className="flex items-center gap-3 text-slate-600 text-[13px]">
                                                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                                                    <HiOutlineMapPin size={16} />
                                                </div>
                                                <span className="font-medium">{event.eventLocation}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-slate-600 text-[13px]">
                                                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                                                    <HiOutlineClock size={16} />
                                                </div>
                                                <span className="font-medium">{time} • {year}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-slate-600 text-[13px]">
                                                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                                                    <HiOutlineUserGroup size={16} />
                                                </div>
                                                <span className="font-medium italic">{event.scholars}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </section>

            {/* --- ADMIN MODAL (PREMIUM DASHBOARD STYLE) --- */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={() => setIsModalOpen(false)} />

                    <div className="bg-white rounded-[32px] w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl relative z-10 flex flex-col animate-in fade-in zoom-in duration-300">
                        {/* Modal Header */}
                        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">{editingEvent ? 'Modify Event' : 'New Event Entry'}</h2>
                                <p className="text-xs text-slate-500 mt-0.5">Fill in the details to update the public registry.</p>
                            </div>
                            <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-white hover:shadow-md rounded-xl transition-all"><HiXMark size={24} /></button>
                        </div>

                        {/* Modal Form */}
                        <form onSubmit={handleSubmit} className="overflow-y-auto p-8 space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">Event Identification</label>
                                    <input required name="name" value={formData.name} onChange={handleInputChange} placeholder="e.g. Annual Sufi Conference 2024" className="w-full mt-2 px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-brand-primary/5 focus:border-brand-primary transition-all outline-none" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">Venue Location</label>
                                        <input required name="eventLocation" value={formData.eventLocation} onChange={handleInputChange} placeholder="City, State" className="w-full mt-2 px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-brand-primary/5 outline-none" />
                                    </div>
                                    <div>
                                        <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">Date & Time</label>
                                        <input required type="datetime-local" name="eventDateAndTime" value={formData.eventDateAndTime} onChange={handleInputChange} className="w-full mt-2 px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-brand-primary/5 outline-none" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">Key Scholars</label>
                                        <input required name="scholars" value={formData.scholars} onChange={handleInputChange} placeholder="Dr. Scholar Name..." className="w-full mt-2 px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-brand-primary/5 outline-none" />
                                    </div>
                                    <div>
                                        <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">Islamic Date</label>
                                        <input name="islamicDate" value={formData.islamicDate} onChange={handleInputChange} placeholder="12 Rabi ul Awal" className="w-full mt-2 px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-brand-primary/5 outline-none" />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">Context & Details</label>
                                    <textarea required name="description" rows="4" value={formData.description} onChange={handleInputChange} placeholder="Provide a detailed overview of the event..." className="w-full mt-2 px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-brand-primary/5 outline-none resize-none"></textarea>
                                </div>

                                <div>
                                    <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">Event Media</label>
                                    <div className="mt-2 border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:bg-slate-50 transition-colors relative group">
                                        <HiOutlinePhoto className="mx-auto text-slate-300 text-4xl mb-2" />
                                        <p className="text-sm text-slate-500">Drag images here or <span className="text-brand-primary font-bold">browse files</span></p>
                                        <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tight">Support JPG, PNG, WEBP (Max 5 images)</p>
                                        <input type="file" multiple accept="image/*" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-4 bg-slate-100 text-slate-600 font-bold rounded-2xl hover:bg-slate-200 transition-all">Cancel</button>
                                <button type="submit" className="flex-[2] py-4 bg-brand-primary text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-brand-primary/20 transition-all">
                                    {editingEvent ? 'Update Event Details' : 'Publish to Registry'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <footer className="py-16 border-t border-slate-200 bg-white text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="h-px w-12 bg-brand-primary mx-auto mb-8 opacity-30"></div>
                    <p className="text-slate-400 font-bold uppercase tracking-[0.4em] text-[10px]">
                        Tanzeem-ul-Madaris Ahle Sunnat Sufi J&K
                    </p>
                    <p className="text-slate-300 text-[9px] mt-4 tracking-widest font-medium uppercase">Official Administrative Portal</p>
                </div>
            </footer>
        </main>
    );
}

export default EventsPage;