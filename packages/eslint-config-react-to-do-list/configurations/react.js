"use strict";

module.exports = {
  parser: "babel-eslint",
  extends: [
    "./es6.js",
    "../rules/jsx-a11y/index.js",
    "../rules/filenames/index.js",
    "../rules/react/index.js",
  ],
  settings: {
    "react": {
      "version": "16.8.4", // React version. "detect" automatically picks the version you have installed.
                           // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                           // default to latest and warns if missing
                           // It will default to "detect" in the future
    }
  },
  env: {
    browser: true,
    jest: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};
