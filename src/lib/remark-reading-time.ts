import type { Plugin } from "unified";

import readingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() :Plugin {
    return function (tree, { data }) {
      const textOnPage = toString(tree);
      const stat = readingTime(textOnPage);

      data.astro.frontmatter.minutesRead = stat.minutes;
    };
}