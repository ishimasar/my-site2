// ESLint: https://eslint.org/

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import babelEslint from '@babel/eslint-parser';
import typeScriptESLint from '@typescript-eslint/eslint-plugin';
import typeScriptESLintParser from '@typescript-eslint/parser';
import astro from 'eslint-plugin-astro';
import html from 'eslint-plugin-html';
import markdown from 'eslint-plugin-markdown';

const compat = new FlatCompat();

export default [
  // {
  //   ignores: ['']
  // },
  js.configs.recommended,
  eslintConfigPrettier,
  ...compat.extends(
    'plugin:node/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:astro/recommended',
    'standard-with-typescript'
  ),
  {
    plugins: {
      astro,
      typeScriptESLint,
      babelEslint,
      html,
      markdown
    },
    languageOptions: {
      // globals: {},
      parser: babelEslint,
      parserOptions: {
        sourceType: module,
        ecmaVersion: latest
      }
    },
    // Rules Reference: https://eslint.org/docs/latest/rules/
    rules: {
      'no-console': 'off',
      'no-debugger': 'error',
      'jsdoc/require-description': 'error',
      'jsdoc/check-values': 'error',
      'node/no-deprecated-api': 'off',
      'node/no-unpublished-import': 'off',
      'node/no-unpublished-require': 'off',
      'node/no-unsupported-features/es-syntax': 'off',
      'no-process-exit': 'off',
      'node/no-missing-import': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-import-type-side-effects':'error'
    }
  }
]