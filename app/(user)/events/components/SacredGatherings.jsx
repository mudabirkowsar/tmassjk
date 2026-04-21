import React from 'react';

function SacredGatherings() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">

      {/* 1. BACKGROUND IMAGE WITH COLOR OVERLAY */}
      <div className="absolute inset-0 z-0">
        {/* Replace with your specific mosque/archway image path */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNmZhiitXSL_pC9TpMe6zn77eVW3XL-qj8AQ&s"
          alt="Mosque Interior"
          className="w-full h-full object-cover"
        />
        {/* Green Overlay - Using your Brand Primary color */}
        <div className="absolute inset-0 bg-brand-primary/90 mix-blend-multiply"></div>
        {/* Subtle Gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/40 via-brand-primary/80 to-brand-primary"></div>
      </div>

      {/* 2. CONTENT CONTAINER */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">

        {/* Small Top Label */}
        <span className="inline-block text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6 opacity-80">
          Tanzeem-ul-Madaris Ahle Sunnat Sufi J&K
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-8">
          Sacred Gatherings & <br /> Community Action
        </h1>

        {/* Description Paragraph */}
        <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12 opacity-90">
          Nurturing the spirit and intellect through academic rigor and traditional
          Sufi wisdom. Join our upcoming conferences and community initiatives.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          {/* Primary Button */}
          <button className="w-full sm:w-auto px-10 py-4 bg-white text-brand-primary font-bold rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg">
            Explore Events
          </button>

          {/* Secondary Button - Link to PDF */}
          <a 
            href="/calander/calander.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 border border-white/40 bg-white/5 backdrop-blur-sm text-white font-medium rounded-full transition-all hover:bg-white/10 hover:border-white text-center inline-block"
          >
            View Calendar
          </a>
        </div>

      </div>

      {/* Decorative Light Leak (Optional) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-[120px] -rotate-45 pointer-events-none"></div>

    </section>
  );
}

export default SacredGatherings;