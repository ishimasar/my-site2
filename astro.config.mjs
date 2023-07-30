import { defineConfig } from 'astro/config';
import { remarkReadingTime } from "./src/lib/remark-reading-time";
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkToc from 'remark-toc';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['assets']
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@use "src/assets/scss/global.scss";`
        }
      }
    }
  },
  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'material-theme-darker'
    },
    remarkPlugins: [remarkMath, [remarkToc, {
      heading: "Contents"
    }], remarkReadingTime],
    rehypePlugins: [rehypeKatex, rehypeSlug, [rehypeAutolinkHeadings, {
      behavior: 'append'
    }], rehypeHeadingIds],
    gfm: true
  })],
  server: {
    port: 8080
  },
  // output: 'server',
  // adapter: vercel()
});