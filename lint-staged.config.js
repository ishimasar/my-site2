export default {
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '**/*.{js,jsx,ts,tsx}': 'eslint',
  '**/*.{css,scss}': 'stylelint',
  'src/**/*.astro': 'htmlhint'
}