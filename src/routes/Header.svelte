
<script>
  import { fly } from 'svelte/transition';
  import viewport from "../actions/useViewportAction";

	$: visible = false

	/**
		 * @param {boolean} val
		 */
	function handleVisibility(val) {
		visible = val
	}
</script>

<section
use:viewport
  on:enterViewport={() => handleVisibility(true)}
	class="header row align-items-center"
>
	{#if visible}
		<div class="col-6" transition:fly="{{ x: -100, duration: 1000 }}">
			<div class="d-flex p-4 align-items-center">
				<a class="header-name" href="/">
					S I L A W
				</a>
			</div>
		</div>
		<div
			transition:fly="{{ x: 100, duration: 1000 }}"
			class="col-6 d-flex justify-content-end align-items-center"
		>
			<div class="appbar p-4 d-flex justify-content-end">
				<a href="https://www.linkedin.com/in/luthfiaw/" target="_blank" rel="noopener noreferrer" class="text-white">
					<i class="fab fa-linkedin-in mx-3"/>
				</a>
				<a href="https://dev.to/luthfiajiw" target="_blank" rel="noopener noreferrer" class="text-white">
					<i class="fab fa-dev mx-3"></i>
				</a>
				<a href="https://github.com/luthfiajiw" target="_blank" rel="noopener noreferrer" class="text-white">
					<i class="fab fa-github ml-3"></i>
				</a>
			</div>
		</div>
	{/if}
</section>

<style>
	.header {
		max-width: 1280px;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}
	i {
		font-size: 1.6rem;
	}
	.appbar a:hover {
		transition: all 0.3s ease 0s;
		transform: scale(1.2);
	}
	.header-name {
		color: white;
		font-size: 1.6rem;
		font-weight: 600;
	}
	.header-name:hover {
		text-decoration: none;
		cursor: pointer;
	}

	@media only screen and (max-width: 768px) {
		i {
			font-size: 18px;
		}
		.fa-linkedin-in, .fa-dev, .fa-github {
			margin-left: 0px !important;
		}
		.header-name {
			font-size: 18px;
		}
	}
</style>
