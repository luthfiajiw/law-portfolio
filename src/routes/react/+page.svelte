<script>
  import { isOpen, selectedImg, images } from "../../stores"
  import reactLogo from "$lib/project_imgs/logo-react.svg";
  import ProjectHero from "../../components/ProjectHero.svelte";
  import ProjectSection from "../../components/ProjectSection.svelte";

  import rupiahShowcase from "$lib/project_imgs/rupiah-showcase.png"
  import rupiahLogo from "$lib/project_imgs/r-icon.svg"
  import posxShowcase from "$lib/project_imgs/posx-showcase.png"
  import posxLogo from "$lib/project_imgs/posx-logo.png"

  import rupiah1 from "$lib/project_imgs/rupiah-1.png"
  import rupiah2 from "$lib/project_imgs/rupiah-2.png"
  import rupiah3 from "$lib/project_imgs/rupiah-3.png"
  import rupiah4 from "$lib/project_imgs/rupiah-4.png"

  import posx0 from "$lib/project_imgs/posx-0.png"
  import posx1 from "$lib/project_imgs/posx-1.png"
  import posx2 from "$lib/project_imgs/posx-2.png"
  import posx3 from "$lib/project_imgs/posx-3.png"
  import posx4 from "$lib/project_imgs/posx-4.png"
  import posx5 from "$lib/project_imgs/posx-5.png"

  /**
     * @param {string[]} previews
     */
  function handlePreview(previews) {
    isOpen.set(true)
    selectedImg.set(previews[0])
    images.set(previews)
  }
</script>

<svelte:head>
	<title>React Projects | Silaw</title>
	<meta name="description" content="Flutter Projects" />
</svelte:head>

<section class="container-md mt-5">
  <ProjectHero
    name="React"
    image={reactLogo}
    description="Below are the React projects I have worked on along with a description of each one."
  />
  <ProjectSection
    name="Rupiah"
    description="Rupiah is my first React application, this application aims to help record sales and purchase transactions that occur."
    logo={rupiahLogo}
    showcase={rupiahShowcase}
    imgHeight={275}
    github="https://github.com/luthfiajiw/rupiah-id"
    browser="https://rupiah-id.netlify.app/"
    onOpenPreviews={() => handlePreview([rupiah1, rupiah2, rupiah3, rupiah4])}
  />
  <div class="space"></div>
  <ProjectSection
    name="POSX Web"
    description="POSX Web is a form of website application from POSX Mobile. In this web version it is only focused on transaction processing,
    and already supports offline and online flows."
    logo={posxLogo}
    showcase={posxShowcase}
    imgHeight={275}
    browser="https://pos.zahironline.com"
    onOpenPreviews={() => handlePreview([posx0, posx1, posx2, posx3, posx4, posx5])}
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