import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Check, Star } from 'lucide-react';

const OffersSection = () => {
  const handleContactClick = () => {
    window.open(
      'https://wa.me/33000000000?text=Bonjour, je souhaite en savoir plus sur vos offres',
      '_blank'
    );
  };

  const featuresWithCommitment = [
    "Design moderne et responsive (ordinateur + mobile)",
    "Nom de domaine inclus",
    "Hébergement sécurisé",
    "Certificat SSL",
    "Mises à jour de sécurité automatiques",
    "1 mise à jour de contenu gratuite par mois",
    "Support technique prioritaire",
    "Sauvegarde quotidienne",
    "Optimisation SEO de base",
    "Transfert de propriété du site après 12 mois"
  ];

  const featuresWithoutCommitment = [
    "Design moderne et responsive (ordinateur + mobile)",
    "Nom de domaine inclus",
    "Hébergement sécurisé",
    "Certificat SSL",
    "Mises à jour de sécurité automatiques",
    "1 mise à jour de contenu gratuite par mois",
    "Support technique prioritaire",
    "Sauvegarde quotidienne",
    "Optimisation SEO de base"
  ];

  return (
    <section id="offres" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Nos offres
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Deux formules adaptées à vos besoins, avec tous les services inclus
          </p>
        </div>

        {/* Cartes offres */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">

          {/* Offre avec engagement */}
          <Card className="relative bg-white border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-black">
                Avec engagement
              </CardTitle>
              <CardDescription className="text-gray-600">
                12 mois minimum
              </CardDescription>
              <div className="text-center py-4">
                <div className="text-4xl font-bold text-orange-500">95€</div>
                <div className="text-gray-600">/mois</div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {featuresWithCommitment.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full bg-gray-800 hover:bg-green-500 text-white transition-colors duration-300"
                onClick={handleContactClick}
              >
                Choisir cette offre
              </Button>
            </CardContent>
          </Card>

          {/* Séparateur */}
          <div className="flex items-center justify-center">
            <div className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
              Ou
            </div>
          </div>

          {/* Offre sans engagement */}
          <Card className="relative bg-white border-2 border-orange-500 hover:border-green-500 transition-all duration-300 hover:shadow-xl">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                <Star className="w-4 h-4 mr-1" />
                Populaire
              </div>
            </div>
            <CardHeader className="text-center pb-4 pt-6">
              <CardTitle className="text-2xl font-bold text-black">
                Sans engagement
              </CardTitle>
              <CardDescription className="text-gray-600">
                Liberté totale
              </CardDescription>
              <div className="text-center py-4">
                <div className="text-4xl font-bold text-black">95€</div>
                <div className="text-gray-600">/mois</div>
                <div className="text-orange-500 font-semibold mt-1">
                  + 195€ frais de dossier
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {featuresWithoutCommitment.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full bg-orange-500 hover:bg-green-500 text-white transition-colors duration-300"
                onClick={handleContactClick}
              >
                Choisir cette offre
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Note explicative */}
        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-3xl mx-auto">
            <strong>Tous les services inclus :</strong> pas de frais cachés, pas de surprises.<br />
            Dans l’offre avec engagement, <strong>le site vous appartient après 12 mois</strong>.<br />
            Dans l’offre sans engagement, <strong>vous devenez propriétaire si vous restez abonné pendant 12 mois consécutifs</strong>.<br />
            Une solution simple, transparente et avantageuse pour votre présence en ligne.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OffersSection;
