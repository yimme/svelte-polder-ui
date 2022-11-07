<script lang="ts">
	import type { Color } from '../../../../../components/src/lib/types/color';
	import ComponentAttributes from './ComponentAttributes.svelte';

	export let value: String;

	let colors: Color[] = ['danger', 'info', 'neutral', 'primary', 'success', 'warning'];
	const set_color = (color: Color) => (value = color);
</script>

<div class="swatches">
	{#each colors as color}
		<button
			class="swatch"
			style={`background-color: var(--color-${color}-300); border-color: var(--color-${color}-500)`}
			on:click={() => set_color(color)}>{color}</button
		>
	{/each}
</div>

<style lang="scss">
	.swatches {
		display: flex;
		gap: 0.25rem;
		flex-wrap: wrap;
	}

	.swatch {
		cursor: pointer;
		border: 0;
		border-radius: var(--radius-1);
		min-height: var(--line-height-body-extra-small);
		min-width: calc(var(--line-height-body-extra-small) * 1.6);
		border: 1px solid;
	}
</style>
