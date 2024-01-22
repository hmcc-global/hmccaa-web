/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
 exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  });
};

//TODO: Modify the following code to pull events from GraphQL before merging
const path = require("path");

const events = require("./src/data/eventData");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  events.forEach(event => {
    createPage({
      path: `/events/${event.id}`,
      component: path.resolve(`./src/components/page-events/eventPage.js`),
      context: {
        // Passing the entire event object as context
        event,
      },
    });
  });
};