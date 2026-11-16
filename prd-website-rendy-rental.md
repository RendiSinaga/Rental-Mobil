# PRD — Website Rendy Rental Batam (Buat Ulang)

- **Status:** Draf v0.1 — 13 Nov 2026 — MENUNGGU PERSETUJUAN BOS
- **Pemilik / penentu akhir:** Bos (Director, satu-satunya pemberi persetujuan final)
- **Proyek:** Promosi Rendy Rental Batam
- **Aturan main:** Tidak ada coding sebelum PRD ini disetujui Bos. Setelah PRD disetujui, skill website (lihat §9) ditulis dan disetujui dulu, baru produksi dimulai. Urutan ini keputusan Bos 13 Nov 2026 dan tidak dibalik tanpa persetujuannya.
- **Referensi (keputusan Bos, 13 Nov 2026):** website live saat ini adalah referensinya — struktur dan isinya menjadi titik awal, dengan catatan Bos mungkin mengubah banyak hal di dalamnya. Referensi ≠ data benar: setiap angka/klaim dari situs lama tetap wajib lolos data terkunci §7.
- **Alat bangun (keputusan Bos, 13 Nov 2026):** Bos berencana membangun website ini memakai **Antigravity**. Peran Cassie berubah menjadi: menyiapkan PRD + skill + paket konteks terkunci untuk Antigravity, lalu menjalankan gerbang QA §10 atas hasilnya. Cassie tidak menggerakkan Antigravity di komputer Bos.
- **Akun (konfirmasi Bos, 13 Nov 2026):** akun Google yang Bos pakai adalah akun **Pro** — pemakaian Antigravity langsung/resmi dinyatakan Bos aman. (Yang tetap dihindari hanya rute lama: menghubungkan akun itu lewat 9Router/OAuth pihak ketiga, bahasan 5 Nov 2026.)

---

## 1. Latar belakang & masalah

Website live saat ini (rendyrental-batam.netlify.app, dicek publik 13 Nov 2026):

- Harga salah: mulai "249K", rentang Rp249–399 ribu. Tarif resmi: Rp250–350 ribu.
- Klaim tidak terbukti: rating "4,9 (300 ulasan)", "300+ pelanggan" dan "500+ pelanggan" di halaman yang sama. Google Maps terverifikasi hanya punya 2 ulasan, nol ulasan tertulis tentang rental.
- Armada tertulis "10+ unit"; armada sebenarnya 11 unit.
- Alamat memakai kode pos 29432 yang belum dibetulkan.
- Tampilan generik khas template/AI: kartu fitur 3 kolom berikon emoji, statistik karangan, testimoni tanpa sumber — persis pola "AI slop" yang ingin dihindari Bos.
- Source code situs lama tidak ada di workspace Cassie. File-file pembangun situs saat ini ADA di tangan Bos, dan Bos sendiri yang akan memberikannya langsung ke Antigravity sebagai referensi (keputusan Bos, 13 Nov 2026) — jadi jalur kerjanya adalah perombakan di atas file lama oleh Bos di Antigravity, dipandu PRD + skill ini, bukan tambal-menambal oleh Cassie.

## 2. Tujuan & ukuran sukses

**Tujuan utama:** pengunjung yang datang dari Google Maps, Instagram, Facebook, dan TikTok berubah menjadi chat WhatsApp booking.

Ukuran sukses v1 (jujur, bisa diukur):

- Semua harga, nomor WA, dan fakta di halaman cocok 100% dengan data terkunci di §7 (lolos QA §10).
- Setiap kartu mobil punya tautan WhatsApp dengan teks awal yang sudah terisi nama mobilnya, sehingga Bos langsung tahu pengunjung datang dari mobil mana.
- Halaman nyaman dibaca dan cepat dibuka di HP kelas menengah lewat jaringan seluler Batam (mayoritas pengunjung datang dari HP).
- Bos menyetujui hasil akhir dalam maksimal 2 putaran revisi gabungan.

Bukan ukuran sukses v1: jumlah kunjungan / SEO ranking (itu pekerjaan fase berikutnya, setelah isi benar).

## 3. Target pengguna

