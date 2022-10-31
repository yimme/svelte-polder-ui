<script lang="ts" context="module">
	export type ButtonVariant = 'ghost' | undefined;
</script>

<script lang="ts">
	import type { Color } from '../../types/color';

	export let variant: ButtonVariant;
	export let color: Color = 'primary';

	let classList = ['button', variant, color].filter(Boolean).join(' ');
</script>

<button class={classList} {...$$restProps}>
	<slot />
</button>

<style lang="scss" scoped>
	@use '../../theme/mixins/states';
	.button {
		--color-highlight: var(--color-primary-100);
		--btn-color-background: var(--color-primary-300);
		--btn-color-border: var(--color-primary-300);
		--btn-color-text: var(--color-neutral-100);

		box-sizing: border-box;
		background: transparent;
		background-color: var(--btn-color-background);
		color: var(--btn-color-text);
		border: 0;
		font: inherit;
		font-size: var(--font-size-body);
		line-height: var(--line-height-body);
		padding-left: var(--space-5);
		padding-right: var(--space-5);
		padding-top: var(--space-2);
		padding-bottom: var(--space-2);
		border-radius: var(--radius-1);
		font-weight: 500;
		cursor: pointer;

		&.success {
			--color-highlight: var(--color-success-100);
			--btn-color-background: var(--color-success-300);
			--btn-color-border: var(--color-success-300);
			--btn-color-text: var(--color-neutral-100);
		}

		&.info {
			--color-highlight: var(--color-info-100);
			--btn-color-background: var(--color-info-300);
			--btn-color-border: var(--color-info-300);
			--btn-color-text: var(--color-neutral-100);
		}

		&.warning {
			--color-highlight: var(--color-warning-100);
			--btn-color-background: var(--color-warning-300);
			--btn-color-border: var(--color-warning-300);
			--btn-color-text: var(--color-neutral-1000);
		}

		&.danger {
			--color-highlight: var(--color-danger-100);
			--btn-color-background: var(--color-danger-300);
			--btn-color-border: var(--color-danger-300);
			--btn-color-text: var(--color-neutral-100);
		}

		&.neutral {
			--btn-color-background: var(--color-neutral-600);
			--btn-color-border: var(--color-neutral-600);
			--btn-color-text: var(--color-neutral-800);
		}

		&.disabled,
		&:disabled {
			--btn-color-background: var(--color-neutral-300);
			--btn-color-text: var(--color-neutral-600);
			--btn-color-border: var(--color-neutral-600);
			cursor: default;
		}

		&:not(:disabled, .disabled) {
			@include states.highlightable();
		}

		&.ghost {
			background-color: transparent;
			border: 1px solid var(--btn-color-border);
			color: var(--btn-color-border);
			padding-top: calc(var(--space-2) - 1px);
			padding-bottom: calc(var(--space-2) - 1px);
			padding-left: calc(var(--space-5) - 1px);
			padding-right: calc(var(--space-5) - 1px);

			&:disabled {
				background-color: inherit;
			}
		}
	}
</style>
