// ESLint: https://eslint.org/

import { FlatCompat } from '@eslint/eslintrc';
import jsdoc from "eslint-plugin-jsdoc";
import html from 'eslint-plugin-html';
import markdown from 'eslint-plugin-markdown';
import js from '@eslint/js';
import typeScriptESLint from '@typescript-eslint/eslint-plugin';
import typeScriptESLintParser from '@typescript-eslint/parser';

const compat = new FlatCompat();

export default [
  // {
  //   ignores: ['']
  // },
  js.configs.recommended,
  eslintConfigPrettier,
  ...compat.extends(
    'plugin:node/recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ),
  {
    plugins: {
      jsdoc,
      typeScriptESLint,
      html,
      markdown
    },
    languageOptions: {
      globals: {
      },
      parser: typeScriptESLintParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2021
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
      'node/no-missing-import': 'off'
    }
  }
]