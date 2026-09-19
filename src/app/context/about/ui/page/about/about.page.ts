import { DOCUMENT } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';

import { environment } from '../../../../../../environments/environment';
import { Button } from '../../../../../shared/ui/button/button';
import { Icon } from '../../../../../shared/ui/icon/icon';

interface ExperienceEntry {
  readonly dateRange: string;
  readonly company: string;
  readonly role: string;
}

function yearsSince(isoDate: string): number {
  const start = new Date(isoDate);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const hadAnniversaryThisYear =
    now.getMonth() > start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() >= start.getDate());
  if (!hadAnniversaryThisYear) {
    years--;
  }
  return years;
}

@Component({
  selector: 'app-about',
  imports: [Button, Icon],
  templateUrl: './about.page.html',
})
export class About {
  private readonly document = inject(DOCUMENT);

  protected readonly phone = environment.contactPhone;
  protected readonly email = environment.contactEmail;
  protected readonly location = environment.location;
  protected readonly age = yearsSince(environment.birthDate);
  protected readonly yearsOfExperience = yearsSince(environment.careerStartDate);
  protected readonly cvHref = 'documents/santiago-alvarez-cv.pdf';
  protected readonly isAtTop = signal(true);

  protected readonly experience: ExperienceEntry[] = [
    {
      dateRange: $localize`:@@about.experience.job1.dateRange:August 2025 – Present`,
      company: $localize`:@@about.experience.job1.company:Mercado Libre Colombia`,
      role: $localize`:@@about.experience.job1.role:Semi Senior Software Engineer`,
    },
    {
      dateRange: $localize`:@@about.experience.job2.dateRange:June 2022 – June 2025`,
      company: $localize`:@@about.experience.job2.company:Innventa Software Development SAS`,
      role: $localize`:@@about.experience.job2.role:Backend Developer`,
    },
    {
      dateRange: $localize`:@@about.experience.job3.dateRange:August 2024 – December 2024`,
      company: $localize`:@@about.experience.job3.company:DAP · Alcaldía de Medellín`,
      role: $localize`:@@about.experience.job3.role:Independent Backend Developer`,
    },
  ];

  protected scrollToExperience(): void {
    this.document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.isAtTop.set((this.document.defaultView?.scrollY ?? 0) <= 0);
  }
}
