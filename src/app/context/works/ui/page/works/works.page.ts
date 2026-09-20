import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { WORKS } from '../../../data/work';
import { Icon } from '../../../../../shared/ui/icon/icon';

@Component({
  selector: 'app-works',
  imports: [Icon, RouterLink],
  templateUrl: './works.page.html',
})
export class Works {
  protected readonly works = WORKS;
}
