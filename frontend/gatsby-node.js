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
          DatePreached
          BiblePassage {
            Book
            ChapterVerse
          }
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
  let books = posts.map(({ BiblePassage }) =>
    BiblePassage.map(({ Book }) => Book)
  );
  books = [].concat(...books).map(book => {
    const bookLabel = /\(\d[a-z]+\)/.test(book)
      ? `${book.substring(
          book.search(/\d/),
          book.search(/\d/) + 1
        )} ${book.substring(0, book.search(/\(/))}`
      : book;
    return {
      label: bookLabel,
      value: book.replace(/\(|\)/g, "").replace(/\s+/, "-").toLowerCase(),
      book,
    };
  });

  const postsPerPage = ITEMS_PER_PAGE;
  const numberOfPages = Math.ceil(posts.length / postsPerPage);
  speakers = speakers
    .map(speaker => ({
      ...speaker,
      numOfPages: Math.ceil(
        posts.filter(
          ({ Preacher: { Prefix, Name } }) =>
            speaker.prefix === Prefix && speaker.name === Name
        ).length / postsPerPage
      ),
    }))
    .filter(({ numOfPages }) => numOfPages > 0);

  series = series.map(item => ({
    ...item,
    numOfPages: Math.ceil(
      posts.filter(({ Series: { Name } }) => item.label === Name).length /
        postsPerPage
    ),
  }));

  books = books.map(item => ({
    ...item,
    numOfPages: Math.ceil(
      posts.filter(({ BiblePassage }) =>
        BiblePassage.some(({ Book }) => Book === item.book)
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
          prefix,
          name,
          books,
        },
      });
    });

    series.forEach(({ value: seriesValue, label }) => {
      const numPages = Math.ceil(
        posts.filter(
          ({ Preacher: { Prefix, Name }, Series: { Name: seriesName } }) =>
            prefix === Prefix && name === Name && seriesName === label
        ).length / postsPerPage
      );
      const filterValue = `${value}/${seriesValue}`;
      Array.from({ length: numPages }).forEach((_, seriesIndex) => {
        createPage({
          path:
            seriesIndex === 0
              ? `/watch/${filterValue}`
              : `/watch/${filterValue}/${seriesIndex + 1}`,
          component: path.resolve("./src/templates/sermons.js"),
          context: {
            limit: postsPerPage,
            skip: seriesIndex * postsPerPage,
            currentPage: seriesIndex + 1,
            filterValue,
            numPages,
            speakers,
            series,
            prefix,
            name,
            seriesName: label,
            books,
          },
        });
      });

      books.forEach(({ value: bookValue, book }) => {
        const numberOfPages = Math.ceil(
          posts.filter(
            ({
              Preacher: { Prefix, Name },
              Series: { Name: seriesName },
              BiblePassage,
            }) =>
              prefix === Prefix &&
              name === Name &&
              seriesName === label &&
              BiblePassage.some(({ Book }) => Book === book)
          ).length / postsPerPage
        );
        const filterValues = `${filterValue}/${bookValue}`;
        Array.from({ length: numberOfPages }).forEach((_, bookIndex) => {
          createPage({
            path:
              bookIndex === 0
                ? `/watch/${filterValues}`
                : `/watch/${filterValues}/${bookIndex + 1}`,
            component: path.resolve("./src/templates/sermons.js"),
            context: {
              limit: postsPerPage,
              skip: bookIndex * postsPerPage,
              currentPage: bookIndex + 1,
              filterValue: filterValues,
              numPages: numberOfPages,
              speakers,
              series,
              prefix,
              name,
              seriesName: label,
              book,
              books,
            },
          });
        });
      });
    });

    books.forEach(({ value: bookValue, book }) => {
      const numberOfPages = Math.ceil(
        posts.filter(
          ({ Preacher: { Prefix, Name }, BiblePassage }) =>
            prefix === Prefix &&
            name === Name &&
            BiblePassage.some(({ Book }) => Book === book)
        ).length / postsPerPage
      );
      const filterValues = `${value}/${bookValue}`;
      Array.from({ length: numberOfPages }).forEach((_, bookIndex) => {
        createPage({
          path:
            bookIndex === 0
              ? `/watch/${filterValues}`
              : `/watch/${filterValues}/${bookIndex + 1}`,
          component: path.resolve("./src/templates/sermons.js"),
          context: {
            limit: postsPerPage,
            skip: bookIndex * postsPerPage,
            currentPage: bookIndex + 1,
            filterValue: filterValues,
            numPages: numberOfPages,
            speakers,
            series,
            prefix,
            name,
            book,
            books,
          },
        });
      });
    });
  });

  series.forEach(({ value, label, numOfPages }) => {
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
          seriesName: label,
          speakers,
          series,
          books,
        },
      });
    });

    books.forEach(({ value: bookValue, book }) => {
      const numberOfPages = Math.ceil(
        posts.filter(
          ({ Series: { Name: seriesName }, BiblePassage }) =>
            seriesName === label &&
            BiblePassage.some(({ Book }) => Book === book)
        ).length / postsPerPage
      );
      const filterValues = `${value}/${bookValue}`;
      Array.from({ length: numberOfPages }).forEach((_, bookIndex) => {
        createPage({
          path:
            bookIndex === 0
              ? `/watch/${filterValues}`
              : `/watch/${filterValues}/${bookIndex + 1}`,
          component: path.resolve("./src/templates/sermons.js"),
          context: {
            limit: postsPerPage,
            skip: bookIndex * postsPerPage,
            currentPage: bookIndex + 1,
            filterValue: filterValues,
            numPages: numberOfPages,
            speakers,
            series,
            seriesName: label,
            book,
            books,
          },
        });
      });
    });
  });

  books.forEach(({ value, numOfPages, book }) => {
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
          book,
          speakers,
          series,
          books,
        },
      });
    });
  });
};
