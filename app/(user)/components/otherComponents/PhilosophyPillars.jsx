import React from 'react';
import { PiBrainLight, PiHandHeartLight } from "react-icons/pi";

function PhilosophyPillars() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Pillar 1: The Intellect */}
      <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
        <div className="w-16 h-16 bg-brand-primary/5 rounded-2xl flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all">
          <PiBrainLight size={32} />
        </div>
        <h4 className="text-xl font-bold text-[#1e293b] mb-4 uppercase tracking-wide">The Mind (Aql)</h4>
        <p className="text-brand-gray leading-relaxed italic">
          "Through structured academic rigor and modern sciences, we sharpen the intellect to understand the world and its Creator."
        </p>
      </div>

      {/* Pillar 2: The Spirit */}
      <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
        <div className="w-16 h-16 bg-brand-accent/5 rounded-2xl flex items-center justify-center text-brand-accent mb-8 group-hover:bg-brand-accent group-hover:text-white transition-all">
          <PiHandHeartLight size={32} />
        </div>
        <h4 className="text-xl font-bold text-[#1e293b] mb-4 uppercase tracking-wide">The Heart (Qalb)</h4>
        <p className="text-brand-gray leading-relaxed italic">
          "Through the teachings of Sufism and mysticism, we nurture the spirit to achieve inner peace and ethical excellence."
        </p>
      </div>

    </div>
  );
}

export default PhilosophyPillars;