<script>
    export let showModal = true;
</script>


{#if showModal}
    <div class="backdrop">

        <div class="close mt-3">
            <button>
                <i class="far fa-times-circle" />
            </button>
        </div>
        <div class="photo-preview mx-auto">
            <img src="../../build/assets/zt-1.jpg" alt="preview">
        </div>
    </div>
{/if}

<style>
    .close {
        font-size: 20px;
        color: rgba(131,159,150, .5);
    }
    .close button {
        background-color: transparent;
        border: none;   
    }
    .backdrop{
        width: 100%;
        max-width: 768px;
        height: 100%;
        position: fixed;
		background: transparent;
		backdrop-filter: blur(2.5px);
		z-index: 1072;
    }
    .photo-preview {
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        height: 450px;
        position: fixed;
    }

    .photo-preview img {
        width: 100%;
        height: 450px;
        background-position: center;
        object-fit: scale-down;
    }
</style>