1. **Utama:** orang di Batam dan pendatang (bandara Hang Nadim, pelabuhan) yang butuh mobil harian/mingguan, lepas kunci, memesan lewat WhatsApp.
2. **Sekunder (fase 2, bukan v1):** wisatawan Singapura/Malaysia pencari itinerary Batam — disiapkan strukturnya, belum dibuatkan versi Inggris di v1.

## 4. Filosofi desain (wajib dinamai sebelum komposisi, metode philosophy-first dari skill poster)

**Usulan nama: "Dermaga Senja" (Dusk Harbour)**

- Batam adalah kota pelabuhan; foto armada terbaik kita justru foto asli saat senja/malam (pemotretan 10 Nov 2026). Senja di dermaga = momen orang tiba di Batam dan butuh mobil — itu cerita halaman ini.
- Turunan visualnya: navy dalam #0a0e27 sebagai "langit senja", foto armada asli utuh sebagai pemeran utama, tipografi besar sebagai penunjuk arah ala papan dermaga, aksen kuning strip logo sebagai satu-satunya warna hangat.
- Satu halaman, satu pesan: **"Mobilnya nyata, harganya nyata, booking-nya satu chat."**

Nama ini usulan Cassie — Bos boleh mengganti; yang tidak boleh adalah mulai desain tanpa nama filosofi.

## 5. Aturan anti AI-slop (daftar larangan + penggantinya)

**Dilarang (penanda slop/template):**

- Gradasi ungu-biru generik, efek kaca (glassmorphism), kartu melayang seragam di semua bagian.
- Baris fitur 3 kolom berikon emoji/ikon generik ("Proses Cepat / Harga Transparan / …" persis pola situs lama).
- Foto stok atau mobil hasil generate AI; mobil harus foto armada asli, tampil utuh, roda menapak wajar.
- Statistik dan testimoni karangan; angka yang tidak bisa ditunjuk sumbernya tidak tampil.
- Semua bagian rata tengah dan simetris seperti template; headline klise ("Kebebasan Berkendara Dimulai Disini").
- Font bawaan renderer / fallback diam-diam. Hanya font brand (Montserrat + Archivo Black, sama seperti sistem video & poster).

**Penggantinya (yang membuat terasa dibuat khusus):**

- Tata letak editorial asimetris: foto besar + angka harga besar sebagai elemen desain, bukan hiasan kartu.
- Harga ditampilkan sebagai angka besar per mobil — transparansi dijadikan ciri visual utama.
- Area layanan ditulis sebagai daftar rute/tempat Batam yang nyata (Batam Centre, Nagoya, Hang Nadim, Harbour Bay, Baloi, Bengkong, Nongsa, Batu Aji) dengan tipografi, bukan peta stok.
- Cara booking memakai teks persis yang sudah Bos kunci di bank /balas (12 Nov 2026), bukan karangan baru.
- Microcopy spesifik Batam dan spesifik armada kita (mis. "Xpander hitam, odometer masih 800-an km" hanya bila Bos setuju memakai detail itu).

## 6. Ruang lingkup v1 — isi per bagian (atas ke bawah)

1. **Kepala (hero):** foto armada asli utuh (grup armada / Xpander senja), nama Rendy Rental, tagline resmi "Teman Perjalananmu di Batam", harga mulai Rp250rb/hari, tombol WhatsApp + tombol Lihat Armada. Fakta jujur pendamping: sejak 2020 · 11 unit · buka 24 jam.
2. **Armada:** kartu per model dengan foto asli, harga resmi per hari, tombol WhatsApp per model (teks awal terisi). Model: Xpander Rp350rb; Xenia, Avanza, Rocky, Brio Rp300rb; Agya, Calya Rp250rb.
3. **Cara booking:** 3 langkah dari teks /balas terkunci + syarat sewa (jaminan KTP, deposit Rp50rb untuk pelanggan baru, dst. sesuai SOP terkunci).
4. **Kenapa kami (pengganti fitur generik):** maksimal 3 poin spesifik dan terbukti — antar-jemput bandara/pelabuhan Rp50rb (gratis sewa >1 hari), buka 24 jam, deposit pelanggan baru hanya Rp50rb.
5. **Area layanan:** daftar tempat Batam (tanpa Tanjung Pinang — aturan permanen konten promosi).
6. **FAQ:** dari 7 teks FAQ terkunci Bos (harga, antar-jemput, jam buka, cara booking, cara bayar, alamat, syarat).
7. **Kaki:** alamat, WA +62 821-6444-7764, IG @carrental.rendy, FB Rendy Rental Mobil Batam, TikTok @rendyrental1, jam 24 jam. Tombol WhatsApp melayang di HP.

