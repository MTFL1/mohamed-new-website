import React, { useState } from 'react';
import { Button } from './ui/button';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-black">Mohammed<span className="text-orange-500">.</span></h1>
          </div>
          
          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#offres" className="text-gray-600 hover:text-orange-500 transition-colors">
              Offres
            </a>
            <a href="#portfolio" className="text-gray-600 hover:text-orange-500 transition-colors">
              Portfolio
            </a>
            <a href="#fonctionnement" className="text-gray-600 hover:text-orange-500 transition-colors">
              Fonctionnement
            </a>
            <a href="#apropos" className="text-gray-600 hover:text-orange-500 transition-colors">
              À propos
            </a>
            <a href="#faq" className="text-gray-600 hover:text-orange-500 transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Button desktop */}
          <Button 
            className="hidden md:flex bg-orange-500 hover:bg-green-500 text-white transition-colors duration-300"
            onClick={() => window.open('tel:+33000000000', '_self')}
          >
            <Phone className="w-4 h-4 mr-2" />
            Appel gratuit
          </Button>

          {/* Menu burger mobile */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-green-500 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <nav className="px-4 py-6 space-y-4">
              <a 
                href="#offres" 
                className="block text-gray-600 hover:text-green-500 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Offres
              </a>
              <a 
                href="#portfolio" 
                className="block text-gray-600 hover:text-green-500 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Portfolio
              </a>
              <a 
                href="#fonctionnement" 
                className="block text-gray-600 hover:text-green-500 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Fonctionnement
              </a>
              <a 
                href="#apropos" 
                className="block text-gray-600 hover:text-green-500 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                À propos
              </a>
              <a 
                href="#faq" 
                className="block text-gray-600 hover:text-green-500 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                FAQ
              </a>
              <div className="pt-4 border-t border-gray-200">
                <Button 
                  className="w-full bg-orange-500 hover:bg-green-500 text-white transition-colors duration-300"
                  onClick={() => {
                    window.open('tel:+33000000000', '_self');
                    closeMobileMenu();
                  }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Appel gratuit
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;