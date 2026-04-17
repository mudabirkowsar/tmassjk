import React from 'react';
import { HiArrowLongRight } from "react-icons/hi2";
import { PiTreeStructureLight } from "react-icons/pi";

function AboutLegacy() {
  return (
    <section className="bg-brand-background py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* --- LEFT SIDE: CONTENT --- */}
        <div className="flex flex-col items-start order-2 lg:order-1">
          {/* Top Label */}
          <span className="text-brand-primary text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6">
            Tanzeem-ul-Madaris Ahle Sunnat Sufi J&K
          </span>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1e293b] leading-[1.1] mb-8">
            Our Legacy of <br />
            <span className="italic text-brand-primary font-medium">Light</span> & Learning
          </h2>

          {/* Description */}
          <p className="text-brand-gray text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Preserving the spiritual essence of the Kashmir Valley while forging a 
            path of modern academic excellence for the future generation of seekers.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-8">
            <button className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-brand-primary/20 hover:bg-brand-secondary transition-all transform active:scale-95">
              Explore Our Path
            </button>
            
            <button className="flex items-center gap-2 text-brand-primary font-bold group transition-all">
              Our Vision 
              <HiArrowLongRight className="text-xl group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        {/* --- RIGHT SIDE: IMAGE & OVERLAP CARD --- */}
        <div className="relative order-1 lg:order-2">
          {/* Main Image Container */}
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl z-0 aspect-[4/5] md:aspect-auto md:h-[600px]">
            {/* Replace with your mosque architecture image */}
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFeu32Y-e13s4PS5_ZFWSG_cUFX1cmxSNNjQ&s" 
              alt="Kashmiri Sacred Architecture" 
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay to blend image */}
            <div className="absolute inset-0 bg-brand-primary/5"></div>
          </div>

          {/* OVERLAPPING "ROOTS" CARD */}
          <div className="absolute -bottom-10 -left-6 md:-left-16 bg-white p-6 md:p-10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] max-w-[280px] md:max-w-[320px] z-10 animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              {/* Icon Circle */}
              <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-accent rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-accent/20">
                <PiTreeStructureLight size={28} />
              </div>
              <h4 className="text-xl font-bold text-[#1e293b]">Roots</h4>
            </div>
            
            <p className="text-brand-gray font-serif italic text-base md:text-lg leading-relaxed">
              "Seeking knowledge is a sacred journey of the heart as much as the mind."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutLegacy;