// netlify/functions/xendit-webhook.js
// Menerima notifikasi dari Xendit ketika pembayaran berhasil/gagal

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const headers = {
    'Content-Type': 'application/json'
  };

  try {
    // Verifikasi token dari Xendit (keamanan)
    const xenditCallbackToken = event.headers['x-callback-token'];
    if (xenditCallbackToken !== process.env.XENDIT_WEBHOOK_TOKEN) {
      console.warn('Invalid webhook token:', xenditCallbackToken);
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Unauthorized' })
      };
    }

    const payload = JSON.parse(event.body);
    console.log('Xendit Webhook received:', JSON.stringify(payload, null, 2));

    const { id, external_id, status, amount, paid_at, payment_method } = payload;

    // Handle berdasarkan status pembayaran
    switch (status) {
      case 'PAID':
        console.log(`✅ PEMBAYARAN BERHASIL!`);
        console.log(`   Invoice ID: ${id}`);
        console.log(`   External ID: ${external_id}`);
        console.log(`   Amount: Rp ${amount.toLocaleString('id-ID')}`);
        console.log(`   Paid At: ${paid_at}`);
        console.log(`   Method: ${payment_method}`);

        // TODO: Kirim notifikasi WhatsApp ke admin
        // await notifyAdmin(payload);

        // TODO: Simpan ke database jika ada
        // await saveToDatabase(payload);

        break;

      case 'EXPIRED':
        console.log(`⏰ Invoice expired: ${external_id}`);
        break;

      case 'FAILED':
        console.log(`❌ Pembayaran gagal: ${external_id}`);
        break;

      default:
        console.log(`ℹ️ Status lain: ${status} untuk ${external_id}`);
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ received: true })
    };

  } catch (error) {
    console.error('Webhook error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    };
  }
};