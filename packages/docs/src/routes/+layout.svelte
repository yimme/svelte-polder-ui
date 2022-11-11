<script lang="ts">
	import 'polder/theme/index.scss';
	import '$lib/style/index.scss';
	import Header from '../lib/components/Header.svelte';
	import Sidebar from '../lib/components/Sidebar.svelte';
</script>

<div class="docs">
	<Header />
	<Sidebar />
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	:global(body) {
		color: var(--color-neutral-900);
		font-family: 'Noto Sans', sans-serif;
	}

	.docs {
		display: grid;
		grid-template-areas:
			'header header header'
			'sidebar body body';
		grid-template-columns: min-content auto auto;
		grid-template-rows: min-content auto;
		min-height: 100vh;
	}

	.content {
		grid-area: body;
		padding: var(--space-5) var(--space-7);
		width: 100%;
	}
</style>
