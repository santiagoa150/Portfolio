import { Routes } from '@angular/router';

import { environment } from '../environments/environment';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./context/home/ui/page/home/home.page').then((m) => m.Home),
    data: {
      title: $localize`:@@seo.home.title:Santiago Álvarez — Backend Software Engineer`,
      description: $localize`:@@seo.home.description:Portfolio of Santiago Álvarez, a backend-focused software engineer building APIs, microservices and distributed systems.`,
    },
  },
  {
    path: 'about',
    loadComponent: () => import('./context/about/ui/page/about/about.page').then((m) => m.About),
    data: {
      title: $localize`:@@seo.about.title:About — Santiago Álvarez`,
      description: $localize`:@@seo.about.description:Systems engineer and backend-focused software engineer with experience designing APIs, microservices and distributed systems.`,
    },
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./context/services/ui/page/services/services.page').then((m) => m.Services),
    data: {
      title: $localize`:@@seo.services.title:Services — Santiago Álvarez`,
      description: $localize`:@@seo.services.description:Backend development, API design and microservices architecture services offered by Santiago Álvarez.`,
    },
  },
  {
    path: 'works',
    loadComponent: () => import('./context/works/ui/page/works/works.page').then((m) => m.Works),
    data: {
      title: $localize`:@@seo.works.title:Works — Santiago Álvarez`,
      description: $localize`:@@seo.works.description:A selection of real full stack projects built by Santiago Álvarez, from earthquake damage reporting platforms to real-time multiplayer games.`,
    },
  },
  {
    path: 'works/:id',
    loadComponent: () =>
      import('./context/works/ui/page/work-detail/work-detail.page').then((m) => m.WorkDetail),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./context/contact/ui/page/contact/contact.page').then((m) => m.Contact),
    data: {
      title: $localize`:@@seo.contact.title:Contact — Santiago Álvarez`,
      description: $localize`:@@seo.contact.description:Get in touch with Santiago Álvarez to talk about your next backend, API or microservices project.`,
    },
  },
  // Dev-only design system showcase — excluded from production builds/routing.
  ...(environment.isDesignSystemEnabled
    ? [
        {
          path: 'design-system',
          loadComponent: () =>
            import('./context/design-system/ui/page/design-system/design-system.page').then(
              (m) => m.DesignSystem,
            ),
        },
      ]
    : []),
];
