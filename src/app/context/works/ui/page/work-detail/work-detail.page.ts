import { DOCUMENT } from '@angular/common';
import { Component, HostListener, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Media, getWorkById } from '../../../data/work';
import { Button } from '../../../../../shared/ui/button/button';
import { Icon } from '../../../../../shared/ui/icon/icon';

const LIGHTBOX_TRANSITION_MS = 300;

@Component({
  selector: 'app-work-detail',
  imports: [Button, Icon, RouterLink],
  templateUrl: './work-detail.page.html',
})
export class WorkDetail {
  private readonly document = inject(DOCUMENT);

  readonly id = input.required<string>();

  protected readonly work = computed(() => getWorkById(Number(this.id())));

  protected readonly lightboxImage = signal<Media | null>(null);
  protected readonly lightboxVisible = signal(false);

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
