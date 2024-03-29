module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/jest-preprocess.js"
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file-mock.ts"
  },
  testPathIgnorePatterns: [
    "node_modules",
    "\\.cache",
    "<rootDir>.*/public",
    "cypress"
  ],
  transformIgnorePatterns: [
    `node_modules/(?!(gatsby|gatsby-script|gatsby-link)/)`
  ],
  globals: {
    __PATH_PREFIX__: ""
  },
  setupFiles: ["<rootDir>/loadershim.js"]
};