**Di luar ruang lingkup v1:** mesin booking/pembayaran online, harga sopir (belum ditetapkan Bos — layanan "dengan sopir" tidak diberi harga; tampil/tidaknya disebut sebagai pertanyaan terbuka §11), testimoni (belum ada ulasan tertulis asli — bagian ini TIDAK dibuat sampai ada ulasan sungguhan), blog/SEO lanjutan, versi Inggris.

## 7. Data terkunci (satu-satunya sumber kebenaran)

| Fakta | Nilai |
|---|---|
| Tarif lepas kunci | Xpander Rp350rb/hari; Xenia/Avanza/Rocky/Brio Rp300rb/hari; Agya/Calya Rp250rb/hari |
| Deposit | Rp50rb, pelanggan baru, di muka; DP hangus bila batal |
| Antar-jemput | Bandara/pelabuhan Rp50rb; gratis bila sewa >1 hari |
| WhatsApp | +62 821-6444-7764 (tautan wa.me/6282164447764) |
| Armada | 11 unit (daftar lengkap per unit + tahun: lihat pertanyaan terbuka) |
| Beroperasi | Sejak 2020, buka 24 jam |
| Warna brand | Navy #0a0e27 / biru / putih; logo master hitam |
| Font brand | Montserrat + Archivo Black saja |
| Larangan | Harga sopir, Tanjung Pinang di konten promosi, klaim rating/ulasan karangan, wording mendesak |

## 8. Teknis

- Situs statis satu halaman (HTML/CSS/JS polos, tanpa framework berat) — cepat, gratis di-host di Netlify yang sama, mudah dirawat. Bila Antigravity mengusulkan stack lain, stack itu harus tetap menghasilkan situs statis ringan yang bisa di-host gratis di Netlify; usul stack berat (React dkk.) ditolak sesuai vonis screening atas web-artifacts-builder.
- Dibangun oleh Bos di Antigravity memakai paket serah terima §13; hasil bangunannya diperiksa Cassie dengan gerbang QA §10 sebelum deploy.
- Mobile-first; foto armada dikompresi dari arsip asli tanpa mengubah bentuk/warna/plat mobil.
- Meta judul/deskripsi diperbarui mengikuti tarif benar ("Mulai Rp250rb").
- Deploy memakai akun Netlify Bos (Bos login sendiri saat tahap deploy, seperti pola login sebelumnya).

## 9. Skill yang menyertai — SUDAH DITULIS v1 (Bos memerintahkan 13 Nov 2026)

Skill kustom `website_rendy_rental` v1 hidup di `~/workspace/custom-skills/website_rendy_rental/` (SKILL.md + skill.yaml, terverifikasi muncul di pencarian skill) dan paket serah terima §13 sudah berisi `data-terkunci.md` + `prompt-pembuka-antigravity.md` di `files/paket-antigravity/`. Status skill: UNTESTED — ujian pertamanya adalah pembangunan website ini sendiri. Isinya:

- Metode: filosofi dinamai → brief komposisi → bangun → **refinement pass wajib** (pass kedua hanya mengencangkan/menghapus, tidak menambah elemen) → QA.
- Daftar larangan anti-slop §5 sebagai gerbang cek.
- Gerbang QA §10 sebagai checklist tertulis yang dijalankan pada HASIL RENDER (screenshot desktop + HP), bukan pada kode saja.
- Aturan perbaikan skill dari feedback Bos: koreksi sekali pakai vs berulang, perubahan skill hanya atas persetujuan Bos, catatan versi bertanggal.
- Ujian pertama skill = website ini sendiri; lulus bila semua gerbang QA lolos dan Bos menyetujui dalam ≤2 putaran revisi.

