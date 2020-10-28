<script>
    import language from './utils/language.js'
</script>

<div class="navigation my-2">
    <div class="row justify-content-center">
        <button class="btn-nav ml-2 mt-2">Flutter</button>
        <button class="btn-nav mx-2 mt-2">React JS</button>
        <button class="btn-nav mt-2">Express JS</button>
        <button class="btn-nav mx-2 mt-2">{language.me.en}</button>
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
</style>