const noAnonymousExportsRule = require("./enforce-no-anonymous-exports-rule");
const limitedExportsRule = require("./enforce-limited-exports-rule");
const plugin = {
  rules: [
    { "no-anonymous-exports-page-templates": noAnonymousExportsRule },
    { "limited-exports-page-templates": limitedExportsRule },
  ],
};
module.exports = plugin;
