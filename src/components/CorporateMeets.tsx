import React from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, Award, TrendingUp, CheckCircle2 } from 'lucide-react';

const CorporateMeets = () => {
  const offerings = [
    { title: 'Corporate Conferences', items: ['Annual conferences', 'Leadership summits', 'Town halls', 'Sales meets'] },
    { title: 'Team Engagement', items: ['Offsites', 'Vision setting meets', 'Culture-building initiatives'] },
    { title: 'Awards & Recognition', items: ['Employee recognition', 'Annual awards night', 'Gala dinners'] },
    { title: 'Incentive Programs', items: ['Incentive conferences', 'Performance reward programs', 'Experiential travel'] },
  ];

  return (
    <div className="pt-24">
      <section className="bg-zinc-950 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/mice-corp-header/1920/600" className="w-full h-full object-cover" alt="Header" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px]">Strategic Solutions</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 mb-8">Corporate <br /> Conferences</h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Strategic Meets That Move Businesses Forward. We create platforms for alignment, inspiration, and measurable business outcomes.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-3xl font-black tracking-tighter mb-8 uppercase">Driving Strategy & Culture</h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                In today’s dynamic business environment, conferences are no longer routine gatherings. They are powerful tools to drive strategy, recognise excellence, motivate teams, and strengthen organisational culture.
              </p>
              <p className="text-zinc-600 text-lg leading-relaxed">
                Our role is to transform your objectives into experiences that engage, inspire, and deliver results. Every engagement begins with a deep understanding of your business goals.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Target, label: 'Alignment' },
                { icon: Lightbulb, label: 'Inspiration' },
                { icon: Award, label: 'Recognition' },
                { icon: TrendingUp, label: 'Outcomes' },
              ].map((item, i) => (
                <div key={i} className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 flex flex-col items-center text-center">
                  <item.icon size={32} className="text-primary mb-4" />
                  <span className="font-black uppercase tracking-widest text-xs text-zinc-900">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offering, i) => (
              <div key={i} className="bg-zinc-950 p-8 rounded-[2rem] text-white">
                <h3 className="text-lg font-black mb-6 uppercase tracking-wider text-primary">{offering.title}</h3>
                <ul className="space-y-3">
                  {offering.items.map((item, j) => (
                    <li key={j} className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full mt-1"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateMeets;
