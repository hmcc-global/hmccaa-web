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

  const urls = result.data.allStrapiCustomPage?.nodes?.map(({ URL }) => URL) || [];
  reporter.info(`[DEBUG][createPages] Found ${urls.length} custom pages to create${urls.length ? ":\n" + urls.map(u => `  ${u}`).join("\n") : "."}`);
  urls.forEach(url => {
    createPage({
      path: url,
      component: path.resolve("./src/templates/customPage.js"),
      context: { url },
    });
  });
}

module.exports.CreateCustomPages = CreateCustomPages;
