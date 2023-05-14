<script>
  import '../styles.css'
  import flutterIcon from "$lib/project_imgs/flutter-icon.svg";
</script>

<svelte:head>
	<title>Flutter Projects | Silaw</title>
	<meta name="description" content="Flutter Projects" />
</svelte:head>

<section class="container-md mt-5">
  <div class="d-flex justify-content-between align-items-center">
    <div>
      <div class="d-flex align-items-center">
        <img
          src={flutterIcon}
          alt="icon"
          class="project-icon mr-3"
          height="25"
          style="margin-bottom: 18px;"
        />
        <h2 class="welcome">
          Flutter
        </h2>
      </div>      
      <p class="hi-from-me mb-5">
        Berikut adalah proyek-proyek flutter yang sudah pernah saya kerjakan beserta dengan deskripsi masing-masing proyek.
      </p>
    </div>
    <img
      src={flutterIcon}
      alt="icon"
      class="project-image mt-5"
      height="250"
    />
  </div>
</section>

<style>
  h2 {
    font-size: 56px;
    font-weight: 800;
    background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-top: 58px;
    margin-bottom: 32px;
  }
  .hi-from-me {
    max-width: 800px;
    font-size: 24px;
    line-height: 40px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
  }

  @media only screen and (max-width: 768px) {
    h2 {
        font-size: 32px;
        padding-top: 0px;
        margin-bottom: 18px;
    }
    .hi-from-me {
        font-size: 16px;
        line-height: 24px;
    }
  }
</style>