<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Badge from './Badge.svelte';

	const meta = {
		title: 'Badge',
		component: Badge,
		argTypes: {
			size: {
				name: 'size',
				control: 'select',
				options: ['small', 'medium', 'large']
			}
		}
	};
</script>

<Meta {...meta} />

<Template let:args>
	<Badge {...args}>1</Badge>
</Template>

<Story name="Default" args={{ size: 'medium' }} />
