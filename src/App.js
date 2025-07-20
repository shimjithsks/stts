import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Fleet from './pages/Fleet';
import Services from './pages/Services';
import WhyChooseUs from './pages/WhyChooseUs';
import Contact from './pages/Contact';
import GALLERY from './pages/Gallery';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
   <BrowserRouter basename="/stts">
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/fleet" element={<Fleet />} />
    <Route path="/services" element={<Services />} />
    <Route path="/why-choose-us" element={<WhyChooseUs />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/gallery" element={<GALLERY />} />
  </Routes>
  <Footer />
</BrowserRouter>
  );
}

export default App;
