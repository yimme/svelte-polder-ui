<script lang="ts">
	type BadgeSize = 'small' | 'medium' | 'large';
	export let size: BadgeSize = 'medium';

	let classList = ['badge', size].filter(Boolean).join(' ');
</script>

<span class={classList}>
	<span class="badge__content">
		<slot />
	</span>
</span>

<style lang="scss">
	.badge {
		display: inline-flex;
		color: var(--color-neutral-100);
		background-color: var(--color-danger-300);
		height: 1rem;
		min-width: 1rem;
		border-radius: var(--radius-3);
		justify-content: center;
		align-items: center;
		font-size: 0.625rem;
		line-height: 1rem;
		font-weight: 500;

		&.medium {
			padding-left: 0.25rem;
			padding-right: 0.25rem;
		}

		&.small {
			height: 0.75rem;
			width: 0.75rem;
			min-width: unset;

			.badge__content {
				display: none;
			}
		}
		&.large {
			height: 1.5rem;
			min-width: 1.5rem;
			font-size: var(--font-size-body);
			line-height: var(--line-height-body);
			padding: 0 0.375rem;
			font-weight: 500;
		}
	}
</style>
