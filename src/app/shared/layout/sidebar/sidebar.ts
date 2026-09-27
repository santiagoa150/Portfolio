import { Component, LOCALE_ID, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { Icon } from '../../ui/icon/icon';

interface NavLink {
  readonly label: string;
  readonly path: string;
  readonly exact: boolean;
}

interface LanguageOption {
  readonly code: string;
  readonly label: string;
  readonly switchAriaLabel: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, Icon],
  templateUrl: './sidebar.html',
})
export class Sidebar {
  protected readonly brandName = $localize`:@@sidebar.brandName:Santiago`;
  protected readonly currentYear = new Date().getFullYear();
  protected readonly copyrightText = $localize`:@@sidebar.copyright:Copyright ©${this.currentYear}:year: ${this.brandName}:name:. All rights reserved.`;
  protected readonly socialLinks = environment.socialLinks;

  protected readonly navLinks: NavLink[] = [
    { label: $localize`:@@nav.home:Home`, path: '/', exact: true },
    { label: $localize`:@@nav.about:About`, path: '/about', exact: false },
    { label: $localize`:@@nav.services:Services`, path: '/services', exact: false },
    { label: $localize`:@@nav.works:Works`, path: '/works', exact: false },
    { label: $localize`:@@nav.contact:Contact`, path: '/contact', exact: false },
  ];

  protected readonly isDesignSystemEnabled = environment.isDesignSystemEnabled;
  protected readonly designSystemLink: NavLink = {
    label: $localize`:@@nav.designSystem:Components`,
    path: '/design-system',
    exact: false,
  };

  protected readonly toggleMenuLabel = $localize`:@@sidebar.toggleMenu:Toggle menu`;

  private readonly router = inject(Router);
  protected readonly currentLocale = inject(LOCALE_ID);
  protected readonly languageSwitcherLabel = $localize`:@@sidebar.language.groupLabel:Language`;
  protected readonly languageOptions: LanguageOption[] = [
    {
      code: 'es',
      label: 'ES',
      switchAriaLabel: $localize`:@@sidebar.language.switchToSpanish:Switch to Spanish`,
    },
    {
      code: 'en',
      label: 'EN',
      switchAriaLabel: $localize`:@@sidebar.language.switchToEnglish:Switch to English`,
    },
  ];

  protected localeHref(code: string): string {
    return `/${code}${this.router.url}`;
  }

  protected readonly isMobileMenuOpen = signal(false);

  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
  }

  protected closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
