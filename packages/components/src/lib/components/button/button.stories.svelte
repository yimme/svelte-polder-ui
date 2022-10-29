<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';

	const meta = {
		title: 'Button',
		component: Button,
		argTypes: {
			variant: {
				name: 'variant',
				description: 'overwritten description',
				table: {
					type: {
						summary: 'something short',
						detail: 'something really really long'
					}
				},
				control: 'radio',
				options: ['default', 'ghost']
			},
			disabled: {
				name: 'disabled',
				control: 'boolean'
			},
			color: {
				name: 'color',
				control: 'select',
				options: ['primary', 'info', 'success', 'warning', 'danger', 'neutral']
			}
		}
	};
</script>

<Meta {...meta} />

<Template let:args>
	<Button {...args}>Button</Button>
</Template>

<Story name="Default" args={{ disabled: false, color: 'primary' }} />

<Story name="Ghost" args={{ variant: 'ghost', color: 'primary', disabled: false }} />
