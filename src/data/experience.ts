import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'CaixaBank',
    position: 'Operador Informático',
    location: 'Barcelona, España',
    startDate: '2023-09',
    endDate: '2025-11',
    current: false,
    responsibilities: [
      'maintenance_production',
      'monitoring_grafana',
      'automation_bash',
      'deployments_kubernetes',
    ],
  },
  {
    id: 'exp-2',
    company: 'Bits & Bytes Malta',
    position: 'Desarrollador Web',
    location: 'Malta',
    startDate: '2021-06',
    endDate: '2021-09',
    current: false,
    responsibilities: [
      'website_maintenance',
      'internal_apps',
      'database_management',
    ],
  },
];
