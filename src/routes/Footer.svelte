<script>
  import { fly } from 'svelte/transition';
  import viewport from "../actions/useViewportAction";

	$: visible = false

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
  class="footer mt-4 mb-2 px-4 pt-5"
>
  {#if visible}
    <div class="row justify-content-between">
      <p style="color: rgba(255, 255, 255, 0.5);" transition:fly="{{ x: -100, duration: 1000 }}">
        Made with <img src="../favicon.png" alt="svelte" class="svelte-logo" width="20px"> and <i class="fas fa-mug-hot"></i>
      </p>
      <div style="color: rgba(255, 255, 255, 0.5);" transition:fly="{{ x: 100, duration: 1000 }}">
        <i class="fas fa-copyright"></i> 2023
      </div>
    </div>
  {/if}
</div>

<style>
  .footer {
    max-width: 1280px;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
  }
  .svelte-logo {
    opacity: 80%;
  }
</style>