import React from 'react';
import { motion } from 'framer-motion';

interface CircleCurtainProps {
  isRevealing: boolean;
}

export const CircleCurtain: React.FC<CircleCurtainProps> = ({ isRevealing }) => {
  const variants = {
    hidden: {
      clipPath: 'circle(100%)',
      background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.8) 100%)',
    },
    reveal: {
      clipPath: 'circle(0%)',
      background: 'radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,0) 100%)',
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial="hidden"
      animate={isRevealing ? "reveal" : "hidden"}
      variants={variants}
    />
  );
};