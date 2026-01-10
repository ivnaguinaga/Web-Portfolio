import { useTranslation } from 'react-i18next';
import { MapPin, Mail, Phone, Linkedin } from 'lucide-react';
import { Section } from '../ui/Section';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { personalInfo } from '../../data/personal';

export function About(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Section id="about" title={t('about.title')} subtitle={t('about.subtitle')}>
      <div className="grid md:grid-cols-2 gap-8">
        <AnimatedSection direction="left">
          <div className="space-y-6">
            <p className="text-lg text-[#2A2A2A] dark:text-[#F5F1E8] leading-relaxed">
              {t('about.description_1')}
            </p>
            <p className="text-lg text-[#6B6B6B] dark:text-[#A8A8A8] leading-relaxed">
              {t('about.description_2')}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.2}>
          <Card>
            <h3 className="text-xl font-bold text-[#2A2A2A] dark:text-[#F5F1E8] mb-6 flex items-center gap-2">
              {t('about.contact_info')}
              <span className="w-12 h-0.5 bg-[#D97757] dark:bg-[#E8895C]" />
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 border-2 border-[#D97757] dark:border-[#E8895C] clip-corner-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#D97757] dark:text-[#E8895C]" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-sm text-[#6B6B6B] dark:text-[#A8A8A8]">Location</p>
                  <p className="text-base font-medium text-[#2A2A2A] dark:text-[#F5F1E8]">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 border-2 border-[#00CFC1] dark:border-[#00F5E4] clip-corner-sm flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#00CFC1] dark:text-[#00F5E4]" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-sm text-[#6B6B6B] dark:text-[#A8A8A8]">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-base font-medium text-[#2A2A2A] dark:text-[#F5F1E8] hover:text-[#00CFC1] dark:hover:text-[#00F5E4] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 border-2 border-[#D97757] dark:border-[#E8895C] clip-corner-sm flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#D97757] dark:text-[#E8895C]" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-sm text-[#6B6B6B] dark:text-[#A8A8A8]">Phone</p>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-base font-medium text-[#2A2A2A] dark:text-[#F5F1E8] hover:text-[#D97757] dark:hover:text-[#E8895C] transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 border-2 border-[#00CFC1] dark:border-[#00F5E4] clip-corner-sm flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-5 h-5 text-[#00CFC1] dark:text-[#00F5E4]" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-sm text-[#6B6B6B] dark:text-[#A8A8A8]">LinkedIn</p>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-[#2A2A2A] dark:text-[#F5F1E8] hover:text-[#00CFC1] dark:hover:text-[#00F5E4] transition-colors"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </Section>
  );
}
