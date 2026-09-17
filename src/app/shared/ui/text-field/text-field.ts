import { Component, input, model } from '@angular/core';

let nextId = 0;

@Component({
  selector: 'app-text-field',
  imports: [],
  templateUrl: './text-field.html',
})
export class TextField {
  readonly label = input.required<string>();
  readonly type = input<'text' | 'email'>('text');
  readonly placeholder = input('');
  readonly multiline = input(false);
  readonly value = model('');

  protected readonly id = `text-field-${nextId++}`;

  onInput(event: Event): void {
    this.value.set((event.target as HTMLInputElement | HTMLTextAreaElement).value);
  }
}
