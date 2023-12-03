import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './src/lib/remark-reading-time';
import mdx from '@astrojs/mdx';
import mdxMermaid from 'mdx-mermaid';
import { Mermaid } from 'mdx-mermaid/lib/Mermaid';
import react from '@astrojs/react';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkToc from 'remark-toc';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import vercel from '@astrojs/vercel/serverless';

import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://nova.drifting-clouds.com/blog/',
  vite: {
    ssr: {
      noExternal: ['assets']
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@use 'src/assets/scss/global.scss';`
        }
      }
    }
  },
  integrations:
    [
      mdx({
        syntaxHighlight: 'prism',
        // syntaxHighlight: 'shiki',
        // shikiConfig: {
        //   theme: 'material-theme-darker'
        // },
        remarkPlugins: [
          remarkMath,
          [remarkToc, {
            heading: 'Contents'
          }],
          remarkReadingTime,
          [mdxMermaid, {
            output: 'svg'}
          ]
        ],
        components: {mermaid: Mermaid, Mermaid},
        rehypePlugins: [
          rehypeKatex,
          rehypeSlug,
          [rehypeAutolinkHeadings, {
            behavior: 'append'
          }],
          rehypeHeadingIds],
        gfm: true
      }),
      sitemap(),
      partytown({
        config: {
          forward: ['dataLayer.push'],
        },
      }),
      react()
    ],
  server: {
    port: 8080
  },
  output: 'hybrid',
  // adapter: vercel()
});