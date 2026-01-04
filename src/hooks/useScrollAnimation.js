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

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
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

export const elegantEase = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};

export const slowReveal = {
  duration: 1.2,
  ease: [0.16, 1, 0.3, 1],
};
