import { useTranslation } from 'react-i18next';
import { LucideIcon, Mail, Phone, Linkedin, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { AnimatedSection } from '../ui/AnimatedSection';
import { personalInfo } from '../../data/personal';

interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | null;
  color: string;
  external?: boolean;
}

interface ContactItemContentProps {
  item: ContactItem;
  isInteractive: boolean;
}

function ContactItemContent({ item, isInteractive }: ContactItemContentProps): JSX.Element {
  const Icon = item.icon;
  return (
    <div className="flex items-start gap-4">
      <div
        className={`w-12 h-12 flex items-center justify-center border-2 clip-corner-sm flex-shrink-0 ${isInteractive ? 'group-hover:scale-110 transition-transform' : ''}`}
        style={{ borderColor: `#${item.color}` }}
      >
        <Icon className="w-6 h-6" style={{ color: `#${item.color}` }} strokeWidth={2} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-[#6B6B6B] dark:text-[#A8A8A8] mb-1 uppercase tracking-wider">
          {item.label}
        </p>
        <p className="text-base font-medium text-[#2A2A2A] dark:text-[#F5F1E8] break-words">
          {item.value}
        </p>
      </div>
      {item.external && (
        <ExternalLink
          className="w-5 h-5 text-[#6B6B6B] dark:text-[#A8A8A8] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
          strokeWidth={2}
        />
      )}
    </div>
  );
}

const cardBaseStyles = 'h-full p-6 bg-white dark:bg-[#1A1A1A] border-2 border-[#E8E4D9] dark:border-[#3A3A3A] clip-corner';
const cardInteractiveStyles = 'hover:border-[#D97757] dark:hover:border-[#E8895C] transition-all duration-300 group';

export function Contact(): JSX.Element {
  const { t } = useTranslation();

  const contactItems: ContactItem[] = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'D97757',
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: '00CFC1',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: t('contact.linkedin_profile'),
      href: personalInfo.linkedin,
      color: 'D97757',
      external: true,
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: personalInfo.location,
      href: null,
      color: '00CFC1',
    },
  ];

  return (
    <Section id="contact" title={t('contact.title')} subtitle={t('contact.subtitle')}>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {contactItems.map((item, index) => (
            <AnimatedSection key={item.label} delay={index * 0.1}>
              <motion.div whileHover={item.href ? { scale: 1.02 } : {}} className="h-full">
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className={`block ${cardBaseStyles} ${cardInteractiveStyles}`}
                  >
                    <ContactItemContent item={item} isInteractive />
                  </a>
                ) : (
                  <div className={cardBaseStyles}>
                    <ContactItemContent item={item} isInteractive={false} />
                  </div>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 p-8 bg-gradient-to-br from-[#D97757]/5 to-[#00CFC1]/5 dark:from-[#E8895C]/5 dark:to-[#00F5E4]/5 border-2 border-[#D97757] dark:border-[#E8895C] clip-corner text-center">
            <p className="text-lg text-[#2A2A2A] dark:text-[#F5F1E8] font-medium">
              {t('contact.cta_message')}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
