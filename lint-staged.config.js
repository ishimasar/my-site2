export default {
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '**/*.{ts}': 'eslint',
  '**/*.{css,scss}': 'stylelint',
  '**/*.astro': 'htmlhint --config .htmlhintrc'
}