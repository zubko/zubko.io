module.exports = {
  extends: ['airbnb', 'plugin:flowtype/recommended'],
  parser: 'babel-eslint',
  plugins: ['flowtype'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
