const babelOptions = require('./babel.config');

module.exports = require('babel-jest').default.createTransformer(babelOptions);
