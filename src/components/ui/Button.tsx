import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = 'relative font-medium transition-all duration-300 disabled:opacity-50 overflow-hidden group clip-corner';

  const variants = {
    primary: 'bg-[#D97757] dark:bg-[#E8895C] text-white hover:bg-[#C5654A] dark:hover:bg-[#D97757] border-2 border-[#D97757] dark:border-[#E8895C]',
    secondary: 'bg-[#2A2A2A] dark:bg-[#F5F1E8] text-[#F5F1E8] dark:text-[#2A2A2A] hover:bg-[#3A3A3A] dark:hover:bg-[#E8E4D9] border-2 border-[#2A2A2A] dark:border-[#F5F1E8]',
    outline: 'border-2 border-[#D97757] dark:border-[#E8895C] text-[#D97757] dark:text-[#E8895C] hover:bg-[#D97757] hover:text-white dark:hover:bg-[#E8895C] dark:hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {/* Slide-in underline effect */}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00CFC1] dark:bg-[#00F5E4] transition-all duration-300 group-hover:w-full" />
    </button>
  );
};
