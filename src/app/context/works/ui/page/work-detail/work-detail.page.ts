import { DOCUMENT } from '@angular/common';
import { Component, HostListener, computed, effect, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Media, getWorkById } from '../../../data/work';
import { Button } from '../../../../../shared/ui/button/button';
import { Icon } from '../../../../../shared/ui/icon/icon';
import { SeoService } from '../../../../../shared/infra/seo/seo.service';

const LIGHTBOX_TRANSITION_MS = 300;
const META_DESCRIPTION_MAX_LENGTH = 155;

function truncateForMetaDescription(text: string): string {
  if (text.length <= META_DESCRIPTION_MAX_LENGTH) {
    return text;
  }
  const truncated = text.slice(0, META_DESCRIPTION_MAX_LENGTH);
  const lastSpace = truncated.lastIndexOf(' ');
  return `${truncated.slice(0, lastSpace)}…`;
}

@Component({
  selector: 'app-work-detail',
  imports: [Button, Icon, RouterLink],
  templateUrl: './work-detail.page.html',
})
export class WorkDetail {
  private readonly document = inject(DOCUMENT);
  private readonly seo = inject(SeoService);

  readonly id = input.required<string>();

  protected readonly work = computed(() => getWorkById(Number(this.id())));

  protected readonly lightboxImage = signal<Media | null>(null);
  protected readonly lightboxVisible = signal(false);

  constructor() {
    effect(() => {
      const work = this.work();
      if (work) {
        this.seo.setTitle(`${work.title} — Santiago Álvarez`);
        this.seo.setDescription(truncateForMetaDescription(work.description));
      }
    });
  }

  protected openLightbox(image: Media): void {
    this.lightboxImage.set(image);
    this.document.body.style.overflow = 'hidden';
    this.document.body.classList.add('modal-open');
    requestAnimationFrame(() => this.lightboxVisible.set(true));
  }

  protected closeLightbox(): void {
    this.lightboxVisible.set(false);
    setTimeout(() => {
      this.lightboxImage.set(null);
      this.document.body.style.overflow = '';
      this.document.body.classList.remove('modal-open');
    }, LIGHTBOX_TRANSITION_MS);
  }

  @HostListener('window:keydown.escape')
  protected onEscape(): void {
    if (this.lightboxImage()) {
      this.closeLightbox();
    }
  }
}
