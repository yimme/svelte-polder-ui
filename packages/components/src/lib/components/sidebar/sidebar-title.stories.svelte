<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import SidebarTitle from './SidebarTitle.svelte';

	const meta = {
		title: 'Sidebar/SidebarTitle',
		component: SidebarTitle,
		argTypes: {}
	};
</script>

<Meta {...meta} />

<Template let:args>
	<SidebarTitle {...args}>Product management</SidebarTitle>
</Template>

<Story name="Default" args={{}} />
