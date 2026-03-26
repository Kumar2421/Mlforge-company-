import React, { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const prefersReducedMotion = useReducedMotion();

  const directions = {
    up: { y: prefersReducedMotion ? 0 : 50, x: 0 },
    down: { y: prefersReducedMotion ? 0 : -50, x: 0 },
    left: { x: prefersReducedMotion ? 0 : 50, y: 0 },
    right: { x: prefersReducedMotion ? 0 : -50, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 20,
        duration: 0.8,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};
