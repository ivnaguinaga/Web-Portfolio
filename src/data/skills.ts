import { SkillCategory, Language } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'skills.skills_frontend',
    skills: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    category: 'skills.skills_backend',
    skills: ['PHP', 'Laravel', 'C', 'Node.js'],
  },
  {
    category: 'skills.skills_database',
    skills: ['MySQL', 'SQL Server'],
  },
  {
    category: 'skills.skills_devops',
    skills: ['Git', 'Kubernetes', 'Bash', 'Apache', 'Grafana', 'Red Hat', 'WebLogics'],
  },
  {
    category: 'skills.skills_methodologies',
    skills: ['Scrum', 'Kanban', 'ITIL'],
  },
];

export const languages: Language[] = [
  { language: 'skills.lang_spanish', level: 'skills.lang_native' },
  { language: 'skills.lang_catalan', level: 'skills.lang_native' },
  { language: 'skills.lang_english', level: 'skills.lang_high' },
];
