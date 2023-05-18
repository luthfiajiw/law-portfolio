<script>
  import flutterLogo from "$lib/project_imgs/logo-flutter.svg";
  import ProjectHero from '../../components/ProjectHero.svelte';
  import ProjectSection from "../../components/ProjectSection.svelte";

  import zoShowcase from "$lib/project_imgs/zo-showcase.png"
  import zoLogo from "$lib/project_imgs/zo_logo.png"
  import tokokuShowcase from "$lib/project_imgs/tokoku-dashboard.png"
  import tokokulogo from "$lib/project_imgs/tokoku-logo.png"
  import attendanceShowcase from "$lib/project_imgs/attendance-showcase.png"
  import attendancelogo from "$lib/project_imgs/attendance-logo.png"
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
    name="Zahir Apps"
    description="Zahir Online is an integrated financial and business recording application that produces financial reports quickly and accurately. 
    This application is a super application that is the parent of similar application fragments, where several modules in Zahir Apps are used in other sub-applications."
    logo={zoLogo}
    showcase={zoShowcase}
    googlePlay="https://play.google.com/store/apps/details?id=com.zahironline&hl=en"
    appStore="https://apps.apple.com/id/app/zahir-apps/id1504813555?l=id"
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
  />
  <div class="py-4"></div>
</section>