module.exports = {
  extends: ['fbjs'],
  plugins: ['prettier', 'react'],
  parser: 'babel-eslint',
  rules: {
    'relay/graphql-naming': 0,
    'max-len': 0,
    indent: 0,
    quotes: 0,
  },
  env: {
    node: true,
    browser: true,
  },
};
