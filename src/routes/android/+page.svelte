<script>
  import androidLogo from "$lib/project_imgs/logo-android.svg";
  import ProjectHero from "../../components/ProjectHero.svelte";
  import ProjectSection from "../../components/ProjectSection.svelte";

  import githubShowcase from "$lib/project_imgs/github-showcase.png"
  import storyShowcase from "$lib/project_imgs/story-showcase.png"
</script>

<svelte:head>
	<title>Android Kotlin Projects | Silaw</title>
	<meta name="description" content="Flutter Projects" />
</svelte:head>

<section class="container-md mt-5">
  <ProjectHero
    name="Android Kotlin"
    image={androidLogo}
    description="Berikut adalah proyek-proyek Android Native yang sudah pernah saya kerjakan beserta dengan deskripsi di masing-masing proyek."
  />
  <ProjectSection
    name="Github Users Clone"
    description ="Aplikasi ini merupakan submission akhir dari kursus Belajar Fundamental Aplikasi Android di Dicoding yang berfokus pada networking dan local database.
    Fitur di aplikasi ini antara lain Search User, Detail User, Add User to Favorite."
    showcase={githubShowcase}
  />
  <div class="py-3"></div>
  <ProjectSection
    name="StoryApp"
    description="Aplikasi ini merupakan submission akhir dari kursus Belajar Pengembangan Aplikasi Android Intermediate di Dicoding. 
    Kursus ini berfokus pada Implementing Maps, Post a Story, Paging, and Testing."
    showcase={storyShowcase}
  />
  <div class="py-4"></div>
</section>