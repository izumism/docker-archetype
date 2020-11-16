module.exports = {
  plugins: ['react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    browser:true,
  },
  "rules": {
    "no-console": "off",
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': ['error', 'always-multiline'],
    "react/prop-types": "off",
  },
  "settings": {
    "react": {
      "version": "detect",
    },
  },
}
