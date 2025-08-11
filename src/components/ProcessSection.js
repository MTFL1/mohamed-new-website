import React from 'react';
import { Card, CardContent } from './ui/card';
import { MessageCircle, Palette, Rocket, HeadphonesIcon } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "1. Appel découverte",
      description: "Discussion de vos besoins, de votre secteur et de vos objectifs. Totalement gratuit et sans engagement.",
      duration: "30 min"
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

  return (
    <section id="fonctionnement" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Comment ça fonctionne ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un processus simple et transparent, de l'idée à la mise en ligne
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="relative bg-gray-50 border-0 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 relative">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200">
                        <div className="absolute right-0 top-0 w-2 h-2 bg-gray-300 rounded-full transform translate-x-1 -translate-y-0.5"></div>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-black mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-semibold">
                    {step.duration}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            <strong>Démarrage rapide :</strong> Votre site peut être en ligne en moins de 2 semaines. 
            Ensuite, profitez d'un service de maintenance sans souci.
          </p>
          <button 
            onClick={() => window.open('https://calendly.com/placeholder', '_blank')}
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-green-500 transition-colors duration-300 inline-flex items-center"
          >
            Commencer maintenant
            <MessageCircle className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;