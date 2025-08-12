import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import OffersSection from '../components/OffersSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PortfolioSection from '../components/PortfolioSection';
import ProcessSection from '../components/ProcessSection';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <OffersSection />
      <TestimonialsSection />
      <PortfolioSection />
      <ProcessSection />
      <FAQSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default HomePage;