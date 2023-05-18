<script lang="ts">
  import Divider from "./Divider.svelte";

  export let logo = ""
  export let showcase: string
  export let name: string
  export let description: string
  export let imgHeight = 400
  export let googlePlay = ""
  export let appStore = ""
  export let github = ""
  export let browser = ""
  export let certificate = ""
  let screenWidth: number
</script>

<svelte:window bind:innerWidth={screenWidth} />

<section>
  <div class="d-flex justify-content-between mt-5">
    <div>
      <Divider />
      <div class="d-flex align-items-center">
        {#if logo !== ""}
          <img
            src={logo}
            alt="icon"
            class="project-icon mr-2"
            height="25"
            style="margin-bottom: 4px;"
          />
        {/if}
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

  <div class={`d-flex align-items-center ${screenWidth > 768 ? "mb-5" : "mt-3"}`}>
    {#if googlePlay !== ""}
      <a href={googlePlay} target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-google-play"/>
      </a>   
    {/if} 
    {#if appStore !== ""}
      <a href={appStore} target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-app-store-ios"/>
      </a>  
    {/if}  
    {#if github !== ""}
      <a href={github} target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-github"/>
      </a> 
    {/if}   
    {#if browser !== ""}
      <a href={browser} target="_blank" rel="noopener noreferrer">
        <i class="fa-solid fa-globe"></i>
      </a>
    {/if}
    {#if certificate !== ""}
      <a href={certificate} target="_blank" rel="noopener noreferrer">
        <i class="fa-solid fa-certificate"></i>
      </a>
    {/if}
    <!-- <span>
      See Previews
    </span> -->
  </div>
</section>

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
  a {
    font-size: 22px;
    color: #FFFFFF;
    cursor: pointer;
    margin-right: 2rem;
  }
  a:hover {
    transition: all 0.3s ease 0s;
		transform: scale(1.2);
  }
  .desc {
    max-width: 800px;
    font-size: 20px;
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
    a {
      font-size: 16px;
      margin-right: 1.5rem;
      margin-bottom: 0;
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