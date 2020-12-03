module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },

  env: {
    es6: true,
    node: true,
    browser: true
  },

  extends: [
    'plugin:vue/recommended', // 1
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    'plugin:vue/essential',
  ],

  plugins: [
  ],

  globals: {
    Vue: false,
    $HTTP: false,
    App: false,
  },

  // add your custom rules here

  rules: {
    'no-console': 0,
    'no-debugger': 0,
    'space-before-function-paren': 0,
    'vue/comma-dangle': 'error',
    'comma-dangle': 0,
    'vue/html-self-closing': 'off',
    'vue/html-closing-bracket-newline': 0,
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'indent': ['error', 2],
    'vue/html-indent': 'off',
    'vue/no-v-html': 0,
  },

  overrides: [{
    files: ['*.vue'],
    rules: { indent: 'off' }
  }]
}
