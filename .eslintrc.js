module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  // plugins: ["only-warn", "react", "prettier"],
  plugins: ["react", "prettier"],
  ignorePatterns: ["styles.js"],
  rules: {
    "react/jsx-key": ["warn"], 
    "prettier/prettier": ["warn"],
    "arrow-parens": [2, "always"],
    "react/function-component-definition": "off",
    "react/jsx-wrap-multilines": 0,
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": 0,
    "import/no-cycle": 0,
    camelcase: 0,
    "react/jsx-props-no-spreading": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "import/prefer-default-export": "off",
    "no-param-reassign": ["error", { props: false }],
    "guard-for-in": 0,
    "no-unused-vars": ["warn"],
    "ban-ts-comment": "off",
    "react/prop-types": "off",
    "no-plusplus": ["error"],
    "react/jsx-no-bind": "off",
    "jsx-a11y/no-static-element-interactions": "off", // need to remove this rule
    "jsx-a11y/click-events-have-key-events": "off", // need to remove this rule
    "jsx-a11y/no-noninteractive-element-interactions": "off", // need to remove this rule
    "react/jsx-no-useless-fragment": "off", // need to remove this rule
  },
};
