export default {
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '**/*.{ts,astro}': 'eslint',
  '**/*.{css,scss}': 'stylelint',
  '**/*.astro': 'htmlhint --config .htmlhintrc'
}