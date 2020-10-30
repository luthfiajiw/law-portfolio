<script>
	import Content from "./Content.svelte";
	import Header from "./Header.svelte";
	import Nav from "./Nav.svelte";
	
	let navActive = 0; 
	function handleNav(e) {
		navActive = e.detail;
	}
</script>

<div class="full-height">
    <div class="header-background" />
	<Header />
	<Nav navActive={navActive} on:handleNav={handleNav}/>
	<Content navActive={navActive} />
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