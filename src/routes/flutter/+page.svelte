<script>
  import { isOpen, selectedImg, images } from "../../stores"
  import flutterLogo from "$lib/project_imgs/logo-flutter.svg";
  import ProjectHero from '../../components/ProjectHero.svelte';
  import ProjectSection from "../../components/ProjectSection.svelte";

  import clipoShowcase from "$lib/project_imgs/clipo-showcase.png"
  import clipoLogo from "$lib/project_imgs/clipo_logo.png"
  import zoShowcase from "$lib/project_imgs/zo-showcase.png"
  import zoLogo from "$lib/project_imgs/zo_logo.png"
  import tokokuShowcase from "$lib/project_imgs/tokoku-dashboard.png"
  import tokokulogo from "$lib/project_imgs/tokoku-logo.png"
  import attendanceShowcase from "$lib/project_imgs/attendance-showcase.png"
  import attendancelogo from "$lib/project_imgs/attendance-logo.png"
  
  import cp1 from "$lib/project_imgs/cp-1.png"
  import cp2 from "$lib/project_imgs/cp-2.png"
  import cp3 from "$lib/project_imgs/cp-3.png"
  import cp4 from "$lib/project_imgs/cp-4.png"
  import cp5 from "$lib/project_imgs/cp-5.png"
  import cp7 from "$lib/project_imgs/cp-6.png"
  import cp6 from "$lib/project_imgs/cp-7.png"

  import zo1 from "$lib/project_imgs/zo-1.png"
  import zo2 from "$lib/project_imgs/zo-2.png"
  import zo3 from "$lib/project_imgs/zo-3.png"
  import zo4 from "$lib/project_imgs/zo-4.png"
  import zo5 from "$lib/project_imgs/zo-5.png"

  import za1 from "$lib/project_imgs/za-1.jpg"
  import za2 from "$lib/project_imgs/za-2.jpg"
  import za3 from "$lib/project_imgs/za-3.jpg"
  import za4 from "$lib/project_imgs/za-4.jpg"
  import za5 from "$lib/project_imgs/za-5.jpg"

  import zt1 from "$lib/project_imgs/zt-1.jpg"
  import zt2 from "$lib/project_imgs/zt-2.jpg"
  import zt3 from "$lib/project_imgs/zt-3.jpg"
  import zt4 from "$lib/project_imgs/zt-4.jpg"
  import zt5 from "$lib/project_imgs/zt-5.jpg"
  import zt6 from "$lib/project_imgs/zt-6.jpg"
  import zt7 from "$lib/project_imgs/zt-7.jpg"
  import zt8 from "$lib/project_imgs/zt-8.jpg"

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
	<title>Flutter Projects | Silaw</title>
	<meta name="description" content="Flutter Projects" />
</svelte:head>

<section class="container-md mt-5">
  <ProjectHero
    name="Flutter"
    image={flutterLogo}
    description="Below are the Flutter projects I have worked on along with a description of each one."
  />
  <ProjectSection
    name="Clipo"
    description="Clipo is an innovative breakthrough in the field of professional selection. 
      Prioritizing client comfort by sending integrated and practical psychological test results reports."
    logo={clipoLogo}
    showcase={clipoShowcase}
    googlePlay="https://play.google.com/store/apps/details?id=com.fac.clipo"
    appStore="https://apps.apple.com/id/app/clipo/id6451285135"
    onOpenPreviews={() => handlePreview([cp1, cp2, cp3, cp4, cp5, cp6, cp7])}
  />
  <div class="py-3"></div>
  <ProjectSection
    name="Zahir Apps"
    description="Zahir Online is an integrated financial and business recording application that produces financial reports quickly and accurately. 
    This application is a super application that is the parent of similar application fragments, where several modules in Zahir Apps are used in other sub-applications."
    logo={zoLogo}
    showcase={zoShowcase}
    googlePlay="https://play.google.com/store/apps/details?id=com.zahironline&hl=en"
    appStore="https://apps.apple.com/id/app/zahir-apps/id1504813555?l=id"
    onOpenPreviews={() => handlePreview([zo1, zo2, zo3, zo4, zo5])}
  />
  <div class="py-3"></div>
  <ProjectSection
    name="Tokoku"
    description="Tokoku is an application that
    simplify and speed up selling where users can create online stores
    yourself in minutes. Its existing features are visitor analytics, integration with applications
    Zahir Simply financial reports, Domain customization, Payment through several merchants, Delivery
    with Gosend & offline."
    logo={tokokulogo}
    showcase={tokokuShowcase}
    onOpenPreviews={() => handlePreview([zt1, zt2, zt3, zt4, zt5, zt6, zt7, zt8])}
  />
  <div class="py-3"></div>
  <ProjectSection
    name="Zahir Attendance"
    description="Zahir Attendance is an attendance application created to make it easier for employees who are working onsite or working from home.
    The main feature at that time was that employees could fill attendance by taking selfies and including the location where they were. The name of this application has changed to Zahir HR."
    logo={attendancelogo}
    showcase={attendanceShowcase}
    googlePlay="https://play.google.com/store/apps/details?id=com.zahir.attendance&hl=en"
    appStore="https://apps.apple.com/id/app/zahir-hr/id1504841303?l=id"
    onOpenPreviews={() => handlePreview([za1, za2, za3, za4, za5])}
  />
  <div class="py-4"></div>
</section>