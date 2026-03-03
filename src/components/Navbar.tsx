import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/Logo Orange_2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Meetings & Conferences', href: '/meetings-conferences' },
    { name: 'Corporate Meets', href: '/corporate-meets' },
    { name: 'Outbound', href: '/outbound' },
    { name: 'Exhibitions', href: '/exhibitions' },
    { name: 'Why Us?', href: '/why-us' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || !isHome ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="CWTPI Logo" 
              className="h-10 lg:h-14 w-auto transition-all duration-300"
            />
            <span className={`text-xl font-black tracking-tighter hidden ${scrolled || !isHome ? 'text-zinc-900' : 'text-white'}`}>
              CWTPI<span className="text-primary">.</span>
            </span>
          </Link>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[13px] font-bold uppercase tracking-wider transition-colors hover:text-primary ${
                    scrolled || !isHome ? 'text-zinc-600' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-primary text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled || !isHome ? 'text-zinc-900' : 'text-white'} hover:text-primary transition-colors`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white border-b border-zinc-100 overflow-hidden absolute top-full left-0 w-full shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-sm font-bold uppercase tracking-widest text-zinc-700 hover:text-primary hover:bg-zinc-50 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-primary text-white px-3 py-4 rounded-lg text-sm font-bold uppercase tracking-widest"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
