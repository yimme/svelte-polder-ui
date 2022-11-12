<script lang="ts">
	import Button from 'polder/src/lib/components/button/Button.svelte';
	import Highlight from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';
	import githubdd from 'svelte-highlight/styles/github-dark-dimmed';
	import ComponentPreview from '$lib/components/ComponentPreview.svelte';
	import type { ComponentAttribute } from '$lib/components/component-preview/ComponentAttributes.svelte';

	let code_sample: String;

	const attributes: ComponentAttribute[] = [
		{
			name: 'color',
			control: 'color',
			value: 'primary',
			type: 'string'
		},
		{
			name: 'variant',
			control: 'select',
			options: ['default', 'ghost'],
			value: 'default',
			type: 'string'
		},
		{
			name: 'disabled',
			control: 'checkbox',
			value: false,
			type: 'boolean'
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

	<h2>Component Preview</h2>
	{#key attributes}
		<ComponentPreview component={Button} content="Button" {attributes} />
	{/key}

	<h2>Code example</h2>

	<div class="source-code">
		{#key [attributes]}
			<Highlight language={typescript} code={code_sample} />
		{/key}
	</div>

	<h2>Props</h2>

	<div class="table-of-props">
		<table class="table">
			<tr>
				<th>Name</th>
				<th>Type</th>
				<th>Options</th>
				<th>Default value</th>
			</tr>
			{#each attributes as attribute}
				<tr>
					<td>{attribute.name}</td>
					<td>{attribute.type}</td>
					<td>
						{#if !attribute.options}
							-
						{:else}
							<ul>
								{#each attribute.options as option}
									<li>{option}</li>
								{/each}
							</ul>
						{/if}
					</td>
					<td>{attribute.value}</td>
				</tr>
			{/each}
		</table>
	</div>
</div>

<style lang="scss">
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
				background: var(--color-neutral-200);
			}
		}
	}
</style>
