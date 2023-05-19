<script>
  import { fly, fade } from 'svelte/transition';
  import { browser } from '$app/environment';
  // @ts-ignore
  import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
  import viewport from '../actions/useViewportAction';

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

<div
  use:viewport
  on:enterViewport={() => handleVisibility(true)}
  class="position-relative"
>
  {#if browser && visible}
    <div class="position-absolute" transition:fade="{{ duration: 500 }}">
      <LottiePlayer
        src="https://assets10.lottiefiles.com/packages/lf20_3nptdrnv.json"
        autoplay="{true}"
        loop="{true}"
        renderer="svg"
        background="transparent"
        width={screenWidth > 768 ? screenWidth : 500}
      />
    </div>
  {/if}
  {#if visible}
    <div class="hero container-md mt-5 pt-3 position-relative">
      <h2 class="welcome" transition:fly="{{ y: 100, duration: 500 }}">
        Selamat Datang <br>
        To Luthfi Aji's Portfolio
      </h2>
      <p class="hi-from-me mb-5" transition:fly="{{ y: 100, duration: 1000 }}">
        I am Luthfi Aji Wicaksono, an experienced Mobile App Developer with expertise
        in Mobile Applications, Web Applications, Frontend Development, and Flutter Development.
      </p>
      <a 
        transition:fly="{{ y: 100, duration: 1500 }}"
        href="https://resume.showwcase.com/lthfiaw/2747.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Resume
      </a>
    </div>
  {/if}
</div>

<style>
  .hero {
    margin-bottom: 20rem;
  }
  a {
    color: #FFFFFF!important;
    text-decoration: none;
    padding: 20px;
    background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
    border-radius: 50px;
    position: absolute;
    box-shadow: 3px 3px 6px rgba(0,0,0,0.16)
  }
  a:hover {
    transition: all 0.3s ease 0s;
		transform: scale(1.05);
  }
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
    .hero {
      margin-bottom: 7rem;
    }
    a {
      padding: 16px;
      font-size: 14px;
      position: absolute;
      left: 0; 
      right: 0; 
      margin-left: auto; 
      margin-right: auto; 
      width: 130px;
      text-align: center;
    }
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
