module.exports = {
  presets: [
    [
      "babel-preset-gatsby",
      {
        reactRuntime: "automatic",
        reactImportSource: "@emotion/react",
        targets: {
          browsers: [">0.25%", "not dead"],
        },
      },
    ],
    "@babel/preset-typescript",
  ],
};
