import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
    ...options,
  });

  return { ref, isInView };
}

// Animation variants for consistent use across components
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Smooth spring transition
export const smoothSpring = {
  type: 'spring',
  damping: 25,
  stiffness: 100,
};

// Elegant ease transition
export const elegantEase = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};

// Slow reveal
export const slowReveal = {
  duration: 1.2,
  ease: [0.16, 1, 0.3, 1],
};
