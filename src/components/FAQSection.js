import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Pourquoi choisir un abonnement plutôt qu'un achat unique ?",
      answer: "L'abonnement inclut tout : hébergement, nom de domaine, mises à jour de sécurité, maintenance technique et support. Plus besoin de vous soucier des aspects techniques, je m'occupe de tout pour que votre site reste performant et sécurisé."
    },
    {
      question: "Que se passe-t-il si je veux arrêter l'abonnement ?",
      answer: "Avec l'offre sans engagement, vous pouvez arrêter à tout moment avec un préavis d'un mois. Avec l'offre 12 mois, vous vous engagez pour la durée minimale. Dans tous les cas, vous récupérez vos contenus et nous facilitons la transition."
    },
    {
      question: "Combien de modifications puis-je demander par mois ?",
      answer: "Chaque abonnement inclut 1 mise à jour de contenu gratuite par mois (texte, image, prix, etc.). Pour des modifications plus importantes ou supplémentaires, nous établissons un devis sur mesure."
    },
    {
      question: "Mon site sera-t-il vraiment responsive et moderne ?",
      answer: "Absolument ! Tous les sites sont conçus mobile-first avec les dernières technologies. Ils s'adaptent parfaitement à tous les écrans et respectent les standards modernes de design et d'ergonomie."
    },
    {
      question: "Combien de temps pour avoir mon site en ligne ?",
      answer: "Entre 7 et 10 jours ouvrés après validation du brief et des contenus. La mise en ligne se fait ensuite en 24h avec tous les services inclus (domaine, hébergement, SSL)."
    },
    {
      question: "Et si j'ai besoin d'une fonctionnalité spécifique ?",
      answer: "Je peux intégrer des fonctionnalités sur mesure (boutique en ligne, réservation, formulaires avancés, etc.). Nous étudions ensemble vos besoins et adaptons l'offre si nécessaire."
    },
    {
      question: "Que comprend exactement la maintenance ?",
      answer: "Mises à jour de sécurité automatiques, sauvegardes quotidiennes, monitoring de performance, support technique prioritaire, et résolution rapide de tout problème technique."
    },
    {
      question: "Puis-je avoir des statistiques de mon site ?",
      answer: "Oui, j'installe Google Analytics et vous donne accès aux statistiques de fréquentation. Je peux aussi vous expliquer comment les interpréter pour optimiser votre présence en ligne."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Encore des questions, on est là pour vous aider.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Si vous vous posez des questions, on y répond ici !
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 hover:border-orange-500 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-black hover:text-orange-500 py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Vous avez d'autres questions ? N'hésitez pas à me contacter directement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('mailto:atelierdecumber@gmail.com', '_self')}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-green-500 transition-colors duration-300"
            >
              Envoyer un email
            </button>
            <button 
              onClick={() => window.open('https://wa.me/33000000000?text=Bonjour, j\'ai une question sur vos services', '_blank')}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition-colors duration-300"
            >
              WhatsApp direct
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;