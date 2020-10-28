<script>
	import Header from "./Header.svelte";
	import Nav from "./Nav.svelte";
</script>

<div class="full-height">
    <div class="header-background" />
	<Header />
	<Nav />
</div>

<style>
	.full-height {
		min-height: 100vh;
		overflow-x: hidden;
	}
	.header-background {
        height: 240px;
        width: 100%;
        background-color: #839f96;
        position: absolute;
    }
</style>