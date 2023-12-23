/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require("path");

const ITEMS_PER_PAGE = 6;
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  });

  const result = await graphql(`
    {
      allStrapiSermon {
        nodes {
          Title
          VideoLink
          ServiceType
          BiblePassage
          Series {
            Name
            id
          }
          Preacher {
            Name
            Prefix
          }
        }
      }
    }
  `);

  const resultSpeakers = await graphql(`
    {
      allStrapiPreacher {
        nodes {
          Name
          Prefix
        }
      }
    }
  `);

  const resultSeries = await graphql(`
    {
      allStrapiSermonSeries {
        nodes {
          Name
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query`);
    return;
  }

  const posts = result.data.allStrapiSermon.nodes;
  let speakers = resultSpeakers?.data?.allStrapiPreacher?.nodes.map(
    ({ Prefix, Name }) => ({
      label: `${Prefix} ${Name}`,
      prefix: Prefix,
      name: Name,
      value: `${Prefix}-${Name}`
        .toLowerCase()
        .replace(/\./g, "")
        .replace(/\s+/g, "-"),
    })
  );
  let series = resultSeries?.data?.allStrapiSermonSeries?.nodes.map(
    ({ Name }) => ({
      label: Name,
      value: Name.toLowerCase()
        .replace(/[.'"&]./g, "")
        .replace(/\s+/g, "-"),
    })
  );
  let books = posts
    .map(({ BiblePassage }) => BiblePassage.split(/[,;]/g))
    .map(book =>
      book
        .map(item => item.replace(/^\s+|\s+$/g, ""))
        .map(item => {
          const search = item.substring(1);
          const found = search.search(/[0-9:]/);
          return found > -1 && found !== 2
            ? item.substring(0, found + 1).replace(/\s+$/, "")
            : item;
        })
        .filter(item => /[a-zA-Z]/.test(item))
    );
  books = []
    .concat(...books)
    .filter((x, i, a) => a.indexOf(x) == i)
    .map(book => ({
      label: book,
      value: book.replace(/1/, "one").replace(/2/, "two"),
    }));

  const postsPerPage = ITEMS_PER_PAGE;
  const numberOfPages = Math.ceil(posts.length / postsPerPage);
  speakers = speakers.map(speaker => ({
    ...speaker,
    numOfPages: Math.ceil(
      posts.filter(
        ({ Preacher: { Prefix, Name } }) =>
          speaker.prefix === Prefix && speaker.name === Name
      ).length / postsPerPage
    ),
  }));

  Array.from({ length: numberOfPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/watch` : `/watch/${index + 1}`,
      component: path.resolve("./src/templates/sermons.js"),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages: numberOfPages,
        currentPage: index + 1,
        speakers,
        series,
        books,
      },
    });
  });

  speakers.forEach(({ value, prefix, name, numOfPages }) => {
    Array.from({ length: numOfPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/watch/${value}` : `/watch/${value}/${index + 1}`,
        component: path.resolve("./src/templates/sermons.js"),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages: numOfPages,
          currentPage: index + 1,
          filterValue: value,
          speakers,
          series,
          books,
          prefix,
          name,
        },
      });
    });
  });
};
