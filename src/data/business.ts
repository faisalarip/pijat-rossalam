import type {
  Branch,
  FaqItem,
  FeaturedVideo,
  OpeningHours,
  Photo,
  Service,
  ServiceMode,
  SocialLinks,
  Testimonial,
} from './types';

import heroMassage from '../assets/images/hero-massage.jpg';
import fullBodyMassage from '../assets/images/full-body-massage.jpg';
import reflexology from '../assets/images/reflexology.jpg';
import lulurOils from '../assets/images/lulur-oils.jpg';
import massageLulurPackage from '../assets/images/massage-lulur-package.jpg';
import aboutHands from '../assets/images/about-hands.jpg';
import aboutCalm from '../assets/images/about-calm.jpg';
import atmosphereDiffuser from '../assets/images/atmosphere-diffuser.jpg';
import facilitiesTowels from '../assets/images/facilities-towels.jpg';
import receptionCounter from '../assets/images/reception-counter.jpg';
import oilDropper from '../assets/images/oil-dropper.jpg';

// MARK: - Single source of truth
// All business information lives in this file. Components never hardcode
// phone numbers, addresses, services or social links.
//
// Photos in src/assets/images are licensed stock placeholders (Unsplash).
// Replace them with real photos of the business, keeping the same file names,
// or change the imports above.

// MARK: - Identity

export const business = {
  name: 'Pijat Rossalam',
  shortName: 'Rossalam',
  tagline: 'Pijat Sehat & Relaksasi',
  motto: 'Sehat tubuhnya, tenang pikirannya.',
  establishedYear: 2003,
  description:
    'Pijat dan refleksi keluarga di Mampang Prapatan, Jakarta Selatan, sejak 2003. Datang ke tempat praktik kami atau panggil terapis ke rumah, hotel, apartemen, dan kos di seluruh Jakarta dan Jabodetabek.',
  /** Main booking number. Local (08…) or international (628…) format both work. */
  whatsappNumber: '087878843016',
  /** How the number is printed on the page. */
  phoneDisplay: '0878-7884-3016',
  /** Leave empty to hide email everywhere. */
  email: '',
} as const;

// MARK: - Social media
// Leave a value empty to hide that link. Use full https:// URLs.

export const socialLinks: SocialLinks = {
  instagram: 'https://www.instagram.com/jajat_pijatsehatrossalam/',
  tiktok: '',
  facebook: '',
  googleBusiness: '',
  googleReviews: '',
};

// MARK: - Hours & branches

const everyDay: OpeningHours = {
  label: 'Setiap hari',
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  opens: '08:00',
  closes: '22:00',
};

export const branches: Branch[] = [
  {
    id: 'mampang-prapatan',
    name: 'Pijat Rossalam Mampang Prapatan',
    address: {
      street: 'Jl. Mampang Prapatan VI No.19B, RT.8/RW.2',
      locality: 'Tegal Parang, Kec. Mampang Prapatan',
      city: 'Jakarta Selatan',
      region: 'DKI Jakarta',
      postalCode: '12790',
      country: 'ID',
    },
    hours: [everyDay],
    mapsQuery:
      'Pijat Rossalam, Jl. Mampang Prapatan VI No.19B, Tegal Parang, Mampang Prapatan, Jakarta Selatan 12790',
    serviceArea: 'Panggilan ke seluruh Jakarta dan Jabodetabek',
    areaServed: ['Jakarta', 'Bogor', 'Depok', 'Tangerang', 'Bekasi'],
  },
];

// MARK: - Services
// Durations come from the business's own price list. Prices are intentionally
// left out at the owner's request; fill in `price` to show one.

