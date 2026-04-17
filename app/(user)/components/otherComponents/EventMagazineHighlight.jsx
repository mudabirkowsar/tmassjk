import React from 'react';
import { 
  HiOutlineMapPin, 
  HiOutlineCalendarDays, 
  HiOutlineUserGroup, 
  HiOutlineArrowLongRight,
  HiOutlineSparkles
} from "react-icons/hi2";

function EventMagazineHighlight() {
  return (
    <section className="bg-brand-background py-16 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="relative flex flex-col lg:flex-row items-center">
          
          {/* 1. LARGE FEATURED IMAGE BOX */}
          <div className="w-full lg:w-2/3 relative h-[400px] md:h-[600px] rounded-[40px] overflow-hidden shadow-2xl z-0">
            <img 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1500" 
              alt="Conference Hall" 
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text readability on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent lg:hidden"></div>
            
            {/* Floating Badge (Desktop) */}
            <div className="absolute top-10 left-10 hidden lg:flex bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl items-center gap-4">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-white">
                <HiOutlineSparkles size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-brand-gray uppercase tracking-[0.2em]">Next Major Event</p>
                <p className="text-sm font-bold text-brand-primary">Spring 2025 Semester</p>
              </div>
            </div>
          </div>

          {/* 2. OVERLAPPING CONTENT BOX */}
          {/* This box "floats" over the image on desktop */}
          <div className="w-full lg:w-1/2 lg:-ml-32 mt-[-80px] lg:mt-0 z-10">
            <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50">
              
              <div className="flex items-center gap-2 text-brand-accent font-bold uppercase tracking-[0.2em] text-xs mb-6">
                <span className="w-8 h-px bg-brand-accent"></span>
                Spotlight Event
              </div>

              <h2 className="text-3xl md:text-5xl font-serif text-[#1e293b] leading-tight mb-8">
                The International <br/> 
                <span className="italic text-brand-primary">Sufi Wisdom</span> Conference
              </h2>

              <p className="text-brand-gray text-lg leading-relaxed mb-10">
                A gathering of global thinkers, local scholars, and students to discuss 
                the integration of spiritual ethics into modern educational frameworks. 
                Experience workshops, keynote speeches, and networking.
              </p>

              {/* EVENT SPECS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-background rounded-xl text-brand-primary">
                    <HiOutlineCalendarDays size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Date</p>
                    <p className="text-sm font-bold text-[#1e293b]">March 15-17, 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-background rounded-xl text-brand-primary">
                    <HiOutlineMapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Venue</p>
                    <p className="text-sm font-bold text-[#1e293b]">SKICC, Srinagar</p>
                  </div>
                </div>
              </div>

              {/* CTA BUTTON */}
              <button className="w-full flex items-center justify-between group px-8 py-5 bg-brand-primary text-white font-bold rounded-2xl hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20">
                Register Your Interest
                <HiOutlineArrowLongRight className="text-2xl group-hover:translate-x-2 transition-transform" />
              </button>

            </div>
          </div>

        </div>

        {/* 3. OPTIONAL SUB-BAR: Impact Highlights */}
        <div className="mt-12 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-200 pt-12">
           <div className="flex flex-col">
              <span className="text-brand-primary text-3xl font-serif font-bold">120+</span>
              <span className="text-brand-gray text-xs uppercase tracking-widest font-bold">Guest Speakers</span>
           </div>
           <div className="flex flex-col">
              <span className="text-brand-primary text-3xl font-serif font-bold">5k+</span>
              <span className="text-brand-gray text-xs uppercase tracking-widest font-bold">Expected Students</span>
           </div>
           <div className="flex flex-col">
              <span className="text-brand-primary text-3xl font-serif font-bold">15</span>
              <span className="text-brand-gray text-xs uppercase tracking-widest font-bold">Interactive Workshops</span>
           </div>
           <div className="flex flex-col">
              <span className="text-brand-primary text-3xl font-serif font-bold">24/7</span>
              <span className="text-brand-gray text-xs uppercase tracking-widest font-bold">Spiritual Support</span>
           </div>
        </div>

      </div>
    </section>
  );
}

export default EventMagazineHighlight;