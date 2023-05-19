<script lang="ts">
    import { fly } from 'svelte/transition';
    import { isOpen, selectedImg, images } from "../stores"

    function toggleShow() {
        isOpen.update(value => !value)
    }
    function onSelect(image: string) {
        selectedImg.set(image)
    }
</script>


{#if $isOpen}
  <div class="backdrop" transition:fly="{{ duration: 500, y: 200 }}">
      <div class="photo-preview">
            <div class="close">
                <button on:click={toggleShow}>
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="d-flex align-items-center">
                <div class="d-flex flex-column">
                    {#each $images as image}
                        <button on:click={() => onSelect(image)} class="btn-highlight">
                            <div class="app-highlight mb-2 mr-2" style="background-image: url('{`${image}`}')" />
                        </button>
                    {/each}
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
  .app-highlight {
        cursor: pointer;
        height: 65px;
        width: 65px;
        background-color: #eee;
        background-size: cover;
        background-repeat: no-repeat;
        border: 1px solid #eee;
    }
    .btn-highlight {
        outline: none;
        border: none;
        margin-top: .5rem;
        border-radius: 4px;
    }
  @media (max-width: 768px) {
    .app-highlight {
        height: 30px;
        width: 30px;
    }
      .photo-preview {
          height: 400px;
      }

      .photo-preview img {
          height: 400px;
      }
  }
</style>
