import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeContent from './components/HomeContent';
import MeetingsConferences from './components/MeetingsConferences';
import CorporateMeets from './components/CorporateMeets';
import Outbound from './components/Outbound';
import Exhibitions from './components/Exhibitions';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <HomeContent />
    <Contact />
  </>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans selection:bg-emerald-500 selection:text-white">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/meetings-conferences" element={<MeetingsConferences />} />
            <Route path="/corporate-meets" element={<CorporateMeets />} />
            <Route path="/outbound" element={<Outbound />} />
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
