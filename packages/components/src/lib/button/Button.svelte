<script lang="ts" context="module">
	export type ButtonVariant = 'default' | 'ghost';
</script>

<script lang="ts">
	import type { Color } from '$lib/types/color';

	import styles from './button.module.scss';

	export let variant: ButtonVariant;
	export let color: Color;
</script>

<button class="button" class:variant class:color>
	<slot />
</button>
