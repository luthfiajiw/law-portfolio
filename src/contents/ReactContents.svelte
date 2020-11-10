<script>
    import ListTile from "./components/ListTile.svelte";
    export let handleOpen;
    const rupiahHighlights = [
        "rupiah-1.png",
        "rupiah-2.png",
        "rupiah-3.png",
        "rupiah-4.png",
    ];
</script>

<div class="react-content">
    <div class="mt-4">
        <ListTile
            iconUrl="../../build/assets/amano_icon.png"
            title="Amano"
            category="ECommerce Web App"
            delay="animate__faster"
            on:handleOpen={handleOpen}
            description="Amano merupakan aplikasi berbasis web untuk para pebisnis online yang bisa membantu bisnis menjadi jauh lebih efektif dan efisien.
            Seller tidak perlu repot-repot memberikan form pembelian manual kepada customer, seller cukup memberikan link produk yang mau dibeli oleh customer dan 
            transaksi pembelian pun akan tercatat di dalam dashboard aplikasi."
        />
        <ListTile
            iconUrl="../../build/assets/r-icon.svg"
            title="Rupiah"
            category="Point Of Sales Web App"
            delay="animate__fast"
            highlights={rupiahHighlights}
            on:handleOpen={handleOpen}
            description="Rupiah adalah aplikasi yang bertujuan untuk membantu mencatat transaksi penjualan dan pembelian yang terjadi pada barang daganganmu.
            Rupiah merupakan aplikasi kasir berbasis web sebagai pengganti peran aplikasi kasir di desktop.
            Dengan begitu kamu bisa melakukan transaksi & pembukuan melalui ponselmu dimana pun kamu berada.

            Aplikasi ini dibuat dalam kurun waktu satu bulan, dimana saya Luthfi Aji Wicaksono sebagai Frontend Developer dan Sholeh Zuamsyah sebagai Backend Developer yang bersama-sama membangun aplikasi sederhana ini dan
            ini adalah aplikasi pertama kami di tahun 2018."
        />
        <ListTile
            iconUrl="../../build/assets/univershirt.svg"
            title="Univershirt"
            category="Management Order Web App"
            handleOpen={handleOpen}
            description="Univershirt merupakan platform manajemen order juga sebagai platform untuk melakukan order. Aplikasi ini merupakan media untuk mempertemukan Vendor atau 
            orang/organisasi yang memproduksi pakaian dengan calon pembeli. Univershirt akan meminta vendor untuk mengerjakan order customer kemudian sistem otomatis mengirim email kepada vendor setelah design disetujui. 
            Ketika vendor sudah selesai mengerjakan order maka vendor harus upload foto produk tersebut, saat vendor sudah mengupload foto produk maka sistem akan mengirim tagihan kepada customer untuk melunasi orderannya."
        />
    </div>
</div>