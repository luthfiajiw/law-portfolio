<script>
  import Divider from "../components/Divider.svelte";
  import flutterLogo from "$lib/project_imgs/logo-flutter.svg";
  import androidLogo from "$lib/project_imgs/logo-android.svg";
</script>

<div class="techs container-md mt-4 mb-5">
  <div class="pt-5">
    <Divider />
  </div>
  <h3 class="pt-3">Technologies</h3>
  <p class="tech-desc">
    I have experience using various technologies from the frontend to the backend.
  </p>
  <div class="row mt-3">
    <div class="card-tech">
      <img src={flutterLogo} alt="icon" height="25">
      <p class="card-tech-title mt-2 pt-1">
        Flutter
      </p>
      <p class="card-tech-desc mb-5">
        Experienced in building mobile applications with flutter.
      </p>
      <a href="/flutter" class="see-project">See Projects</a>
    </div>
    <div class="mx-4"></div>
    <div class="card-tech">
      <i class="fa-brands fa-react card-tech-ic"></i>
      <p class="card-tech-title mt-2">
        React
      </p>
      <p class="card-tech-desc mb-5">
        Have experience in building web applications based on React JS
      </p>
      <a href="/react" class="see-project">See Projects</a>
    </div>
    <div class="mx-4"></div>
    
    <div class="card-tech">
      <img src={androidLogo} alt="icon" height="26">
      <p class="card-tech-title mt-2">
        Android Kotlin
      </p>
      <p class="card-tech-desc mb-5">
        Have experience in creating native android applications with Kotlin.
      </p>
      <a href="/android" class="see-project">See Projects</a>
    </div>
    <div class="mx-4"></div>
    <div class="card-tech mt-3">
      <i class="fa-brands fa-node-js card-tech-ic"></i>
      <p class="card-tech-title mt-2">
        Restful API
      </p>
      <p class="card-tech-desc mb-5">
        Have experience in creating Restful API with Node JS.
      </p>
      <a href="/rest-api" class="see-project">See Projects</a>
    </div>
  </div>
</div>

<style>
  h3 {
    font-size: 56px;
    font-weight: 800;
    background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .mt-3 {
    margin-top: 3rem !important;
  }
  .card-tech {
    width: 250px;
    padding: 1rem;
    border-radius: 4px;
  }
  .tech-desc {
    max-width: 800px;
    font-size: 24px;
    line-height: 40px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
  }
  .card-tech-ic {
    color: #FFFFFF;
    font-size: 24px;
  }
  .card-tech-title {
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
  }
  .card-tech-desc {
    color: rgba(255, 255, 255, 0.5);
  }
  .see-project {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
  }
  .card-tech:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: all 0.5s ease 0s;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }

  @media only screen and (max-width: 768px) {
    .mt-3 {
      margin-top: 0rem !important;
    }
    .card-tech {
      width: 100%;
      margin-left: 2rem;
      margin-right: 2rem;
      text-align: center;
    }
    .card-tech:hover {
      transform: scale(1);
    }
    h3 {
      font-size: 32px;
      padding-top: 0px;
      margin-bottom: 18px;
    }
    .tech-desc {
      font-size: 16px;
      line-height: 24px;
    }
  }
</style>
  