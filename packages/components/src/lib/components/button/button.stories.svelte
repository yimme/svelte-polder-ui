<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
</script>

<Meta title="Button" component={Button} />

<Template let:args>
	<Button {...args}>I am button</Button>
</Template>

<Story name="Default" />
