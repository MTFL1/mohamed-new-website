import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-2xl" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Colonne 1 - Branding */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h3 className="text-2xl font-bold">Mohammed<span className="text-orange-500">.</span></h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Votre partenaire pour un site web professionnel sans tracas.  
              Design, développement et maintenance en abonnement mensuel.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/mohamedtfl/" 
                className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/30 text-gray-300 hover:text-orange-400 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohamed-tefili/" 
                className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/30 text-gray-300 hover:text-orange-400 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Colonne 2 - Navigation */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Nos offres", href: "#offres" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Fonctionnement", href: "#fonctionnement" },
                { label: "FAQ", href: "#faq" },
                { label: "À propos", href: "#apropos" }
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 3 - Contact */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-orange-500 mr-3" />
                <a 
                  href="mailto:atelierdecember@gmail.com" 
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  atelierdecember@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-orange-500 mr-3" />
                <a 
                  href="tel:+33627235976" 
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  +33 6 27 23 59 76
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-orange-500 mr-3" />
                <span className="text-gray-400">Toulouse, France</span>
              </div>
            </div>

            <div className="pt-4">
              <motion.button 
                onClick={() => window.open('https://calendly.com/placeholder', '_blank')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Prendre RDV
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bas de page */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 border-t border-white/10 pt-8"
        >
          <div className="text-gray-500 text-sm">
            © 2025 Mohammed. Tous droits réservés.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors">
              CGV
            </a>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 text-center">
          <p className="text-gray-600 text-xs">
            Site créé avec ❤️ à Toulouse 🇫🇷
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
