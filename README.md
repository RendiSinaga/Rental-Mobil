# 🚗 Rendy Rental - Premium Car Rental Website

Website rental mobil modern dan profesional untuk bisnis Rendy Rental di Batam.

## ✨ Fitur Utama

### 🎨 Design Features
- **Modern Dark Theme** dengan aksen gold/kuning yang premium
- **Responsive Design** - tampil sempurna di semua device (mobile, tablet, desktop)
- **Smooth Animations** - fade-in, parallax, dan micro-interactions yang smooth
- **Glass Morphism Effect** - efek kaca modern pada card dan overlay
- **Gradient Animations** - background dan text gradient yang bergerak
- **Interactive Elements** - hover effects, transitions, dan animations

### 📱 Sections
1. **Hero Section**
   - Headline yang catchy dengan text gradient animasi
   - CTA buttons (WhatsApp & Lihat Armada)
   - Feature highlights dengan icon
   - Floating stats card
   - Parallax background

2. **Stats Section**
   - Counter animations untuk angka penting
   - 4 statistik utama (Unit, Pelanggan, Pengalaman, Layanan)

3. **Armada Section**
   - Card design modern dengan hover effects
   - Rating sistem
   - Pricing yang jelas
   - Quick WhatsApp booking
   - Badge untuk featured cars (Terpopuler, Luxury)

4. **Layanan Section**
   - 6 layanan unggulan dengan icon
   - Glass card design
   - Hover animations

5. **Testimoni Section**
   - 3 testimonial cards
   - Star rating
   - Avatar placeholders

6. **CTA Section**
   - Full-width call-to-action dengan gradient background
   - WhatsApp button besar

7. **Footer**
   - 4 kolom informasi
   - Social media links
   - Contact details
   - Navigation links

### 🎯 Interactive Elements
- **Sticky Navigation** - navbar yang sticky dengan backdrop blur
- **Mobile Menu** - hamburger menu untuk mobile
- **WhatsApp Floating Button** - tombol WA yang selalu terlihat di pojok
- **Smooth Scroll** - smooth scrolling untuk anchor links
- **Intersection Observer** - animations trigger saat scroll
- **Parallax Effects** - subtle parallax pada hero section

## 🛠️ Teknologi

- **HTML5** - Struktur semantic
- **CSS3** - Custom animations & transitions
- **TailwindCSS** - Utility-first CSS framework (via CDN)
- **Alpine.js** - Lightweight JavaScript framework untuk interaktivity
- **JavaScript** - Custom interactions dan animations
- **Google Fonts** - Sora (display) & Plus Jakarta Sans (body)

## 📂 Struktur File

```
rendy-rental/
├── index.html          # Main HTML file
├── style.css          # Custom CSS & animations
├── script.js          # JavaScript interactions
└── README.md          # Documentation
```

## 🎨 Color Palette

```css
Primary (Dark): #0a0e27
Gold: #fbbf24
Accent: #f59e0b
White: #ffffff
Gray-400: #9ca3af
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Cara Penggunaan

### 1. Setup Awal
```bash
# Extract files ke folder project
# Pastikan struktur folder sesuai
```

### 2. Update Content

#### Ganti Nomor WhatsApp
Cari dan ganti semua `6281234567890` dengan nomor WhatsApp Anda:
```html
<!-- Contoh -->
<a href="https://wa.me/6281234567890" target="_blank">
```

Ganti dengan:
```html
<a href="https://wa.me/628XXXXXXXXXXX" target="_blank">
```

#### Ganti Gambar Mobil
Saat ini menggunakan placeholder dari Unsplash. Ganti dengan foto mobil Anda:

```html
<!-- Lokasi gambar -->
<img src="https://images.unsplash.com/..." alt="Toyota Avanza">
```

Ganti dengan:
```html
<img src="../images/nama-mobil-anda.jpg" alt="Toyota Avanza">
```

#### Update Harga
Edit harga di section armada:
```html
<div class="text-3xl font-display font-bold text-gold">450K</div>
```

#### Update Contact Info
Edit informasi kontak di footer:
```html
<li>📍 Alamat Anda</li>
<li>📞 Nomor Telepon</li>
<li>✉️ Email Anda</li>
```

### 3. Customization Tips

#### Warna Theme
Ubah warna di `tailwind.config`:
```javascript
colors: {
    'primary': '#0a0e27',    // Ubah warna primary
    'gold': '#fbbf24',       // Ubah warna gold
    'accent': '#f59e0b',     // Ubah warna accent
}
```

#### Font
Ganti font di Google Fonts import:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

#### Animasi Speed
Edit di `style.css`:
```css
.fade-in-up {
    animation: fade-in-up 0.8s ease-out both; /* Ubah 0.8s */
}
```

## 📊 Performance Optimization

Website sudah dioptimasi dengan:
- Lazy loading untuk images
- CSS animations (GPU accelerated)
- Debounced scroll events
- Intersection Observer untuk animations
- Minimal JavaScript dependencies
- CDN untuk libraries

## ✅ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues & Solutions

### Issue 1: Gambar Tidak Muncul
**Solution**: Pastikan path gambar benar
```html
<!-- Jika gambar di folder images -->
<img src="images/mobil.jpg" alt="Mobil">

<!-- Jika gambar di folder parent -->
<img src="../images/mobil.jpg" alt="Mobil">
```

### Issue 2: Animation Tidak Jalan
**Solution**: Pastikan Alpine.js dan script.js ter-load
```html
<!-- Check di console browser (F12) -->
<!-- Pastikan tidak ada error -->
```

## 📈 SEO Optimization

Website sudah include:
- Semantic HTML5 tags
- Meta description (tambahkan sendiri)
- Alt text untuk images
- Heading hierarchy (H1, H2, H3)
- Fast loading time

Tambahkan meta tags:
```html
<head>
    <!-- Add these -->
    <meta name="description" content="Rental mobil terpercaya di Batam dengan harga terjangkau">
    <meta name="keywords" content="rental mobil batam, sewa mobil batam">
    <meta property="og:title" content="Rendy Rental - Sewa Mobil Batam">
    <meta property="og:description" content="...">
    <meta property="og:image" content="path/to/og-image.jpg">
</head>
```

## 🎯 Next Steps (Optional)

1. **Add More Cars** - Duplicate card dan update content
2. **Add Gallery** - Section untuk showcase foto mobil
3. **Add Booking Form** - Form pemesanan online
4. **Add Blog** - Tips rental mobil, destinasi wisata
5. **Add Reviews Widget** - Google Reviews integration
6. **Add Live Chat** - Tawk.to atau similar
7. **Add Google Maps** - Lokasi kantor
8. **PWA** - Make it installable

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:
- WhatsApp: +62 812-3456-7890 (update dengan nomor Anda)
- Email: rendyrental10@gmail.com

## 📝 License

© 2025 Rendy Rental. All rights reserved.

---

**Made with ❤️ for Rendy Rental**

*Website ini dibuat dengan fokus pada user experience, conversion optimization, dan modern design trends untuk membantu bisnis rental mobil Anda tumbuh!*