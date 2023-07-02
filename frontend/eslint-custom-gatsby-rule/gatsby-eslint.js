const { store } = require("../node_modules/gatsby/dist/redux");
const {
  eslintConfig,
} = require("../node_modules/gatsby/dist/utils/eslint-config");
const {
  reactHasJsxRuntime,
} = require("../node_modules/gatsby/dist/utils/webpack-utils");

const { schema } = store.getState();

module.exports = {
  ...eslintConfig(schema, reactHasJsxRuntime).baseConfig,

  extends: "react-app",
};
