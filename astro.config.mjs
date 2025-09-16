// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	server: { port: 4325 },
	site: 'https://coleccao.club/',
	trailingSlash: 'always',
	integrations: [mdx()],
});
