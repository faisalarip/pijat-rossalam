// MARK: - Analytics configuration
// GA4 loads only when PUBLIC_GA_MEASUREMENT_ID is set AND the visitor accepts
// analytics cookies in the consent banner. Without an ID, nothing is loaded
// and no banner is shown.

const rawId = import.meta.env.PUBLIC_GA_MEASUREMENT_ID as string | undefined;

/** GA4 measurement ID (G-XXXXXXXXXX), or null when not configured. */
export const gaMeasurementId: string | null =
  rawId && /^G-[A-Z0-9]+$/i.test(rawId.trim()) ? rawId.trim() : null;

// MARK: - Events
// A WhatsApp click means someone opened a chat, not that a booking happened.
// Event names say exactly that so reports are not misread as conversions.

export type TrackedEvent =
  | 'whatsapp_click'
  | 'directions_click'
  | 'social_click'
  | 'contact_click'
  | 'video_play';

export type TrackParams = Record<string, string | undefined>;

/**
 * Data attributes read by the click listener in Analytics.astro.
 * Spread onto any link: `<a {...track('directions_click', { branch })}>`.
 */
export function track(event: TrackedEvent, params: TrackParams = {}): Record<string, string> {
  const attributes: Record<string, string> = { 'data-track': event };
  for (const [key, value] of Object.entries(params)) {
    if (value) attributes[`data-track-${key.replace(/_/g, '-')}`] = value;
  }
  return attributes;
}
