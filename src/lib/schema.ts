import { branches, business, services, socialLinks } from '../data/business';
import { isConfiguredUrl } from './format';
import { bookingNumberFor } from './whatsapp';

// MARK: - schema.org LocalBusiness
// Only verified facts from business.ts are emitted. No ratings or reviews are
// included until real ones exist, and coordinates are omitted unless set.

export function localBusinessSchema(siteUrl: URL, imageUrl: string): Record<string, unknown> {
  const sameAs = [
    socialLinks.instagram,
    socialLinks.tiktok,
    socialLinks.facebook,
    socialLinks.googleBusiness,
  ].filter(isConfiguredUrl);

  const offerCatalog = {
    '@type': 'OfferCatalog',
    name: 'Layanan pijat dan refleksi',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
      },
    })),
  };

  const graph = branches.map((branch, index) => {
    const phone = bookingNumberFor(branch);
    return {
      '@type': 'HealthAndBeautyBusiness',
      '@id': new URL(`#${branch.id}`, siteUrl).href,
      name: branches.length > 1 ? branch.name : business.name,
      description: business.description,
      url: siteUrl.href,
      image: imageUrl,
      foundingDate: String(business.establishedYear),
      ...(phone ? { telephone: `+${phone}` } : {}),
      ...(business.email ? { email: business.email } : {}),
      address: {
        '@type': 'PostalAddress',
        streetAddress: branch.address.street,
        addressLocality: `${branch.address.locality}, ${branch.address.city}`,
        addressRegion: branch.address.region,
        postalCode: branch.address.postalCode,
        addressCountry: branch.address.country,
      },
      ...(branch.geo ? { geo: { '@type': 'GeoCoordinates', ...branch.geo } } : {}),
      openingHoursSpecification: branch.hours.map((hours) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: hours.days,
        opens: hours.opens,
        closes: hours.closes,
      })),
      ...(branch.areaServed?.length ? { areaServed: branch.areaServed } : {}),
      ...(sameAs.length > 0 ? { sameAs } : {}),
      ...(index === 0 ? { hasOfferCatalog: offerCatalog } : {}),
    };
  });

  return { '@context': 'https://schema.org', '@graph': graph };
}
