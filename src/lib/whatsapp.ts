import { business } from '../data/business';
import type { Branch } from '../data/types';

// MARK: - Phone numbers

/** Indonesian country code, used when a number is written in local 08… form. */
const DEFAULT_COUNTRY_CODE = '62';

/**
 * Converts a phone number into the digits-only international format wa.me
 * expects (e.g. "0878-7884-3016" → "6287878843016").
 * Returns null when the input cannot be a valid number, so callers can render
 * a disabled state instead of a broken link.
 */
export function normalizePhoneNumber(raw: string | undefined): string | null {
  if (!raw) return null;
  const digits = raw.replace(/\D/g, '');
  if (!digits) return null;

  const international = digits.startsWith('0')
    ? `${DEFAULT_COUNTRY_CODE}${digits.slice(1)}`
    : digits;

  // E.164 allows up to 15 digits; anything under 8 is not a real mobile number.
  return /^[1-9]\d{7,14}$/.test(international) ? international : null;
}

/** The number to book through: the branch's own number, else the main one. */
export function bookingNumberFor(branch?: Branch): string | null {
  return normalizePhoneNumber(branch?.whatsappNumber) ?? normalizePhoneNumber(business.whatsappNumber);
}

// MARK: - Messages

export interface BookingRequest {
  serviceName?: string;
  branch?: Branch;
}

/**
 * Pre-filled reservation message. Fields the guest still has to fill are left
 * blank after the colon so they can type straight into WhatsApp.
 */
export function buildBookingMessage({ serviceName, branch }: BookingRequest = {}): string {
  const lines = [
    `Halo ${business.name}, saya ingin reservasi.`,
    '',
    `Layanan: ${serviceName ?? ''}`,
    'Tanggal: ',
    'Jam: ',
    'Jumlah orang: ',
    'Pijat di: (tempat praktik / panggilan ke alamat saya)',
    'Alamat (jika panggilan): ',
  ];
  if (branch) lines.push(`Cabang: ${branch.name}`);
  lines.push('', 'Mohon info ketersediaannya. Terima kasih.');
  return lines.join('\n');
}

// MARK: - Links

/** Builds a wa.me link, or null when no valid number is configured. */
export function whatsappUrl(phone: string | null, message?: string): string | null {
  if (!phone) return null;
  const base = `https://wa.me/${phone}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function bookingUrl(request: BookingRequest = {}): string | null {
  return whatsappUrl(bookingNumberFor(request.branch), buildBookingMessage(request));
}
