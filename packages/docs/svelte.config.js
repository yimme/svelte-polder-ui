import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [mdsvex({ extensions: ['.svelte.md', '.svelte', '.md'] }), preprocess()],

	kit: {
		adapter: adapter()
	}
};

export default config;
