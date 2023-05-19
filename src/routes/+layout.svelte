<script>
	import ImagePreview from '../components/ImagePreview.svelte';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="full-height">
	<ImagePreview />
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
