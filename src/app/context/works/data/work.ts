import type { IconName } from '../../../shared/ui/icon/icon';

export interface TechStackItem {
  readonly name: string;
  readonly icon: IconName;
}

export interface Work {
  readonly id: number;
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly coverGradient: string;
  readonly techStack: TechStackItem[];
  readonly galleryGradients: string[];
  readonly deployUrl?: string;
}

const GO: TechStackItem = { name: 'Go', icon: 'go' };
const NODE: TechStackItem = { name: 'Node.js', icon: 'nodejs' };
const PYTHON: TechStackItem = { name: 'Python', icon: 'python' };
const JAVA: TechStackItem = { name: 'Java', icon: 'java' };
const PHP: TechStackItem = { name: 'PHP', icon: 'php' };
const POSTGRESQL: TechStackItem = { name: 'PostgreSQL', icon: 'postgresql' };
const MONGODB: TechStackItem = { name: 'MongoDB', icon: 'mongodb' };
const DOCKER: TechStackItem = { name: 'Docker', icon: 'docker' };
const KAFKA: TechStackItem = { name: 'Apache Kafka', icon: 'kafka' };
const REDIS: TechStackItem = { name: 'Redis', icon: 'redis' };
const DATADOG: TechStackItem = { name: 'Datadog', icon: 'datadog' };
const GRAFANA: TechStackItem = { name: 'Grafana', icon: 'grafana' };

export const WORKS: Work[] = [
  {
    id: 1,
    category: $localize`:@@works.list.project1.category:Test category`,
    title: $localize`:@@works.list.project1.title:Test project 1`,
    description: $localize`:@@works.list.project1.description:Test description for project 1. A real explanation of what the project does, the problem it solves and how it was built will go here.`,
    coverGradient: 'bg-linear-to-br from-brand-purple via-brand-coral to-brand-orange',
    techStack: [GO, POSTGRESQL, DOCKER, DATADOG],
    galleryGradients: [
      'bg-linear-to-r from-brand-purple via-brand-coral to-brand-orange',
      'bg-linear-to-l from-brand-orange via-brand-coral to-brand-purple',
      'bg-linear-to-t from-brand-coral via-brand-orange to-brand-purple',
      'bg-linear-to-b from-brand-purple via-brand-coral to-brand-orange',
    ],
    deployUrl: 'https://example.com',
  },
  {
    id: 2,
    category: $localize`:@@works.list.project2.category:Test category`,
    title: $localize`:@@works.list.project2.title:Test project 2`,
    description: $localize`:@@works.list.project2.description:Test description for project 2. A real explanation of what the project does, the problem it solves and how it was built will go here.`,
    coverGradient: 'bg-linear-to-tr from-brand-orange via-brand-coral to-brand-purple',
    techStack: [NODE, MONGODB, DOCKER],
    galleryGradients: [
      'bg-linear-to-r from-brand-orange via-brand-coral to-brand-purple',
      'bg-linear-to-l from-brand-purple via-brand-coral to-brand-orange',
      'bg-linear-to-t from-brand-orange via-brand-coral to-brand-purple',
      'bg-linear-to-b from-brand-coral via-brand-orange to-brand-purple',
    ],
  },
  {
    id: 3,
    category: $localize`:@@works.list.project3.category:Test category`,
    title: $localize`:@@works.list.project3.title:Test project 3`,
    description: $localize`:@@works.list.project3.description:Test description for project 3. A real explanation of what the project does, the problem it solves and how it was built will go here.`,
    coverGradient: 'bg-linear-to-b from-brand-coral via-brand-orange to-brand-purple',
    techStack: [PYTHON, POSTGRESQL, REDIS],
    galleryGradients: [
      'bg-linear-to-r from-brand-coral via-brand-orange to-brand-purple',
      'bg-linear-to-l from-brand-purple via-brand-orange to-brand-coral',
      'bg-linear-to-t from-brand-coral via-brand-purple to-brand-orange',
      'bg-linear-to-b from-brand-orange via-brand-coral to-brand-purple',
    ],
    deployUrl: 'https://example.com',
  },
  {
    id: 4,
    category: $localize`:@@works.list.project4.category:Test category`,
    title: $localize`:@@works.list.project4.title:Test project 4`,
    description: $localize`:@@works.list.project4.description:Test description for project 4. A real explanation of what the project does, the problem it solves and how it was built will go here.`,
    coverGradient: 'bg-linear-to-br from-brand-purple via-brand-coral to-brand-orange',
    techStack: [JAVA, KAFKA, DOCKER, GRAFANA],
    galleryGradients: [
      'bg-linear-to-r from-brand-purple via-brand-coral to-brand-orange',
      'bg-linear-to-l from-brand-orange via-brand-coral to-brand-purple',
      'bg-linear-to-t from-brand-coral via-brand-orange to-brand-purple',
      'bg-linear-to-b from-brand-purple via-brand-coral to-brand-orange',
    ],
  },
  {
    id: 5,
    category: $localize`:@@works.list.project5.category:Test category`,
    title: $localize`:@@works.list.project5.title:Test project 5`,
    description: $localize`:@@works.list.project5.description:Test description for project 5. A real explanation of what the project does, the problem it solves and how it was built will go here.`,
    coverGradient: 'bg-linear-to-tr from-brand-orange via-brand-coral to-brand-purple',
    techStack: [PHP, MONGODB, REDIS],
    galleryGradients: [
      'bg-linear-to-r from-brand-orange via-brand-coral to-brand-purple',
      'bg-linear-to-l from-brand-purple via-brand-coral to-brand-orange',
      'bg-linear-to-t from-brand-orange via-brand-coral to-brand-purple',
      'bg-linear-to-b from-brand-coral via-brand-orange to-brand-purple',
    ],
    deployUrl: 'https://example.com',
  },
  {
    id: 6,
    category: $localize`:@@works.list.project6.category:Test category`,
    title: $localize`:@@works.list.project6.title:Test project 6`,
    description: $localize`:@@works.list.project6.description:Test description for project 6. A real explanation of what the project does, the problem it solves and how it was built will go here.`,
    coverGradient: 'bg-linear-to-b from-brand-coral via-brand-orange to-brand-purple',
    techStack: [GO, KAFKA, DATADOG, GRAFANA],
    galleryGradients: [
      'bg-linear-to-r from-brand-coral via-brand-orange to-brand-purple',
      'bg-linear-to-l from-brand-purple via-brand-orange to-brand-coral',
      'bg-linear-to-t from-brand-coral via-brand-purple to-brand-orange',
      'bg-linear-to-b from-brand-orange via-brand-coral to-brand-purple',
    ],
  },
];

export function getWorkById(id: number): Work | undefined {
  return WORKS.find((work) => work.id === id);
}
