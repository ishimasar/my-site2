export default {
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '**/*.ts': 'eslint',
  '**/*.{css,scss}': 'stylelint',
  '**/blog/*.html **/blog/**/*.html': 'htmlhint'
}