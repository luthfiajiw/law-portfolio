<script>
  import { fly } from 'svelte/transition';
  import Card from "../components/Card.svelte";
  import Divider from "../components/Divider.svelte";
  import attendanceLogo from "$lib/project_imgs/attendance-logo.png";
  import zoLogo from "$lib/project_imgs/zo_logo.png";
  import bankbooLogo from "$lib/project_imgs/bankboo-logo.png";
  import viewport from "../actions/useViewportAction";

  $:visible = false

  /**
   * @param {boolean} val
   */
  function handleVisibility(val) {
    visible = val
  }
</script>


<div
  use:viewport
  on:enterViewport={() => handleVisibility(true)}
  on:exitViewport={() => handleVisibility(false)}
  class="projects container-md mt-4 mb-4"
>
  {#if visible === true}
    <div class="pt-5" transition:fly="{{ y: 100, duration: 500 }}">
      <Divider />
    </div>
    <h3 class="pt-3" transition:fly="{{ y: 100, duration: 1000 }}">
      Projects
    </h3>
    <p class="project-desc" transition:fly="{{ y: 100, duration: 1500 }}">
      Here are some projects that I have worked on with various technologies from the frontend to the backend.
    <div class="d-flex flex-wrap card-row" transition:fly="{{ x: 100, duration: 2000 }}">
      <Card
        imgPath={attendanceLogo}
        title="Zahir Attendance"
        description="Zahir Attendance is an attendance application created to make it easier for employees who are working onsite or working from home." />
      <div class="space"></div>
      <Card
        imgPath={zoLogo}
        title="Zahir Apps"
        description="Zahir Online is an integrated financial and business recording application that produces financial reports quickly and accurately." />
      <div class="space"></div>
      <Card
        imgPath={bankbooLogo}
        title="Bankboo API"
        description="This Restful API is used in a mobile waste bank service application that I personally developed." />
      <div class="space"></div>
      <div class="more-projects">
        <span>+5</span>
      </div>
    </div>
  {/if}
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
  .card-row {
    margin-top: 3rem;
  }
  .project-desc {
    max-width: 800px;
    font-size: 24px;
    line-height: 40px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
  }
  .space {
    margin-left: 3rem;
  }
  .more-projects {
    position: relative;
    height: 100px;
    width: 100px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23) !important;
    border-radius: 50px;
    margin-top: auto;
    margin-bottom: auto;
  }
  .more-projects:hover {
    cursor: pointer;
  }
  .more-projects span{
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    font-size: 2.5rem;
    color: #fff;
  }

  @media only screen and (max-width: 768px) {
    h3 {
      font-size: 32px;
      padding-top: 0px;
      margin-bottom: 18px;
    }
    .project-desc {
      font-size: 16px;
      line-height: 24px;
    }
    .card-row {
      margin-top: 0rem;
      justify-content: center;
    }
    .more-projects {
      height: 90px;
      width: 90px;
    }
    .more-projects span {
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 426px) {
      .space {
          margin-left: 0;
      }
      .more-projects {
          margin-left: 3rem;
          margin-right: 3rem;
      }
  }
</style>