import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

type AnimationDirection = 'left' | 'right' | 'up' | 'down';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: AnimationDirection;
}

const directionOffsets: Record<AnimationDirection, { x: number; y: number }> = {
  left: { x: -50, y: 0 },
  right: { x: 50, y: 0 },
  up: { x: 0, y: 50 },
  down: { x: 0, y: -50 },
};

const springTransition = { type: 'spring', stiffness: 100, damping: 20 } as const;

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const initialOffset = directionOffsets[direction];
  const initialRotateX = direction === 'up' ? -10 : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initialOffset, rotateX: initialRotateX }}
      animate={isVisible ? { opacity: 1, x: 0, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay, ...springTransition }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
