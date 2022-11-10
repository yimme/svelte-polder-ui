<script lang="ts" context="module">
	export type ComponentAttributeControl = 'color' | 'select' | 'checkbox';

	export type ComponentAttribute = {
		name: string;
		control: ComponentAttributeControl;
		options?: string[];
		value: string | boolean | undefined;
	};
</script>

<script lang="ts">
	import ColorProp from './ColorProp.svelte';

	export let attributes: ComponentAttribute[];
</script>

<div class="component-attributes">
	<h2>Props</h2>
	{#each attributes as attribute}
		<div class="component-attributes__item">
			<span class="component-attributes__title">{attribute.name}</span>

			{#if attribute.control === 'color' && typeof attribute.value === 'string'}
				<ColorProp bind:value={attribute.value} />
			{/if}

			{#if attribute.control === 'select'}
				<div class="select-list">
					{#if attribute.options}
						{#each attribute.options as option}
							<label>
								<input bind:group={attribute.value} type="radio" value={option} />
								{option}
							</label>
						{/each}
					{/if}
				</div>
			{/if}
			{#if attribute.control === 'checkbox' && typeof attribute.value === 'boolean'}
				<label>
					<input type="checkbox" bind:checked={attribute.value} />
					{attribute.name}
				</label>
			{/if}
		</div>
	{/each}
</div>

<style lang="scss">
	.component-attributes {
		min-width: 25%;
		box-sizing: border-box;
		font-size: var(--font-size-body-small);

		h2 {
			font-size: var(--font-size-heading-4);
			line-height: var(--font-size-heading-4);
			padding-left: var(--space-3);
			margin-bottom: var(--space-2);
		}

		&__title {
			font-weight: 500;
			text-transform: capitalize;
			display: flex;
			margin-bottom: var(--space-1);
		}

		&__item {
			border-bottom: 1px solid var(--color-neutral-400);
			padding: var(--space-3);

			&:last-child {
				border-bottom: none;
			}
		}
	}

	.select-list {
		display: flex;
		flex-direction: column;

		label {
			line-height: var(--line-height-body);
			cursor: pointer;
		}
	}
</style>
