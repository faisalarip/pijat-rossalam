import type { Branch, OpeningHours, PostalAddress } from '../data/types';

// MARK: - Display helpers

/** "08:00" → "08.00" (Indonesian time notation). */
export function formatTime(time: string): string {
  return time.replace(':', '.');
}

export function formatHours(hours: OpeningHours): string {
  return `${formatTime(hours.opens)}–${formatTime(hours.closes)}`;
}

export function formatDuration(minutes: number): string {
  if (minutes % 60 === 0) {
    const hours = minutes / 60;
    return hours === 1 ? '60 menit' : `${minutes} menit (${hours} jam)`;
  }
  return `${minutes} menit`;
}

export function addressLines(address: PostalAddress): string[] {
  return [address.street, address.locality, `${address.city} ${address.postalCode}`];
}

export function formatAddress(address: PostalAddress): string {
  return addressLines(address).join(', ');
}

// MARK: - Maps

export function directionsUrl(branch: Branch): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapsQuery)}`;
}

/** Keyless Google Maps embed. Loaded only after the visitor asks for it. */
export function mapEmbedUrl(branch: Branch): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(branch.mapsQuery)}&z=16&output=embed`;
}

// MARK: - Instagram

/**
 * Turns a reel/post URL (tracking parameters and all) into Instagram's
 * script-free embed page. Returns null for anything that is not a post URL.
 */
export function instagramEmbedUrl(url: string): string | null {
  const match = url.match(/instagram\.com\/(reel|reels|p|tv)\/([A-Za-z0-9_-]+)/);
  if (!match) return null;
  const kind = match[1] === 'reels' ? 'reel' : match[1];
  return `https://www.instagram.com/${kind}/${match[2]}/embed/`;
}

// MARK: - Links

/** True when a configured URL is a usable absolute link. */
export function isConfiguredUrl(url: string | undefined): url is string {
  return typeof url === 'string' && /^https?:\/\/\S+$/.test(url.trim());
}
