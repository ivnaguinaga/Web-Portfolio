import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
}

export const AnimatedSection = ({
  children,
  className,
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const directionVariants = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: 50 },
    down: { x: 0, y: -50 },
  };

  const initialPosition = directionVariants[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initialPosition, rotateX: direction === 'up' ? -10 : 0 }}
      animate={isVisible ? {
        opacity: 1,
        x: 0,
        y: 0,
        rotateX: 0,
      } : {}}
      transition={{
        duration: 0.6,
        delay,
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
