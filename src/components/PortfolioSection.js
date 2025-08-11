import React from 'react';
import { Card, CardContent } from './ui/card';
import { ExternalLink, TrendingUp } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: "Restaurant Gastronomique",
      sector: "Restauration",
      description: "Site vitrine avec système de réservation en ligne",
      results: "+45% de réservations",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["Responsive", "Réservation", "SEO"]
    },
    {
      title: "Cabinet Médical",
      sector: "Santé",
      description: "Site professionnel avec prise de rendez-vous",
      results: "+60% de nouveaux patients",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["RGPD", "Accessibilité", "Moderne"]
    },
    {
      title: "E-commerce Artisanal",
      sector: "Commerce",
      description: "Boutique en ligne pour artisan créateur",
      results: "+180% de ventes",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["E-commerce", "Paiement", "Mobile"]
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
            <Card key={index} className="group bg-white border-0 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <ExternalLink className="w-4 h-4 text-gray-700" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-orange-500 font-semibold uppercase tracking-wide">
                    {project.sector}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex items-center mb-4 p-3 bg-green-50 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-green-700 font-semibold text-sm">
                    {project.results}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;