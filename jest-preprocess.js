const babelOptions = require("./babel.config");

console.error("babelOptions", babelOptions);

// const babelOptions = {
//   presets: ['babel-preset-gatsby', '@babel/preset-typescript'],
// };

module.exports = require("babel-jest").default.createTransformer(babelOptions);
