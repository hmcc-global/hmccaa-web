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

  let pages = new Pages(createPage, reporter);
  let createPageFn = page => pages.addPage(page);
  let createPageAndPrintFn = page => {
    reporter.info(`Creating page: ${page.path}`);
    createPageFn(page);
  };

  await CreateEventPages(graphql, createPageAndPrintFn, reporter);

  await CreateSermonPages(graphql, createPageFn, reporter);

  await CreateCustomPages(graphql, createPageAndPrintFn, reporter);

  pages.createPages();
  memoryLog("createPages");
};

exports.onPostBootstrap = ({ getNodes }) => {
  console.log(`[DEBUG][build] Total nodes: ${getNodes().length}`);
};

exports.onPostBuild = ({ getNodes }) => {
  memoryLog("onPostBuild");
  console.log(`[DEBUG][build] Done. Final node count: ${getNodes().length}`);
};
