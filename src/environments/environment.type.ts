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
}
