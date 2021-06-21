<script>
	import Content from "./Content.svelte";
import Divider from "./contents/components/Divider.svelte";
	import PhotoPreview from "./contents/components/PhotoPreview.svelte";
	import Header from "./Header.svelte";
	import Hero from "./Hero.svelte";
	import Nav from "./Nav.svelte";
	
	let showModal = false;
	let imgUrl = '';
	let navActive = 2;
	function handleNav(e) {
		navActive = e.detail;
	}
	function handleOpen(highlight) {
		showModal = true;
		imgUrl = highlight.detail;
		console.log(highlight);
	}
	function handleClose() {
		showModal = false;
	}
</script>

<div class="full-height">
	<Header />
	<Hero />
	<div class="skills container-md">
		<Divider />
	</div>
</div>

<!-- <PhotoPreview showModal={showModal} handleClose={handleClose} imgUrl={imgUrl} />

<div class="full-height">
	<div class="header-background" />
	<div class="overlay"></div>
	<Header />
	<Nav navActive={navActive} on:handleNav={handleNav}/>
	<Content navActive={navActive} handleOpen={handleOpen} />
	<div class="footer mb-4">
		<div class="row justify-content-between">
			<div>
				Dibuat dengan <i class="fas fa-heart"></i> & <i class="fas fa-mug-hot"></i>
			</div>
			<div>
				<i class="fas fa-copyright"></i> 2020
			</div>
		</div>
	</div>
</div> -->

<style>
	.full-height {
		min-height: 100vh;
		max-width: 1280px;
		width: 100%;
		overflow-x: hidden;
		background-color: #0F1624;
		margin-left: auto;
		margin-right: auto;
	}
</style>