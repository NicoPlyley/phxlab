// noinspection JSUnusedGlobalSymbols

import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {
  kit: {
    adapter: adapter({
      strict: false,
    }),
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
