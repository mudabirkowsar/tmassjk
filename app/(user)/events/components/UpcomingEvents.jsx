import React from 'react';
import Link from 'next/link';
import { HiMapPin, HiClock, HiArrowRight, HiUserGroup } from "react-icons/hi2";

// Mock data following your Mongoose Schema structure
const events = [
  {
    _id: "1",
    name: "Eid Milad-un-Nabi ﷺ Gathering",
    description: "A grand spiritual gathering to celebrate the birth of the Prophet ﷺ with recitations and lectures.",
    eventLocation: "Srinagar Jama Masjid",
    eventDateAndTime: "2024-09-27T18:30:00",
    islamicDate: "12 Rabi-ul-Awwal",
    scholars: "Maulana Mushtaq Khan, Mufti Aslam Misbahi",
    images: ["https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=800"],
  },
  {
    _id: "2",
    name: "Annual Urs Hazrat Sheikh Noor-ud-din Wali",
    description: "Annual commemoration of the patron saint of Kashmir focusing on his Sufi poetry and teachings.",
    eventLocation: "Charar-e-Sharif, Kashmir",
    eventDateAndTime: "2024-04-15T10:00:00",
    islamicDate: "26 Rajab",
    scholars: "Pir Syed Hamidullah, Maulana Ashraf Gauri",
    images: ["https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=800"],
  },
  {
    _id: "3",
    name: "Ramadan Spiritual Workshop",
    description: "A deep dive into the essence of fasting and spiritual purification.",
    eventLocation: "Jammu Islamic Center",
    eventDateAndTime: "2024-03-01T14:00:00",
    islamicDate: "20 Shaban",
    scholars: "Dr. Ahmed Qadri",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRes4IjoaoKQvkzoUw7ssb-rdT4TzzHBFQeQQ&s"],
  },
];

function UpcomingEvents() {

  // Helper to format Date from Mongoose Schema
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return { day, month, time };
  };

  return (
    <section className="bg-brand-background py-12 md:py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* --- SECTION HEADER --- */}
        <div className="flex justify-between items-end mb-8 md:mb-12 border-b border-gray-100 pb-4 md:pb-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-serif text-brand-primary font-bold mb-2">
              Upcoming Events
            </h2>
            <div className="h-1 w-12 md:h-1.5 md:w-20 bg-brand-accent rounded-full"></div>
          </div>

          <Link href="/events" className="flex items-center gap-1 md:gap-2 text-brand-primary font-bold text-sm md:text-base hover:gap-3 transition-all">
            View All <HiArrowRight />
          </Link>
        </div>

        {/* --- EVENTS GRID --- */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 lg:gap-10">
          {events.map((event) => {
            const { day, month, time } = formatDate(event.eventDateAndTime);

            return (
              <div
                key={event._id}
                className="bg-white rounded-2xl md:rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group"
              >
                {/* IMAGE & DATE BADGES */}
                <div className="relative aspect-video md:h-64 overflow-hidden">
                  <img
                    src={event.images[0]} // Taking first image from schema array
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* English Date Overlay */}
                  <div className="absolute top-2 left-2 md:top-5 md:left-5 bg-brand-primary text-white p-1.5 md:p-3 rounded-lg md:rounded-2xl min-w-[40px] md:min-w-[65px] flex flex-col items-center shadow-lg z-10">
                    <span className="text-sm md:text-2xl font-bold leading-none">{day}</span>
                    <span className="text-[7px] md:text-[10px] font-bold tracking-widest mt-0.5 md:mt-1 opacity-80">{month}</span>
                  </div>

                  {/* Islamic Date Overlay (Optional Badge) */}
                  {event.islamicDate && (
                    <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-white/90 backdrop-blur-sm text-brand-primary px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[8px] md:text-xs font-bold border border-brand-primary/20">
                      🌙 {event.islamicDate}
                    </div>
                  )}
                </div>

                {/* CARD CONTENT */}
                <div className="p-3 md:p-8 flex flex-col flex-grow">
                  {/* Event Name */}
                  <h3 className="text-sm md:text-2xl font-serif font-bold text-[#1e293b] mb-2 md:mb-4 leading-tight line-clamp-2">
                    {event.name}
                  </h3>

                  {/* Description (Visible on Desktop) */}
                  <p className="hidden md:block text-gray-500 text-sm mb-6 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-1.5 md:space-y-3 mb-4 md:mb-8">
                    {/* Location */}
                    <div className="flex items-center gap-1.5 md:gap-3 text-brand-gray text-[10px] md:text-sm font-medium">
                      <HiMapPin className="text-brand-accent text-xs md:text-lg shrink-0" />
                      <span className="truncate">{event.eventLocation}</span>
                    </div>
                    {/* Time */}
                    <div className="flex items-center gap-1.5 md:gap-3 text-brand-gray text-[10px] md:text-sm font-medium">
                      <HiClock className="text-brand-accent text-xs md:text-lg shrink-0" />
                      <span className="truncate">{time}</span>
                    </div>
                    {/* Scholars */}
                    <div className="flex items-center gap-1.5 md:gap-3 text-brand-gray text-[10px] md:text-sm font-medium">
                      <HiUserGroup className="text-brand-accent text-xs md:text-lg shrink-0" />
                      <span className="truncate italic">{event.scholars}</span>
                    </div>
                  </div>

                  {/* ACTION BUTTON */}
                  <button className="mt-auto w-full py-2 md:py-4 bg-[#f1f5f9] hover:bg-brand-primary hover:text-white text-brand-primary text-[10px] md:text-base font-bold rounded-lg md:rounded-2xl transition-all duration-300">
                    Details & Registration
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;