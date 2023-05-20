<script>
  import { isOpen, selectedImg, images } from "../../stores"

  import androidLogo from "$lib/project_imgs/logo-android.svg";
  import ProjectHero from "../../components/ProjectHero.svelte";
  import ProjectSection from "../../components/ProjectSection.svelte";

  import githubShowcase from "$lib/project_imgs/github-showcase.png"
  import storyShowcase from "$lib/project_imgs/story-showcase.png"

  import github1 from "$lib/project_imgs/github-1.png"
  import github2 from "$lib/project_imgs/github-2.png"
  import github3 from "$lib/project_imgs/github-3.png"
  import github4 from "$lib/project_imgs/github-4.png"
  import github5 from "$lib/project_imgs/github-5.png"

  import story1 from "$lib/project_imgs/story-1.png"
  import story2 from "$lib/project_imgs/story-2.png"
  import story3 from "$lib/project_imgs/story-3.png"
  import story4 from "$lib/project_imgs/story-4.png"

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
    onOpenPreviews={() => handlePreview([github1, github2, github3, github4, github5])}
  />
  <div class="py-3"></div>
  <ProjectSection
    name="StoryApp"
    description="This app is the final submission of the Learn Intermediate Android Application Development course at Dicoding.
    This course focuses on Implementing Maps, Post a Story, Paging, and Testing."
    showcase={storyShowcase}
    github="https://github.com/luthfiajiw/submission-story-app"
    certificate="https://www.dicoding.com/certificates/NVP79ONDWZR0"
    onOpenPreviews={() => handlePreview([story1, story2, story3, story4])}
  />
  <div class="py-4"></div>
</section>