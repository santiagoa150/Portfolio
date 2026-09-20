import { DOCUMENT } from '@angular/common';
import { Component, inject, signal } from '@angular/core';

import { environment } from '../../../../../../environments/environment';
import { Button } from '../../../../../shared/ui/button/button';
import { TextField } from '../../../../../shared/ui/text-field/text-field';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

@Component({
  selector: 'app-contact',
  imports: [Button, TextField],
  templateUrl: './contact.page.html',
})
export class Contact {
  private readonly document = inject(DOCUMENT);

  protected readonly phone = environment.contactPhone;
  protected readonly email = environment.contactEmail;
  protected readonly socialLinks = environment.socialLinks;

  protected readonly name = signal('');
  protected readonly senderEmail = signal('');
  protected readonly message = signal('');

  protected readonly formError = signal<string | null>(null);
  protected readonly submitted = signal(false);

  protected submit(event: Event): void {
    event.preventDefault();

    const name = this.name().trim();
    const senderEmail = this.senderEmail().trim();
    const message = this.message().trim();

    if (!name || !senderEmail || !message) {
      this.submitted.set(false);
      this.formError.set(
        $localize`:@@contact.form.errorRequired:Please complete all fields before sending.`,
      );
      return;
    }

    if (!EMAIL_PATTERN.test(senderEmail)) {
      this.submitted.set(false);
      this.formError.set($localize`:@@contact.form.errorEmail:Please enter a valid email address.`);
      return;
    }

    this.formError.set(null);

    const subject = $localize`:@@contact.form.mailSubject:New message from the portfolio`;
    const body = $localize`:@@contact.form.mailBody:Name: ${name}:name:\nEmail: ${senderEmail}:senderEmail:\n\n${message}:message:`;
    const mailto = `mailto:${this.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const window = this.document.defaultView;
    if (window) {
      window.location.href = mailto;
    }

    this.submitted.set(true);
  }
}
