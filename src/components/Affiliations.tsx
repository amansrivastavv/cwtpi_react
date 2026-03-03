import React from 'react';
import { AFFILIATIONS } from '../constants';

const Affiliations = () => {
  return (
    <div className="py-12 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-zinc-500 text-xs uppercase tracking-[0.3em] mb-8">Our Affiliations</p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {AFFILIATIONS.map((brand) => (
            <div 
              key={brand.name} 
              className="flex items-center justify-center px-6 py-3 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group cursor-default"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-zinc-300 group-hover:bg-primary transition-colors"></div>
                <span className="text-sm font-black text-zinc-600 uppercase tracking-widest group-hover:text-primary transition-colors">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Affiliations;
