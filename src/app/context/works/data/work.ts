import type { IconName } from '../../../shared/ui/icon/icon';

export interface TechStackItem {
  readonly name: string;
  readonly icon: IconName;
}

export type Media =
  | { readonly kind: 'gradient'; readonly gradientClass: string }
  | { readonly kind: 'image'; readonly src: string; readonly alt: string };

export interface Work {
  readonly id: number;
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly cover: Media;
  readonly techStack: TechStackItem[];
  readonly gallery: Media[];
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
const ANGULAR: TechStackItem = { name: 'Angular', icon: 'angular' };
const NESTJS: TechStackItem = { name: 'NestJS', icon: 'nestjs' };
const FIREBASE: TechStackItem = { name: 'Firebase', icon: 'firebase' };
const TYPESCRIPT: TechStackItem = { name: 'TypeScript', icon: 'typescript' };
const TAILWIND: TechStackItem = { name: 'Tailwind CSS', icon: 'tailwindcss' };
const LEAFLET: TechStackItem = { name: 'Leaflet', icon: 'leaflet' };
const AMAZON_S3: TechStackItem = { name: 'Amazon S3', icon: 'amazons3' };

export const WORKS: Work[] = [
  {
    id: 1,
    category: $localize`:@@works.list.project1.category:Full Stack Development`,
    title: $localize`:@@works.list.project1.title:SISMATES`,
    description: $localize`:@@works.list.project1.description:SISMATES (Structural Damage Monitoring, Triage and Follow-up System) is a web platform for citizen reporting, tracking, evaluation and prioritization of structural damage visible after an earthquake. It centralizes location, photographic evidence, reports and professional evaluations on an interactive map, with a continuous 0-10 triage flow and three access tiers: citizens, verified professionals and licensed professionals.`,
    cover: {
      kind: 'image',
      src: 'images/works/sismates/landing-hero.png',
      alt: $localize`:@@works.list.project1.cover.alt:SISMATES public landing page hero, with its value proposition and a live triage score example`,
    },
    techStack: [ANGULAR, NESTJS, MONGODB, FIREBASE, TYPESCRIPT, TAILWIND, LEAFLET, AMAZON_S3, DOCKER],
    gallery: [
      {
        kind: 'image',
        src: 'images/works/sismates/landing-purpose.png',
        alt: $localize`:@@works.list.project1.gallery.landingPurpose.alt:Landing page section explaining the problem SISMATES solves`,
      },
      {
        kind: 'image',
        src: 'images/works/sismates/landing-process.png',
        alt: $localize`:@@works.list.project1.gallery.landingProcess.alt:Landing page section showing the three-step reporting flow`,
      },
      {
        kind: 'image',
        src: 'images/works/sismates/landing-people.png',
        alt: $localize`:@@works.list.project1.gallery.landingPeople.alt:Landing page section describing the three user tiers`,
      },
      {
        kind: 'image',
        src: 'images/works/sismates/create-form-photos.png',
        alt: $localize`:@@works.list.project1.gallery.createPhotos.alt:Citizen report form: photo evidence guidelines and upload`,
      },
      {
        kind: 'image',
        src: 'images/works/sismates/create-form-location.png',
        alt: $localize`:@@works.list.project1.gallery.createLocation.alt:Citizen report form: location picker on the map`,
      },
      {
        kind: 'image',
        src: 'images/works/sismates/detail-actions.png',
        alt: $localize`:@@works.list.project1.gallery.detailActions.alt:Damage report detail view with professional evaluation actions`,
      },
      {
        kind: 'image',
        src: 'images/works/sismates/detail-reports.png',
        alt: $localize`:@@works.list.project1.gallery.detailReports.alt:Damage report detail view showing the citizen reports timeline`,
      },
      {
        kind: 'image',
        src: 'images/works/sismates/map-popup.png',
        alt: $localize`:@@works.list.project1.gallery.mapPopup.alt:Map marker popup with a report summary`,
      },
      {
        kind: 'image',
        src: 'images/works/sismates/review-modal.png',
        alt: $localize`:@@works.list.project1.gallery.reviewModal.alt:Professional review modal with the triage score slider`,
      },
    ],
    deployUrl: 'https://sismates.pages.dev/',
  },
  {
    id: 2,
    category: $localize`:@@works.list.project2.category:Test category`,
    title: $localize`:@@works.list.project2.title:Test project 2`,
    description: $localize`:@@works.list.project2.description:Test description for project 2. A real explanation of what the project does, the problem it solves and how it was built will go here.`,
    cover: {
      kind: 'gradient',
      gradientClass: 'bg-linear-to-tr from-brand-orange via-brand-coral to-brand-purple',
    },
    techStack: [NODE, MONGODB, DOCKER],
    gallery: [
      { kind: 'gradient', gradientClass: 'bg-linear-to-r from-brand-orange via-brand-coral to-brand-purple' },
      { kind: 'gradient', gradientClass: 'bg-linear-to-l from-brand-purple via-brand-coral to-brand-orange' },
      { kind: 'gradient', gradientClass: 'bg-linear-to-t from-brand-orange via-brand-coral to-brand-purple' },
      { kind: 'gradient', gradientClass: 'bg-linear-to-b from-brand-coral via-brand-orange to-brand-purple' },
    ],
  },
  {
    id: 3,
    category: $localize`:@@works.list.project3.category:Test category`,
    title: $localize`:@@works.list.project3.title:Test project 3`,
    description: $localize`:@@works.list.project3.description:Test description for project 3. A real explanation of what the project does, the problem it solves and how it was built will go here.`,
    cover: {
      kind: 'gradient',
      gradientClass: 'bg-linear-to-b from-brand-coral via-brand-orange to-brand-purple',
    },
    techStack: [PYTHON, POSTGRESQL, REDIS],
    gallery: [
      { kind: 'gradient', gradientClass: 'bg-linear-to-r from-brand-coral via-brand-orange to-brand-purple' },
      { kind: 'gradient', gradientClass: 'bg-linear-to-l from-brand-purple via-brand-orange to-brand-coral' },
      { kind: 'gradient', gradientClass: 'bg-linear-to-t from-brand-coral via-brand-purple to-brand-orange' },
      { kind: 'gradient', gradientClass: 'bg-linear-to-b from-brand-orange via-brand-coral to-brand-purple' },
    ],
    deployUrl: 'https://example.com',
  },
  {
    id: 4,
    category: $localize`:@@works.list.project4.category:Test category`,
    title: $localize`:@@works.list.project4.title:Test project 4`,
    description: $localize`:@@works.list.project4.description:Test description for project 4. A real explanation of what the project does, the problem it solves and how it was built will go here.`,
    cover: {
      kind: 'gradient',
      gradientClass: 'bg-linear-to-br from-brand-purple via-brand-coral to-brand-orange',
    },
    techStack: [JAVA, KAFKA, DOCKER, GRAFANA],
    gallery: [
      { kind: 'gradient', gradientClass: 'bg-linear-to-r from-brand-purple via-brand-coral to-brand-orange' },
      { kind: 'gradient', gradientClass: 'bg-linear-to-l from-brand-orange via-brand-coral to-brand-purple' },
      { kind: 'gradient', gradientClass: 'bg-linear-to-t from-brand-coral via-brand-orange to-brand-purple' },
      { kind: 'gradient', gradientClass: 'bg-linear-to-b from-brand-purple via-brand-coral to-brand-orange' },
    ],
  },
  {
    id: 5,
    category: $localize`:@@works.list.project5.category:Test category`,
    title: $localize`:@@works.list.project5.title:Test project 5`,
    description: $localize`:@@works.list.project5.description:Test description for project 5. A real explanation of what the project does, the problem it solves and how it was built will go here.`,
    cover: {
      kind: 'gradient',
      gradientClass: 'bg-linear-to-tr from-brand-orange via-brand-coral to-brand-purple',
    },
    techStack: [PHP, MONGODB, REDIS],
    gallery: [
      { kind: 'gradient', gradientClass: 'bg-linear-to-r from-brand-orange via-brand-coral to-brand-purple' },
      { kind: 'gradient', gradientClass: 'bg-linear-to-l from-brand-purple via-brand-coral to-brand-orange' },
      { kind: 'gradient', gradientClass: 'bg-linear-to-t from-brand-orange via-brand-coral to-brand-purple' },
      { kind: 'gradient', gradientClass: 'bg-linear-to-b from-brand-coral via-brand-orange to-brand-purple' },
    ],
    deployUrl: 'https://example.com',
  },
  {
    id: 6,
    category: $localize`:@@works.list.project6.category:Test category`,
    title: $localize`:@@works.list.project6.title:Test project 6`,
    description: $localize`:@@works.list.project6.description:Test description for project 6. A real explanation of what the project does, the problem it solves and how it was built will go here.`,
    cover: {
      kind: 'gradient',
      gradientClass: 'bg-linear-to-b from-brand-coral via-brand-orange to-brand-purple',
    },
    techStack: [GO, KAFKA, DATADOG, GRAFANA],
    gallery: [
      { kind: 'gradient', gradientClass: 'bg-linear-to-r from-brand-coral via-brand-orange to-brand-purple' },
      { kind: 'gradient', gradientClass: 'bg-linear-to-l from-brand-purple via-brand-orange to-brand-coral' },
      { kind: 'gradient', gradientClass: 'bg-linear-to-t from-brand-coral via-brand-purple to-brand-orange' },
      { kind: 'gradient', gradientClass: 'bg-linear-to-b from-brand-orange via-brand-coral to-brand-purple' },
    ],
  },
];

export function getWorkById(id: number): Work | undefined {
  return WORKS.find((work) => work.id === id);
}
