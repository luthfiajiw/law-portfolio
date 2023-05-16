<script lang="ts">
  import Divider from "./Divider.svelte";

  export let logo: string
  export let showcase: string
  export let name: string
  export let description: string
  export let imgHeight = 400
</script>

<div class="d-flex justify-content-between mt-5">
  <div>
    <Divider />
    <div class="d-flex align-items-center">
      <img
        src={logo}
        alt="icon"
        class="project-icon mr-2"
        height="25"
        style="margin-bottom: 4px;"
      />
      <h3 class="pt-3">{name}</h3>
    </div>
    <p class="desc mb-4">
      {description}
    </p>
  </div>
  <img
    src={showcase}
    alt="Preview ZO"
    class="mt-5 ml-5 project-showcase"
    height={imgHeight}
  />
</div>

<style>
  h3 {
    font-size: 48px;
    font-weight: 800;
    background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-top: 58px;
    margin-bottom: 32px;
  }

  .desc {
    max-width: 800px;
    font-size: 24px;
    line-height: 40px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
  }

  @media only screen and (max-width: 768px) {
    h3 {
      font-size: 24px;
      padding-top: 0px;
      margin-bottom: 18px;
    }
    .desc {
      font-size: 16px;
      line-height: 24px;
    }
    .project-showcase {
      display: none;
    }
  }
</style>