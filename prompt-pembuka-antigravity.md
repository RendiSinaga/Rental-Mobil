# Prompt Pembuka untuk Antigravity — Website Rendy Rental

Cara pakai (untuk Bos): buka folder proyek di Antigravity yang berisi (1) file website saat ini dari Bos, (2) PRD website, (3) SKILL.md dari skill `website_rendy_rental`, (4) file `data-terkunci.md`. Lalu tempel prompt di bawah ini sebagai perintah pertama.

Foto armada asli yang boleh dipakai (dari arsip Cassie, Bos minta/ambil dari paket foto yang sudah pernah dikirim Cassie): set bersih Google Maps — 01-xpander, 02-xenia, 03-avanza, 04-rocky, 05-brio, 06-agya, 07-calya, 08-grup-armada — plus foto senja/malam per unit dari arsip aset-armada (Xpander Hitam, Rocky Kuning, Rocky abu-abu, Xenia Hitam, Xenia Silver, Brio Merah, Brio Abu, Agya Merah, Agya Putih, Calya, Grup Armada).

---

PROMPT (salin semua di bawah garis ini):

Kamu membangun ulang website rental mobil "Rendy Rental Batam". File website saat ini di folder ini adalah REFERENSI struktur saja — angka dan klaim di dalamnya banyak yang salah dan tidak boleh disalin.

Baca dalam urutan ini sebelum melakukan apa pun:
1. PRD website (dokumen acuan utama — bila ada konflik, PRD menang atas segalanya)
2. data-terkunci.md (satu-satunya sumber harga, nomor, dan klaim yang boleh tampil)
3. SKILL.md (skill website_rendy_rental — metode, daftar larangan anti-AI-slop, dan gerbang QA yang wajib kamu jalankan)

Aturan keras:
- Filosofi desain: "Dermaga Senja" seperti di PRD. Konfirmasikan filosofi dan sistem token (warna brand navy #0a0e27, font Montserrat + Archivo Black saja — jangan unduh font lain) kepadaku dalam ringkasan singkat.
- Stack: HTML/CSS/JS statis polos, satu halaman, untuk hosting gratis Netlify. Jangan usulkan framework berat.
- Hanya foto armada asli yang kusediakan. Dilarang foto stok dan dilarang generate gambar mobil.
- Dilarang mengarang fakta: bila ada data yang tidak ada di data-terkunci.md, berhenti dan tanyakan kepadaku, jangan diisi sendiri. Terutama: tidak ada harga sopir, tidak ada rating/ulasan/testimoni, tidak ada kata "Tanjung Pinang".

Checkpoint wajib: setelah membaca ketiga dokumen itu, tampilkan WIREFRAME (urutan bagian + tata letak teks sederhana/ASCII sesuai PRD) dan BERHENTI. Tunggu persetujuanku sebelum menulis kode apa pun.

Setelah aku menyetujui wireframe: bangun halamannya, lakukan refinement pass (kencangkan dan hapus, jangan menambah elemen), jalankan sendiri checklist detektor anti-slop dan gerbang QA dari SKILL.md pada hasil render (screenshot lebar 1440/1024/768/390), lalu laporkan hasil checklist-nya baris per baris saat menyerahkan hasil.
