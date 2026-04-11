/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const { CreateEventPages } = require("./src/page-generation/events");
const { CreateSermonPages } = require("./src/page-generation/sermons");
const { CreateCustomPages } = require("./src/page-generation/custom");
const { Pages } = require("./src/page-generation/create-page");

function memoryLog(label) {
  const m = process.memoryUsage();
  const mb = v => (v / 1024 / 1024).toFixed(0);
  console.log(`[DEBUG][build:${label}] RSS: ${mb(m.rss)}MB, Heap: ${mb(m.heapUsed)}MB`);
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const startTime = Date.now();

  let pages = new Pages(createPage, reporter);
  let createPageFn = page => pages.addPage(page);

  await CreateEventPages(graphql, createPageFn, reporter);

  await CreateSermonPages(graphql, createPageFn, reporter);

  await CreateCustomPages(graphql, createPageFn, reporter);

  pages.createPages();
  memoryLog("createPages");
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`[DEBUG][build] Page creation finished in ${elapsed}s`);
};

exports.onPostBootstrap = ({ getNodes }) => {
  console.log(`[DEBUG][build] Total nodes: ${getNodes().length}`);
};

exports.onPostBuild = ({ getNodes }) => {
  memoryLog("onPostBuild");
  console.log(`[DEBUG][build] Done. Final node count: ${getNodes().length}`);
};

// Suppress "Conflicting order" warnings from mini-css-extract-plugin.
// These fire when different pages import the same CSS modules in different
// orders, which is harmless with Tailwind/CSS Modules but produces a lot
// of noise in the build logs.
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === "build-javascript") {
    const config = getConfig();
    const miniCssPlugin = config.plugins.find(
      plugin => plugin.constructor.name === "MiniCssExtractPlugin"
    );
    if (miniCssPlugin) {
      miniCssPlugin.options.ignoreOrder = true;
    }
    actions.replaceWebpackConfig(config);
  }
};