## 10. Gerbang QA sebelum Bos melihat (diadaptasi dari preflight poster)

1. **Fakta:** setiap harga cocok tarif terkunci; nomor WA diperiksa digit per digit; tidak ada klaim rating/testimoni/angka karangan; tidak ada harga sopir; tidak ada Tanjung Pinang.
2. **Font:** screenshot hasil render membuktikan Montserrat/Archivo Black yang tampil — fallback = gagal, render ulang.
3. **Visual:** filosofi §4 terbaca; foto mobil utuh, roda wajar; tidak ada elemen daftar larangan §5 yang lolos; logo master hitam menyatu di latar gelap, tanpa kotak putih.
4. **Fungsi:** semua tombol WhatsApp membuka chat dengan teks awal yang benar per model; tautan IG/FB/TikTok/Maps benar; tampil baik di lebar HP dan desktop.
5. **Mata segar:** satu pass terakhir melihat screenshot seperti pengunjung pertama kali: pesan utama terbaca dalam 5 detik pertama.

## 11. Pertanyaan terbuka untuk Bos (menentukan isi, dijawab bersama persetujuan PRD)

1. Filosofi "Dermaga Senja" disetujui, atau ganti nama/arah?
2. Layanan "dengan sopir": disebut tanpa harga, atau tidak ditampilkan sama sekali di v1?
3. Daftar lengkap 11 unit + tahunnya (untuk kartu armada per unit; sementara PRD memakai 7 model).
4. Kode pos final alamat: 29422 (konfirmasi lisan Bos) vs 29424 (tertulis di Google Maps)?
5. Testimoni: kosongkan dulu (usulan Cassie) sampai ulasan asli terkumpul lewat template permintaan ulasan?

## 12. Tahapan

1. PRD ini disetujui Bos (termasuk jawaban §11).
2. Skill `website_rendy_rental` ditulis → Bos setujui.
3. Cassie siapkan paket serah terima §13 → Bos bangun v1 di Antigravity dari referensi situs live saat ini.
4. Refinement pass di Antigravity + QA §10 oleh Cassie pada screenshot render hasilnya.
5. Bos putuskan hasil QA (final-only, pola kerja kita) → revisi gabungan bila perlu (maks. 2 putaran).
6. Deploy ke Netlify bersama Bos (Bos login sendiri) → verifikasi live.

## 13. Paket serah terima untuk Antigravity (disiapkan Cassie)

Agar Antigravity tidak mengarang dan tidak jatuh ke template/AI-slop, folder proyek yang dibuka Bos di Antigravity berisi:

0. **File-file website saat ini dari Bos sendiri** — Bos yang memberikannya langsung ke Antigravity sebagai referensi/bahan rombak (bukan lewat Cassie).
1. PRD ini (sebagai dokumen acuan utama).
2. **Skill `website_rendy_rental` — WAJIB, ditekankan Bos 13 Nov 2026 karena ini yang menjaga hasil tidak template/AI-slop.** Hasil cangkok paket screening 13 Nov 2026 (frontend-design, aturan detektor Impeccable, create-prd, cro/copywriting, QA webapp-testing + Vercel guidelines, web-quality, local-SEO) — dalam format yang dibaca Antigravity (file aturan/skill di folder proyek).
3. Data terkunci §7 sebagai satu file fakta tersendiri (tarif, WA, SOP ringkas, larangan) — Antigravity wajib membaca ini sebelum menulis teks apa pun.
4. Daftar larangan anti-slop §5 sebagai file tersendiri.
5. Foto armada asli terpilih dari arsip (utuh, warna/plat asli) — satu-satunya sumber gambar mobil yang boleh dipakai.
6. Prompt pembuka siap tempel untuk agen Antigravity: perintahkan membaca urutan PRD → data terkunci → skill, menamai ulang konfirmasi filosofi "Dermaga Senja", dan berhenti di wireframe untuk persetujuan Bos sebelum coding penuh (checkpoint, meniru alur web-design-engineer).
