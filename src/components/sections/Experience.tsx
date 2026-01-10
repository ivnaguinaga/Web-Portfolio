import { useTranslation } from 'react-i18next';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Section } from '../ui/Section';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { experiences } from '../../data/experience';

function formatDate(date: string, presentLabel: string): string {
  if (date === 'Present') return presentLabel;
  const [year, month] = date.split('-');
  return `${month}/${year}`;
}

export function Experience(): JSX.Element {
  const { t } = useTranslation();
  const presentLabel = t('common.present');

  return (
    <Section id="experience" title={t('experience.title')} subtitle={t('experience.subtitle')}>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <AnimatedSection key={exp.id} delay={index * 0.15} direction={index % 2 === 0 ? 'left' : 'right'}>
            <Card>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-12 h-12 border-2 border-[#D97757] dark:border-[#E8895C] clip-corner-sm flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-[#D97757] dark:text-[#E8895C]" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2A2A2A] dark:text-[#F5F1E8]">
                        {exp.position}
                      </h3>
                      <p className="text-lg font-medium text-[#D97757] dark:text-[#E8895C] mt-1">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#6B6B6B] dark:text-[#A8A8A8]">
                    <Calendar className="w-4 h-4" strokeWidth={2} />
                    <span className="text-sm font-medium">
                      {formatDate(exp.startDate, presentLabel)} - {formatDate(exp.endDate, presentLabel)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#6B6B6B] dark:text-[#A8A8A8]">
                    <MapPin className="w-4 h-4" strokeWidth={2} />
                    <span className="text-sm font-medium">{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="pl-0 lg:pl-15">
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-[#00CFC1] dark:bg-[#00F5E4] clip-corner-sm mt-2 flex-shrink-0" />
                      <span className="text-base text-[#2A2A2A] dark:text-[#F5F1E8]">
                        {t(`experience.responsibilities.${resp}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
