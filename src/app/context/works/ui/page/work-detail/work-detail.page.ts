import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { getWorkById } from '../../../data/work';
import { Button } from '../../../../../shared/ui/button/button';
import { Icon } from '../../../../../shared/ui/icon/icon';

@Component({
  selector: 'app-work-detail',
  imports: [Button, Icon, RouterLink],
  templateUrl: './work-detail.page.html',
})
export class WorkDetail {
  readonly id = input.required<string>();

  protected readonly work = computed(() => getWorkById(Number(this.id())));
}
