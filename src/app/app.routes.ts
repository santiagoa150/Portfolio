import { Routes } from '@angular/router';

import { environment } from '../environments/environment';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./context/home/ui/page/home/home.page').then((m) => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('./context/about/ui/page/about/about.page').then((m) => m.About),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./context/services/ui/page/services/services.page').then((m) => m.Services),
  },
  {
    path: 'works',
    loadComponent: () => import('./context/works/ui/page/works/works.page').then((m) => m.Works),
  },
  {
    path: 'blog',
    loadComponent: () => import('./context/blog/ui/page/blog/blog.page').then((m) => m.Blog),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./context/contact/ui/page/contact/contact.page').then((m) => m.Contact),
  },
  // Dev-only design system showcase — excluded from production builds/routing.
  ...(environment.NODE_ENV === 'development'
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
