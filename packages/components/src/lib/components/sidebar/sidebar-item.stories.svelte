<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import SidebarItem from './SidebarItem.svelte';

	const meta = {
		title: 'Sidebar/SidebarItem',
		component: SidebarItem,
		argTypes: {}
	};
</script>

<Meta {...meta} />

<Template let:args>
	<SidebarItem {...args}>Product management</SidebarItem>
</Template>

<Story name="Default" args={{}} />
