// eslint.config.js
"use strict";

// Import the ESLint plugin locally
const eslintPluginGatsby = require("./eslint-plugin-gatsby");

module.exports = [
  {
    files: ["**/*.{js,.jsx}"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    // Using the eslint-plugin-example plugin defined locally
    plugins: { gatsby: eslintPluginGatsby },
    rules: {
      "gatsby/no-anonymous-exports-page-templates": "warn",
      "gatsby/limited-exports-page-templates": "warn",
    },
  },
];
