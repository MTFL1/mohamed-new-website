import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const OffersSection = () => {
  const handleContactClick = (offre) => {
    const msg =
      offre === 'mensuel'
        ? 'Bonjour, je souhaite en savoir plus sur l’offre mensuelle sans engagement.'
        : 'Bonjour, je souhaite en savoir plus sur l’offre paiement complet.';
    window.open(`https://wa.me/33000000000?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const monthlyFeatures = [
    "Design moderne et responsive (ordinateur + mobile)",
    "Nom de domaine inclus",
    "Hébergement sécurisé inclus",
    "Certificat SSL",
    "Mises à jour de sécurité automatiques",
    "1 mise à jour de contenu gratuite par mois",
    "Support technique prioritaire",
    "Sauvegarde quotidienne",
    "Optimisation SEO de base",
    "Propriété du site au bout de 12 mois",
    "*Avec ou sans engagement, voir conditions"
  ];

  const fullPaymentFeatures = [
    "Design moderne et responsive (ordinateur + mobile)",
    "Optimisation SEO de base",
    "Hors hébergement et nom de domaine",
    "1 mois de maintenance comprise",
    "Accompagnement pour la mise en ligne",
    "Propriété du site immédiate",
    "*Hors hébergement et nom de domaine"
  ];

  // Animation variant pour l’apparition
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="offres"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Nos offres simplifiées</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choisissez entre flexibilité et gestion complète, selon vos besoins.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">

        {/* Offre mensuelle sans engagement */}
        <Card className="bg-white border-2 border-orange-500 hover:border-green-500 transition-all duration-300 hover:shadow-xl relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Populaire
            </div>
          </div>
          <CardHeader className="text-center pb-4 pt-6">
            <CardTitle className="text-2xl font-bold text-black">Offre Zen</CardTitle>
            <CardDescription className="text-gray-600">On s'occupe de tout.</CardDescription>
            <div className="text-center py-4">
              <div className="text-5xl font-bold text-orange-500">95€</div>
              <div className="text-gray-600 text-lg">/ mois*</div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6 text-left">
              {monthlyFeatures.map((feature, i) => (
                <li key={i} className="flex items-start">
                  {i !== monthlyFeatures.length - 1 && (
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  )}
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              className="w-full bg-orange-500 hover:bg-green-600 text-white transition-colors duration-300"
              onClick={() => handleContactClick('mensuel')}
            >
              Je choisis l’offre mensuelle
            </Button>
          </CardContent>
        </Card>

        {/* Offre paiement complet */}
        <Card className="bg-white border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="text-center pb-4 pt-6">
            <CardTitle className="text-2xl font-bold text-black">One shot</CardTitle>
            <CardDescription className="text-gray-600">Il vous faut un site, le reste vous gérer.</CardDescription>
            <div className="text-center py-4">
              <div className="text-5xl font-bold text-orange-500">970€</div>
              <div className="text-gray-600 text-lg">TTC*</div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6 text-left">
              {fullPaymentFeatures.map((feature, i) => (
                <li key={i} className="flex items-start">
                  {i !== fullPaymentFeatures.length - 1 && (
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  )}
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              className="w-full bg-gray-800 hover:bg-green-500 text-white transition-colors duration-300"
              onClick={() => handleContactClick('full')}
            >
              je choisis l'offre one shot
            </Button>
          </CardContent>
        </Card>

      </div>
    </motion.section>
  );
};

export default OffersSection;
