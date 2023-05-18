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
    description="Below are the Android Native projects I have worked on along with a description of each one."
  />
  <ProjectSection
    name="Github Users Clone"
    description ="This app is the final submission of the Learning Android Application Fundamentals course at Dicoding which focuses on networking and local databases. 
    Features in this application include Search Users, User Details, Add User to Favorite."
    showcase={githubShowcase}
    github="https://github.com/luthfiajiw/submission-github-3-dicoding"
    certificate="https://www.dicoding.com/certificates/NVP71NL7GPR0"
  />
  <div class="py-3"></div>
  <ProjectSection
    name="StoryApp"
    description="This app is the final submission of the Learn Intermediate Android Application Development course at Dicoding.
    This course focuses on Implementing Maps, Post a Story, Paging, and Testing."
    showcase={storyShowcase}
    github="https://github.com/luthfiajiw/submission-story-app"
    certificate="https://www.dicoding.com/certificates/NVP79ONDWZR0"
  />
  <div class="py-4"></div>
</section>