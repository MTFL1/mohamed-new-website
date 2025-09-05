import React from 'react';
import { Card, CardContent } from './ui/card';
import Eddy from '../img/eddy2.webp';
import TontonTajwid from '../img/TontonTajwid.webp';
import HgbbStudio from '../img/HGBB_STUDIO.webp';

const PortfolioSection = () => {
  const projects = [
    {
      title: "HGBB STUDIO",
      sector: "Boutique de vêtements",
      description: "Site e-commerce avec catalogue produits",
      image: HgbbStudio
    },
    {
      title: "Cherif Eddy praticien",
      sector: "Praticien en médecine chinoise",
      description: "Site professionnel avec prise de rendez-vous",
      image: Eddy
    },
    {
      title: "Tonton Tajwid",
      sector: "Enseignement",
      description: "Présentation des prestations pour un enseignant",
      image: TontonTajwid
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Portfolio de réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques projets récents et leurs résultats concrets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-white border-0 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Contenu */}
              <CardContent className="p-4 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-orange-500 font-semibold uppercase tracking-wide">
                    {project.sector}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-2 flex-grow">
                  {project.description}
                </p>

               
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
