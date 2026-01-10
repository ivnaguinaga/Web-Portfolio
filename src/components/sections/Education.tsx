import { useTranslation } from 'react-i18next';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Section } from '../ui/Section';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { education } from '../../data/education';

export function Education(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Section id="education" title={t('education.title')} subtitle={t('education.subtitle')}>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <AnimatedSection key={edu.id} delay={index * 0.15} direction={index % 2 === 0 ? 'right' : 'left'}>
            <Card>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-12 h-12 border-2 border-[#00CFC1] dark:border-[#00F5E4] clip-corner-sm flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-[#00CFC1] dark:text-[#00F5E4]" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2A2A2A] dark:text-[#F5F1E8] mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-medium text-[#00CFC1] dark:text-[#00F5E4]">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#6B6B6B] dark:text-[#A8A8A8]">
                    <Calendar className="w-4 h-4" strokeWidth={2} />
                    <span className="text-sm font-medium">
                      {edu.startDate} - {edu.current ? t('common.present') : edu.endDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#6B6B6B] dark:text-[#A8A8A8]">
                    <MapPin className="w-4 h-4" strokeWidth={2} />
                    <span className="text-sm font-medium">{edu.location}</span>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
