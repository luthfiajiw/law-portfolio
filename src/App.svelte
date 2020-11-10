<script>
	import Content from "./Content.svelte";
	import PhotoPreview from "./contents/components/PhotoPreview.svelte";
	import Header from "./Header.svelte";
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

<PhotoPreview showModal={showModal} handleClose={handleClose} imgUrl={imgUrl} />

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
</div>

<style>
	.full-height {
		min-height: 100vh;
		overflow-x: hidden;
		position: relative;
	}
	.header-background {
        height: 240px;
        width: 100%;
		background-image: url('./assets/bg-header.jpg');
		background-size: cover;
		background-position: bottom;
		background-repeat: no-repeat;
		position: absolute;
		z-index: -1;
	}
	
	.overlay {
		height: 240px;
		width: 100%;
		position: absolute;
		background-color: rgba(131,159,150, .5);
	}

	.footer {
		font-size: 12px;
		text-align: center;
		color: rgba(131,159,150, .5);
		margin-top: 100px;
		margin-left: 30px;
		margin-right: 30px;
	}
</style>