import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, MessageCircle, X } from 'lucide-react';

const OffersSection = () => {

  const handleContactClick = (offerType) => {
    const messages = {
      zen: 'Bonjour, je souhaite en savoir plus sur l\'offre Zen (95€/mois).',
      starter: 'Bonjour, je souhaite en savoir plus sur l\'offre Starter (995€).'
    };
    window.open(`https://wa.me/33627235976?text=${encodeURIComponent(messages[offerType])}`, '_blank');
  };

  const offers = {
    zen: {
      title: "Offre Zen",
      subtitle: "On s'occupe de tout",
      price: "95€",
      period: "/mois",
      badge: "Populaire",
      description: "Solution complète avec maintenance incluse",
      features: [
        { text: "Design moderne et responsive", included: true },
        { text: "Nom de domaine inclus", included: true },
        { text: "Hébergement sécurisé inclus", included: true },
        { text: "Certificat SSL gratuit", included: true },
        { text: "Mises à jour automatiques", included: true },
        { text: "1 modification/mois incluse", included: true },
        { text: "Support technique prioritaire", included: true },
        { text: "Sauvegarde quotidienne", included: true },
        { text: "Optimisation SEO de base", included: true },
        { text: "Propriété après 12 mois", included: true }
      ],
      highlight: true,
      ctaText: "Choisir l'offre Zen",
      savings: "Économisez 300€ la première année"
    },
    starter: {
      title: "Offre Starter",
      subtitle: "Vous gérez l'hébergement",
      price: "995€",
      period: "TTC",
      badge: null,
      description: "Site professionnel, hébergement à votre charge",
      features: [
        { text: "Design moderne et responsive", included: true },
        { text: "Optimisation SEO de base", included: true },
        { text: "1 mois de maintenance", included: true },
        { text: "Formation à la gestion", included: true },
        { text: "Propriété immédiate", included: true },
        { text: "Hébergement inclus", included: false },
        { text: "Nom de domaine inclus", included: false },
        { text: "Support continu", included: false }
      ],
      highlight: false,
      ctaText: "Choisir l'offre Starter",
      note: "Hébergement et domaine à prévoir (~100€/an)"
    }
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
            Offres simplifiées
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Choisissez votre formule
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexibilité totale ou gestion complète, nous nous adaptons à vos besoins et votre budget.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto pt-6">
          {Object.entries(offers).map(([key, offer]) => (
            <motion.div
              key={key}
              variants={cardVariants}
              className={`relative bg-white rounded-2xl shadow-lg overflow-visible transition-all duration-300 hover:shadow-xl ${
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
                    {offer.savings && (
                      <div className="text-green-600 font-semibold text-sm mt-2">
                        {offer.savings}
                      </div>
                    )}
                    {offer.note && (
                      <div className="text-gray-500 text-sm mt-2">
                        {offer.note}
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-sm">{offer.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {offer.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${
                        feature.included ? 'text-gray-700' : 'text-gray-400 line-through'
                      }`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
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

                {/* Secondary CTA for highlighted offer */}
                {offer.highlight && (
                  <div className="text-center mt-4">
                    <button
                      onClick={() => window.open('tel:+33627235976', '_self')}
                      className="text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
                    >
                      Ou appelez directement : 06 27 23 59 76
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          variants={cardVariants}
          className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Pas sûr de votre choix ?
          </h3>
          <p className="text-gray-600 mb-6">
            Discutons de vos besoins lors d'un appel gratuit de 15 minutes
          </p>
          <motion.button
            onClick={() => window.open('https://calendly.com/placeholder', '_blank')}
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Réserver un appel gratuit
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OffersSection;