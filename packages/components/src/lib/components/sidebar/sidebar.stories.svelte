<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Sidebar from './Sidebar.svelte';

	const meta = {
		title: 'Sidebar/Container',
		component: Sidebar,
		argTypes: {}
	};
</script>

<Meta {...meta} />

<Template let:args>
	<Sidebar {...args}>Product management</Sidebar>
</Template>

<Story name="Default" args={{}} />
