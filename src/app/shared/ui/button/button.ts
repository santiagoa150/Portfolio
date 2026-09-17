import { Component, input } from '@angular/core';

import { Icon } from '../icon/icon';

export type ButtonVariant = 'primary' | 'secondary';

@Component({
  selector: 'app-button',
  imports: [Icon],
  templateUrl: './button.html',
})
export class Button {
  readonly variant = input<ButtonVariant>('primary');
  readonly type = input<'button' | 'submit'>('button');
  readonly showArrow = input(true);
}
