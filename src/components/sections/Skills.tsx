import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { skillCategories, languages } from '../../data/skills';

const accentColors = ['#D97757', '#00CFC1', '#E8895C'] as const;

function getSkillColor(index: number): string {
  return accentColors[index % accentColors.length];
}

export function Skills(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Section id="skills" title={t('skills.title')} subtitle={t('skills.subtitle')}>
      <div className="space-y-8">
        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.category} delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
              <Card>
                <h3 className="text-xl font-bold text-[#2A2A2A] dark:text-[#F5F1E8] mb-4 flex items-center gap-2">
                  {t(category.category)}
                  <span className="flex-1 h-0.5 bg-[#D97757] dark:bg-[#E8895C]" />
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium bg-[#2A2A2A] dark:bg-[#F5F1E8] text-[#F5F1E8] dark:text-[#2A2A2A] clip-corner-sm relative group overflow-hidden"
                    >
                      <span className="relative z-10">{skill}</span>
                      <span
                        className="absolute inset-0 w-0 group-hover:w-full transition-all duration-300 clip-corner-sm"
                        style={{ backgroundColor: getSkillColor(skillIndex) }}
                      />
                    </span>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Languages */}
        <AnimatedSection delay={0.5}>
          <Card>
            <h3 className="text-xl font-bold text-[#2A2A2A] dark:text-[#F5F1E8] mb-6 flex items-center gap-2">
              {t('skills.languages')}
              <span className="flex-1 h-0.5 bg-[#00CFC1] dark:bg-[#00F5E4]" />
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {languages.map((lang) => (
                <div key={lang.language} className="flex items-center justify-between gap-4 p-4 border-2 border-[#E8E4D9] dark:border-[#3A3A3A] clip-corner-sm">
                  <span className="text-base font-medium text-[#2A2A2A] dark:text-[#F5F1E8]">
                    {t(lang.language)}
                  </span>
                  <span className="px-3 py-1 text-xs font-bold bg-[#00CFC1] dark:bg-[#00F5E4] text-white clip-corner-sm">
                    {t(lang.level)}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </Section>
  );
}
