/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

//TODO: Modify the following code to pull events from GraphQL before merging
const path = require("path");

// const events = require("./src/data/eventData");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  });

  console.warn("got here");

  const result = await graphql(`
    {
      allStrapiEvent {
        edges {
          node {
            id
            DescriptionOverride
            EventTemplate {
              CoverImage {
                url
              }
              Description
              Location {
                LocationName
              }
              Name
              ShowXUpcomingEvents
            }
            LocationOverride {
              LocationName
            }
            NameOverride
            Time {
              ... on STRAPI__COMPONENT_EVENT_TIMES_RECURRING_TIME {
                id
                DateTime
                EndDateTime
                EndRecurDate
                RecurEveryXTimeFrames
                RecurTimeFrame
                StopShowingWhenPast
                strapi_component
              }
              ... on STRAPI__COMPONENT_EVENT_TIMES_SINGLE_TIME {
                id
                StopShowingWhenPast
                EndDateTime
                DateTime
                strapi_component
              }
            }
            CoverImageOverride {
              url
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query`);
    return;
  }

  console.warn(result);
  result.data.allStrapiEvent.edges.forEach(({ node: event }) => {
    createPage({
      path: `/events/${event.id}`,
      component: path.resolve(`./src/templates/eventPageTemplate.js`),
      context: {
        // Passing the entire event object as context
        event,
        ID: event.id,
      },
    });
  });
};
