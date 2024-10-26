import { defineConfig } from 'astro/config';
import rehypeMermaid from 'rehype-mermaid';
import { rehypeShiki } from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [
      [rehypeMermaid, { mermaidConfig: { theme: 'dark' } }],
      [rehypeShiki, { theme: 'one-dark-pro' }]
    ],
    syntaxHighlight: false
  }
});
