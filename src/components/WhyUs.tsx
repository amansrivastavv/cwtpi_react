import React from 'react';
import { motion } from 'motion/react';
import { WHY_US_POINTS } from '../constants';
import { ShieldCheck, Award, Zap, Globe, HeartHandshake, TrendingUp } from 'lucide-react';

const WhyUs = () => {
  const icons = [ShieldCheck, HeartHandshake, Zap, Globe, Award, TrendingUp];

  return (
    <div className="pt-24">
      <section className="bg-zinc-950 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/mice-why-header/1920/600" className="w-full h-full object-cover" alt="Header" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px]">The CWTPI Advantage</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 mb-8">Why Choose Us?</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Strategic insight, operational depth, financial strength, and global reach—delivering confidence at every stage.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Strength & Credibility', desc: 'Leadership team with over 30 years of PCO and MICE expertise.' },
              { title: 'One-Stop Solutions', desc: 'All MICE services under one umbrella for seamless coordination.' },
              { title: 'Global Reach', desc: 'Representative offices across key global regions for international solutions.' },
              { title: 'Preferred Partnerships', desc: 'Long-standing relationships with leading hotel chains and vendors.' },
              { title: 'Technology-Driven', desc: 'Strong execution powered by online registration and abstract management.' },
              { title: 'Revenue Optimisation', desc: 'Strategic support for delegate growth and sponsorship acquisition.' },
            ].map((point, i) => {
              const Icon = icons[i];
              return (
                <div key={i} className="p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">{point.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{point.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-24 bg-primary rounded-[3rem] p-12 md:p-20 text-white text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">Ready to Build Your Next Conference?</h2>
            <p className="text-secondary text-lg mb-10 max-w-2xl mx-auto">
              Let us help you create a well-planned, professionally executed, and memorable experience that reflects your vision.
            </p>
            <button className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
