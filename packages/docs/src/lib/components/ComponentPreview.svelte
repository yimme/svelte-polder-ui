<script lang="ts">
	import ComponentAttributes, {
		type ComponentAttribute
	} from './component-preview/ComponentAttributes.svelte';

	export let attributes: ComponentAttribute[];
	export let component: ConstructorOfATypedSvelteComponent;
	export let content: String = '';

	let props: any = {};

	const getProps = () => {
		let x: any = {};
		attributes.forEach((attribute) => {
			x[attribute.name] = attribute.value;
		});

		return x;
	};

	$: attributes, (props = getProps());

	getProps();
</script>

{props[0]}

<div class="component-preview">
	<div class="component-preview__canvas">
		{#key [props, attributes]}
			<svelte:component this={component} {...props}>
				{content}
			</svelte:component>
		{/key}
	</div>
	<ComponentAttributes bind:attributes />
</div>

<style lang="scss">
	.component-preview {
		border: 1px solid var(--color-neutral-400);
		display: flex;
		border-radius: 4px;
		overflow: hidden;
	}

	.component-preview__canvas {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: var(--space-6);
		border-right: 1px solid var(--color-neutral-400);
		background-color: #eeeeee;
		background-image: repeating-linear-gradient(
				45deg,
				#fff 25%,
				transparent 25%,
				transparent 75%,
				#fff 75%,
				#fff
			),
			repeating-linear-gradient(45deg, #ffffff 25%, #eeeeee 25%, #eeeeee 75%, #fff 75%, #fff);
		background-position: 0 0, 10px 10px;
		background-size: 20px 20px;
	}
</style>
