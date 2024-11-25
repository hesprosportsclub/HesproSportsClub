// App.js
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import SportsOffered from '../components/SportsOffered';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Overview from '../components/Overview';


function LandingPage() {
  return (
    <div className="font-sans bg-[#D8DBD5]">
      <Header />
      <Hero />
      <Overview/>
      <Services />
      <SportsOffered />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default LandingPage;