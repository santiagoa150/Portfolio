import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

/**
 * Route `data` shape read by {@link SeoService} to set the document title and
 * meta description on navigation. Routes that omit this (e.g. `works/:id`)
 * are expected to call {@link SeoService.setTitle}/{@link SeoService.setDescription}
 * themselves once their own content resolves.
 */
export interface SeoRouteData {
  readonly title?: string;
  readonly description?: string;
}

function deepestSnapshot(snapshot: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
  let current = snapshot;
  while (current.firstChild) {
    current = current.firstChild;
  }
  return current;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  init(): void {
    this.router
      .events.pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.applyFromRoute(this.router.routerState.snapshot.root));
  }

  setTitle(title: string): void {
    this.title.setTitle(title);
  }

  setDescription(description: string): void {
    this.meta.updateTag({ name: 'description', content: description });
  }

  private applyFromRoute(root: ActivatedRouteSnapshot): void {
    const data = deepestSnapshot(root).data as SeoRouteData;
    if (data.title) {
      this.setTitle(data.title);
    }
    if (data.description) {
      this.setDescription(data.description);
    }
  }
}
