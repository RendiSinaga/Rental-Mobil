// ===========================
// RENDY RENTAL BATAM — BILINGUAL ENGINE (ID / EN)
// Default static HTML stays Indonesian for Indonesian SEO;
// switching to EN updates UI, Alpine state, and WhatsApp templates live.
// ===========================

(function () {
    const STORAGE_KEY = 'rendy_lang';

    const TRANSLATIONS = {
        id: {
            'meta.indexTitle': 'Rental Mobil Batam | Rendy Rental Lepas Kunci Rp250rb',
            'meta.fleetTitle': 'Daftar Harga Rental Mobil Batam | Rendy Rental',
            'meta.bookingTitle': 'Booking & Pembayaran QRIS - Rendy Rental Batam',
            'meta.successTitle': 'Pembayaran Berhasil - Rendy Rental Batam',

            'nav.home': 'Home',
            'nav.fleet': 'Armada',
            'nav.fleetAll': 'Armada Lengkap',
            'nav.services': 'Layanan',
            'nav.booking': 'Cara Booking',
            'nav.faq': 'FAQ',
            'nav.location': 'Lokasi',
            'nav.cta': 'Hubungi Kami',
            'nav.back': 'Kembali',
            'nav.openMenu': 'Buka menu navigasi',

            'hero.titleLine1': 'Rental Mobil',
            'hero.titleLine2': 'di Batam',
            'hero.subtitle': 'Sewa mobil lepas kunci, unit bersih, dan antar-jemput bandara tersedia.',
            'hero.feat.lepas': 'Lepas Kunci',
            'hero.feat.booking': 'Booking Mudah',
            'hero.feat.antar': 'Antar 24/7',
            'hero.feat.bersih': 'Unit Bersih',
            'hero.ctaWa': 'Cek Mobil Tersedia',
            'hero.ctaFleet': 'Lihat Armada',
            'hero.stageBadge': 'Mulai Rp250rb/hari',

            'marquee.1': 'Lepas Kunci Batam',
            'marquee.2': '10+ Unit Matic Terawat',
            'marquee.3': 'Antar-Jemput Bandara &amp; Pelabuhan',
            'marquee.4': 'Gratis Antar-Jemput Sewa &gt; 1 Hari',
            'marquee.5': 'Deposit Pelanggan Baru Rp50.000',
            'marquee.6': 'Beroperasi Sejak 2020',

            'stats.units': 'Unit Mobil',
            'stats.models': 'Pilihan Model',
            'stats.since': 'Tahun Berdiri',
            'stats.hours': 'Jam Layanan',

            'fleet.badge': 'Armada Kami',
            'fleet.heading': 'Pilihan <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold to-accent">Mobil Favorit</span>',
            'fleet.subtitle': 'Xpander, Avanza, Xenia, Rocky, Brio, Agya &amp; Calya — semua unit matic lepas kunci, bersih, dan siap jalan',
            'fleet.viewAll': 'Lihat armada lengkap',

            'card.seats7': '7 Kursi',
            'card.seats5': '5 Kursi',
            'card.auto': 'Matic',
            'card.from': 'Mulai dari',
            'card.perDay': '/hari',
            'card.sim': 'Simulasi sewa ›',
            'card.book': 'Sewa Sekarang',

            'sim.perDay24': '/hari (24 jam)',
            'sim.colorPrompt': 'Pilih Varian Warna Unit:',
            'sim.title': 'Simulasi Durasi Sewa',
            'sim.freeNote': 'Sewa &gt; 1 hari gratis antar-jemput bandara/pelabuhan',
            'sim.pickupTitle': 'Antar-Jemput Bandara / Pelabuhan',
            'sim.totalLabel': 'Estimasi Total Biaya Sewa',
            'sim.depositNote': 'Deposit pelanggan baru: Rp50.000 di muka',
            'sim.bookBtn': 'Booking Unit Ini via WhatsApp →',

            'services.badge': 'Kenapa Pilih Kami',
            'services.heading': 'Layanan <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold to-accent">Unggulan</span>',
            'services.subtitle': 'Syarat jelas, unit terawat, dan pengantaran fleksibel di Batam',
            'services.s1Title': 'Lepas Kunci Mudah',
            'services.s1Desc': 'Cukup KTP / identitas valid. Harga jelas di awal, deposit pelanggan baru hanya Rp50.000.',
            'services.s2Title': 'Antar-Jemput Bandara',
            'services.s2Desc': 'Bandara Hang Nadim &amp; pelabuhan Rp50.000 — <strong class="text-gold">GRATIS</strong> bila sewa lebih dari 1 hari.',
            'services.s3Title': 'Unit Bersih &amp; 24 Jam',
            'services.s3Desc': '10+ unit matic rutin diservis &amp; dicek sebelum jalan, didukung tim support 24 jam.',

            'booking.badge': 'Proses Praktis',
            'booking.heading': 'Cara Booking <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold to-accent">3 Langkah</span>',
            'booking.subtitle': 'Klik setiap langkah di bawah untuk melihat detail alur sewa lepas kunci',
            'booking.termsBtn': 'Syarat &amp; Ketentuan',

            'faq.badge': 'Tanya Jawab',
            'faq.heading': 'Pertanyaan <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold to-accent">Umum</span>',
            'faq.subtitle': 'Jawaban singkat seputar syarat dan ketentuan sewa',
            'faq.q1': 'Apa saja syarat untuk sewa mobil lepas kunci?',
            'faq.a1': 'Sertakan KTP atau identitas valid, serta deposit pelanggan baru Rp50.000 di muka (hangus jika batal sepihak). Sisa pembayaran bisa dibayar saat serah terima atau maksimal saat pengembalian unit.',
            'faq.q2': 'Bagaimana perhitungan durasi waktu sewa per harinya?',
            'faq.a2': 'Sewa dihitung per 24 jam sejak serah terima kunci. Overtime Rp30.000 per jam, dan lebih dari 8 jam dihitung tambah 1 hari.',
            'faq.q3': 'Apakah tersedia antar-jemput Bandara Hang Nadim dan pelabuhan di Batam?',
            'faq.a3': 'Ya, antar-jemput Bandara Hang Nadim dan pelabuhan di Batam Rp50.000, atau GRATIS bila sewa lebih dari 1 hari.',
            'faq.q4': 'Apakah harga sewa sudah termasuk bahan bakar (BBM)?',
            'faq.a4': 'Belum termasuk BBM. Mobil diserahkan dengan bahan bakar cukup dan dikembalikan sesuai posisi saat diterima.',
            'faq.q5': 'Bagaimana jika terjadi kendala teknis selama masa sewa, dan di mana lokasinya?',
            'faq.a5': 'Tim kami melayani 24 jam dari Perum Taman Lestari Blok C18, Batu Aji, Batam dan siap membantu mekanik atau unit pengganti sejenis bila terjadi kendala teknis.',

            'cta.heading': 'Butuh Mobil Hari Ini?',
            'cta.subtitle': 'Chat WhatsApp langsung untuk cek unit yang tersedia sekarang',
            'cta.btn': 'Chat via WhatsApp',

            'loc.badge': 'Lokasi Kami',
            'loc.subtitle': 'Temukan kami di Batu Aji, Batam',
            'loc.openMaps': 'Lihat titik di Maps',
            'loc.copyAddr': '📋 Salin Alamat',
            'loc.cardMeta': 'Perum Taman Lestari Blok C18, Batu Aji · 24 Jam',
            'loc.directions': 'Petunjuk Arah ↗',
            'loc.areasTitle': 'Area Layanan Sewa Mobil Batam',
            'loc.airportTag': 'Bandara Hang Nadim',

            'footer.since': 'Since 2020',
            'footer.desc': 'Solusi rental mobil lepas kunci di Batam dengan layanan 24 jam dan harga transparan.',
            'footer.servicesCol': 'Layanan',
            'footer.linkSelfDrive': 'Sewa Lepas Kunci',
            'footer.linkHowToBook': 'Cara Booking',
            'footer.linkAirport': 'Antar-Jemput Bandara',
            'footer.companyCol': 'Perusahaan',
            'footer.linkAbout': 'Tentang Kami',
            'footer.linkFleet': 'Armada Lengkap',
            'footer.linkTerms': 'Syarat &amp; Ketentuan',
            'footer.contactCol': 'Hubungi Kami',
            'footer.hours24': 'Buka 24 Jam',
            'footer.bottomFaq': 'Bantuan &amp; FAQ',

            'terms.badge': 'SOP Sewa Lepas Kunci',
            'terms.title': 'Syarat &amp; Ketentuan',
            'terms.r1': 'Menyertakan <strong class="text-white">KTP / dokumen jaminan identitas</strong> yang valid saat serah terima unit.',
            'terms.r2': 'Pelanggan baru berlaku <strong class="text-white">deposit Rp50.000 di muka</strong> saat pemesanan (DP hangus bila pembatalan sepihak dari penyewa).',
            'terms.r3': 'Hitungan sewa per <strong class="text-white">24 jam</strong> sejak serah terima kunci. Overtime Rp30.000/jam; lebih dari 8 jam dihitung tambah 1 hari.',
            'terms.r4': 'Antar-jemput bandara/pelabuhan Rp50.000 (<strong class="text-emerald-400">GRATIS</strong> bila sewa lebih dari 1 hari).',
            'terms.r5': 'Bahan bakar (BBM) dikembalikan sesuai posisi saat diterima. Segala kerusakan selama masa sewa menjadi tanggung jawab penyewa.',
            'terms.okBtn': 'Mengerti',

            'float.pullTip': 'Tarik ke atas ↑',
            'float.pullLabel': 'Tarik ke bawah atau klik untuk kembali ke atas',
            'float.waTip': 'Chat WA 24 Jam',

            'list.badge': '10+ Unit Matic Terawat · Siap Lepas Kunci',
            'list.heading': 'Daftar <span class="shimmer-gold">Armada Lengkap</span>',
            'list.subtitle': 'Pilih mobil lepas kunci sesuai kebutuhan Anda di Batam. Klik kategori atau ketik nama unit di bawah.',
            'list.searchPlaceholder': 'Cari mobil (mis. Xpander, Rocky, Brio)...',
            'list.filterAll': 'Semua Unit',
            'list.filterBudget': 'Tarif Hemat',
            'list.sortDefault': 'Urutan Standar',
            'list.sortAsc': 'Harga Termurah',
            'list.sortDesc': 'Harga Tertinggi',
            'list.emptyTitle': 'Mobil tidak ditemukan',
            'list.emptyDesc': 'Coba ubah kata kunci pencarian atau pilih kategori lain.',
            'list.emptyBtn': 'Tampilkan Semua Mobil',
            'list.ctaHeading': 'Butuh Rekomendasi Mobil Terbaik?',
            'list.ctaDesc': 'Hubungi kami langsung untuk tanya ketersediaan jadwal &amp; rekomendasi mobil sesuai kebutuhan Anda',

            'book.badge': 'Bayar Online',
            'book.heading': 'Booking &amp; Pembayaran <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold to-accent">QRIS</span>',
            'book.subtitle': 'Isi form di bawah, lalu scan QRIS untuk konfirmasi booking.',
            'book.step1': 'Data Booking',
            'book.step2': 'Pembayaran',
            'book.carLabel': 'Pilih Mobil <span class="text-red-400">*</span>',
            'book.carPlaceholder': '-- Pilih Mobil --',
            'book.typeLabel': 'Tipe Sewa <span class="text-red-400">*</span>',
            'book.typeCard': 'Lepas Kunci (24 Jam)',
            'book.startDate': 'Tanggal Mulai <span class="text-red-400">*</span>',
            'book.daysLabel': 'Jumlah Hari <span class="text-red-400">*</span>',
            'book.nameLabel': 'Nama Lengkap <span class="text-red-400">*</span>',
            'book.namePh': 'Masukkan nama lengkap',
            'book.emailHelp': 'Link pembayaran akan dikirim ke email ini',
            'book.waLabel': 'No. WhatsApp <span class="text-red-400">*</span>',
            'book.summaryTitle': '📋 Ringkasan Pesanan',
            'book.sumCar': 'Mobil',
            'book.sumDur': 'Durasi',
            'book.sumRate': 'Harga/hari',
            'book.submitBtn': 'Lanjut ke Pembayaran QRIS',
            'book.xenditNote': '🔒 Pembayaran aman diproses oleh <strong class="text-gray-400">Xendit</strong>',
            'book.loadingTitle': 'Memproses Pembayaran...',
            'book.loadingDesc': 'Sedang membuat invoice QRIS untuk Anda',
            'book.readyTitle': 'Invoice Siap! 🎉',
            'book.readyDesc': 'Anda akan diarahkan ke halaman pembayaran Xendit...',
            'book.totalPay': 'Total Bayar',
            'book.expires': 'Berlaku hingga',
            'book.payNow': '🔳 Bayar Sekarang (QRIS)',
            'book.redirectHint': 'Jika tidak otomatis, klik tombol di atas untuk membuka halaman pembayaran',
            'book.errTitle': 'Gagal Membuat Invoice',
            'book.backForm': '← Kembali ke Form',
            'book.waHelp': 'Bantuan via WhatsApp',

            'success.heading': 'Pembayaran <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Berhasil!</span>',
            'success.subtitle': 'Terima kasih telah memesan. Booking Anda sudah dikonfirmasi! 🎉',
            'success.nextTitle': 'Apa yang terjadi selanjutnya?',
            'success.n1': 'Tim Rendy Rental akan menghubungi Anda via <strong class="text-white">WhatsApp</strong> untuk konfirmasi detail booking',
            'success.n2': 'Bukti pembayaran dikirim ke <strong class="text-white">email</strong> Anda',
            'success.n3': 'Mobil siap diantar pada tanggal yang sudah disepakati',
            'success.waBtn': 'Konfirmasi via WhatsApp',
            'success.backHome': '← Kembali ke Halaman Utama',

            'toast.addrCopied': 'Alamat disalin: Batu Aji, Batam',
            'toast.carBoost': 'Unit matic bersih siap jalan di Batam!'
        },
        en: {
            'meta.indexTitle': 'Batam Car Rental | Self-Drive from Rp250k - Rendy Rental',
            'meta.fleetTitle': 'Batam Car Rental Fleet & Rates | Rendy Rental',
            'meta.bookingTitle': 'Booking & QRIS Payment - Rendy Rental Batam',
            'meta.successTitle': 'Payment Successful - Rendy Rental Batam',

            'nav.home': 'Home',
            'nav.fleet': 'Fleet',
            'nav.fleetAll': 'All Cars',
            'nav.services': 'Services',
            'nav.booking': 'How to Book',
            'nav.faq': 'FAQ',
            'nav.location': 'Location',
            'nav.cta': 'Contact Us',
            'nav.back': 'Back',
            'nav.openMenu': 'Toggle navigation menu',

            'hero.titleLine1': 'Car Rental',
            'hero.titleLine2': 'in Batam',
            'hero.subtitle': 'Self-drive car rental in Batam, clean vehicles, and airport/ferry pickup available.',
            'hero.feat.lepas': 'Self-Drive',
            'hero.feat.booking': 'Easy Booking',
            'hero.feat.antar': '24/7 Delivery',
            'hero.feat.bersih': 'Clean Cars',
            'hero.ctaWa': 'Check Available Cars',
            'hero.ctaFleet': 'View Fleet',
            'hero.stageBadge': 'From Rp250k/day',

            'marquee.1': 'Self-Drive Batam',
            'marquee.2': '10+ Clean Auto Cars',
            'marquee.3': 'Airport &amp; Ferry Port Delivery',
            'marquee.4': 'Free Airport Pickup &gt; 1 Day Rental',
            'marquee.5': 'New Customer Deposit Rp50,000',
            'marquee.6': 'Operating Since 2020',

            'stats.units': 'Vehicles',
            'stats.models': 'Car Models',
            'stats.since': 'Established',
            'stats.hours': 'Hour Service',

            'fleet.badge': 'Our Fleet',
            'fleet.heading': 'Featured <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold to-accent">Car Selection</span>',
            'fleet.subtitle': 'Xpander, Avanza, Xenia, Rocky, Brio, Agya &amp; Calya — clean automatic self-drive cars ready to go',
            'fleet.viewAll': 'View full fleet',

            'card.seats7': '7 Seats',
            'card.seats5': '5 Seats',
            'card.auto': 'Auto',
            'card.from': 'Starting from',
            'card.perDay': '/day',
            'card.sim': 'Rate calculator ›',
            'card.book': 'Book Now',

            'sim.perDay24': '/day (24 hrs)',
            'sim.colorPrompt': 'Select Color Option:',
            'sim.title': 'Rental Duration Estimator',
            'sim.freeNote': 'Free airport/ferry port pickup for rentals &gt; 1 day',
            'sim.pickupTitle': 'Airport / Ferry Port Delivery',
            'sim.totalLabel': 'Estimated Rental Total',
            'sim.depositNote': 'New customer deposit: Rp50,000 upfront',
            'sim.bookBtn': 'Book This Car via WhatsApp →',

            'services.badge': 'Why Choose Us',
            'services.heading': 'Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold to-accent">Key Services</span>',
            'services.subtitle': 'Clear terms, well-maintained cars, and flexible delivery across Batam',
            'services.s1Title': 'Easy Self-Drive',
            'services.s1Desc': 'Valid ID card / passport only. Transparent pricing upfront, just Rp50,000 deposit for new customers.',
            'services.s2Title': 'Airport &amp; Port Delivery',
            'services.s2Desc': 'Hang Nadim Airport &amp; ferry ports Rp50,000 — <strong class="text-gold">FREE</strong> for rentals over 1 day.',
            'services.s3Title': 'Clean Cars &amp; 24/7 Support',
            'services.s3Desc': '10+ automatic units regularly serviced &amp; inspected before handover, backed by 24/7 support.',

            'booking.badge': 'Simple Process',
            'booking.heading': 'Book in <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold to-accent">3 Easy Steps</span>',
            'booking.subtitle': 'Click each step below to see the self-drive rental process',
            'booking.termsBtn': 'Terms &amp; Conditions',

            'faq.badge': 'Questions',
            'faq.heading': 'Frequently Asked <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold to-accent">Questions</span>',
            'faq.subtitle': 'Quick answers on our rental terms and requirements',
            'faq.q1': 'What are the requirements for self-drive car rental?',
            'faq.a1': 'Simply provide a valid ID (KTP / Passport) and a Rp50,000 upfront deposit for new customers (forfeited on unilateral cancellation). The remaining balance is payable upon handover or at return.',
            'faq.q2': 'How is the daily rental duration calculated?',
            'faq.a2': 'Rentals are counted per 24 hours from key handover. Overtime is Rp30,000/hour, and over 8 hours counts as 1 extra day.',
            'faq.q3': 'Is delivery available to Hang Nadim Airport and Batam ferry ports?',
            'faq.a3': 'Yes, airport and ferry port pickup/drop-off in Batam is Rp50,000, or FREE when renting for more than 1 day.',
            'faq.q4': 'Does the rental price include fuel?',
            'faq.a4': 'Fuel is not included. Cars are delivered with sufficient fuel and must be returned at the same fuel level.',
            'faq.q5': 'What if a technical issue occurs during the rental, and where are you located?',
            'faq.a5': 'Our team operates 24/7 from Perum Taman Lestari Blok C18, Batu Aji, Batam and will assist with a mechanic or an equivalent replacement vehicle if needed.',

            'cta.heading': 'Need a Car Today?',
            'cta.subtitle': 'Message us on WhatsApp directly to check live vehicle availability',
            'cta.btn': 'Chat on WhatsApp',

            'loc.badge': 'Our Location',
            'loc.subtitle': 'Find us in Batu Aji, Batam',
            'loc.openMaps': 'Open in Google Maps',
            'loc.copyAddr': '📋 Copy Address',
            'loc.cardMeta': 'Perum Taman Lestari Blok C18, Batu Aji · 24 Hours',
            'loc.directions': 'Directions ↗',
            'loc.areasTitle': 'Batam Car Rental Service Areas',
            'loc.airportTag': 'Hang Nadim Airport',

            'footer.since': 'Since 2020',
            'footer.desc': 'Trusted self-drive car rental solution in Batam with 24-hour service and transparent pricing.',
            'footer.servicesCol': 'Services',
            'footer.linkSelfDrive': 'Self-Drive Rental',
            'footer.linkHowToBook': 'How to Book',
            'footer.linkAirport': 'Airport &amp; Port Delivery',
            'footer.companyCol': 'Company',
            'footer.linkAbout': 'About Us',
            'footer.linkFleet': 'Complete Fleet',
            'footer.linkTerms': 'Terms &amp; Conditions',
            'footer.contactCol': 'Contact Us',
            'footer.hours24': 'Open 24 Hours',
            'footer.bottomFaq': 'Help &amp; FAQ',

            'terms.badge': 'Self-Drive Rental Policy',
            'terms.title': 'Terms &amp; Conditions',
            'terms.r1': 'Present a valid <strong class="text-white">ID card / Passport</strong> upon vehicle handover.',
            'terms.r2': 'New customers pay a <strong class="text-white">Rp50,000 upfront deposit</strong> when booking (non-refundable upon unilateral cancellation).',
            'terms.r3': 'Rental is counted per <strong class="text-white">24 hours</strong> from key handover. Overtime is Rp30,000/hour; over 8 hours is charged as 1 extra day.',
            'terms.r4': 'Airport/ferry port pickup &amp; drop-off Rp50,000 (<strong class="text-emerald-400">FREE</strong> for rentals over 1 day).',
            'terms.r5': 'Return fuel at the same level as handover. Any vehicle damage during the rental period is the renter’s responsibility.',
            'terms.okBtn': 'Got It',

            'float.pullTip': 'Pull to top ↑',
            'float.pullLabel': 'Pull down or click to return to top',
            'float.waTip': '24h WA Chat',

            'list.badge': '10+ Clean Auto Units · Self-Drive Ready',
            'list.heading': 'Complete <span class="shimmer-gold">Car Fleet</span>',
            'list.subtitle': 'Choose the ideal self-drive car for your trip in Batam. Filter by category or search below.',
            'list.searchPlaceholder': 'Search car (e.g. Xpander, Rocky, Brio)...',
            'list.filterAll': 'All Cars',
            'list.filterBudget': 'Budget Rates',
            'list.sortDefault': 'Default Order',
            'list.sortAsc': 'Lowest Price',
            'list.sortDesc': 'Highest Price',
            'list.emptyTitle': 'No cars found',
            'list.emptyDesc': 'Try changing your search keyword or selecting another category.',
            'list.emptyBtn': 'Show All Cars',
            'list.ctaHeading': 'Need a Car Recommendation?',
            'list.ctaDesc': 'Chat with our team to check schedule availability &amp; get the best match for your trip',

            'book.badge': 'Online Payment',
            'book.heading': 'Booking &amp; <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold to-accent">QRIS</span> Payment',
            'book.subtitle': 'Fill in the form below, then scan QRIS to confirm your booking.',
            'book.step1': 'Booking Details',
            'book.step2': 'Payment',
            'book.carLabel': 'Select Car <span class="text-red-400">*</span>',
            'book.carPlaceholder': '-- Select a Car --',
            'book.typeLabel': 'Rental Type <span class="text-red-400">*</span>',
            'book.typeCard': 'Self-Drive (24 Hours)',
            'book.startDate': 'Start Date <span class="text-red-400">*</span>',
            'book.daysLabel': 'Duration <span class="text-red-400">*</span>',
            'book.nameLabel': 'Full Name <span class="text-red-400">*</span>',
            'book.namePh': 'Enter your full name',
            'book.emailHelp': 'Payment link will be sent to this email',
            'book.waLabel': 'WhatsApp Number <span class="text-red-400">*</span>',
            'book.summaryTitle': '📋 Order Summary',
            'book.sumCar': 'Vehicle',
            'book.sumDur': 'Duration',
            'book.sumRate': 'Daily Rate',
            'book.submitBtn': 'Proceed to QRIS Payment',
            'book.xenditNote': '🔒 Secure payment powered by <strong class="text-gray-400">Xendit</strong>',
            'book.loadingTitle': 'Creating Invoice...',
            'book.loadingDesc': 'Generating your QRIS payment invoice',
            'book.readyTitle': 'Invoice Ready! 🎉',
            'book.readyDesc': 'Redirecting you to the Xendit payment page...',
            'book.totalPay': 'Total Payment',
            'book.expires': 'Valid until',
            'book.payNow': '🔳 Pay Now (QRIS)',
            'book.redirectHint': 'If not redirected automatically, click the button above to open the payment page',
            'book.errTitle': 'Failed to Create Invoice',
            'book.backForm': '← Back to Form',
            'book.waHelp': 'WhatsApp Support',

            'success.heading': 'Payment <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Successful!</span>',
            'success.subtitle': 'Thank you for booking. Your reservation is confirmed! 🎉',
            'success.nextTitle': 'What happens next?',
            'success.n1': 'Rendy Rental team will reach out via <strong class="text-white">WhatsApp</strong> to confirm handover details',
            'success.n2': 'Payment receipt has been sent to your <strong class="text-white">email</strong>',
            'success.n3': 'Your car will be ready on the agreed pickup schedule',
            'success.waBtn': 'Confirm via WhatsApp',
            'success.backHome': '← Back to Home',

            'toast.addrCopied': 'Address copied: Batu Aji, Batam',
            'toast.carBoost': 'Clean automatic car ready for Batam roads!'
        }
    };

    const PAGE_TITLES = {
        index: 'meta.indexTitle',
        fleet: 'meta.fleetTitle',
        booking: 'meta.bookingTitle',
        success: 'meta.successTitle'
    };

    function detectInitialLang() {
        try {
            const urlLang = new URLSearchParams(window.location.search).get('lang');
            if (urlLang === 'en' || urlLang === 'id') {
                localStorage.setItem(STORAGE_KEY, urlLang);
                return urlLang;
            }
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved === 'en' || saved === 'id') return saved;
        } catch (_) {}
        return 'id';
    }

    let currentLang = detectInitialLang();

    function applyDomTranslations(lang) {
        const dict = TRANSLATIONS[lang] || TRANSLATIONS.id;
        document.documentElement.lang = lang;

        const pageKey = document.body?.dataset?.i18nPage;
        if (pageKey && PAGE_TITLES[pageKey] && dict[PAGE_TITLES[pageKey]]) {
            document.title = dict[PAGE_TITLES[pageKey]];
        }

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (dict[key] !== undefined) el.textContent = dict[key];
        });

        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.dataset.i18nHtml;
            if (dict[key] !== undefined) el.innerHTML = dict[key];
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
        });

        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.dataset.i18nAria;
            if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
        });

        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.dataset.i18nTitle;
            if (dict[key] !== undefined) el.setAttribute('title', dict[key]);
        });

        // Swap static WhatsApp message hrefs seamlessly
        document.querySelectorAll('a[data-wa-en]').forEach(a => {
            if (!a.dataset.waHrefId) a.dataset.waHrefId = a.getAttribute('href') || '';
            if (lang === 'en') {
                a.setAttribute('href', 'https://wa.me/6282164447764?text=' + encodeURIComponent(a.dataset.waEn));
            } else {
                a.setAttribute('href', a.dataset.waHrefId);
            }
        });

        // Sync ID / EN pill switcher styling
        document.querySelectorAll('[data-set-lang]').forEach(btn => {
            const isActive = btn.dataset.setLang === lang;
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
            if (isActive) {
                btn.classList.add('bg-gold', 'text-primary', 'shadow-sm');
                btn.classList.remove('text-gray-300', 'hover:text-white');
            } else {
                btn.classList.remove('bg-gold', 'text-primary', 'shadow-sm');
                btn.classList.add('text-gray-300', 'hover:text-white');
            }
        });
    }

    function setLang(lang) {
        if (lang !== 'id' && lang !== 'en') return;
        currentLang = lang;
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (_) {}

        if (window.Alpine && window.Alpine.store('i18n')) {
            window.Alpine.store('i18n').lang = lang;
        }
        applyDomTranslations(lang);
        window.dispatchEvent(new CustomEvent('rendy:lang-change', { detail: { lang } }));
    }

    window.RendyI18n = {
        getLang: () => currentLang,
        isEn: () => currentLang === 'en',
        t: (key) => (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || TRANSLATIONS.id[key] || '',
        setLang
    };

    document.addEventListener('alpine:init', () => {
        window.Alpine.store('i18n', { lang: currentLang });
    });

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-set-lang]');
        if (!btn) return;
        setLang(btn.dataset.setLang);
    });

    document.addEventListener('DOMContentLoaded', () => {
        applyDomTranslations(currentLang);
    });
})();
