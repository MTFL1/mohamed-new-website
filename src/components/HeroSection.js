import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/33627235976?text=Bonjour, je souhaite en savoir plus sur vos sites web en abonnement', '_blank');
  };

  const handleCalendlyClick = () => {
    window.open('https://calendly.com/placeholder', '_blank');
  };

  return (
    <section
      className="flex items-center justify-center px-6 sm:px-10 lg:px-16 bg-black"
      style={{ minHeight: 'calc(100vh - 64px)', marginTop: '64px' }}
      aria-label="Section d'introduction"
    >
      <motion.div
        className="w-full max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Votre site web professionnel
          <br />
          à partir de
          <span className="text-orange-500"> 95€/mois</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto mb-12 leading-relaxed">
          Plus besoin de gérer la technique, concentrez-vous sur votre business.
        </p>

        {/* Boutons CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 max-w-2xl mx-auto mb-16">
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

        {/* Points forts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            "Design moderne & responsive",
            "Hébergement & nom de domaine inclus",
            "Mises à jour régulières",
          ].map((point, idx) => (
            <motion.div
              key={idx}
              className="flex items-center justify-center text-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.2, duration: 0.6 }}
            >
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-800 font-medium text-lg">{point}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
