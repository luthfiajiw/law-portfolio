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
    description="Berikut adalah proyek-proyek Flutter yang sudah pernah saya kerjakan beserta dengan deskripsi di masing-masing proyek."
  />
  <ProjectSection
    name="Zahir Apps"
    description="Zahir Online adalah aplikasi pencatatan keuangan dan bisnis yang terintegrasi dan menghasilkan laporan keuangan secara cepat dan tepat.
    Aplikasi ini merupakan super apps yang menjadi induk dari pecahan-pecahan aplikasi serupa, dimana beberapa module yang ada di dalam Zahir Apps
    ini digunakan di sub aplikasi lainnya."
    logo={zoLogo}
    showcase={zoShowcase}
  />
  <div class="py-3"></div>
  <ProjectSection
    name="Tokoku"
    description="Tokoku adalah aplikasi yang 
    mempermudah dan mempercepat berjualan dimana pengguna bisa membuat toko online 
    sendiri dalam hitungan menit. Fitur-fiturnya yang ada yaitu Analytic pengunjung, Integrasi dengan aplikasi 
    laporan keuangan Zahir Simply, Kostumisasi domain, Pembayaran melalui beberapa merchant, Pengiriman
    dengan Gosend & offline."
    logo={tokokulogo}
    showcase={tokokuShowcase}
  />
  <div class="py-3"></div>
  <ProjectSection
    name="Zahir Attendance"
    description="Zahir Attendance adalah aplikasi absensi kehadiran yang dibuat untuk memudahkan karyawan yang sedang bekerja onsite ataupun bekerja dari rumah. 
    Fitur utamanya saat itu adalah karyawan bisa mengisi kehadiran dengan melakukan foto selfie dan mencantumkan lokasi dimana dia berada. Nama aplikasi ini sudah berubah menjadi Zahir HR."
    logo={attendancelogo}
    showcase={attendanceShowcase}
  />
  <div class="py-4"></div>
</section>