import { NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Icon } from '../icon/icon';

export type ButtonVariant = 'primary' | 'secondary';

@Component({
  selector: 'app-button',
  imports: [Icon, RouterLink, NgTemplateOutlet],
  templateUrl: './button.html',
})
export class Button {
  readonly variant = input<ButtonVariant>('primary');
  readonly type = input<'button' | 'submit'>('button');
  readonly showArrow = input(true);
  /** When set, renders as a routed `<a>` instead of a `<button>`. */
  readonly routerLink = input<string>();
  /** When set, renders as a plain `<a>` instead of a `<button>` (e.g. a file download link). */
  readonly href = input<string>();
  readonly download = input(false);
  /** Only applied when `href` is set — use `'_blank'` for external links so visitors keep this site open. */
  readonly target = input<'_self' | '_blank'>('_self');
}
