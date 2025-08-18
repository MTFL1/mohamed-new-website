import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';


const HeroSection = () => {
  const handleContact = (type) => {
    const links = {
      whatsapp: 'https://wa.me/33627235976?text=Bonjour, je souhaite en savoir plus sur vos sites web en abonnement',
      calendly: 'https://calendly.com/placeholder',
      phone: 'tel:+33627235976'
    };
    window.open(links[type], type === 'phone' ? '_self' : '_blank');
  };

  // Animations avec des délais échelonnés
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex flex-col">
      {/* Effets de fond optimisés */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      
      {/* Lumières d'ambiance */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grille subtile */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Contenu principal */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-10 lg:px-16 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Solution clé en main
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Votre site web professionnel
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              à partir de 95€/mois
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Plus besoin de gérer la technique, 
            <span className="text-emerald-400 font-semibold"> concentrez-vous sur votre business</span>
          </motion.p>

          {/* Boutons d'action */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto mb-16"
          >
            <motion.button
              onClick={() => handleContact('calendly')}
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                Appel découverte gratuit
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              onClick={() => handleContact('whatsapp')}
              className="group border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              WhatsApp direct
            </motion.button>
          </motion.div>

          {/* Points de confiance */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 text-sm text-gray-400"
          >
            {[
              "✓ Sans engagement",
              "✓ Hébergement gratuit",
              "✓ Mises à jour automatiques"
            ].map((point, i) => (
              <span key={i} className="flex items-center">
                {point}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Carrousel des atouts */}
    </section>
  );
};

export default HeroSection;