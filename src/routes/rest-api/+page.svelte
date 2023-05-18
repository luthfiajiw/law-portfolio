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
    description="Below are the Rest API projects I have worked on along with a description of each one."
  />
  <ProjectSection
    name="Bankboo"
    description="This application is a mobile waste bank service application. Users who are already registered as customers of a bank 
    can make waste deposit transactions which will later be converted into cash balances, after which they can make balance withdrawal transactions."
    logo={bankbooGreen}
    showcase={bankbooGreen}
    imgHeight={275}
    github="https://github.com/luthfiajiw/bankboo-api"
  />
  <div class="py-4"></div>
</section>