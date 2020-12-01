<script>
    import language from './utils/language.js';
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    export let navActive;
    function handleNav(index) {
        dispatch('handleNav', index);
    }

</script>

<div class="navigation my-2">
    <div class="row justify-content-center">
        <button
            class="btn-nav ml-2 mt-2 animate_animated animate__bounceIn flutter-btn"
            class:btn-active={navActive === 0}
            on:click={() => handleNav(0)}
        >
            Flutter
        </button>
        <button
            class="btn-nav mx-2 mt-2 animate_animated animate__bounceIn react-btn"
            class:btn-active={navActive === 1}
            on:click={() => handleNav(1)}
        >
            React JS
        </button>
        <button
            class="btn-nav mt-2 mr-2 animate_animated animate__bounceIn exp-btn"
            class:btn-active={navActive === 3}
            on:click={() => handleNav(3)}
        >
            Express JS
        </button>
        <button
            class="btn-nav mt-2 animate_animated animate__bounceIn me-btn"
            class:btn-active={navActive === 2}
            on:click={() => handleNav(2)}
        >
            {language.me.en}
        </button>
    </div>
</div>

<style>
    .btn-nav {
        color: #aeaeae;
        border: 1px solid #aeaeae;
        background-color: transparent;
        border-radius: 25px;
        padding: 5px 15px 5px 15px;
        font-size: 12px;
    }

    .btn-active {
        background-color:  rgba(131,159,150, .5)!important;
        color: #fff !important;
        border: none;
    }
    .flutter-btn {
        --animate-duration: 1s;
    }
    .react-btn {
        --animate-duration: 1.5s;
    }
    .me-btn {
        --animate-duration: 2.5s;
    }
</style>