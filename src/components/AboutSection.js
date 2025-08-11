import React from 'react';
import { Card, CardContent } from './ui/card';
import { MapPin, Award, Users, Clock } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Sites créés" },
    { icon: Award, value: "5 ans", label: "D'expérience" },
    { icon: Clock, value: "24h", label: "Temps de réponse" },
    { icon: MapPin, value: "Toulouse", label: "Basé à" }
  ];

  return (
    <section id="apropos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              À propos de Mohamed
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Bonjour ! Je suis <strong>Mohamed</strong>, développeur web freelance basé à <strong>Toulouse</strong>. 
                Depuis 5 ans, j'aide les entrepreneurs et petites entreprises à développer leur présence en ligne 
                avec des sites web professionnels et performants.
              </p>
              
              <p>
                Ma philosophie ? <strong>Simplicité et efficacité</strong>. Plutôt que de vous vendre un site cher 
                que vous devrez maintenir vous-même, je vous propose un service complet en abonnement. 
                Vous vous concentrez sur votre business, je m'occupe de votre site web.
              </p>
              
              <p>
                <strong>Humain et accessible</strong>, je reste votre interlocuteur unique tout au long de notre 
                collaboration. Chaque projet est unique et mérite une approche personnalisée.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-bold text-black text-lg">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-orange-100">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                      alt="Mohamed - Développeur Web Freelance"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-black mb-2">Mohamed</h3>
                  <p className="text-orange-500 font-semibold mb-4">Développeur Web Freelance</p>
                  <p className="text-gray-600 mb-6">
                    "Votre succès en ligne est ma priorité. Ensemble, créons un site web 
                    qui vous ressemble et qui convertit vos visiteurs en clients."
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={() => window.open('mailto:atelierdecember@gmail.com', '_self')}
                      className="flex-1 bg-black text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-colors duration-300 text-sm"
                    >
                      Envoyer un email
                    </button>
                    <button 
                      onClick={() => window.open('https://wa.me/33000000000', '_blank')}
                      className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-colors duration-300 text-sm"
                    >
                      WhatsApp
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;