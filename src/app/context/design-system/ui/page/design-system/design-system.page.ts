import { Component, signal } from '@angular/core';

import { Button } from '../../../../../shared/ui/button/button';
import { Card } from '../../../../../shared/ui/card/card';
import { Icon, IconName } from '../../../../../shared/ui/icon/icon';
import { TextField } from '../../../../../shared/ui/text-field/text-field';

@Component({
  selector: 'app-design-system',
  imports: [Button, Card, Icon, TextField],
  templateUrl: './design-system.page.html',
})
export class DesignSystem {
  protected readonly icons: IconName[] = ['arrow-up-right', 'link', 'phone', 'mail', 'github', 'linkedin'];

  protected readonly name = signal('');
  protected readonly email = signal('');
  protected readonly message = signal('');
}
