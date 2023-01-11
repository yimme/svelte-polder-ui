<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import SidebarHeader from './SidebarHeader.svelte';

	const meta = {
		title: 'Sidebar/SidebarHeader',
		component: SidebarHeader,
		argTypes: {}
	};
</script>

<Meta {...meta} />

<Template let:args>
	<SidebarHeader {...args}>Product management</SidebarHeader>
</Template>

<Story name="Default" args={{}} />
