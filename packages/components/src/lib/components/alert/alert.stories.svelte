<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Alert from './Alert.svelte';

	const meta = {
		title: 'Alert',
		component: Alert,
		argTypes: {}
	};
</script>

<Meta {...meta} />

<Template let:args>
	<Alert {...args}>The server was unable to handle your request</Alert>
</Template>

<Story name="Default" args={{}} />
