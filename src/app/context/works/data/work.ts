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
  /** Shown at a small size in the list and full-width in the detail banner — use a landscape crop (e.g. the page's hero/fold), never a full-page screenshot, or it renders as an oddly tall strip. */
  readonly cover: Media;
  readonly techStack: TechStackItem[];
  readonly gallery: Media[];
  readonly deployUrl?: string;
}

const PYTHON: TechStackItem = { name: 'Python', icon: 'python' };
const POSTGRESQL: TechStackItem = { name: 'PostgreSQL', icon: 'postgresql' };
const MONGODB: TechStackItem = { name: 'MongoDB', icon: 'mongodb' };
const DOCKER: TechStackItem = { name: 'Docker', icon: 'docker' };
const ANGULAR: TechStackItem = { name: 'Angular', icon: 'angular' };
const NESTJS: TechStackItem = { name: 'NestJS', icon: 'nestjs' };
const FIREBASE: TechStackItem = { name: 'Firebase', icon: 'firebase' };
const TYPESCRIPT: TechStackItem = { name: 'TypeScript', icon: 'typescript' };
const TAILWIND: TechStackItem = { name: 'Tailwind CSS', icon: 'tailwindcss' };
const LEAFLET: TechStackItem = { name: 'Leaflet', icon: 'leaflet' };
const AMAZON_S3: TechStackItem = { name: 'Amazon S3', icon: 'amazons3' };
const REACT: TechStackItem = { name: 'React', icon: 'react' };
const VITE: TechStackItem = { name: 'Vite', icon: 'vite' };
const GRPC: TechStackItem = { name: 'gRPC', icon: 'grpc' };
const FASTAPI: TechStackItem = { name: 'FastAPI', icon: 'fastapi' };
const SSE: TechStackItem = { name: 'Server-Sent Events', icon: 'sse' };
const MUI: TechStackItem = { name: 'Material UI', icon: 'mui' };
const SOCKETIO: TechStackItem = { name: 'Socket.IO', icon: 'socketio' };

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
    category: $localize`:@@works.list.project2.category:Microservices Architecture`,
    title: $localize`:@@works.list.project2.title:Mercado Libre Clone`,
    description: $localize`:@@works.list.project2.description:A full clone of Mercado Libre's product detail page, backed by a real microservices architecture: an API gateway aggregates independent Products, Reviews, Sellers and Payments services that communicate over gRPC and follow the CQRS pattern. The React frontend reproduces the reference page in detail: image gallery, pricing, seller reputation, payment methods, specifications and a full reviews section with rating distribution.`,
    cover: {
      kind: 'image',
      src: 'images/works/meli-clone/product-samsung-cover.png',
      alt: $localize`:@@works.list.project2.cover.alt:Cloned Mercado Libre product page for a Samsung Galaxy A55, with gallery, price and seller information`,
    },
    techStack: [REACT, NESTJS, GRPC, TYPESCRIPT, TAILWIND, VITE, DOCKER],
    gallery: [
      {
        kind: 'image',
        src: 'images/works/meli-clone/product-samsung.png',
        alt: $localize`:@@works.list.project2.gallery.productSamsung.alt:Full cloned product page for the Samsung Galaxy A55, including specifications and reviews`,
      },
      {
        kind: 'image',
        src: 'images/works/meli-clone/product-laundry.png',
        alt: $localize`:@@works.list.project2.gallery.productLaundry.alt:Cloned product page for a different product, showing the layout adapts to any item`,
      },
      {
        kind: 'image',
        src: 'images/works/meli-clone/reviews-detail.png',
        alt: $localize`:@@works.list.project2.gallery.reviewsDetail.alt:Reviews section with the aggregated rating, distribution bars and individual comments`,
      },
      {
        kind: 'image',
        src: 'images/works/meli-clone/not-found.png',
        alt: $localize`:@@works.list.project2.gallery.notFound.alt:Branded not-found page for a product id that does not exist`,
      },
    ],
  },
  {
    id: 3,
    category: $localize`:@@works.list.project3.category:Sales Automation`,
    title: $localize`:@@works.list.project3.title:Novaventa Backoffice`,
    description: $localize`:@@works.list.project3.description:A management tool for a Novaventa catalog resale business (a Latin American direct-sales company). The backend integrates with Novaventa's own product catalog to pull real product data and pricing, tracks sales campaigns, clients and orders, and computes profit margins automatically. The Angular backoffice lets the reseller manage campaigns, clients and provider credentials, while payment receipts are generated for each order.`,
    cover: {
      kind: 'image',
      src: 'images/works/novaventa/hero-cover.png',
      alt: $localize`:@@works.list.project3.cover.alt:Novaventa Backoffice public landing page, offering easy receipts and order management for a catalog resale business`,
    },
    techStack: [ANGULAR, FASTAPI, PYTHON, MONGODB, SSE, TYPESCRIPT, TAILWIND, DOCKER],
    gallery: [
      {
        kind: 'image',
        src: 'images/works/novaventa/features.png',
        alt: $localize`:@@works.list.project3.gallery.features.alt:Landing page section listing the tool's benefits: simple, versatile and hassle-free`,
      },
      {
        kind: 'image',
        src: 'images/works/novaventa/campaign-products.png',
        alt: $localize`:@@works.list.project3.gallery.campaignProducts.alt:Campaign detail showing real catalog products with list price, catalog price and computed profit`,
      },
      {
        kind: 'image',
        src: 'images/works/novaventa/clients.png',
        alt: $localize`:@@works.list.project3.gallery.clients.alt:Client list for the reseller's business`,
      },
      {
        kind: 'image',
        src: 'images/works/novaventa/settings.png',
        alt: $localize`:@@works.list.project3.gallery.settings.alt:Settings screen for the provider authentication token and cart id`,
      },
    ],
  },
  {
    id: 4,
    category: $localize`:@@works.list.project4.category:Real-Time Multiplayer Game`,
    title: $localize`:@@works.list.project4.title:Apuntados`,
    description: $localize`:@@works.list.project4.description:A real-time multiplayer implementation of Apuntados, a Latin American card game, with user accounts, token-based betting per match, customizable card designs, and public or private rooms for 2 to 6 players. A NestJS backend validates every move through a rules engine and broadcasts state changes over Socket.IO, while the React frontend keeps every player's board in sync live.`,
    cover: {
      kind: 'image',
      src: 'images/works/apuntados/gameplay.png',
      alt: $localize`:@@works.list.project4.cover.alt:A match in progress with both players' cards on the table`,
    },
    techStack: [REACT, NESTJS, SOCKETIO, MONGODB, MUI, TYPESCRIPT, VITE],
    gallery: [
      {
        kind: 'image',
        src: 'images/works/apuntados/login-cover.png',
        alt: $localize`:@@works.list.project4.gallery.login.alt:Apuntados login and registration screen`,
      },
      {
        kind: 'image',
        src: 'images/works/apuntados/lobby.png',
        alt: $localize`:@@works.list.project4.gallery.lobby.alt:Lobby to create a new game or join an open public match`,
      },
      {
        kind: 'image',
        src: 'images/works/apuntados/card-designs.png',
        alt: $localize`:@@works.list.project4.gallery.cardDesigns.alt:Card back design picker with a full deck preview`,
      },
      {
        kind: 'image',
        src: 'images/works/apuntados/waiting-room.png',
        alt: $localize`:@@works.list.project4.gallery.waitingRoom.alt:Waiting room with both players connected, ready to start`,
      },
    ],
  },
  {
    id: 5,
    category: $localize`:@@works.list.project5.category:Multiverse Data Aggregation`,
    title: $localize`:@@works.list.project5.title:Multipokedex`,
    description: $localize`:@@works.list.project5.description:Multipokedex, a Pokédex-style platform that unifies the Pokémon and Rick and Morty universes into a single browsable catalog. A NestJS backend ingests and normalizes data from the public PokéAPI and Rick and Morty API into its own PostgreSQL database on first boot, then exposes it through a documented REST API with JWT-authenticated accounts. Signed-in users can register their own custom Pokémon and Rick and Morty characters, and edit or delete only the entries they created, while every visitor can browse, search and drill into detailed stat, move and evolution pages for the Pokémon universe.`,
    cover: {
      kind: 'image',
      src: 'images/works/multidex/pokemon-list-cover.png',
      alt: $localize`:@@works.list.project5.cover.alt:Pokémon universe catalog, showing entries imported from the public PokéAPI`,
    },
    techStack: [REACT, NESTJS, POSTGRESQL, TYPESCRIPT, TAILWIND, VITE, DOCKER],
    gallery: [
      {
        kind: 'image',
        src: 'images/works/multidex/rickandmorty-list.png',
        alt: $localize`:@@works.list.project5.gallery.rickandmortyList.alt:Rick and Morty universe catalog, with characters imported from the Rick and Morty API`,
      },
      {
        kind: 'image',
        src: 'images/works/multidex/pokemon-modal.png',
        alt: $localize`:@@works.list.project5.gallery.pokemonModal.alt:Quick-view modal for a Pokémon entry with its type, height and weight`,
      },
      {
        kind: 'image',
        src: 'images/works/multidex/pokemon-stats.png',
        alt: $localize`:@@works.list.project5.gallery.pokemonStats.alt:Full Pokémon detail page with base stats, move list and evolution line`,
      },
      {
        kind: 'image',
        src: 'images/works/multidex/create-pokemon.png',
        alt: $localize`:@@works.list.project5.gallery.createPokemon.alt:Form to register a custom Pokémon entry with its own stats and moves`,
      },
    ],
  },
];

export function getWorkById(id: number): Work | undefined {
  return WORKS.find((work) => work.id === id);
}
