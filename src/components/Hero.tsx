import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden flex items-center pt-28 pb-16">
      {/* Background with Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-zinc-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content - Structured Alignment */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-left"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-[1px] bg-primary"></div>
              <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">
                Technology-Driven MICE Partner
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6">
              We Don’t Just <br />
              <span className="text-primary">Manage</span> Conferences.
              <br />
              <span className="text-zinc-500">We Engineer Them.</span>
            </h1>

           <p className="text-lg md:text-xl lg:text-2xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
  Conference Works & Travel Planners India delivers turnkey MICE solutions backed by 30+ years of leadership and cutting-edge technology.
</p>
            
            <div className="flex flex-wrap gap-4 mb-16">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              >
                Request Proposal
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="bg-zinc-900 text-white border border-zinc-800 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors"
              >
                Our Services
              </motion.a>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {[
                { label: '30+ Years', sub: 'Legacy' },
                { label: 'Global', sub: 'Network' },
                { label: 'Tech-First', sub: 'Approach' },
              ].map((item, i) => (
                <div key={i} className="text-left">
                  <p className="text-white font-black text-sm uppercase tracking-wider">{item.label}</p>
                  <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Structured Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 relative max-w-[500px] w-full lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800/50 shadow-2xl">
              <img
                src="https://fastly.picsum.photos/id/419/800/1000.jpg?hmac=8Oddvi08zr6iMYc9dh6k0h0Re7o1SlhmBrxsvdD4MiQ"
                alt="Conference Management"
                className="w-full h-auto object-cover aspect-4/5"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Floating Stats Block */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 lg:-right-10 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Zap size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-white font-black text-2xl">15,000+</p>
                  <p className="text-zinc-500 text-[9px] font-bold uppercase tracking-widest">Delegates Managed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
