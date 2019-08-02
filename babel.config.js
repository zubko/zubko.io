const stage = process.env.GATSBY_BUILD_STAGE || `test`;

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: stage === 'test' ? 'commonjs' : false,
        useBuiltIns: 'usage',
        shippedProposals: true,
        targets:
          stage.indexOf('build') !== -1 || stage === 'test'
            ? {
                node: 'current',
              }
            : {
                browsers: ['>0.25%', 'not dead'],
              },
      },
    ],
    [
      '@babel/preset-react',
      {
        development: stage.indexOf('develop') !== -1,
        useBuiltIns: true,
        pragma: 'React.createElement',
      },
    ],
    '@babel/flow',
    '@emotion/babel-preset-css-prop',
  ],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    '@babel/plugin-syntax-dynamic-import',
    'babel-plugin-macros',
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
        regenerator: true,
      },
    ],
  ],
};
