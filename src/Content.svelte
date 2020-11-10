<script>
    import FlutterContents from "./contents/FlutterContents.svelte";
    import ReactContents from "./contents/ReactContents.svelte";
    import MeContents from "./contents/MeContents.svelte";

    export let navActive;
    export let handleOpen;
</script>

<div class="content">
    {#if navActive === 0}
        <FlutterContents handleOpen={handleOpen}/>
    {:else if navActive === 1}
        <ReactContents handleOpen={handleOpen} />
    <!-- {:else if navActive === 2}
        <ExpressContents /> -->
    {:else if navActive === 2}
        <MeContents />
    {/if}
</div>

<style></style>