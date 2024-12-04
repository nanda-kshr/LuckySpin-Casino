import React from 'react';
import { motion } from 'framer-motion';

interface CelebrationProps {
  isVisible: boolean;
}

export const Celebration: React.FC<CelebrationProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  const particles = Array.from({ length: 20 }).map((_, i) => ({
    x: Math.random() * 400 - 200,
    y: Math.random() * -200 - 100,
    rotation: Math.random() * 360,
    size: Math.random() * 8 + 4,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-white"
          initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
          animate={{
            x: particle.x,
            y: particle.y,
            opacity: 0,
            scale: particle.size / 4,
            rotate: particle.rotation,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: Math.random() * 0.2,
          }}
        />
      ))}
    </div>
  );
};