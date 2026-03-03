import React from 'react';
import { motion } from 'motion/react';
import { Globe, Plane, Shield, Map, CheckCircle2 } from 'lucide-react';

const Outbound = () => {
  const services = [
    { icon: Map, title: 'Destination Feasibility', desc: 'Comparative analysis and budget forecasting for global locations.' },
    { icon: Plane, title: 'Visa & Travel', desc: 'Group visa facilitation and international ticketing coordination.' },
    { icon: Globe, title: 'Venue Sourcing', desc: 'Identification and contract negotiation for international venues.' },
    { icon: Shield, title: 'On-Ground Support', desc: 'Dedicated event managers and local coordinators worldwide.' },
  ];

  return (
    <div className="pt-24">
      <section className="bg-zinc-950 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/mice-outbound-header/1920/600" className="w-full h-full object-cover" alt="Header" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px]">Global Reach</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 mb-8">Outbound <br /> Conferences</h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Seamless planning and execution of corporate events worldwide. Leveraging representative offices across key global regions.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div>
              <h2 className="text-3xl font-black tracking-tighter mb-8 uppercase">International Excellence</h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                CWTPI specialises in the seamless planning and execution of outbound meetings, conferences, and corporate events worldwide. From initial feasibility to on-ground execution, we manage every detail—ensuring your overseas event is efficient, compliant, and memorable.
              </p>
              <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
                <p className="font-black uppercase tracking-widest text-xs text-primary mb-4">Our Promise Globally</p>
                <p className="text-zinc-900 font-bold text-xl tracking-tight leading-snug">
                  "The right destination. The right partners. Flawless execution. Delivered on time, on budget, and on brand."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-all">
                  <service.icon size={32} className="text-primary mb-6" />
                  <h3 className="text-lg font-black mb-3 uppercase tracking-wider">{service.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Outbound;
