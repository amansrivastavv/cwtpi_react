import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Affiliations from './Affiliations';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo Orange_2.png';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src={logo} 
                alt="CWTPI Logo" 
                className="h-16 w-auto"
              />
              <span className="text-2xl font-black tracking-tighter hidden">
                CWTPI<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Conference Works & Travel Planners India. Your Technology-Driven MICE Partner for Impactful Conferences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-zinc-900 rounded-lg hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-zinc-900 rounded-lg hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-zinc-900 rounded-lg hover:bg-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-4 text-zinc-400 text-xs font-bold uppercase tracking-wider">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/meetings-conferences" className="hover:text-primary transition-colors">Meetings & Conferences</Link></li>
              <li><Link to="/corporate-meets" className="hover:text-primary transition-colors">Corporate Meets</Link></li>
              <li><Link to="/outbound" className="hover:text-primary transition-colors">Outbound Meetings</Link></li>
              <li><Link to="/why-us" className="hover:text-primary transition-colors">Why Us?</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-6 text-primary">Resources</h3>
            <ul className="space-y-4 text-zinc-400 text-xs font-bold uppercase tracking-wider">
              <li><a href="#" className="hover:text-primary transition-colors">Brochure Download</a></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Request for Proposal</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Awards & Accolades</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-6 text-primary">Contact Us</h3>
            <ul className="space-y-4 text-zinc-400 text-xs font-bold tracking-widest uppercase">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary shrink-0" />
                <span>123 Event Plaza, Business District,<br />Delhi NCR, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <span>hello@cwtpi.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
          <p>© 2024 CWTPI Management. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Affiliation logos at the very bottom as requested */}
      <Affiliations />
    </footer>
  );
};

export default Footer;
