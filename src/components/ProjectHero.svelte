<script lang="ts">
  export let name: string
  export let description: string
  export let image: string
</script>

<div class="d-flex justify-content-between align-items-center">
  <div>
    <div class="d-flex align-items-center">
      <img
        src={image}
        alt="icon"
        class="project-icon mr-3"
        height="25"
        style="margin-bottom: 18px;"
      />
      <h2>
        {name}
      </h2>
    </div>      
    <p class="description mb-5">
      {description}
    </p>
  </div>
  <img
    src={image}
    alt="icon"
    class="project-image mt-5"
    height="250"
  />
</div>

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
  .description {
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
    .description {
        font-size: 16px;
        line-height: 24px;
    }
  }
</style>