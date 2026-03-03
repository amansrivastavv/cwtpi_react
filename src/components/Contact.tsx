import React from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, MessageSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px]">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mt-4 mb-8 tracking-tighter uppercase">Let's Engineer Your Next Event.</h2>
            <p className="text-zinc-500 text-lg mb-12 leading-relaxed">
              Ready to transform your conference vision into a high-impact reality? Our team is standing by to discuss your objectives.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-zinc-900 font-bold mb-1">Call Us</h4>
                  <p className="text-zinc-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-zinc-900 font-bold mb-1">Email Us</h4>
                  <p className="text-zinc-600">hello@cwtpi.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-zinc-900 font-bold mb-1">Visit Us</h4>
                  <p className="text-zinc-600">123 Event Plaza, Business District, Delhi NCR, India</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-zinc-200/50 border border-zinc-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-5 py-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700">Event Type</label>
                <select className="w-full px-5 py-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                  <option>Corporate Event</option>
                  <option>Conference</option>
                  <option>Product Launch</option>
                  <option>Wedding</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your event..."
                  className="w-full px-5 py-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="group w-full bg-primary text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30 mt-8"
              >
                Send Inquiry
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
