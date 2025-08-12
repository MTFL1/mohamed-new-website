import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { motion } from 'framer-motion';

const FAQSection = () => {
const faqs = [
  {
    question: "Quelle est la différence entre l’Offre Zen et l’Offre One Shot ?",
    answer: "L’Offre Zen est un abonnement mensuel sans engagement qui inclut tout : hébergement, nom de domaine, mises à jour de sécurité, maintenance et support technique. L’Offre One Shot est un paiement unique pour la création de votre site, avec accompagnement à la mise en ligne et propriété immédiate du site. Vous gérez ensuite l’hébergement et le domaine."
  },
  {
    question: "Pourquoi choisir l’Offre Zen plutôt que l’Offre One Shot ?",
    answer: "Avec l’Offre Zen, vous n’avez à vous occuper de rien : je gère l’hébergement, le domaine, la sécurité et la maintenance. C’est idéal si vous voulez un site toujours à jour et performant sans avoir à gérer la partie technique."
  },
  {
    question: "Et pourquoi choisir l’Offre One Shot ?",
    answer: "L’Offre One Shot est parfaite si vous voulez devenir immédiatement propriétaire de votre site et préférez gérer vous-même l’hébergement et le domaine. Vous payez une seule fois et le site est à vous dès la livraison."
  },
  {
    question: "Puis-je arrêter l’Offre Zen à tout moment ?",
    answer: "L’Offre Zen est sans engagement avec des frais de dossier de 195€. Vous pouvez aussi choisir un engagement de 12 mois sans frais de dossier. Dans les deux cas, la propriété du site vous revient après 12 mois d’abonnement payés."
  },
  {
  question: "Quel type de site puis-je avoir ?",
  answer: "Vous avez accès à un site vitrine simple et efficace, généralement composé de 4 pages : une page d’accueil, une page présentation de votre activité, une page services ou produits, et une page contact. Ce site est conçu pour présenter votre entreprise de manière claire, professionnelle et accessible sur tous les supports (ordinateur, tablette, mobile)."
  },
  {
    question: "Combien de temps faut-il pour avoir mon site en ligne ?",
    answer: "En général, entre 7 et 10 jours ouvrés après validation du brief et réception des contenus. Pour l’Offre Zen, je m’occupe aussi de la mise en ligne et de toute la configuration technique."
  },
  {
    question: "Mon site sera-t-il responsive et moderne ?",
    answer: "Oui, tous les sites sont conçus en mobile-first et optimisés pour s’adapter à tous les écrans, avec un design moderne et des performances optimales."
  },
  {
    question: "Puis-je demander des modifications après la livraison ?",
    answer: "Avec l’Offre Zen, vous avez droit à 1 mise à jour de contenu gratuite par mois. Pour l’Offre One Shot, un mois de maintenance est inclus après la livraison."
  },
  {
    question: "Proposez-vous des fonctionnalités sur mesure ?",
    answer: "Oui, je peux intégrer des fonctionnalités spécifiques (boutique en ligne, réservation, formulaires avancés, etc.). Cela se fait sur devis, après étude précise de vos besoins."
  }
];

  // Animation variant pour l’apparition
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
   <motion.section 
      id="faq" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
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
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition-colors duration-300"
            >
              Envoyer un email
            </button>
            <button 
              onClick={() => window.open('https://wa.me/33000000000?text=Bonjour, j\'ai une question sur vos services', '_blank')}
              className="bg-white text-green-500 border-2 border-green-500 px-6 py-3 rounded-lg hover:bg-green-500 hover:text-white transition-colors duration-300"
            >
              WhatsApp direct
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;