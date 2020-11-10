<script>
    export let showModal = false;
    export let handleClose;
    export let imgUrl;
</script>


{#if showModal}
    <div class="backdrop animate__animated animate__fadeIn animate__fast">
        <div class="photo-preview mx-auto">
            <div>
                <div class="close">
                    <button on:click={handleClose}>
                        <i class="far fa-times-circle" />
                    </button>
                </div>
                <img src={`../../build/assets/${imgUrl}`} alt="preview">
            </div>
        </div>
    </div>
{/if}

<style>
    .close {
        position: absolute;
        font-size: 20px;
        top: -40px;
        right: -5px;
        color: rgba(131,159,150, .5);
    }
    .close button {
        background-color: transparent;
        border: none;
        text-align: center;
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
        right: 50%;
        transform: translateY(-50%) translateX(50%);
        width: 100%;
        max-width: 400px;
        height: 450px;
        position: fixed;
    }

    .photo-preview img {
        width: 100%;
        height: 450px;
        background-position: center;
        object-fit: scale-down;
    }
    @media (min-width: 375px) {
        .photo-preview {
            height: 600px;
        }

        .photo-preview img {
            height: 600px;
        }
    }
</style>