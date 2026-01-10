export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  photo: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  responsibilities: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  github?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Language {
  language: string;
  level: string;
}

export type Theme = 'light' | 'dark';
export type Locale = 'es' | 'en' | 'ca';
