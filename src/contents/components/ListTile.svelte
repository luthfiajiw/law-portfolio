<script>
    export let title;
    export let category;
</script>

<div class="list-tile mx-3 my-4">
    <div class="row mx-1">
        <div class="app-icon mr-3"></div>
        <div class="app-title">
            <div class="text-tertiary app-name h5">{title}</div>
            <div class="app-category text-secondary">{category}</div>
        </div>
    </div>
    <div class="app-desc my-3 text-secondary">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
    </div>
</div>

<style>
    .list-tile {
        padding: 15px;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 3px 10px 2px rgba(221, 221, 221, .4);
    }
    .app-icon {
        height: 50px;
        width: 50px;
        background-color: #eee;
        border-radius: 5px;
    }
    .app-category {
        font-size: 12px;
    }
    .app-desc{
        font-size: 14px;
    }
</style>