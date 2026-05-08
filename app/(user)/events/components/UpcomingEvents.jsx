'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  HiMapPin,
  HiClock,
  HiArrowRight,
  HiUserGroup,
  HiCalendarDays,
  HiXMark,
  HiOutlineInformationCircle
} from "react-icons/hi2";
import UserAPI from '../../../apis/UserAPI';

// Matching your exact backend URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetchUpcomingEvents();
  }, []);

  const fetchUpcomingEvents = async () => {
    try {
      setLoading(true);
      const data = await UserAPI.getAllEvents();
      // Show only first 3 for "Upcoming" section
      setEvents(data.slice(0, 3));
    } catch (err) {
      setError("Unable to load upcoming events.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleString('default', { month: 'short' }).toUpperCase(),
      year: date.getFullYear(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      full: date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    };
  };

  // Helper to construct the exact image URL you provided
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "";
    // If path doesn't start with a slash, we add one to connect to API_BASE_URL
    const formattedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    return `${API_BASE_URL}${formattedPath}`;
  };

  if (loading) {
    return (
      <div className="bg-[#f8fafc] py-20 flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-4 border-brand-primary/10 border-t-brand-primary rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Retrieving Registry...</p>
      </div>
    );
  }

  return (
    <section className="bg-[#f8fafc] py-16 md:py-24 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-7xl mx-auto">

        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-brand-primary"></span>
              <span className="text-brand-primary font-bold text-xs uppercase tracking-[0.3em]">Registry</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 tracking-tight">
              Upcoming <span className="text-brand-primary">Events</span>
            </h2>
          </div>
          <Link href="/events" className="group flex items-center gap-3 bg-white border border-slate-200 text-slate-900 px-6 py-3 rounded-2xl font-bold text-sm hover:border-brand-primary hover:text-brand-primary transition-all shadow-sm">
            Explore All <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* --- GRID (2 Columns on Mobile) --- */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {events.map((event) => {
            const { day, month, year, time } = formatDate(event.eventDateAndTime);
            return (
              <div key={event._id} className="group bg-white rounded-[24px] md:rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={getImageUrl(event.images[0])}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-3 left-3 md:top-5 md:left-5 bg-white/95 backdrop-blur-md shadow-xl rounded-xl md:rounded-2xl p-2 md:p-3 min-w-[50px] md:min-w-[65px] text-center border border-white/20">
                    <span className="block text-lg md:text-2xl font-black text-slate-900 leading-none">{day}</span>
                    <span className="block text-[8px] md:text-[10px] font-bold uppercase tracking-widest mt-1 text-brand-primary">{month}</span>
                  </div>
                  {event.islamicDate && (
                    <div className="absolute bottom-4 right-4 bg-slate-900/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-[8px] md:text-[10px] font-bold border border-white/10 uppercase tracking-wider hidden sm:block">
                      {event.islamicDate}
                    </div>
                  )}
                </div>

                <div className="p-4 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-sm md:text-xl font-serif font-bold text-slate-900 mb-4 md:mb-6 line-clamp-2">{event.name}</h3>

                  <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    <div className="flex items-center gap-2 md:gap-3 text-slate-600 text-[10px] md:text-sm font-medium">
                      <HiMapPin className="text-brand-primary shrink-0" /> <span className="truncate">{event.eventLocation}</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 text-slate-600 text-[10px] md:text-sm font-medium">
                      <HiClock className="text-brand-primary shrink-0" /> {time}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="mt-auto w-full py-2.5 md:py-4 bg-brand-primary text-white text-[10px] md:text-sm font-bold rounded-xl md:rounded-2xl transition-all duration-300 border border-slate-100 hover:border-brand-primary"
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- RESPONSIVE EVENT DETAIL MODAL --- */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 md:mt-10">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-fade-in" onClick={() => setSelectedEvent(null)} />

          <div className="bg-white w-full max-w-4xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto rounded-[24px] md:rounded-[40px] shadow-2xl relative z-10 flex flex-col md:flex-row animate-in zoom-in duration-300 no-scrollbar">
            {/* Modal Image Section */}
            <div className="md:w-5/12 h-48 sm:h-64 md:h-auto relative bg-slate-100 shrink-0">
              <img
                src={getImageUrl(selectedEvent.images[0])}
                alt={selectedEvent.name}
                className="w-full h-140 object-cover"
              />
              <div className="absolute top-4 left-4 md:top-6 md:left-6 flex flex-col gap-2">
                <span className="bg-brand-primary text-white text-[9px] md:text-[10px] font-bold px-2 md:px-3 py-1 rounded-full uppercase tracking-widest shadow-lg w-fit">Upcoming Event</span>
                {selectedEvent.islamicDate && (
                  <span className="bg-white/90 backdrop-blur text-slate-900 text-[9px] md:text-[10px] font-bold px-2 md:px-3 py-1 rounded-full uppercase tracking-widest shadow-lg w-fit">🌙 {selectedEvent.islamicDate}</span>
                )}
              </div>
            </div>

            {/* Modal Content Section */}
            <div className="md:w-7/12 p-6 md:p-12 relative flex flex-col">
              <button onClick={() => setSelectedEvent(null)} className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors z-20">
                <HiXMark size={20} className="text-slate-400" />
              </button>

              <div className="mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-4 pr-10">{selectedEvent.name}</h2>
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-y-4 gap-x-6 md:gap-x-8 py-4 md:py-6 border-y border-slate-100">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] md:text-[10px] uppercase font-bold text-slate-400 tracking-widest">Date</span>
                    <span className="text-xs md:text-sm font-bold text-slate-700">{formatDate(selectedEvent.eventDateAndTime).full}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] md:text-[10px] uppercase font-bold text-slate-400 tracking-widest">Time</span>
                    <span className="text-xs md:text-sm font-bold text-slate-700">{formatDate(selectedEvent.eventDateAndTime).time}</span>
                  </div>
                  <div className="flex flex-col gap-0.5 col-span-2 sm:col-span-1">
                    <span className="text-[9px] md:text-[10px] uppercase font-bold text-slate-400 tracking-widest">Location</span>
                    <span className="text-xs md:text-sm font-bold text-slate-700">{selectedEvent.eventLocation}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="flex items-center gap-2 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-brand-primary mb-2 md:mb-3">
                    <HiOutlineInformationCircle size={16} /> About Event
                  </h4>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed whitespace-pre-line">{selectedEvent.description}</p>
                </div>

                <div className="p-4 md:p-6 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100">
                  <h4 className="flex items-center gap-2 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 md:mb-3">
                    <HiUserGroup size={16} /> Guest Scholars
                  </h4>
                  <p className="text-slate-900 font-serif text-base md:text-lg italic">{selectedEvent.scholars}</p>
                </div>
              </div>

              <button onClick={() => setSelectedEvent(null)} className="w-full mt-8 md:mt-10 py-3 md:py-4 bg-slate-900 text-white text-sm font-bold rounded-xl md:rounded-2xl hover:bg-brand-primary transition-colors duration-300">
                Close Event Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default UpcomingEvents;