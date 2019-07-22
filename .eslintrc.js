module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    extends: 'airbnb',
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
      'typescript',
    ],
    rules: {
      'comma-dangle': ['error', {
        arrays: 'never',
        objects: 'always',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }],
      'object-curly-spacing': ['error','always'],
      'quote-props': ['error', 'as-needed'],
      'key-spacing': ['warn', { 'beforeColon': false, 'afterColon': true  }],
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      quotes: ['error','single'],
      'no-underscore-dangle': ['off'],
      'react/prop-types': ['warn'],
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      'padded-blocks': ['warn', { 'blocks': 'never' }],
      'react/no-unused-state': ['off'],
      'max-len': ['off'],
      'no-empty-pattern': ['off'],
      'react/jsx-no-bind': ['error', {'allowBind': true, 'allowArrowFunctions': true}],
      'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
      'jsx-a11y/no-static-element-interactions': ['off'],
      'import/extensions': ['warn', 'always'],
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  },
};