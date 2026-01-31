# Rendy Rental Batam - Website Rental Mobil

Website rental mobil profesional untuk Rendy Rental di Batam dengan desain modern dan responsif.

## 🚀 Fitur Website

- ✨ Desain modern dengan Tailwind CSS
- 📱 Fully responsive untuk semua perangkat
- 🎨 Animasi interaktif dengan Lottie & Alpine.js
- 🚗 Katalog armada lengkap
- ⭐ Testimoni pelanggan
- 📞 Integrasi WhatsApp untuk booking
- 🌐 SEO friendly

## 🛠️ Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript
- Tailwind CSS (via CDN)
- Alpine.js (via CDN)
- Lottie Player (via CDN)

## 📁 Struktur Folder

```
Rental/
├── assets/
│   └── lottie/           # File animasi Lottie JSON
├── dist/                 # Folder distribusi (jika ada)
├── images/               # Semua gambar website
│   ├── logo-hitam.png
│   ├── xenia-hitam.jpg
│   ├── rocky-abu.jpg
│   ├── brio-merah.jpg
│   ├── agya-putih.png
│   └── new-avanza.jpeg
├── node_modules/         # Dependencies (tidak di-upload ke hosting)
└── src/
    ├── index.html        # Halaman utama
    ├── daftar-mobil.html # Halaman daftar mobil lengkap
    ├── input.css         # CSS input untuk Tailwind
    ├── output.css        # CSS output dari Tailwind
    ├── script.js         # JavaScript custom
    └── style.css         # CSS custom
```

## 🌐 Deploy ke Netlify

### Metode 1: Via GitHub (Recommended)

1. **Push ke GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect ke Netlify**
   - Buka https://app.netlify.com
   - Klik "Add new site" → "Import an existing project"
   - Pilih "Deploy with GitHub"
   - Authorize Netlify untuk akses repository
   - Pilih repository "Rental"

3. **Build Settings**
   - **Base directory:** `src`
   - **Build command:** (kosongkan)
   - **Publish directory:** `src`

4. **Deploy**
   - Klik "Deploy site"
   - Tunggu 1-2 menit
   - Website live! 🎉

### Metode 2: Drag & Drop

1. Buka https://app.netlify.com
2. Drag & drop folder `src` ke dashboard Netlify
3. Selesai!

## ⚙️ Konfigurasi Netlify

File `.netlify.toml` sudah disertakan untuk konfigurasi otomatis:
- Redirect 404 ke index.html
- Optimasi gambar
- Custom headers untuk security

## 📝 Setelah Deploy

1. **Custom Domain**
   - Buka Settings → Domain management
   - Add custom domain (contoh: rendyrental.com)

2. **Update WhatsApp Number**
   - Cari `6281234567890` di file HTML
   - Ganti dengan nomor WA Rendy Rental yang benar

3. **Update Konten**
   - Edit file di GitHub
   - Push changes
   - Netlify akan auto-deploy

## 🔧 Development Local

Untuk testing di local:

1. **Buka dengan Live Server (VS Code)**
   - Install extension "Live Server"
   - Klik kanan pada `index.html` → "Open with Live Server"

2. **Atau buka langsung**
   - Double click file `index.html`
   - Buka di browser

## 📞 Kontak

**Rendy Rental Batam**
- 📱 WhatsApp: +62 812-3456-7890
- 📍 Alamat: Perum Taman Lestari Blok C18, Batam
- 📧 Email: info@rendyrental.com
- 🌐 Website: https://rendyrental.netlify.app

## 📄 License

© 2025 Rendy Rental. All rights reserved.

---

**Dibuat dengan ❤️ untuk Rendy Rental Batam**