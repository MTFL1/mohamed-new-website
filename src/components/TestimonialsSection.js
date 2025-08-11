import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sophie Martin",
      business: "Restaurant Le Petit Bistrot",
      content: "Depuis que Mohamed s'occupe de mon site, j'ai vu une augmentation de 40% des réservations en ligne. Le design est magnifique et tout fonctionne parfaitement !",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "Thomas Dubois",
      business: "Cabinet d'Architecture TD",
      content: "Service impeccable ! Mohamed est très réactif pour les mises à jour et m'a créé un site qui reflète parfaitement l'image de mon cabinet. Mes clients adorent.",
      rating: 5,
      avatar: "TD"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Ce que disent mes clients
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des entrepreneurs satisfaits qui me font confiance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 border-0 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start mb-4">
                  <Quote className="w-8 h-8 text-orange-500 mr-4 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-black">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.business}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;