export const services: Service[] = [
  {
    id: 'pijat-seluruh-badan',
    name: 'Pijat Seluruh Badan',
    description:
      'Pijat dari kepala hingga kaki untuk mengurangi pegal, melancarkan peredaran darah, dan membuat tubuh lebih rileks.',
    durationMinutes: 90,
    image: {
      src: fullBodyMassage,
      alt: 'Terapis memijat punggung tamu yang berbaring tengkurap',
    },
  },
  {
    id: 'refleksi',
    name: 'Refleksi',
    description:
      'Pijatan pada titik-titik refleksi di telapak kaki untuk membantu menyeimbangkan energi tubuh dan meredakan lelah.',
    durationMinutes: 60,
    image: {
      src: reflexology,
      alt: 'Tangan terapis memijat telapak kaki dengan hiasan bunga',
    },
  },
  {
    id: 'lulur',
    name: 'Lulur',
    description:
      'Perawatan lulur untuk membersihkan kulit dan mengangkat sel kulit mati, sehingga kulit terasa lebih halus dan segar.',
    durationMinutes: 60,
    image: {
      src: lulurOils,
      alt: 'Botol minyak, bahan lulur, dan lilin di atas meja kayu',
    },
  },
  {
    id: 'pijat-lulur',
    name: 'Pijat + Lulur',
    description:
      'Pijat seluruh badan lalu dilanjutkan lulur. Paket dua jam untuk relaksasi maksimal dan kulit yang lebih bersih.',
    durationMinutes: 120,
    image: {
      src: massageLulurPackage,
      alt: 'Tamu berbaring berbalut handuk sambil dipijat bagian kepala',
    },
  },
];

export const serviceModes: ServiceMode[] = [
  {
    id: 'incall',
    title: 'Di tempat praktik kami',
    description:
      'Datang langsung ke Mampang Prapatan, Jakarta Selatan. Ruangan bersih dan tenang, privasi terjaga.',
  },
  {
    id: 'outcall',
    title: 'Panggilan ke tempat Anda',
    description:
      'Terapis kami datang ke rumah, hotel, apartemen, atau kos Anda di seluruh Jakarta dan Jabodetabek.',
  },
];

export const audiences: string[] = [
  'Tamu hotel & apartemen',
  'Warga Jakarta',
  'Pekerja kantor',
  'Pengunjung yang transit di Jakarta',
];

// MARK: - Why choose us
// Claims below are taken from the business's own promotional material.

export const highlights = [
  {
    icon: 'heritage',
    title: 'Melayani sejak 2003',
    text: 'Lebih dari dua dekade menemani warga Jakarta melepas lelah.',
  },
  {
    icon: 'therapist',
    title: 'Terapis terlatih & profesional',
    text: 'Pijatan yang terarah, dengan tekanan yang bisa Anda sesuaikan.',
  },
  {
    icon: 'privacy',
    title: 'Aman, terpercaya & privasi terjaga',
    text: 'Sesi berlangsung tenang dan sopan, baik di tempat kami maupun di tempat Anda.',
  },
  {
    icon: 'clean',
    title: 'Nyaman & bersih',
    text: 'Handuk dan perlengkapan bersih untuk setiap tamu.',
  },
  {
    icon: 'family',
    title: 'Untuk pria dan wanita',
    text: 'Cocok untuk Anda, pasangan, maupun anggota keluarga.',
  },
] as const;

export type HighlightIcon = (typeof highlights)[number]['icon'];

// MARK: - Photography

export const heroImage: Photo = {
  src: heroMassage,
  alt: 'Terapis meneteskan minyak pijat sebelum memijat punggung tamu',
};

export const aboutImages: { primary: Photo; secondary: Photo } = {
  primary: {
    src: aboutCalm,
    alt: 'Tamu memejamkan mata dengan tenang saat bahunya dipijat',
  },
  secondary: {
    src: aboutHands,
    alt: 'Kedua tangan terapis memijat lengan tamu',
  },
};

export const ctaImage: Photo = {
  src: atmosphereDiffuser,
  alt: 'Lilin menyala dan pengharum ruangan di atas handuk putih',
};

// MARK: - Video
// Real footage from the business's Instagram. The embed only loads after the
// visitor presses play. Remove the entry to hide the section.

export const featuredVideo: FeaturedVideo | null = {
  url: 'https://www.instagram.com/reel/DegjrBzybcJ/',
  accountHandle: 'jajat_pijatsehatrossalam',
  title: 'Terapis kami, langsung di kamar Anda',
  description:
    'Cuplikan sesi pijat panggilan di kamar hotel, direkam oleh terapis kami sendiri. Seperti inilah layanan yang Anda dapatkan di rumah, hotel, maupun apartemen.',
};

