module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react-hooks/recommended",
    "plugin:sonarjs/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "react-hooks", "sonarjs", "jest"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "relay/graphql-naming": 0,
    "react/react-in-jsx-scope": 0,
  },
  env: {
    node: true,
    browser: true,
    jest: true,
    es6: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: ".",
      },
    },
    react: {
      version: "detect",
    },
  },
};
