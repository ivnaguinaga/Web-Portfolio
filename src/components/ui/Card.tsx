import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const baseStyles = 'relative bg-white dark:bg-[#1A1A1A] border-2 border-[#E8E4D9] dark:border-[#3A3A3A] clip-corner p-6';
const cornerAccentStyles = [
  'before:absolute before:top-0 before:left-0 before:w-12 before:h-12 before:border-l-2 before:border-t-2 before:border-[#D97757] dark:before:border-[#E8895C]',
  'after:absolute after:bottom-0 after:right-0 after:w-12 after:h-12 after:border-r-2 after:border-b-2 after:border-[#00CFC1] dark:after:border-[#00F5E4]',
].join(' ');
const hoverStyles = 'transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(217,119,87,0.3)]';

export function Card({ children, className, hover = true }: CardProps): JSX.Element {
  return (
    <div className={cn(baseStyles, cornerAccentStyles, hover && hoverStyles, className)}>
      {children}
    </div>
  );
}