/** Set to false once the gallery shows real photos of the business. */
export const galleryIsPlaceholder = true;

export const galleryImages: (Photo & { caption: string })[] = [
  {
    src: massageLulurPackage,
    alt: 'Ruang pijat dengan tamu berbalut handuk dan hidangan buah',
    caption: 'Ruang pijat',
  },
  {
    src: reflexology,
    alt: 'Sesi refleksi kaki dengan hiasan bunga kamboja',
    caption: 'Ruang refleksi',
  },
  {
    src: receptionCounter,
    alt: 'Meja depan dengan botol perawatan dan tanaman lidah buaya',
    caption: 'Area penerimaan tamu',
  },
  {
    src: facilitiesTowels,
    alt: 'Handuk bersih tergulung, losion, dan lilin',
    caption: 'Perlengkapan bersih',
  },
  {
    src: oilDropper,
    alt: 'Minyak pijat diteteskan ke telapak tangan terapis',
    caption: 'Minyak pijat',
  },
];

// MARK: - Testimonials
// Add only real reviews, with the reviewer's permission. While this list is
// empty the section shows an invitation instead of fake quotes.

export const testimonials: Testimonial[] = [];

// MARK: - FAQ
// Answers avoid policies the business has not confirmed. Edit freely.

export const faq: FaqItem[] = [
  {
    question: 'Apakah saya perlu reservasi terlebih dahulu?',
    answer:
      'Kami sarankan reservasi lewat WhatsApp agar terapis dan waktu yang Anda inginkan bisa kami siapkan, terutama untuk layanan panggilan.',
  },
  {
    question: 'Apakah bisa datang langsung tanpa reservasi?',
    answer:
      'Silakan hubungi kami lewat WhatsApp sebelum datang. Kami akan memberi tahu ketersediaan terapis saat itu, sehingga Anda tidak perlu menunggu lama.',
  },
  {
    question: 'Layanan apa saja yang tersedia?',
    answer:
      'Pijat seluruh badan, refleksi, lulur, serta paket pijat + lulur. Semua layanan bisa dilakukan di tempat praktik kami atau dengan sistem panggilan.',
  },
  {
    question: 'Berapa lama satu sesi?',
    answer:
      'Refleksi dan lulur sekitar 60 menit, pijat seluruh badan sekitar 90 menit, dan paket pijat + lulur sekitar 120 menit.',
  },
  {
    question: 'Bagaimana cara reservasi?',
    answer:
      'Tekan tombol "Pesan via WhatsApp" di halaman ini. Pesan berisi layanan pilihan Anda akan terisi otomatis. Lengkapi tanggal, jam, jumlah orang, dan lokasi, lalu kirim. Tim kami akan mengonfirmasi ketersediaannya.',
  },
  {
    question: 'Di mana lokasinya, dan apakah bisa dipanggil ke rumah?',
    answer:
      'Tempat praktik kami ada di Jl. Mampang Prapatan VI No.19B, Tegal Parang, Jakarta Selatan. Kami juga melayani panggilan ke rumah, hotel, apartemen, dan kos di seluruh Jakarta dan Jabodetabek.',
  },
];

// MARK: - SEO

export const seo = {
  title: 'Pijat Rossalam | Pijat & Refleksi Keluarga di Jakarta Selatan sejak 2003',
  description:
    'Pijat seluruh badan, refleksi, dan lulur di Mampang Prapatan, Jakarta Selatan. Buka setiap hari 08.00–22.00. Layanan panggilan ke rumah, hotel, dan apartemen di Jakarta & Jabodetabek. Reservasi via WhatsApp.',
  locale: 'id_ID',
  language: 'id',
} as const;

// MARK: - Navigation

export const navigation = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'tentang', label: 'Tentang' },
  { id: 'layanan', label: 'Layanan' },
  { id: 'galeri', label: 'Galeri' },
  { id: 'lokasi', label: 'Lokasi' },
  { id: 'kontak', label: 'Kontak' },
] as const;
