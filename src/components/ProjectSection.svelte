<script>
  import { fly } from 'svelte/transition';
  import viewport from "../actions/useViewportAction";
  import Divider from "./Divider.svelte";

  export let logo = ""
  export let showcase = ""
  export let name = ""
  export let description = ""
  export let imgHeight = 400
  export let googlePlay = ""
  export let appStore = ""
  export let github = ""
  export let browser = ""
  export let certificate = ""
  /**
     * @type {() => void}
     */
   export let onOpenPreviews
  let screenWidth = 0

  $: visible = false

  /**
     * @param {boolean} val
     */
  function handleVisibility(val) {
    visible = val
  }

</script>

<svelte:window bind:innerWidth={screenWidth} />

<section
  use:viewport
  on:enterViewport={() => handleVisibility(true)}
>
  {#if visible}
    <div class="d-flex justify-content-between mt-5">
      <div>
        <div transition:fly="{{ y: 100, duration: 500 }}">
          <Divider />
        </div>
        <div class="d-flex align-items-center" transition:fly="{{ y: 100, duration: 1000 }}">
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
        <p class="desc mb-4"transition:fly="{{ y: 100, duration: 1500 }}">
          {description}
        </p>
      </div>
      <img
        src={showcase}
        alt="Preview ZO"
        class="mt-5 ml-5 project-showcase"
        height={imgHeight}
        transition:fly="{{ x: 100, duration: 2500 }}"
      />
    </div>

    <div class={`d-flex align-items-center ${screenWidth > 768 ? "mb-5" : "mt-3"}`}>
      {#if appStore !== ""}
        <a href={appStore}
          target="_blank"
          class="link"
          rel="noopener noreferrer"
          transition:fly="{{ x: -100, duration: 500 }}"
        >
          <i class="fa-brands fa-app-store-ios"/>
        </a>  
      {/if} 
      {#if googlePlay !== ""}
        <a href={googlePlay}
          target="_blank"
          class="link"
          rel="noopener noreferrer"
          transition:fly="{{ x: -100, duration: 600 }}"
        >
          <i class="fa-brands fa-google-play"/>
        </a>   
      {/if} 
      {#if github !== ""}
        <a href={github}
          target="_blank"
          class="link"
          rel="noopener noreferrer"
          transition:fly="{{ x: -100, duration: 700 }}"
        >
          <i class="fa-brands fa-github"/>
        </a> 
      {/if}   
      {#if browser !== ""}
        <a href={browser}
          target="_blank"
          class="link"
          rel="noopener noreferrer"
          transition:fly="{{ x: -100, duration: 800 }}"
        >
          <i class="fa-solid fa-globe"></i>
        </a>
      {/if}
      {#if certificate !== ""}
        <a href={certificate}
          target="_blank"
          class="link"
          rel="noopener noreferrer"
          transition:fly="{{ x: -100, duration: 900 }}"
        >
          <i class="fa-solid fa-certificate"></i>
        </a>
      {/if}
      <button
        class="preview"
        on:click={onOpenPreviews}
      >
        See Previews
      </button>
    </div>
  {/if}
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
  .preview {
    background-color: transparent;
    border: none;
    color: #FFFFFF;
    margin: 0;
  }
  .preview:hover {
    text-decoration: underline;
  }
  .preview:active {
    background-color: transparent;
  }
  .link {
    font-size: 22px;
    color: #FFFFFF;
    cursor: pointer;
    margin-right: 2rem;
  }
  a:hover {
    transition: all 0.3s ease 0s;
		transform: scale(1.2);
    cursor: pointer;
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
    .link {
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