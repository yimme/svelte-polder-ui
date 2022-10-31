import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import mm from 'micromatch';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
	},
	package: {
		exports: (filepath) => {
			if (filepath.endsWith('.d.ts')) return false;
		},
		files: mm.matcher('!**/*.stories.svelte')
	}
};

export default config;
