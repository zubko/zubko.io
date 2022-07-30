module.exports = {
  presets: [
    [
      "babel-preset-gatsby",
      {
        reactRuntime: "automatic",
        targets: {
          browsers: [">0.25%", "not dead"],
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "babel-plugin-styled-components",
      {
        pure: true,
      },
    ],
  ],
};
