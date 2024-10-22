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
