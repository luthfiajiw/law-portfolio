<script>
  import Divider from "../components/Divider.svelte";
</script>

<div class="exp container-md mt-4 mb-5 pb-4">
  <div class="pt-5">
    <Divider />
  </div>
  <h3 class="pt-3">Timeline</h3>
  <p class="exp-desc mb-5">
    Here is my career journey so far. Starting from being a mentor and helping to develop curricula to becoming a frontend developer.
  </p>
  <div class="experience mb-5">
    <div class="step">
      <div class="stepper">
        <div class="circle">
          <div class="circle2" />
        </div>
        <div class="line"></div>
      </div>
      <div class="content">
        <p class="job">Mobile Flutter Developer</p>
        <p class="company">
          Firstasia Consultants <br>
          <span class="period">Feb 2023 - Present <span class="mx-2">•</span> Fulltime</span>
        </p>
        <div class="job-desc text-secondary mb-3">
          I am the first mobile developer here, my job is to help this company develop
          their product on the mobile app side by ensuring the architecture is well built.
        </div>
      </div>
    </div>
    <div class="step">
      <div class="stepper">
        <div class="circle">
          <div class="circle2" />
        </div>
        <div class="line"></div>
      </div>
      <div class="content">
        <p class="job">Frontend Developer</p>
        <p class="company">
          Zahir <br>
          <span class="period">Nov 2019 - Feb 2023 <span class="mx-2">•</span> Fulltime</span>
        </p>
        <div class="job-desc text-secondary mb-3">
          I am in charge of developing a flutter mobile application as well as a web application based on react js. 
          My main responsibility is to optimize existing features and develop new features. I'm also in charge of doing research when necessary to apply new things to the apps.
        </div>
      </div>
    </div>
    <div class="step">
      <div class="stepper">
        <div class="circle">
          <div class="circle2" />
        </div>
        <div class="line"></div>
      </div>
      <div class="content">
        <p class="job">Mentor</p>
        <p class="company">
          Pondok IT <br>
          <span class="period">Feb 2019 - Sep 2019 <span class="mx-2">•</span> Fulltime</span>
        </p>
        <div class="job-desc text-secondary">
          I was in charge of compiling the frontend curriculum with the rest of the React JS mentor team. 
          The curriculum includes material on the basics of programming algorithms to the interaction/communication of the backend with the frontend until it becomes a complete application.
        </div>
      </div>
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
  .exp-desc {
    max-width: 800px;
    font-size: 24px;
    line-height: 40px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
  }
  .job {
    font-weight: bold;
    color: #fff;
    font-size: 24px;
  }
  .company {
    margin-bottom: 1rem;
    color: #fff;
    font-size: 16px;
  }
  .period {
    font-size: 14px;
    color: rgba(255, 255, 255, .7);
  }
  .job-desc {
    max-width: 768px;
  }
  .step {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 20px;
  }
  .stepper {
    position: relative;
  }
  .stepper .circle {
    border: 7px solid #6c757d;
    background-color: #0f1624;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display: inline-block;
    position: relative;
  }

  .stepper .circle .circle2 {
    position: absolute;
    border: 3px solid #6c757d;
    background-color: #6c757d;
    border-radius: 100%;
    width: 10px;
    height: 10px;
    left: 0;
    right: 0;
    margin: auto;
    top: 0;
    bottom: 0;
    display: inline-block;
  }
  .stepper .line {
    top: 24px;
    left: 13px;
    height: 100%;
    position: absolute;
    border-left: 6px solid #6c757d;
  }
  .content {
    margin-left: 20px;
    display: inline-block;
  }

  @media only screen and (max-width: 768px) {
    h3 {
      font-size: 32px;
      padding-top: 0px;
      margin-bottom: 18px;
    }
    .exp-desc {
      font-size: 16px;
      line-height: 24px;
    }
  }
</style>