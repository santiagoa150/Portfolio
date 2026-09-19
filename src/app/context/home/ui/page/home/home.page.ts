import { Component } from '@angular/core';

import { environment } from '../../../../../../environments/environment';
import { Button } from '../../../../../shared/ui/button/button';
import { Icon } from '../../../../../shared/ui/icon/icon';

@Component({
  selector: 'app-home',
  imports: [Button, Icon],
  templateUrl: './home.page.html',
})
export class Home {
  protected readonly phone = environment.contactPhone;
  protected readonly email = environment.contactEmail;
  protected readonly location = environment.location;
  protected readonly socialLinks = environment.socialLinks;
}
