import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink, Users } from 'lucide-react';
import AntreConnaissance from '../img/logoNav.webp'
import Eddy from '../img/Eddy.webp'

const TestimonialsSection = () => {

  const testimonials = [
    {
      name: "L'Antre-connaissance",
      business: "Association culturelle",
      location: "Toulouse, France",
      content: "Nous voulions un site avec une identité forte, qui reflète l'identité de l'association. Après quelques aller-retours pour peaufiner les détails, nous sommes aujourd'hui fiers du résultat. Un accompagnement professionnel du début à la fin.",
      rating: 5,
      avatar: AntreConnaissance,
      highlight: "identité forte",
      projectType: "Site vitrine associatif",
      websiteUrl: "www.lantre-connaissance.com"
    },
    {
      name: "Eddy Cherif",
      business: "Praticien en médecine chinoise",
      location: "Toulouse, France", 
      content: "J'ai eu l'occasion de faire mon premier site professionnel avec Mohammed. L'accompagnement est top et le résultat correspond parfaitement à mes attentes. Un vrai partenaire pour développer ma présence en ligne !",
      rating: 5,
      avatar: Eddy,
      highlight: "accompagnement top",
      projectType: "Site médical professionnel",
      websiteUrl: "#"
    },
    {
      name: "Amine",
      business: "Enseignant",
      location: "Toulouse, France",
      content: "J'avais besoin d'une page vitrine pour présenter mes cours de manière simple et clair, le travail à été rapide et conforme à mes demandes. Je suis satisfait et je recommande.",
      rating: 5,
      avatar: "", 
      highlight: "service clé en main",
      projectType: "Site professionnel",
      websiteUrl: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div variants={cardVariants} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-6">
            <Users className="w-4 h-4 mr-2" />
            Témoignages clients
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ils me font 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"> confiance</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des entrepreneurs satisfaits qui développent leur business avec des sites web performants.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -5 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 hover:border-orange-500/30">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <Quote className="w-8 h-8 text-orange-500/60" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                {/* Project Type Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-medium mb-4">
                  {testimonial.projectType}
                </div>
                
                {/* Content */}
                <blockquote className="text-gray-200 text-lg leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-orange-500/20 bg-white flex items-center justify-center text-white font-bold">
                      {testimonial.avatar ? (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        testimonial.name.charAt(0) // fallback : première lettre
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.business}</div>
                      <div className="text-gray-500 text-xs">{testimonial.location}</div>
                    </div>
                  </div>
                  
                  {/* Website Link */}
                  <button
                    onClick={() => window.open(testimonial.websiteUrl, '_blank')}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-full bg-orange-500/20 hover:bg-orange-500/30 text-orange-400"
                    aria-label="Voir le site web"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
