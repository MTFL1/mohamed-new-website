import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, MessageCircle } from 'lucide-react';

const OffersSection = () => {

  const handleContactClick = (offerType) => {
    const messages = {
      ecommerce: "Bonjour, je souhaite en savoir plus sur l'offre E-commerce (99€/mois).",
      vitrine: "Bonjour, je souhaite en savoir plus sur l'offre Site Vitrine (49€/mois).",
      booking: "Bonjour, je souhaite en savoir plus sur l'offre Booking (79€/mois)."
    };
    window.open(`https://wa.me/33627235976?text=${encodeURIComponent(messages[offerType])}`, '_blank');
  };

  // Ordre : e-commerce | vitrine | booking
  const offers = {
    
    vitrine: {
      title: "Site Vitrine",
      subtitle: "Présence en ligne professionnelle",
      price: "49€",
      period: "/mois",
      badge: "Populaire",
      description: "Artisans, indépendants, petites entreprises.",
      features: [
        { text: "Design moderne et responsive", included: true },
        { text: "Jusqu’à 5 pages incluses", included: true },
        { text: "Formulaire de contact", included: true },
        { text: "Optimisation SEO de base", included: true },
        { text: "Nom de domaine & hébergement inclus", included: true },
        { text: "Certificat SSL", included: true },
        { text: "Mises à jour incluses", included: true }
      ],
      highlight: true,
      ctaText: "Choisir l'offre Vitrine"
    },
    
    booking: {
      title: "Site Booking",
      subtitle: "Réservations en ligne simplifiées",
      price: "79€",
      period: "/mois",
      badge: null,
      description: "Restaurants, hôtels, coiffeurs, coachs, formateurs.",
      features: [
        { text: "Calendrier de réservation en ligne", included: true },
        { text: "Paiement ou acompte à la réservation", included: true },
        { text: "Gestion des disponibilités", included: true },
        { text: "Notifications par email/SMS", included: true },
        { text: "Synchronisation Google Calendar", included: true },
        { text: "Nom de domaine & hébergement inclus", included: true },
        { text: "Certificat SSL", included: true },
        { text: "Mises à jour incluses", included: true }
      ],
      highlight: false,
      ctaText: "Choisir l'offre Booking"
    },
    ecommerce: {
      title: "Site E-commerce",
      subtitle: "Vendez vos produits en ligne",
      price: "99€",
      period: "/mois",
      badge: null,
      description: "Boutiques, créateurs et commerçants.",
      features: [
        { text: "Catalogue produits illimité", included: true },
        { text: "Paiement en ligne (CB, PayPal, Stripe)", included: true },
        { text: "Gestion des stocks & commandes", included: true },
        { text: "Click & Collect ou Livraison", included: true },
        { text: "Emails automatiques clients", included: true },
        { text: "Nom de domaine & hébergement inclus", included: true },
        { text: "Certificat SSL", included: true },
        { text: "Mises à jour incluses", included: true }
      ],
      highlight: false,
      ctaText: "Choisir l'offre E-commerce"
    },
  };

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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="offres" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div variants={cardVariants} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Nos offres mensuelles
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Choisissez votre formule
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Abonnements tout compris : visibilité, vente en ligne ou réservations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto pt-6">
          {Object.entries(offers).map(([key, offer]) => (
            <motion.div
              key={key}
              variants={cardVariants}
              className={`relative bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                offer.highlight 
                  ? 'border-2 border-orange-500 scale-105 z-10' 
                  : 'border border-gray-200 hover:border-orange-300'
              }`}
              whileHover={{ y: -5 }}
            >
              {/* Badge */}
              {offer.badge && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-30">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-1" />
                    {offer.badge}
                  </div>
                </div>
              )}

              <div className="p-8 pt-12">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                  <p className="text-gray-600 mb-4">{offer.subtitle}</p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-orange-600">{offer.price}</span>
                      <span className="text-gray-500 text-lg ml-2">{offer.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm">{offer.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {offer.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  onClick={() => handleContactClick(key)}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center group ${
                    offer.highlight
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg'
                      : 'bg-gray-800 hover:bg-orange-500'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {offer.ctaText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mention en bas */}
        <p className="text-center text-sm text-gray-500 mt-10">
          *Tarifs indiqués toute taxes comprises, hors frais de mise en place uniques (voir FAQ).
        </p>
      </motion.div>
    </section>
  );
};

export default OffersSection;
