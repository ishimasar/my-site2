export default {
  // '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  'src/**/*.{js,jsx,ts,tsx}': 'eslint --fix --no-ignore --max-warnings=0',
  '**/*.{css,scss}': 'stylelint',
  'src/**/*.astro': 'htmlhint'
}