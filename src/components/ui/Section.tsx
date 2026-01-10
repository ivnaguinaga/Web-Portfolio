import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

function SectionHeader({ title, subtitle }: Pick<SectionProps, 'title' | 'subtitle'>): JSX.Element {
  return (
    <div className="text-center mb-12 relative">
      <div className="flex items-center justify-center gap-4 mb-6">
        <span className="w-12 h-0.5 bg-[#D97757] dark:bg-[#E8895C]" />
        <span className="w-3 h-3 bg-[#00CFC1] dark:bg-[#00F5E4] clip-corner-sm rotate-45" />
        <span className="w-12 h-0.5 bg-[#D97757] dark:bg-[#E8895C]" />
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-[#2A2A2A] dark:text-[#F5F1E8] mb-4 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#D97757] to-[#00CFC1] dark:from-[#E8895C] dark:to-[#00F5E4] transform -skew-x-12" />
      </h2>

      {subtitle && (
        <p className="text-lg text-[#6B6B6B] dark:text-[#A8A8A8] max-w-2xl mx-auto mt-6">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Section({ id, title, subtitle, children, className }: SectionProps): JSX.Element {
  return (
    <section id={id} className={cn('section-container', className)}>
      <SectionHeader title={title} subtitle={subtitle} />
      {children}
    </section>
  );
}
