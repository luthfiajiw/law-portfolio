<script>
    export let title;
    export let category;
    export let iconUrl;
    export let description;
    export let highlights = [];
    export let delay;
</script>

<div class={`list-tile mx-3 my-4 animate__animated animate__backInUp ${delay}`}>
    <div class="row">
        <div class="app-icon mr-3">
            <img src={iconUrl} height="50" width="50" alt="app_icon"/>
        </div>
        <div class="app-title">
            <div class="text-tertiary app-name h5">{title}</div>
            <div class="app-category text-secondary">{category}</div>
        </div>
    </div>
    <div class="app-desc my-3 text-secondary">
        {description}
    </div>
    <div class="highlights text-secondary mt-4" hidden={highlights.length < 1}>
        <p>HIGHLIGHTS</p>
        <div class="row" style="margin-left: -5px">
            {#each highlights as highlight}
                <div class="app-highlight mb-2" style="background-image: url('{`../../build/assets/${highlight}`}')">
                    <!-- <img src={`../../build/assets/${highlight}`} height="50" width="50" alt="app_icon"/> -->
                </div>
            {/each}
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
    .app-icon {
        margin-left: 15px;
        height: 50px;
        width: 50px;
        border-radius: 5px;
    }

    .app-highlight {
        cursor: pointer;
        margin-left: 5px;
        height: 65px;
        width: 65px;
        background-color: #eee;
        background-size: cover;
        background-repeat: no-repeat;
        border: 1px solid #eee;
    }
    .app-highlight img{
        background-clip: border-box;
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