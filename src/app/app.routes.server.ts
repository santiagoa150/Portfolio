import { RenderMode, ServerRoute } from '@angular/ssr';

import { WORKS } from './context/works/data/work';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'works/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return WORKS.map((work) => ({ id: String(work.id) }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
