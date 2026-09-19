import type { IconName } from '../app/shared/ui/icon/icon';

export interface SocialLink {
  readonly name: IconName;
  readonly url: string;
}

export interface Environment {
  NODE_ENV: 'development' | 'production';
  socialLinks: SocialLink[];
  /** Only `true` in development — gates the /design-system route and its sidebar link. */
  isDesignSystemEnabled: boolean;
  contactPhone: string;
  contactEmail: string;
  /** ISO date (YYYY-MM-DD) — age shown in the About page is computed from this, not hardcoded. */
  birthDate: string;
  location: string;
  /** ISO date (YYYY-MM-DD) of the first professional role — years of experience is computed from this, not hardcoded. */
  careerStartDate: string;
}
