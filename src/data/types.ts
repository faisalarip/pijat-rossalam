import type { ImageMetadata } from 'astro';

// MARK: - Shared content types
// Every piece of business content rendered on the site is described here.
// Edit values in `business.ts`; components only read from it.

export interface Photo {
  src: ImageMetadata;
  /** Describe what is in the photo for screen readers and search engines. */
  alt: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  image: Photo;
  /** Session length in minutes. Leave undefined to hide the duration. */
  durationMinutes?: number;
  /** Leave undefined to hide the price. The owner asked not to show prices. */
  price?: string;
}

export interface ServiceMode {
  id: 'incall' | 'outcall';
  title: string;
  description: string;
}

export interface OpeningHours {
  /** Human-readable label, e.g. "Setiap hari". */
  label: string;
  /** schema.org day names, e.g. ["Monday", "Tuesday"]. */
  days: readonly SchemaDay[];
  /** 24-hour "HH:MM". */
  opens: string;
  /** 24-hour "HH:MM". */
  closes: string;
}

export type SchemaDay =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

export interface PostalAddress {
  street: string;
  locality: string;
  city: string;
  region: string;
  postalCode: string;
  /** ISO 3166-1 alpha-2 country code. */
  country: string;
}

export interface Branch {
  id: string;
  name: string;
  address: PostalAddress;
  hours: readonly OpeningHours[];
  /** Overrides the main WhatsApp number for bookings at this branch. */
  whatsappNumber?: string;
  /** Text used to search Google Maps. Usually the business name plus address. */
  mapsQuery: string;
  /** Optional geo coordinates. Only fill these in with verified values. */
  geo?: { latitude: number; longitude: number };
  /** Where home-visit massage is available from this branch, if any. */
  serviceArea?: string;
  /** Place names for structured data (schema.org areaServed). */
  areaServed?: string[];
}

export interface Testimonial {
  name: string;
  /** 1–5. */
  rating: number;
  text: string;
  sourceLabel?: string;
  sourceUrl?: string;
}

export interface FeaturedVideo {
  /** Public Instagram reel or post URL, e.g. https://www.instagram.com/reel/ABC123/ */
  url: string;
  /** Account name without the @. */
  accountHandle: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SocialLinks {
  instagram: string;
  tiktok: string;
  facebook: string;
  googleBusiness: string;
  googleReviews: string;
}
