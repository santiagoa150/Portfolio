import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { Icon } from '../../ui/icon/icon';

interface NavLink {
  readonly label: string;
  readonly path: string;
  readonly exact: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, Icon],
  templateUrl: './sidebar.html',
})
export class Sidebar {
  protected readonly brandName = $localize`:@@sidebar.brandName:Santiago`;
  protected readonly currentYear = new Date().getFullYear();
  protected readonly copyrightText = $localize`:@@sidebar.copyright:Copyright ©${this.currentYear}:year: ${this.brandName}:name:. All right reserved.`;
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

  protected readonly isMobileMenuOpen = signal(false);

  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
  }

  protected closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
