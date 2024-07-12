/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require("path");
const {
  processEvents,
} = require("../frontend/src/components/page-events/event-processing");
const { getFullEventId } = require('./src/components/page-events/event-processing-util');

const ITEMS_PER_PAGE = 6;

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const sermonSeriesTypeDefs = `
     type STRAPI_SERMON_SERIESJson implements Node @dontInfer {
      Name: String!
      id: ID!
      strap_id: Int!
      Background: Node
    }
  `;
  createTypes(sermonSeriesTypeDefs);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  });

  const eventResult = await graphql(`
    query EventSinglePageQuery {
      allStrapiEvent {
        nodes {
          id
          DescriptionOverride
          DescriptionAddendum
          ContactOverride {
            Name
            Email
            PhoneNumber
            AutoformatPhoneNumber
          }
          StopShowingWhenPastOverride
          DisplayIsStreamedOverride
          ShowXUpcomingEvents
          EventTemplate {
            CoverImage {
              url
            }
            Description
            Location {
              LocationName
            }
            Name
            StopShowingWhenPast
            DisplayIsStreamed
            Contact {
              Name
              Email
              PhoneNumber
              AutoformatPhoneNumber
            }
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
  `);

  if (eventResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query`);
    return;
  }

  //Create page for each event from GraphQL
  const parsedEvents = processEvents(eventResult.data.allStrapiEvent.nodes);
  // console.log(parsedEvents);

  parsedEvents.forEach(event => {
    if (!event.id || !event.times) {
      console.error("Event missing critical fields:", event);
    } else {
      event.times.forEach(time => {
        console.log(time);
        let eventPath = encodeURI(`/events/${getFullEventId(event.id, time)}`);
        console.log("Creating event page", eventPath);
        createPage({
          path: eventPath,
          component: path.resolve(`./src/templates/eventPageTemplate.js`),
          context: {
            event,
            time,
          },
        });
      })
    }
  });

  // GraphQL Query for All Sermons
  const result = await graphql(`
    {
      allStrapiSermon {
        nodes {
          strapi_id
          Title
          DatePreached(formatString: "MMMM  DD, YYYY")
          BiblePassage {
            Book
            ChapterVerse
          }
          Series {
            Name
            Background {
              url
            }
          }
          Preacher {
            Name
            Prefix
          }
          VideoLink
          Audio {
            url
          }
          Description {
            data {
              Description
            }
          }
        }
      }
    }
  `);

  // GraphQL Query for All Speakers
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
  // GraphQL Query for All Series
  const resultSeries = await graphql(`
    {
      allStrapiSermonSeries {
        nodes {
          Name
        }
      }
    }
  `);

  if (result.errors || resultSpeakers.errors || resultSeries.errors) {
    reporter.panicOnBuild(`Error while running GraphQL queries`);
    return;
  }
  // All Sermons
  const posts = result.data.allStrapiSermon.nodes;
  // All Speakers List for Drop Down Selection
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
  // All Series List for Drop Down Selection
  let series = resultSeries?.data?.allStrapiSermonSeries?.nodes.map(
    ({ Name }) => ({
      label: Name,
      value: Name.toLowerCase()
        .replace(/[.'"&]./g, "")
        .replace(/\s+/g, "-"),
    })
  );
  // All Bible Books List for Drop Down Selection
  let books = posts
    .map(({ BiblePassage }) => BiblePassage.map(({ Book }) => Book))
    .reduce((result, current) => {
      return result.concat(...current);
    }, [])
    .filter((book, index, bookList) => {
      return bookList.indexOf(book) === index;
    })
    .map(book => {
      const bookLabel = /\(\d+/.test(book)
        ? `${book.substring(
            book.search(/\d+/),
            book.search(/\d+/) + book.substring(book.search(/\d+/)).search(/\D/)
          )} ${book.substring(0, book.search(/\(/) - 1)}`
        : book;
      return {
        label: bookLabel,
        value: book.replace(/\(|\)/g, "").replace(/\s+/, "-").toLowerCase(),
        book,
      };
    });

  const postsPerPage = ITEMS_PER_PAGE;
  const numberOfPages = Math.ceil(posts.length / postsPerPage);
  // Update Speaker List to include the number of pages of sermons for each speaker and filter the list to create a list of speakers that has at least one sermon.
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

  // Update Series List to include number of pages of sermons for each series.
  series = series.map(item => ({
    ...item,
    numOfPages: Math.ceil(
      posts.filter(({ Series: { Name } }) => item.label === Name).length /
        postsPerPage
    ),
  }));
  // Update Bible Books List to include number of pages of sermons for each Bible Book.
  books = books.map(item => ({
    ...item,
    numOfPages: Math.ceil(
      posts.filter(({ BiblePassage }) =>
        BiblePassage.some(({ Book }) => Book === item.book)
      ).length / postsPerPage
    ),
  }));
  // Create Pages for all sermons and pass data in the PageContext Object.
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
  /* Loop through speakers to create pages for one of the follow combinations:
   * Speaker's Sermon, Speaker's And Specific Series' Sermons, and Speaker's, Specific Series' and Specific Bible Book's Sermons
   */
  speakers.forEach(({ value, prefix, name, numOfPages }) => {
    // Create pages for Each Speaker with their sermons.
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
      // Set Number of Pages for Sermon for specific speaker and specific series.
      const numPages = Math.ceil(
        posts.filter(
          ({ Preacher: { Prefix, Name }, Series: { Name: seriesName } }) =>
            prefix === Prefix && name === Name && seriesName === label
        ).length / postsPerPage
      );
      // Create Pages for sermons for specific speaker and specific series.
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
        // Set Number of Pages for Sermon for specific speaker,  specific series and specific Bible Book.
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
        // Create Pages for sermons for specific speaker, specific series and specific Bible Book.
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
      // Set Number of Pages for Sermon for specific speaker and specific Bible Book.
      const numberOfPages = Math.ceil(
        posts.filter(
          ({ Preacher: { Prefix, Name }, BiblePassage }) =>
            prefix === Prefix &&
            name === Name &&
            BiblePassage.some(({ Book }) => Book === book)
        ).length / postsPerPage
      );
      // Create Pages for sermons for specific speaker, and specific Bible Book.
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
  /* Loop through series to create pages for one of the follow combinations:
   * Series' Sermon, and Specific Series' and Specific Bible Book's Sermons
   */
  series.forEach(({ value, label, numOfPages }) => {
    // Create pages for Each Series with their sermons.
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
      // Set Number of Pages for Sermon for specific series and specific Bible Book.
      const numberOfPages = Math.ceil(
        posts.filter(
          ({ Series: { Name: seriesName }, BiblePassage }) =>
            seriesName === label &&
            BiblePassage.some(({ Book }) => Book === book)
        ).length / postsPerPage
      );
      // Create Pages for sermons for specific series, and specific Bible Book.
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

  // Create pages for Each Bible Book with their sermons.
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

  posts.forEach(sermon => {
    const { strapi_id } = sermon;
    createPage({
      path: `/watch/sermons/${strapi_id}`,
      component: path.resolve("./src/templates/sermon.js"),
      context: {
        id: strapi_id,
        baseURL: process.env.STRAPI_API_URL,
      },
    });
  });
};
