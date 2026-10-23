/**
 * Runs the gatsby-source-strapi-graphql package with the Strapi token read from
 * the environment instead of from the plugin options.
 *
 * Gatsby copies every plugin's options into a SitePlugin node that it stores in
 * .cache, and CI keeps .cache in the GitHub Actions cache, which any pull
 * request (including one from a fork) can restore. Keeping the token out of the
 * options keeps it out of that cache.
 *
 * package.json names this plugin "gatsby-source-strapi-graphql" on purpose: the
 * package removes nodes for deleted Strapi entries by looking for nodes owned by
 * "gatsby-source-strapi-graphql", and Gatsby sets a node's owner from the name
 * of the plugin that created it.
 */
const strapi = require("gatsby-source-strapi-graphql/gatsby-node");

const withToken = api => (args, pluginOptions) =>
  api(args, { ...pluginOptions, token: process.env.STRAPI_TOKEN });

exports.createSchemaCustomization = withToken(strapi.createSchemaCustomization);
exports.sourceNodes = withToken(strapi.sourceNodes);
exports.onPostBuild = strapi.onPostBuild;
