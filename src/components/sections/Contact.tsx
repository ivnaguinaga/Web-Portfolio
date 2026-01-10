import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Mail, Phone, Linkedin, MapPin, ExternalLink } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { motion } from 'framer-motion';

export const Contact = () => {
  const { t } = useTranslation();

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'D97757',
      colorDark: 'E8895C',
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: '00CFC1',
      colorDark: '00F5E4',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: t('contact.linkedin_profile'),
      href: personalInfo.linkedin,
      color: 'D97757',
      colorDark: 'E8895C',
      external: true,
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: personalInfo.location,
      href: null,
      color: '00CFC1',
      colorDark: '00F5E4',
    },
  ];

  return (
    <Section id="contact" title={t('contact.title')} subtitle={t('contact.subtitle')}>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {contactItems.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={item.href ? { scale: 1.02 } : {}}
                className="h-full"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="block h-full p-6 bg-white dark:bg-[#1A1A1A] border-2 border-[#E8E4D9] dark:border-[#3A3A3A] clip-corner hover:border-[#D97757] dark:hover:border-[#E8895C] transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 flex items-center justify-center border-2 clip-corner-sm flex-shrink-0 group-hover:scale-110 transition-transform"
                        style={{
                          borderColor: `#${item.color}`,
                        }}
                      >
                        <item.icon
                          className="w-6 h-6"
                          style={{ color: `#${item.color}` }}
                          strokeWidth={2}
                        />
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
                  </a>
                ) : (
                  <div className="h-full p-6 bg-white dark:bg-[#1A1A1A] border-2 border-[#E8E4D9] dark:border-[#3A3A3A] clip-corner">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 flex items-center justify-center border-2 clip-corner-sm flex-shrink-0"
                        style={{
                          borderColor: `#${item.color}`,
                        }}
                      >
                        <item.icon
                          className="w-6 h-6"
                          style={{ color: `#${item.color}` }}
                          strokeWidth={2}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-[#6B6B6B] dark:text-[#A8A8A8] mb-1 uppercase tracking-wider">
                          {item.label}
                        </p>
                        <p className="text-base font-medium text-[#2A2A2A] dark:text-[#F5F1E8]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Optional CTA message */}
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
};
