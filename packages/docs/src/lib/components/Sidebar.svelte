<script lang="ts">
	let menu = [
		{
			title: 'Getting Started',
			items: [
				{
					label: 'Installation',
					href: '/getting-started'
				}
			]
		},
		{
			title: 'Basic Components',
			items: [
				{
					label: 'Buttons',
					href: '/button'
				}
			]
		},
		{
			title: 'Theming',
			items: [
				{
					label: 'sass',
					href: '/sass'
				}
			]
		}
	];
</script>

<aside class="sidebar">
	<nav class="navigation">
		<ul class="navmenu">
			{#each menu as category}
				<li class="navmenu__title">
					<span>{category.title}</span>
				</li>
				{#each category.items as item}
					<li class="navmenu__item">
						<a href={item.href}>{item.label}</a>
					</li>
				{/each}
			{/each}
		</ul>
	</nav>
</aside>

<style lang="scss">
	.sidebar {
		grid-area: sidebar;
		width: 230px;
		font-size: var(--font-size-body-small);
		border-right: 1px solid var(--color-neutral-300);
	}

	.navmenu {
		list-style-type: none;
		padding: var(--space-2) var(--space-3);
		margin: 0;

		&__title {
			span {
				font-size: var(--font-size-body);
				line-height: var(--line-height-body);
				font-weight: 500;
				padding-top: var(--space-2);
				padding-bottom: var(--space-1);
				display: flex;
			}
		}

		&__item {
			a {
				display: flex;
				font-size: var(--font-size-body-small);
				line-height: var(--line-height-body-small);
				padding: var(--space-1) var(--space-3);
				text-decoration: none;
				color: var(--color-neutral-800);

				&:hover,
				&:focus {
					color: var(--color-primary-400);
				}
			}
		}
	}
</style>
