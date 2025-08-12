import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const AtoutsCarousel = () => {
  const atouts = [
    "Hébergement",
    "Économie",
    "Tranquillité",
    "Design moderne",
    "Support technique",
    "Mises à jour"
  ];

  const repeatedAtouts = [...atouts, ...atouts, ...atouts, ...atouts, ...atouts, ...atouts, ...atouts];

  return (
    <section
      aria-label="Atouts"
      className="relative overflow-hidden"
      style={{
        backgroundColor: '#0a0a0a',
        boxShadow: '0 4px 15px rgba(255, 140, 0, 0.4)', // ombre orange
        height: '50px',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        zIndex: 20,
      }}
    >
      {/* Overlay dégradé orange chaud */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 30% 50%, rgba(255, 140, 0, 0.3), transparent 70%),' +
            'radial-gradient(circle at 70% 50%, rgba(255, 180, 50, 0.2), transparent 80%)',
          filter: 'blur(20px)',
          zIndex: 0,
        }}
      />

      <motion.div
        className="flex"
        animate={{ x: ['0%', '-75%'] }}
        transition={{ repeat: Infinity, repeatType: 'loop', duration: 100, ease: 'linear' }}
        style={{
          width: '400%',
          whiteSpace: 'nowrap',
          fontSize: '0.875rem',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {repeatedAtouts.map((point, index) => (
          <div
            key={index}
            className="flex items-center justify-center border-r border-gray-700 last:border-0"
            style={{
              display: 'inline-flex',
              padding: '0 24px',
              minWidth: '180px',
              boxSizing: 'border-box',
              gap: '8px',
              height: '50px',
              lineHeight: '50px',
            }}
          >
            <CheckCircle
              className="w-4 h-4 flex-shrink-0"
              style={{
                color: '#ff8c00', // orange vif
                filter: 'drop-shadow(0 0 6px #ff8c00)',
              }}
            />
            <span
              className="text-gray-300 font-normal whitespace-normal text-center"
              style={{ lineHeight: 'normal' }}
            >
              {point}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default AtoutsCarousel;
