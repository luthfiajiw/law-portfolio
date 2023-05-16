<script>
  import nodejsLogo from "$lib/project_imgs/logo-nodejs.svg";
  import ProjectHero from "../../components/ProjectHero.svelte";
  import ProjectSection from "../../components/ProjectSection.svelte";

  import bankbooWhite from "$lib/project_imgs/bankboo-logo-white.png"
  import bankbooGreen from "$lib/project_imgs/bankboo-logo.png"
</script>

<svelte:head>
	<title>Restful API Projects | Silaw</title>
	<meta name="description" content="Flutter Projects" />
</svelte:head>

<section class="container-md mt-5">
  <ProjectHero
    name="Restful API"
    image={nodejsLogo}
    description="Berikut adalah proyek-proyek Restful API yang sudah pernah saya kerjakan beserta dengan deskripsi di masing-masing proyek."
  />
  <ProjectSection
    name="Bankboo"
    description="Aplikasi ini merupakan aplikasi pelayanan bank sampah secara mobile. User yang sudah terdaftar sebagai nasabah suatu bank
    bisa melakukan transaksi setor sampah yang nantinya dikonversi menjadi saldo uang, setelah itu bisa melakukan transaksi penarikan saldo."
    logo={bankbooGreen}
    showcase={bankbooGreen}
    imgHeight={275}
  />
  <div class="py-4"></div>
</section>