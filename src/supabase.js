// =====================================================================
// KONFIGURASI SUPABASE — RENDY RENTAL BATAM (JALUR B)
// Data terkunci 11 unit resmi, tanpa rating karangan
// =====================================================================

const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

let supabaseClient = null;

if (typeof window.supabase !== 'undefined' && SUPABASE_URL !== 'YOUR_SUPABASE_URL' && SUPABASE_URL.startsWith('http')) {
    try {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('✅ Supabase Client terhubung.');
    } catch (err) {
        console.error('❌ Gagal inisialisasi Supabase:', err);
    }
}

// 1. Fetch data mobil (jika Supabase aktif)
window.fetchCarsFromSupabase = async function() {
    if (supabaseClient) {
        try {
            const { data, error } = await supabaseClient
                .from('cars')
                .select('*')
                .eq('is_available', true)
                .order('order_index', { ascending: true });

            if (!error && data && data.length > 0) {
                return data;
            }
        } catch (err) {
            console.warn('Gagal memuat dari Supabase, beralih ke data lokal terkunci:', err);
        }
    }
    // Fallback: Menggunakan data lokal resmi yang sudah terkunci
    return Object.values(window.CAR_DETAILS_DB || {});
};

// 2. Simpan booking ke Supabase (jika pelanggan mengirim formulir tambahan)
window.saveBookingToSupabase = async function(bookingData) {
    if (!supabaseClient) return null;
    try {
        const { data, error } = await supabaseClient
            .from('bookings')
            .insert([{
                booking_code: `BK-${Date.now().toString().slice(-6)}`,
                car_name: bookingData.car_name,
                customer_name: bookingData.customer_name,
                customer_phone: bookingData.customer_phone,
                customer_email: bookingData.customer_email || null,
                start_date: bookingData.start_date,
                duration_days: bookingData.duration_days || 1,
                rental_type: 'Lepas Kunci',
                total_price: bookingData.total_price || 0,
                status: 'Menunggu Konfirmasi'
            }])
            .select();

        if (error) {
            console.warn('Gagal simpan booking ke Supabase:', error);
            return null;
        }
        return data;
    } catch (err) {
        console.warn('Error saveBookingToSupabase:', err);
        return null;
    }
};
