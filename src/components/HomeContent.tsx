import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Cpu, BarChart3, Users2 } from 'lucide-react';

const HomeContent = () => {
  return (
    <div className="bg-white">
      {/* India Section */}
      <section className="py-24 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px]">Destination Excellence</span>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mt-4 mb-8 tracking-tighter">
                INDIA – A MICE Destination <br /> Par Excellence!
              </h2>
              <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
                <p>India is not just a destination. It is an experience. A marketplace of ideas. A catalyst for collaboration. A global hub for knowledge exchange.</p>
                <p className="font-bold text-zinc-900">Welcome to Conference Works & Travel Planners India (CWTPI) — Your Technology-Driven MICE Partner for Impactful Conferences.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/india1/400/500" className="rounded-2xl grayscale" alt="India" />
                <img src="https://picsum.photos/seed/india2/400/300" className="rounded-2xl" alt="India" />
              </div>
              <div className="space-y-4 pt-12">
                <img src="https://picsum.photos/seed/india3/400/300" className="rounded-2xl" alt="India" />
                <img src="https://picsum.photos/seed/india4/400/500" className="rounded-2xl grayscale" alt="India" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Cpu className="mx-auto text-primary mb-6" size={48} />
            <h2 className="text-4xl font-black tracking-tighter mb-6">Technology at the Core. Execution at Scale.</h2>
            <p className="text-zinc-400 text-lg">In today’s digital-first world, conferences demand more than logistics — they demand intelligent systems and seamless workflows.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Online Registrations', desc: 'Secure payment gateways and seamless attendee onboarding.' },
              { title: 'Abstract Management', desc: 'Peer-review systems and scientific program coordination.' },
              { title: 'Hybrid Solutions', desc: 'Virtual conference platforms for global accessibility.' },
              { title: 'Real-time Analytics', desc: 'Data-driven insights and comprehensive reporting.' },
              { title: 'Speaker Portals', desc: 'Centralized management for scientific programs.' },
              { title: 'Mobile Apps', desc: 'Custom event apps for enhanced delegate engagement.' },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-primary/50 transition-all">
                <h3 className="text-lg font-bold mb-3 uppercase tracking-wider">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">Guaranteed Focus on ROI.</h2>
                <p className="text-secondary text-lg mb-10 leading-relaxed">Our expertise extends beyond operations into conference growth and revenue generation through targeted strategies.</p>
                <ul className="space-y-4">
                  {[
                    'Targeted delegate acquisition strategies',
                    'Sponsorship prospecting & fulfilment',
                    'Exhibition space planning & sales',
                    'Financial control & transparent reporting'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold uppercase text-xs tracking-widest">
                      <CheckCircle2 size={18} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                  <BarChart3 size={32} className="mb-4" />
                  <p className="text-3xl font-black">30%</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Avg. Revenue Growth</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                  <Users2 size={32} className="mb-4" />
                  <p className="text-3xl font-black">100k+</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Delegates Managed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Quality */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-zinc-100">
              <h3 className="text-2xl font-black tracking-tighter mb-6 uppercase">Mission Statement</h3>
              <p className="text-zinc-600 leading-relaxed italic">
                "To establish CWTPI as a globally respected MICE organization by delivering excellence through ethical business practices, innovation, and agile adoption of emerging technologies."
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-zinc-100">
              <h3 className="text-2xl font-black tracking-tighter mb-6 uppercase">Quality Policy</h3>
              <p className="text-zinc-600 leading-relaxed italic">
                "CWTPI strives for excellence by establishing and sustaining a quality-driven environment that supports performance, innovation, and client satisfaction."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
