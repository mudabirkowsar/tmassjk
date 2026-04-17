import React from 'react';
import Link from 'next/link';
import { HiMapPin, HiClock, HiArrowRight } from "react-icons/hi2";

const events = [
  {
    id: 1,
    date: "27",
    month: "SEP",
    title: "Eid Milad-un-Nabi ﷺ Gathering",
    location: "Srinagar Jama Masjid",
    time: "After Maghrib",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    date: "15",
    month: "APR",
    title: "Annual Urs of Hazrat Sheikh Noor-ud-din Wali",
    location: "Charar-e-Sharif, Kashmir",
    time: "10:00 AM - 06:00 PM",
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    date: "01",
    month: "MAR",
    title: "Ramadan Spiritual Workshop",
    location: "Jammu Islamic Center",
    time: "02:00 PM - 04:00 PM",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRes4IjoaoKQvkzoUw7ssb-rdT4TzzHBFQeQQ&s",
  },
  {
    id: 4,
    date: "10",
    month: "JUL",
    title: "Islamic Education Conference",
    location: "University Auditorium, Jammu",
    time: "09:30 AM - 03:30 PM",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ln0HJu7R-k7DNMZPC7CK5nHCHt1wxTHQhA&s",
  },
  {
    id: 5,
    date: "20",
    month: "NOV",
    title: "Sufi Scholars Meet & Dialogue",
    location: "Cultural Center, Srinagar",
    time: "11:00 AM - 05:00 PM",
    image: "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230106155228.jpg",
  },
];

function UpcomingEvents() {
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
          
          <Link href="#" className="flex items-center gap-1 md:gap-2 text-brand-primary font-bold text-sm md:text-base hover:gap-3 transition-all">
            View All <HiArrowRight />
          </Link>
        </div>

        {/* --- EVENTS GRID --- */}
        {/* grid-cols-2 for Mobile & Tablet | lg:grid-cols-3 for Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 lg:gap-10">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-2xl md:rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group"
            >
              {/* IMAGE & DATE BADGE */}
              <div className="relative aspect-video md:h-60 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Date Overlay - Scales for Mobile */}
                <div className="absolute top-2 left-2 md:top-5 md:left-5 bg-brand-primary text-white p-1.5 md:p-3 rounded-lg md:rounded-2xl min-w-[40px] md:min-w-[65px] flex flex-col items-center shadow-lg">
                  <span className="text-sm md:text-2xl font-bold leading-none">{event.date}</span>
                  <span className="text-[7px] md:text-[10px] font-bold tracking-widest mt-0.5 md:mt-1 opacity-80">{event.month}</span>
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="p-3 md:p-8 flex flex-col flex-grow">
                {/* Title - Smaller on Mobile */}
                <h3 className="text-sm md:text-2xl font-serif font-bold text-[#1e293b] mb-3 md:mb-6 leading-tight line-clamp-2 md:line-clamp-none">
                  {event.title}
                </h3>
                
                {/* Details - Scaled down for Mobile */}
                <div className="space-y-1.5 md:space-y-3 mb-4 md:mb-10">
                  <div className="flex items-center gap-1.5 md:gap-3 text-brand-gray text-[10px] md:text-sm font-medium">
                    <HiMapPin className="text-brand-accent text-xs md:text-lg shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-3 text-brand-gray text-[10px] md:text-sm font-medium">
                    <HiClock className="text-brand-accent text-xs md:text-lg shrink-0" />
                    <span className="truncate">{event.time}</span>
                  </div>
                </div>

                {/* REGISTRATION BUTTON - Full width mobile-first */}
                <button className="mt-auto w-full py-2 md:py-4 bg-[#f1f5f9] hover:bg-brand-primary hover:text-white text-brand-primary text-[10px] md:text-base font-bold rounded-lg md:rounded-2xl transition-all duration-300">
                  <span className="hidden md:inline">Details & Registration</span>
                  <span className="md:hidden">Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default UpcomingEvents;