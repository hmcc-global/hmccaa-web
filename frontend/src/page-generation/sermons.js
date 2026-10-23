const path = require("path");
const {
  ITEMS_PER_PAGE,
  getSermonPageUrl,
  getSermonTraits,
  SermonTraitMetadata,
} = require("./sermon-pages");

const listingTemplate = path.resolve("./src/templates/sermons.js");

async function CreateSermonPages(graphql, createPage, reporter) {
  // GraphQL Query for All Sermons
  const result = await graphql(`
    {
      allStrapiSermon {
        nodes {
          strapiId
          BiblePassage {
            Book
          }
          Series {
            Name
          }
          Preacher {
            Name
            Prefix
          }
          ServiceType
          SermonTopics {
            Topic
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL queries`);
    return;
  }

  const sermons = result.data.allStrapiSermon.nodes;
  let listedSermons = 0;

  sermons.forEach(sermon => {
    try {
      getSermonTraits(sermon);
    } catch (e) {
      reporter.warn(
        `Skipping sermon (strapiId ${sermon.strapiId}) because of error: ${e}.`
      );
      return;
    }
    listedSermons++;

    createPage({
      path: getSermonPageUrl(sermon.strapiId),
      component: path.resolve("./src/templates/sermon.js"),
      context: {
        id: sermon.strapiId,
        baseURL: process.env.STRAPI_API_URL,
      },
    });
  });

  // The sermon list is filtered and paginated in the browser. Its unfiltered pages (/watch, /watch/2, ...)
  // are pre-rendered so every sermon page is reachable through plain links.
  const numPages = Math.max(1, Math.ceil(listedSermons / ITEMS_PER_PAGE));
  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: `/watch${index === 0 ? "" : `/${index + 1}`}`,
      component: listingTemplate,
      context: {},
    });
  });

  // Filtered URLs (/watch/speaker/x/series/y/2) have no HTML of their own: one page per trait label matches
  // every URL starting with that label, and .htaccess serves its HTML for them (see gatsby-config.js)
  SermonTraitMetadata.forEach(({ restLabel }) => {
    createPage({
      path: `/watch/${restLabel}`,
      matchPath: `/watch/${restLabel}/*`,
      component: listingTemplate,
      context: { clientOnly: true },
    });
  });

  reporter.info(
    `[DEBUG][createPages] Found ${sermons.length} sermons to create pages for.`
  );
  reporter.info(
    `[DEBUG][createPages] Created ${numPages} sermon listing pages.`
  );
}

module.exports.CreateSermonPages = CreateSermonPages;
