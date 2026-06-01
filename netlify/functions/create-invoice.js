// netlify/functions/create-invoice.js
// Membuat invoice/QRIS menggunakan Xendit API

exports.handler = async (event, context) => {
  // Hanya izinkan POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // CORS headers agar bisa dipanggil dari frontend
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  try {
    const body = JSON.parse(event.body);
    const { namaCustomer, email, noHp, mobil, hargaPerHari, jumlahHari, tanggalMulai } = body;

    // Validasi input
    if (!namaCustomer || !email || !noHp || !mobil || !hargaPerHari || !jumlahHari) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Semua field wajib diisi' })
      };
    }

    const totalHarga = hargaPerHari * jumlahHari;
    const externalId = `RENDY-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

    // Payload untuk Xendit Invoice (support QRIS)
    const invoicePayload = {
      external_id: externalId,
      amount: totalHarga,
      description: `Sewa ${mobil} - ${jumlahHari} hari (${tanggalMulai})`,
      invoice_duration: 86400, // 24 jam
      customer: {
        given_names: namaCustomer,
        email: email,
        mobile_number: noHp
      },
      customer_notification_preference: {
        invoice_created: ['email', 'whatsapp'],
        invoice_reminder: ['email', 'whatsapp'],
        invoice_paid: ['email', 'whatsapp']
      },
      success_redirect_url: `${process.env.SITE_URL || 'https://rendyrental-batam.netlify.app'}/payment-success.html`,
      failure_redirect_url: `${process.env.SITE_URL || 'https://rendyrental-batam.netlify.app'}/payment-failed.html`,
      payment_methods: ['QRIS'], // Hanya QRIS
      items: [
        {
          name: `Sewa ${mobil}`,
          quantity: jumlahHari,
          price: hargaPerHari,
          category: 'Car Rental'
        }
      ],
      fees: [],
      currency: 'IDR'
    };

    // Panggil Xendit API
    const xenditResponse = await fetch('https://api.xendit.co/v2/invoices', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(process.env.XENDIT_SECRET_KEY + ':').toString('base64')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(invoicePayload)
    });

    const invoice = await xenditResponse.json();

    if (!xenditResponse.ok) {
      console.error('Xendit error:', invoice);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Gagal membuat invoice', detail: invoice })
      };
    }

    // Kirim balik URL pembayaran ke frontend
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        invoiceId: invoice.id,
        externalId: invoice.external_id,
        invoiceUrl: invoice.invoice_url, // URL halaman bayar Xendit
        amount: invoice.amount,
        expiryDate: invoice.expiry_date
      })
    };

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Server error', message: error.message })
    };
  }
};