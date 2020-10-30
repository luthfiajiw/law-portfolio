<script>
    export let title;
    export let category;
    export let delay;
</script>

<div class={`list-tile mx-3 my-4 animate__animated animate__backInUp ${delay}`}>
    <div class="row">
        <div class="app-icon mr-3"></div>
        <div class="app-title">
            <div class="text-tertiary app-name h5">{title}</div>
            <div class="app-category text-secondary">{category}</div>
        </div>
    </div>
    <div class="app-desc my-3 text-secondary">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
    </div>
    <div class="highlights text-secondary mt-4">
        <p>HIGHLIGHTS</p>
        <div class="row">
            <div class="app-highlight"></div>
            <div class="app-highlight"></div>
            <div class="app-highlight"></div>
        </div>
    </div>
</div>

<style>
    .list-tile {
        padding: 15px;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 3px 10px 2px rgba(221, 221, 221, .4);
    }
    .app-icon, .app-highlight {
        margin-left: 15px;
        height: 50px;
        width: 50px;
        background-color: #eee;
        border-radius: 5px;
    }
    .app-category {
        font-size: 12px;
    }
    .app-desc, .highlights {
        font-size: 14px;
    }
    .highlights p {
        line-height: 0;
    }
</style>