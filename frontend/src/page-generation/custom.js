const path = require("path");

async function CreateCustomPages(graphql, createPage, reporter) {
  // GraphQL Query for All Sermons
  const result = await graphql(`
    {
      allStrapiCustomPage {
        nodes {
          URL
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while querying graphql for custom page URLs`);
    return;
  }

  result.data.allStrapiCustomPage?.nodes
    ?.map(({ URL }) => URL)
    .forEach(url => {
      reporter.info(`Found custom page to create: ${url}`);
      createPage({
        path: url,
        component: path.resolve("./src/templates/customPage.js"),
        context: { url },
      });
    });
}

module.exports.CreateCustomPages = CreateCustomPages;
