<script lang="ts">
    import { scale } from 'svelte/transition';
    import { isOpen, selectedImg } from "../stores"

    function toggleShow() {
        isOpen.update(value => !value)
    }
</script>


{#if $isOpen}
  <div class="backdrop" transition:scale="{{duration: 300 }}">
      <div class="photo-preview">
          <div>
              <div class="close">
                  <button on:click={toggleShow}>
                    <i class="fa-solid fa-xmark"></i>
                  </button>
              </div>
              <img src={$selectedImg} alt="preview">
          </div>
      </div>
  </div>
{/if}

<style>
  .close {
      position: absolute;
      font-size: 20px;
      top: -40px;
      right: 0;
      color: #ffffff;
  }
  .close button {
      background-color: transparent;
      border: none;
      text-align: center;
      color: #ffffff;
  }
  .backdrop{
      width: 100%;
      height: 100%;
      position: fixed;
  background: transparent;
      -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  z-index: 1072;
  }
  .photo-preview {
      top: 50%;
      right: 50%;
      transform: translateY(-50%) translateX(50%);
      width: 100%;
      max-width: 600px;
      height: 600px;
      position: fixed;
  }

  .photo-preview img {
      width: 100%;
      height: 600px;
      background-position: center;
      object-fit: scale-down;
  }
  @media (max-width: 768px) {
      .photo-preview {
          height: 400px;
      }

      .photo-preview img {
          height: 400px;
      }
  }
</style>
