<svelte:options accessors />

<script lang="ts">
	import Button, { type ButtonVariant } from 'polder/src/lib/components/button/Button.svelte';
	import type { Color } from '../../../../components/src/lib/types/color';
	import Highlight from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';
	import githubdd from 'svelte-highlight/styles/github-dark-dimmed';
	import ComponentPreview from '$lib/components/ComponentPreview.svelte';
	import type { ComponentAttribute } from '$lib/components/component-preview/ComponentAttributes.svelte';

	let variant: ButtonVariant = undefined;
	let color: Color = 'primary';
	let disabled: Boolean = false;

	let code_sample: String;

	const attributes: ComponentAttribute[] = [
		{
			name: 'color',
			control: 'color',
			value: 'primary'
		},
		{
			name: 'variant',
			control: 'select',
			options: ['default', 'ghost'],
			value: 'default'
		},
		{
			name: 'disabled',
			control: 'checkbox',
			value: false
		}
	];

	const getAttribute = (list: ComponentAttribute[], name: string): ComponentAttribute | null => {
		const attribute = list.find((attr) => attr.name === name);
		if (!attribute) return null;
		return attribute;
	};

	$: code_sample = `
<Button variant="${getAttribute(attributes, 'variant')?.value}" color="${
		getAttribute(attributes, 'color')?.value
	}">
	Button
</Button>
	`;
</script>

<svelte:head>
	{@html githubdd}
</svelte:head>

<div class="summary">
	<div class="intro">
		<h1 class="title">Buttons</h1>
		<span class="description">Buttons are cool 🦄</span>
	</div>

	<dl class="definition-list">
		<dt>Usage</dt>
		<dd>
			<Highlight language={typescript} code={`import { Button } from 'polder'`} />
		</dd>
		<dt>Source code</dt>
		<dd>
			<a
				rel="noreferrer"
				target="_blank"
				href="https://github.com/yimme/svelte-polder-ui/blob/main/packages/components/src/lib/components/button/Button.svelte"
				>View on Github</a
			>
		</dd>
	</dl>

	<h2>Component Preview Beta</h2>
	{#key attributes}
		<ComponentPreview component={Button} content="Button" {attributes} />
	{/key}
	<h2>Component Preview</h2>

	<h2>Source code</h2>

	<div class="source-code">
		{#key [attributes]}
			<Highlight language={typescript} code={code_sample} />
		{/key}
	</div>

	<h2>Props</h2>

	<div class="table-of-props">
		<table class="table">
			<tr>
				<th>prop names</th>
				<th>prop type</th>
				<th>options</th>
				<th>default value</th>
			</tr>
			<tr>
				<td>Disabled</td>
				<td>Boolean</td>
				<td>-</td>
				<td>null</td>
			</tr>
			<tr>
				<td>Variant</td>
				<td>String</td>
				<td>
					<ul>
						<li>ghost</li>
						<li>default</li>
					</ul>
				</td>
				<td>default</td>
			</tr>
			<tr>
				<td>color</td>
				<td>string</td>
				<td>
					<ul>
						<li>primary</li>
						<li>info</li>
						<li>success</li>
						<li>warning</li>
						<li>danger</li>
						<li>neutral</li>
					</ul>
				</td>
				<td>primary</td>
			</tr>
		</table>
	</div>
</div>

<style lang="scss">
	.component-preview {
		display: flex;
		flex-direction: row;
		width: 100%;
		border: 1px solid var(--color-neutral-400);
		border-radius: 4px;
		overflow: hidden;

		&__canvas {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 64px;
			background: var(--color-neutral-300);
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
			border-right: 1px solid var(--color-neutral-400);
		}

		&__attributes {
			min-width: 25%;
			box-sizing: border-box;
			font-size: var(--font-size-body-small);

			h2 {
				font-size: var(--font-size-heading-4);
				line-height: var(--font-size-heading-4);
				padding-left: var(--space-3);
				margin-bottom: var(--space-2);
			}
		}
	}

	.definition-list {
		display: flex;
		flex-direction: column;
		border: 1px solid var(--color-neutral-400);
		font-size: var(--font-size-body-small);
		margin: 0 0 var(--space-4) 0;

		dt,
		dd {
			padding: 0;
			margin: 0;
		}

		dt {
			font-weight: 500;
			padding: var(--space-3) var(--space-3) 0;
			margin-bottom: var(--space-2);
		}

		dd {
			border-bottom: 1px solid var(--color-neutral-400);
			padding: 0 var(--space-3) var(--space-3);

			&:last-child {
				border-bottom: 0;
			}
		}
	}

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

	.prop {
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid var(--color-neutral-400);
		padding: var(--space-3);

		&:last-child {
			border-bottom: 0;
		}

		&__name {
			font-weight: 500;
			line-height: var(--line-height-body);
		}
	}

	.intro {
		display: flex;
		flex-direction: column;
		border-radius: var(--radius-1) var(--radius-1) 0 0;
		margin-bottom: var(--space-4);

		h1.title {
			font-size: var(--font-size-heading-1);
			line-height: var(--font-size-heading-1);
			margin: 0 0 var(--space-2) 0;
			color: var(--color-primary-400);
			display: inline-flex;
		}

		span {
			display: inline-flex;
			padding-left: 0.25rem;
		}
	}

	.source-code {
		display: flex;
		border: 1px solid var(--color-neutral-400);
		margin-bottom: var(--space-3);
		margin-top: var(--space-3);
	}

	.source-code :global(pre) {
		margin: 0;
		width: 100%;
	}

	.table {
		width: 100%;
		border: 1px solid var(--color-neutral-400);
		border-collapse: collapse;
		line-height: var(--line-height-body);
		th {
			border-bottom: 1px solid var(--color-neutral-400);
			text-align: left;
		}
		td {
			border-bottom: 1px solid var(--color-neutral-400);
		}
		td,
		th {
			padding: var(--space-2);
		}
		tr {
			&:hover {
				background: var(--color-primary-100);
			}
		}
	}
</style>
