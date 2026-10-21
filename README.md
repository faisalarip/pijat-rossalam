# Pijat Rossalam — website

Situs statis untuk Pijat Rossalam (pijat & refleksi keluarga sejak 2003), dibangun dengan
Astro 7, TypeScript, Tailwind CSS 4, dan Lucide. Semua reservasi diarahkan ke WhatsApp.

## Menjalankan

```bash
npm install
npm run dev       # http://localhost:4321
npm run check     # pemeriksaan TypeScript + Astro
npm run build     # hasil statis di dist/
npm run preview   # menyajikan dist/ secara lokal
```

## Mengubah konten

Semua informasi bisnis ada di **`src/data/business.ts`**. Komponen tidak menyimpan nomor,
alamat, atau tautan sendiri.

| Yang diubah | Bagian di `business.ts` |
| --- | --- |
| Nama, slogan, tahun berdiri, nomor WhatsApp, email | `business` |
| Instagram, TikTok, Facebook, Google Business, link ulasan Google | `socialLinks` (kosongkan untuk menyembunyikan) |
| Cabang, alamat, jam buka, nomor WhatsApp per cabang | `branches` |
| Layanan, durasi, harga (opsional) | `services` |
| Video Instagram terapis (URL reel, judul, deskripsi; `null` untuk menyembunyikan) | `featuredVideo` |
| Ulasan pelanggan (hanya ulasan asli) | `testimonials` |
| Pertanyaan umum | `faq` |
| Judul & deskripsi SEO | `seo` |

**Foto.** Semua foto di `src/assets/images/` adalah foto stok sementara dari Unsplash.
Ganti dengan foto asli (nama file sama, atau ubah import di `business.ts`), lalu ubah
`galleryIsPlaceholder` menjadi `false` agar keterangan "Foto ilustrasi" hilang.

**Harga** sengaja tidak ditampilkan. Isi `price` pada sebuah layanan bila ingin menampilkannya.

## WhatsApp

`src/lib/whatsapp.ts` mengubah nomor lokal (`0878…`) ke format `wa.me` (`62878…`), membuat
pesan reservasi yang sudah terisi nama layanan, dan memakai nomor cabang bila ada. Jika nomor
kosong atau tidak valid, tombol tampil nonaktif ("WhatsApp belum tersedia"), bukan tautan rusak.

## Analitik (opsional)

Isi `PUBLIC_GA_MEASUREMENT_ID` (format `G-XXXXXXXXXX`). Tanpa ID, tidak ada skrip Google
yang dimuat dan tidak ada banner cookie.

Dengan ID, banner persetujuan muncul. GA4 baru dimuat setelah pengunjung menekan "Izinkan".
Event yang dikirim:

| Event | Parameter | Arti |
| --- | --- | --- |
| `whatsapp_click` | `placement`, `service_name`, `branch` | Pengunjung membuka chat WhatsApp. **Bukan** berarti reservasi terjadi. |
| `directions_click` | `branch`, `placement` | Membuka petunjuk arah Google Maps |
| `social_click` | `network`, `placement` | Membuka media sosial / ulasan Google |
| `contact_click` | `method`, `placement` | Menekan nomor telepon atau email |
| `video_play` | `platform`, `placement` | Memutar video Instagram |

## Deploy

Situs ini sepenuhnya statis (`dist/`). Variabel lingkungan:

| Variabel | Wajib | Keterangan |
| --- | --- | --- |
| `SITE_URL` | Ya, untuk produksi | Domain utama, mis. `https://pijatrossalam.com`. Dipakai untuk canonical, Open Graph, sitemap, dan robots.txt. Set di dashboard hosting (tidak dibaca dari `.env`). |
| `PUBLIC_GA_MEASUREMENT_ID` | Tidak | ID GA4. |

- **Cloudflare Pages:** build command `npm run build`, output `dist`, Node 22+.
- **Vercel:** preset Astro terdeteksi otomatis; output `dist`.

Setelah online: daftarkan domain di Google Search Console dan kirim `https://<domain>/sitemap-index.xml`.

## Struktur

```
src/
  assets/images/      foto (sementara: Unsplash)
  components/         satu file per bagian halaman + WhatsAppButton, Analytics
  data/business.ts    semua konten bisnis
  layouts/            BaseLayout (meta SEO, Open Graph, JSON-LD)
  lib/                whatsapp, analytics, format, schema
  pages/              index, kebijakan-privasi, 404, robots.txt
  styles/global.css   token warna & tipografi
```
