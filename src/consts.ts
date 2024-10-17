// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import { type Multilingual } from "/i18n";

export const SITE_TITLE: string | Multilingual = "Astro i18n Starter";

export const SITE_DESCRIPTION: string | Multilingual = {
  en: "A starter template for Astro with i18n support.",
  ja: "i18n 対応の Astro スターターテンプレート。",
};

export const X_ACCOUNT: string | Multilingual = "@psephopaiktes";

export const NOT_TRANSLATED_CAUTION: string | Multilingual = {
  en: "This page is not available in your language.",
  ja: "このページはご利用の言語でご覧いただけません。",
};