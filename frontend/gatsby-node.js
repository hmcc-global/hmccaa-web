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
};

// gatsby-node.js

function logMemory(label) {
  const used = process.memoryUsage();
  console.log(
    `[${label}] Memory usage: rss=${(used.rss / 1024 / 1024).toFixed(
      2
    )} MB, heapUsed=${(used.heapUsed / 1024 / 1024).toFixed(2)} MB`
  );
}

exports.onPreInit = () => {
  logMemory("onPreInit");
};

exports.onPreBootstrap = () => {
  logMemory("onPreBootstrap");
};

exports.sourceNodes = async (args, options) => {
  logMemory("before sourceNodes");
  // Let other plugins run their sourceNodes
};

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal && node.internal.type) {
    // Occasionally log node types to see if one type is exploding in count
    if (Math.random() < 0.0005) {
      console.log(`Node created: ${node.internal.type}`);
    }
  }
};

exports.onPostBootstrap = ({ getNodes }) => {
  logMemory("onPostBootstrap");
  console.log("Total nodes so far:", getNodes().length);
};

exports.onPreExtractQueries = () => {
  logMemory("onPreExtractQueries");
};

exports.onPostBuild = ({ getNodes }) => {
  logMemory("onPostBuild");
  console.log("Final node count:", getNodes().length);
};
