<script lang="ts">
	import type { Color } from '../../types/color';

	export let color: Color = 'primary';
	export let stretch: Boolean = false;

	let classList = ['alert', color, stretch ? 'stretch' : null].filter(Boolean).join(' ');
</script>

<div class={classList}>
	<span class="alert__message">
		<slot />
	</span>
</div>

<style lang="scss" scoped>
	.alert {
		display: inline-flex;
		box-sizing: border-box;
		padding: var(--space-3) var(--space-4);
		background: var(--color-primary-100);
		color: var(--color-primary-500);
		border-radius: var(--radius-1);
		gap: var(--space-3);

		&.stretch {
			display: flex;
		}

		&__message {
			line-height: var(--line-height-body);
		}
	}
</style>
