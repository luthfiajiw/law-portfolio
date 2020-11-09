<script>
    import ListTile from "./components/ListTile.svelte";
    const tokokuHighlights = [
        "zt-1.jpg",
        "zt-2.jpg",
        "zt-3.jpg",
        "zt-4.jpg",
        "zt-5.jpg",
        "zt-6.jpg",
        "zt-7.jpg",
        "zt-8.jpg",
    ]
    const attendanceHighlights = [
        "za-1.jpg",
        "za-2.jpg",
        "za-3.jpg",
        "za-4.jpg",
        "za-5.jpg",
    ]
</script>

<div class="flutter-content">
    <div class="mt-4">
        <ListTile
            iconUrl="../../build/assets/tokoku_icon.png"
            title="Tokoku"
            category="ECommerce App"
            delay="animate__faster"
            highlights={tokokuHighlights}
            description="Tokoku adalah aplikasi yang 
                mempermudah dan mempercepat berjualan dimana pengguna bisa membuat toko online 
                sendiri dalam hitungan menit. Aplikasi ini memiliki fitur-fitur seperti: Analytic pengunjung, Integrasi dengan aplikasi 
                laporan keuangan Zahir Simply, Kostumisasi domain, Pembayaran melalui Virtual Account, Gopay, Ovo, Dana, LinkAja, Alfamart dan Indomaret, Pengiriman
                dengan ekspedisi online dan kurir mandiri jika seller memiliki kurir offline sendiri dan fitur yang sedang
                dikembangkan saat ini adalah pengiriman barang melalui jasa Gosend. Tokoku adalah aplikasi yang masih dan sedang saya kembangkan bersama tim saat ini,
                jadi masih ada banyak fitur-fitur lain yang akan hadir di Tokoku."
        />
        <ListTile
            iconUrl="../../build/assets/attendance_icon.png"
            title="Zahir Attendance"
            category="Mobile Attendance App"
            delay="animate__fast"
            highlights={attendanceHighlights}
            description="Zahir Attendance adalah aplikasi absensi kehadiran yang dibuat untuk memudahkan karyawan yang sedang bekerja onsite ataupun bekerja dari rumah. Aplikasi ini dibuat pada bulan maret dalam kurun waktu 10 hari
            dengan kebutuhan mendesak saat karyawan diwajibkan Work From Home di kala pandemi. Fitur utamanya saat itu adalah karyawan bisa mengisi kehadiran dengan melakukan foto selfie dan mencantumkan lokasi dimana dia berada. 
            User pada aplikasi ini memiliki 2 role, dimana ada admin yang bisa mengoordinir karyawan mulai dari mengundang karyawan masuk ke dalam data perusahaan sampai memeriksa kehadiran dari masing-masing karyawan. Pada aplikasi ini saya bertugas sebagai seorang UI Developer 
            yang mengonversi desain menjadi prototype jadi. Sekarang aplikasi ini sudah dikembangkan oleh tim yang ada dan sudah memiliki fitur face recognition."
        />
        <!-- <ListTile
            title="Bankboo"
            category="Fintech App"
            delay=""
        /> -->
    </div>
</div>