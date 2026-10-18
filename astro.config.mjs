// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { rehypePlugins, remarkPlugins } from './src/lib/math/plugins.mjs';

export default defineConfig({
  integrations: [mdx()],
  markdown: {
    remarkPlugins,
    rehypePlugins,
    // Les guillemets « » sont écrits directement : pas de “ ” automatiques.
    smartypants: false,
    syntaxHighlight: false,
  },
  build: {
    format: 'directory',
  },
});
