import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Palette, Rocket, HeadphonesIcon } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "1. Appel découverte",
      description: "Discussion de vos besoins, de votre secteur et de vos objectifs. Totalement gratuit et sans engagement.",
      duration: "15 - 30 min"
    },
    {
      icon: Palette,
      title: "2. Création du site",
      description: "Design et développement de votre site selon vos préférences. Vous validez chaque étape.",
      duration: "7-10 jours"
    },
    {
      icon: Rocket,
      title: "3. Mise en ligne",
      description: "Déploiement de votre site avec nom de domaine, hébergement et certificat SSL inclus.",
      duration: "24h"
    },
    {
      icon: HeadphonesIcon,
      title: "4. Suivi mensuel",
      description: "Maintenance, mises à jour de sécurité et 1 modification de contenu incluse chaque mois.",
      duration: "Continu"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="fonctionnement" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div variants={cardVariants} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-6">
            <Rocket className="w-4 h-4 mr-2" />
            Notre processus
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Comment ça 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"> fonctionne</span> ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un parcours simple, transparent et efficace, de l'idée à la mise en ligne.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
                whileHover={{ y: -5 }}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 hover:border-orange-500/30 text-center">
                  
                  {/* Icone */}
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-orange-500/20 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Titre */}
                  <h3 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Badge durée */}
                  <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-medium">
                    {step.duration}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div variants={cardVariants} className="text-center mt-16">
          <motion.button
            onClick={() => window.open('https://calendly.com/placeholder', '_blank')}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 inline-flex items-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Commencer maintenant
            <MessageCircle className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProcessSection;
