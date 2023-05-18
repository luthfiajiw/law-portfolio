<script lang="ts">
  import { browser } from '$app/environment';
	// @ts-ignore
	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

  let screenWidth: number
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class="position-relative">
  {#if browser}
    <div class="position-absolute">
      <LottiePlayer
        src="https://assets10.lottiefiles.com/packages/lf20_3nptdrnv.json"
        autoplay="{true}"
        loop="{true}"
        renderer="svg"
        background="transparent"
        width={screenWidth > 768 ? 1250 : 500}
      />
    </div>
  {/if}
  <div class="hero container-md mt-5">
    <h2 class="welcome">
      Selamat Datang <br>
      To Luthfi Aji's Portfolio
    </h2>
    <p class="hi-from-me mb-5">
      I am Luthfi Aji Wicaksono, an experienced Mobile App Developer with expertise
      in Mobile Applications, Web Applications, Frontend Development, and Flutter Development.
    </p>
  </div>
</div>

<style>
  .hero {
    margin-bottom: 11rem;
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
      margin-bottom: 0rem;
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