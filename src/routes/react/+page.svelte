<script>
  import reactLogo from "$lib/project_imgs/logo-react.svg";
  import ProjectHero from "../../components/ProjectHero.svelte";
  import ProjectSection from "../../components/ProjectSection.svelte";

  import rupiahShowcase from "$lib/project_imgs/rupiah-showcase.png"
  import rupiahLogo from "$lib/project_imgs/r-icon.svg"
  import posxShowcase from "$lib/project_imgs/posx-showcase.png"
  import posxLogo from "$lib/project_imgs/posx-logo.png"
</script>

<svelte:head>
	<title>React Projects | Silaw</title>
	<meta name="description" content="Flutter Projects" />
</svelte:head>

<section class="container-md mt-5">
  <ProjectHero
    name="React"
    image={reactLogo}
    description="Berikut adalah proyek-proyek React yang sudah pernah saya kerjakan beserta dengan deskripsi di masing-masing proyek."
  />
  <ProjectSection
    name="Rupiah"
    description="Rupiah adalah aplikasi React pertama saya, aplikasi ini bertujuan untuk membantu mencatat transaksi penjualan dan pembelian yang terjadi."
    logo={rupiahLogo}
    showcase={rupiahShowcase}
    imgHeight={275}
  />
  <div class="space"></div>
  <ProjectSection
    name="POSX Web"
    description="POSX Web ini adalah bentuk aplikasi website dari POSX Mobile. Pada versi web ini hanya difokuskan untuk proses transaksi,
    serta sudah mendukung alur offline dan online."
    logo={posxLogo}
    showcase={posxShowcase}
    imgHeight={275}
  />
  <div class="py-4"></div>
</section>

<style>
  .space {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .space {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
</style>