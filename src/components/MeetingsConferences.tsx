import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MapPin, Calendar, Users, Briefcase, Settings } from 'lucide-react';

const MeetingsConferences = () => {
  const capabilities = [
    'Venue and destination analysis & contracting',
    'International bidding support & India bid preparation',
    'Budgeting and regular monitoring of expenses',
    'Promotion through multi-channel digital media',
    'Conference Secretariat Services',
    'Abstract submission and review modules',
    'Speaker & Session Management',
    'Exhibition design & space selling',
    'On-site secretariat & business centre',
    'Curated social/cultural events & gala experiences',
    'Comprehensive safety & security management',
    'Pre- and post-conference tours'
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-zinc-950 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/mice-conf-header/1920/600" className="w-full h-full object-cover" alt="Header" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px]">PCO Services</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 mb-8">Meetings & <br /> Conferences</h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            End-to-End Association Conference Management. One meeting is all it takes. From there, CWTPI takes complete ownership.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black tracking-tighter mb-8 uppercase">Turnkey Management</h2>
              <div className="prose prose-lg text-zinc-600 max-w-none space-y-6">
                <p>
                  We deliver seamless, turnkey management for association meetings and conferences, eliminating complexity, risk, and operational stress. From promotional activities to delegate communications and abstract management to registrations, venues, audio-visuals, travel, logistics, and hospitality, we handle every detail with precision.
                </p>
                <p>
                  Backed by years of industry expertise, our structured processes ensure timely planning, financial control, and flawless execution. Every conference is unique, and success depends on experience, anticipation, and customization—not shortcuts.
                </p>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-black tracking-tighter mb-8 uppercase">Our Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                      <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                      <span className="text-sm font-bold text-zinc-700 uppercase tracking-tight">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-primary p-8 rounded-[2rem] text-white">
                <h4 className="text-xl font-black mb-4 uppercase">CWTPI Promise</h4>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  With CWTPI, your hassles are minimised while your results are maximised. We create well-planned, professionally executed, and memorable experiences.
                </p>
                <button className="w-full bg-white text-primary py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-secondary transition-all">
                  Request Proposal
                </button>
              </div>

              <div className="bg-zinc-50 p-8 rounded-[2rem] border border-zinc-200">
                <h4 className="text-xl font-black mb-6 uppercase">Key Sectors</h4>
                <ul className="space-y-4">
                  {['Medical & Healthcare', 'Science & Tech', 'Academic & Research', 'Trade Associations'].map((sector) => (
                    <li key={sector} className="flex items-center gap-3 text-sm font-bold text-zinc-600 uppercase tracking-wider">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {sector}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetingsConferences;
