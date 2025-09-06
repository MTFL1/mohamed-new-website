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
      question: "Quelles sont les différences entre vos 3 offres ?",
      answer: "L’Offre Site Vitrine (49€/mois) est idéale pour présenter votre activité de manière professionnelle (artisans, indépendants, petites entreprises). L’Offre Booking (79€/mois) ajoute un système complet de réservation en ligne (restaurants, hôtels, coiffeurs, coachs, formateurs). L’Offre E-commerce (99€/mois) permet de vendre vos produits en ligne avec gestion des stocks, paiements sécurisés et commandes."
    },
    {
      question: "Y a-t-il des frais supplémentaires ?",
      answer: "Oui, un frais de mise en place unique est à prévoir lors de la commande. Il couvre la configuration initiale (installation technique, paramétrage du domaine, certificat SSL, design personnalisé). Ce frais est facturé une seule fois et permet de lancer votre site dans les meilleures conditions."
    },
    {
      question: "Puis-je arrêter mon abonnement à tout moment ?",
      answer: "Oui, nos abonnements sont sans engagement. Vous pouvez arrêter quand vous le souhaitez. Cependant, tant que l’abonnement n’est pas actif, nous assurons l’hébergement, la sécurité et la maintenance de votre site."
    },
    {
      question: "Combien de temps faut-il pour avoir mon site en ligne ?",
      answer: "En moyenne, il faut entre 7 et 10 jours ouvrés après validation du brief et réception de vos contenus (textes, images, logo)."
    },
    {
      question: "Mon site sera-t-il responsive et moderne ?",
      answer: "Oui, tous les sites sont conçus en mobile-first, s’adaptent à tous les écrans (ordinateur, tablette, smartphone) et respectent les standards actuels de design."
    },
    {
      question: "Puis-je demander des modifications après la mise en ligne ?",
      answer: "Oui, vous pouvez demander des modifications ou ajouts. Selon leur ampleur, elles peuvent être incluses dans l’abonnement ou faire l’objet d’un devis complémentaire."
    },
    {
      question: "Proposez-vous des fonctionnalités sur mesure ?",
      answer: "Oui, il est possible d’ajouter des fonctionnalités spécifiques (formulaires avancés, intégrations externes, systèmes personnalisés). Cela se fait sur devis après étude de vos besoins."
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
            Encore des questions ? On est là pour vous aider.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Si vous vous posez une question, vous trouverez sûrement la réponse ici !
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
              onClick={() => window.open('https://wa.me/33627235976?text=Bonjour, j\'ai une question sur vos services', '_blank')}
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
