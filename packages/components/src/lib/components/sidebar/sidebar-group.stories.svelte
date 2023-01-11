<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import SidebarGroup from './SidebarGroup.svelte';

	const meta = {
		title: 'Sidebar/SidebarGroup',
		component: SidebarGroup,
		argTypes: {}
	};
</script>

<Meta {...meta} />

<Template let:args>
	<SidebarGroup {...args}>Product management</SidebarGroup>
</Template>

<Story name="Default" args={{}} />
