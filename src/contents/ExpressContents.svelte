<script>
import ListTile from "./components/ListTile.svelte";
</script>

<div class="react-content">
    <div class="mt-4">
        <ListTile
            iconUrl="../../assets/cogs.png"
            title="Bankboo API"
            category="Restful API"
            delay=""
            description="API ini digunakan pada aplikasi Bankboo, aplikasi yang juga masih saya develop sendiri. Aplikasi ini merupakan aplikasi pelayanan bank sampah secara mobile. Sistemnya masih cukup sederhana, dimana ada user yang bisa mendaftar menjadi nasabah suatu bank
            setelah itu bisa melakukan transaksi setor sampah yang akan dikonversi menjadi saldo uang dan juga bisa melakukan transaksi penarikan saldo. Transaksi yang terjadi harus melibatkan kedua belah pihak, yaitu ketika nasabah melakukan transaksi maka pihak bank akan men-scan QR code transaksi milik nasabah tersebut untuk memverifikasinya.
            Validasi pada API ini masih memiliki banyak celah karena memang ini adalah API percobaan pertama saya. Dan karena saya seorang frontend developer jadi saya menggunakan ORM supaya terbantu dalam berinteraksi dengan database, ORM yang digunakan pada API ini adalah Sequelize. MVP untuk saat ini hanya sekedar bisa melakukan transaksi, 
            selanjutnya saya akan melanjutkan developing dari sisi aplikasi mobile."
        />
    </div>
</div>