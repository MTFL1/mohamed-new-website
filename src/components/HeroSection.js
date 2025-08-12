import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import AtoutsCarousel from './AtoutsCarousel'; // Vérifie le chemin

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/33627235976?text=Bonjour, je souhaite en savoir plus sur vos sites web en abonnement', '_blank');
  };

  const handleCalendlyClick = () => {
    window.open('https://calendly.com/placeholder', '_blank');
  };

  return (
    <section
      className="flex flex-col justify-between px-6 sm:px-10 lg:px-16 bg-black relative overflow-hidden"
      style={{ minHeight: 'calc(100vh - 64px)', marginTop: '64px' }}
      aria-label="Section d'introduction"
    >
      {/* Overlay texture & glow fintech */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            `radial-gradient(circle at 10% 20%, rgba(255, 140, 0, 0.12), transparent 70%), 
             radial-gradient(circle at 80% 40%, rgba(0, 255, 200, 0.15), transparent 75%), 
             radial-gradient(circle at 50% 80%, rgba(255, 140, 0, 0.1), transparent 65%)`,
          filter: 'blur(60px)',
          zIndex: 0,
          mixBlendMode: 'screen',
        }}
      />

      <motion.div
        className="w-full max-w-4xl mx-auto text-center flex-grow flex flex-col justify-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Votre site web professionnel
          <br />
          à partir de
          <span className="text-orange-500"> 95€/mois</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto mb-16 leading-relaxed">
          Plus besoin de gérer la technique, concentrez-vous sur votre business.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 max-w-2xl mx-auto">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-md shadow-md transition-colors duration-300 flex items-center justify-center"
            onClick={handleCalendlyClick}
            aria-label="Appel de découverte gratuit"
          >
            Appel de découverte gratuit
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-green-500 text-white hover:bg-green-500 hover:text-white hover:border-green-500 font-semibold px-8 py-4 rounded-md shadow-md transition-all duration-300 flex items-center justify-center"
            onClick={handleWhatsAppClick}
            aria-label="WhatsApp direct"
          >
            WhatsApp direct
          </Button>
        </div>
      </motion.div>

      {/* Bande des atouts en full width */}
      <AtoutsCarousel />
    </section>
  );
};

export default HeroSection;
