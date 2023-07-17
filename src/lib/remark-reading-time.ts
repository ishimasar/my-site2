import type { Plugin } from "unified";

import readingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() :Plugin {
    return function (tree, { data }) {
      const textOnPage = toString(tree);
      const stat = readingTime(textOnPage);
      const hoge = stat;

      data.astro.frontmatter.minutesRead = Math.round(stat.minutes * 10) / 10;
    };
}