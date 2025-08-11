import React from 'react';
import { Separator } from './ui/separator';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Colonne 1 - Branding */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Mohamed.</h3>
            <p className="text-gray-300 leading-relaxed">
              Votre partenaire pour un site web professionnel sans les tracas. 
              Design, développement et maintenance en abonnement mensuel.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Colonne 2 - Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#offres" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Nos offres
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#fonctionnement" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Fonctionnement
                </a>
              </li>
              <li>
                <a href="#apropos" className="text-gray-300 hover:text-orange-500 transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-orange-500 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Sites web responsive</li>
              <li>Hébergement inclus</li>
              <li>Nom de domaine</li>
              <li>Maintenance mensuelle</li>
              <li>Support technique</li>
              <li>Optimisation SEO</li>
            </ul>
          </div>

          {/* Colonne 4 - Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-orange-500 mr-3" />
                <a 
                  href="mailto:atelierdecember@gmail.com" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  atelierdecember@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-orange-500 mr-3" />
                <a 
                  href="tel:+33000000000" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  +33 6 27 23 59 76
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-orange-500 mr-3" />
                <span className="text-gray-300">Toulouse, France</span>
              </div>
            </div>
            
            <div className="pt-4">
              <button 
                onClick={() => window.open('https://calendly.com/placeholder', '_blank')}
                className="bg-orange-500 hover:bg-green-500 text-white px-6 py-2 rounded-lg transition-colors duration-300 text-sm font-semibold"
              >
                Prendre RDV
              </button>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2025 Mohamed. Tous droits réservés.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              CGV
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-xs">
            Site créé avec passion à Toulouse 🇫🇷
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;