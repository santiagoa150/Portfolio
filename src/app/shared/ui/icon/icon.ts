import { Component, input } from '@angular/core';

export type IconName =
  | 'arrow-up-right'
  | 'link'
  | 'phone'
  | 'mail'
  | 'github'
  | 'linkedin'
  | 'user'
  | 'location'
  | 'go'
  | 'nodejs'
  | 'python'
  | 'java'
  | 'php'
  | 'postgresql'
  | 'mongodb'
  | 'docker'
  | 'kafka'
  | 'redis'
  | 'datadog'
  | 'grafana';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.html',
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly alt = input<string>('');
}
