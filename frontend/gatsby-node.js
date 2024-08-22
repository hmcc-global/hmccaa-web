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
const { Pages } = require("./src/page-generation/create-page");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  let pages = new Pages(createPage);
  let createPageFn = page => pages.addPage(page);

  await CreateEventPages(graphql, createPageFn, reporter);

  await CreateSermonPages(graphql, createPageFn, reporter);

  pages.createPages();
};
