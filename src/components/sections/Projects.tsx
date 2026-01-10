import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import { Section } from '../ui/Section';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { projects } from '../../data/projects';

export function Projects(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Section id="projects" title={t('projects.title')} subtitle={t('projects.subtitle')}>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <AnimatedSection key={project.id} delay={index * 0.15} direction={index % 2 === 0 ? 'left' : 'right'}>
            <Card className="h-full flex flex-col">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#2A2A2A] dark:text-[#F5F1E8] mb-4">
                  {project.name}
                </h3>
                <p className="text-base text-[#6B6B6B] dark:text-[#A8A8A8] mb-6 leading-relaxed">
                  {t(project.description)}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-medium border-2 clip-corner-sm transition-colors"
                      style={{
                        borderColor: techIndex % 2 === 0 ? '#D97757' : '#00CFC1',
                        color: techIndex % 2 === 0 ? '#D97757' : '#00CFC1',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-auto">
                {project.url && (
                  <Button
                    onClick={() => window.open(project.url, '_blank')}
                    className="flex-1 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" strokeWidth={2} />
                    {t('projects.view_live')}
                  </Button>
                )}
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
