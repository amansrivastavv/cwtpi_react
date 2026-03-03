import React from 'react';
import { motion } from 'motion/react';
import { LayoutGrid, BarChart, Users, Zap, CheckCircle2 } from 'lucide-react';

const Exhibitions = () => {
  return (
    <div className="pt-24">
      <section className="bg-zinc-950 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/mice-exhib-header/1920/600" className="w-full h-full object-cover" alt="Header" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px]">Trade Platforms</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 mb-8">Trade <br /> Exhibitions</h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Transforming exhibition concepts into high-impact business platforms that deliver measurable results and market visibility.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tighter mb-8 uppercase">Turnkey. Modular. Scalable.</h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                Trade exhibitions remain one of the most powerful platforms to connect brands with decision-makers, generate qualified leads, and create lasting market visibility. We offer flexible models designed to suit your objectives, scale, and budget.
              </p>
              <div className="space-y-4">
                {[
                  'Attract targeted buyers and serious prospects',
                  'Engage key decision-makers and influencers',
                  'Discovery to deal-making visitor objectives',
                  'Strong, measurable returns on investment'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold uppercase text-xs tracking-widest text-zinc-700">
                    <CheckCircle2 size={18} className="text-primary" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-zinc-50 p-12 rounded-[3rem] border border-zinc-100">
              <h3 className="text-2xl font-black tracking-tighter mb-8 uppercase">Our Solutions</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <Zap className="text-primary shrink-0" size={28} />
                  <div>
                    <h4 className="font-black uppercase tracking-wider text-sm mb-2">Digital Enablement</h4>
                    <p className="text-zinc-500 text-sm">Online stall booking and exhibitor management modules.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Users className="text-primary shrink-0" size={28} />
                  <div>
                    <h4 className="font-black uppercase tracking-wider text-sm mb-2">Visitor Acquisition</h4>
                    <p className="text-zinc-500 text-sm">Targeted outreach to ensure quality footfall and engagement.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <LayoutGrid className="text-primary shrink-0" size={28} />
                  <div>
                    <h4 className="font-black uppercase tracking-wider text-sm mb-2">Infrastructure</h4>
                    <p className="text-zinc-500 text-sm">Custom fabricated booth and pavilion solutions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exhibitions;
