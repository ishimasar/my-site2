export default {
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '**/*.{ts}': 'eslint',
  '**/*.{scss}': 'stylelint',
  '**/*.astro': 'htmlhint --config .htmlhintrc'
}