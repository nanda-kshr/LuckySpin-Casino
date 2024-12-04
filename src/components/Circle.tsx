import React from 'react';
import { Circle as CircleType } from '../types/game';
import { COLORS } from '../utils/colorUtils';
import { motion } from 'framer-motion';
import { CircleCurtain } from './CircleCurtain';

interface CircleProps {
  circle: CircleType;
  isRevealing?: boolean;
  isCorrect?: boolean;
}

export const Circle: React.FC<CircleProps> = ({ circle, isRevealing, isCorrect }) => {
  const variants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0.5,
      filter: 'brightness(0.5) blur(4px)',
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      filter: 'brightness(1) blur(0px)',
    },
    correct: {
      scale: [1, 1.2, 1],
      rotate: [0, 360],
      filter: 'brightness(1.2) blur(0px)',
      borderWidth: ['0px', '4px', '0px'],
      transition: { 
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }
    },
    incorrect: {
      scale: [1, 0.8, 1],
      filter: 'brightness(0.8) blur(2px)',
      x: [0, -10, 10, -10, 10, 0],
      transition: { 
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }
    }
  };

  return (
    <div className="relative">
      <motion.div
        className="absolute rounded-full overflow-hidden"
        initial="hidden"
        animate={isRevealing 
          ? (isCorrect ? "correct" : "incorrect")
          : "visible"
        }
        variants={variants}
        style={{
          backgroundColor: COLORS[circle.color],
          width: `${circle.size}px`,
          height: `${circle.size}px`,
          left: `${circle.x}%`,
          top: `${circle.y}%`,
          transform: 'translate(-50%, -50%)',
          opacity: circle.opacity,
          boxShadow: isRevealing && isCorrect 
            ? '0 0 30px rgba(255, 255, 255, 0.5)'
            : '0 0 15px rgba(0, 0, 0, 0.3)',
          borderColor: isRevealing && isCorrect ? 'white' : 'transparent',
        }}
      >
        <CircleCurtain isRevealing={isRevealing || false} />
      </motion.div>
    </div>
  );
};