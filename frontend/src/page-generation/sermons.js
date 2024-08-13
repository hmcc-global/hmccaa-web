const path = require("path");
const { OrderedSet } = require("immutable");
const { getBookName } = require("./strapi-bible");
const {
  SermonTraits,
  SermonTraitMetadata,
  getUrlFromNormalizedSermonTraits,
} = require("./sermon-pages");

const ITEMS_PER_PAGE = 6;

async function CreateSermonPages(graphql, createPage, reporter) {
  tempCreateSermonPages(graphql, createPage, reporter);
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

  // // GraphQL Query for All Speakers
  // const resultSpeakers = await graphql(`
  //   {
  //     allStrapiPreacher {
  //       nodes {
  //         Name
  //         Prefix
  //       }
  //     }
  //   }
  // `);
  // // GraphQL Query for All Series
  // const resultSeries = await graphql(`
  //   {
  //     allStrapiSermonSeries {
  //       nodes {
  //         Name
  //       }
  //     }
  //   }
  // `);

  // if (result.errors || resultSpeakers.errors || resultSeries.errors) {
  //   reporter.panicOnBuild(`Error while running GraphQL queries`);
  //   return;
  // }
  // // All Sermons
  const posts = result.data.allStrapiSermon.nodes;
  // // All Speakers List for Drop Down Selection
  // let speakers = resultSpeakers?.data?.allStrapiPreacher?.nodes.map(
  //   ({ Prefix, Name }) => ({
  //     label: `${Prefix || ""} ${Name}`,
  //     prefix: Prefix,
  //     name: Name,
  //     value: `${Prefix}-${Name}`
  //       .toLowerCase()
  //       .replace(/\./g, "")
  //       .replace(/\s+/g, "-"),
  //   })
  // );
  // // All Series List for Drop Down Selection
  // let series = resultSeries?.data?.allStrapiSermonSeries?.nodes.map(
  //   ({ Name }) => ({
  //     label: Name,
  //     value: Name.toLowerCase()
  //       .replace(/[.'"&]./g, "")
  //       .replace(/\s+/g, "-")
  //       .replace(/#/g, "HASH"),
  //   })
  // );
  // // All Bible Books List for Drop Down Selection

  // let books = posts
  //   .map(({ BiblePassage }) => BiblePassage.map(({ Book }) => Book))
  //   .reduce((result, current) => {
  //     return result.concat(...current);
  //   }, [])
  //   .filter((book, index, bookList) => {
  //     return bookList.indexOf(book) === index;
  //   })
  //   .map(book => {
  //     const bookLabel = /\(\d+/.test(book)
  //       ? `${book.substring(
  //           book.search(/\d+/),
  //           book.search(/\d+/) + book.substring(book.search(/\d+/)).search(/\D/)
  //         )} ${book.substring(0, book.search(/\(/) - 1)}`
  //       : book;
  //     return {
  //       label: bookLabel,
  //       value: book.replace(/\(|\)/g, "").replace(/\s+/, "-").toLowerCase(),
  //       book,
  //     };
  //   });

  // const postsPerPage = ITEMS_PER_PAGE;
  // const numberOfPages = Math.ceil(posts.length / postsPerPage);
  // // Update Speaker List to include the number of pages of sermons for each speaker and filter the list to create a list of speakers that has at least one sermon.
  // speakers = speakers
  //   .map(speaker => ({
  //     ...speaker,
  //     numOfPages: Math.ceil(
  //       posts.filter(
  //         ({ Preacher: { Prefix, Name } }) =>
  //           speaker.prefix === Prefix && speaker.name === Name
  //       ).length / postsPerPage
  //     ),
  //   }))
  //   .filter(({ numOfPages }) => numOfPages > 0);

  // // Update Series List to include number of pages of sermons for each series.
  // series = series.map(item => ({
  //   ...item,
  //   numOfPages: Math.ceil(
  //     posts.filter(({ Series: { Name } }) => item.label === Name).length /
  //       postsPerPage
  //   ),
  // }));
  // // Update Bible Books List to include number of pages of sermons for each Bible Book.
  // books = books.map(item => ({
  //   ...item,
  //   numOfPages: Math.ceil(
  //     posts.filter(({ BiblePassage }) =>
  //       BiblePassage.some(({ Book }) => Book === item.book)
  //     ).length / postsPerPage
  //   ),
  // }));
  // // Create Pages for all sermons and pass data in the PageContext Object.
  // Array.from({ length: numberOfPages }).forEach((_, index) => {
  //   createPage({
  //     path: index === 0 ? `/watch` : `/watch/${index + 1}`,
  //     component: path.resolve("./src/templates/sermons.js"),
  //     context: {
  //       limit: postsPerPage,
  //       skip: index * postsPerPage,
  //       numPages: numberOfPages,
  //       currentPage: index + 1,
  //       speakers,
  //       series,
  //       books,
  //     },
  //   });
  // });
  // /* Loop through speakers to create pages for one of the follow combinations:
  //  * Speaker's Sermon, Speaker's And Specific Series' Sermons, and Speaker's, Specific Series' and Specific Bible Book's Sermons
  //  */
  // speakers.forEach(({ value, prefix, name, numOfPages }) => {
  //   // Create pages for Each Speaker with their sermons.
  //   Array.from({ length: numOfPages }).forEach((_, index) => {
  //     createPage({
  //       path: index === 0 ? `/watch/${value}` : `/watch/${value}/${index + 1}`,
  //       component: path.resolve("./src/templates/sermons.js"),
  //       context: {
  //         limit: postsPerPage,
  //         skip: index * postsPerPage,
  //         numPages: numOfPages,
  //         currentPage: index + 1,
  //         filterValue: value,
  //         speakers,
  //         series,
  //         prefix,
  //         name,
  //         books,
  //       },
  //     });
  //   });

  //   series.forEach(({ value: seriesValue, label }) => {
  //     // Set Number of Pages for Sermon for specific speaker and specific series.
  //     const numPages = Math.ceil(
  //       posts.filter(
  //         ({ Preacher: { Prefix, Name }, Series: { Name: seriesName } }) =>
  //           prefix === Prefix && name === Name && seriesName === label
  //       ).length / postsPerPage
  //     );
  //     // Create Pages for sermons for specific speaker and specific series.
  //     const filterValue = `${value}/${seriesValue}`;
  //     Array.from({ length: numPages }).forEach((_, seriesIndex) => {
  //       createPage({
  //         path:
  //           seriesIndex === 0
  //             ? `/watch/${filterValue}`
  //             : `/watch/${filterValue}/${seriesIndex + 1}`,
  //         component: path.resolve("./src/templates/sermons.js"),
  //         context: {
  //           limit: postsPerPage,
  //           skip: seriesIndex * postsPerPage,
  //           currentPage: seriesIndex + 1,
  //           filterValue,
  //           numPages,
  //           speakers,
  //           series,
  //           prefix,
  //           name,
  //           seriesName: label,
  //           books,
  //         },
  //       });
  //     });

  //     books.forEach(({ value: bookValue, book }) => {
  //       // Set Number of Pages for Sermon for specific speaker,  specific series and specific Bible Book.
  //       const numberOfPages = Math.ceil(
  //         posts.filter(
  //           ({
  //             Preacher: { Prefix, Name },
  //             Series: { Name: seriesName },
  //             BiblePassage,
  //           }) =>
  //             prefix === Prefix &&
  //             name === Name &&
  //             seriesName === label &&
  //             BiblePassage.some(({ Book }) => Book === book)
  //         ).length / postsPerPage
  //       );
  //       // Create Pages for sermons for specific speaker, specific series and specific Bible Book.
  //       const filterValues = `${filterValue}/${bookValue}`;
  //       Array.from({ length: numberOfPages }).forEach((_, bookIndex) => {
  //         createPage({
  //           path:
  //             bookIndex === 0
  //               ? `/watch/${filterValues}`
  //               : `/watch/${filterValues}/${bookIndex + 1}`,
  //           component: path.resolve("./src/templates/sermons.js"),
  //           context: {
  //             limit: postsPerPage,
  //             skip: bookIndex * postsPerPage,
  //             currentPage: bookIndex + 1,
  //             filterValue: filterValues,
  //             numPages: numberOfPages,
  //             speakers,
  //             series,
  //             prefix,
  //             name,
  //             seriesName: label,
  //             book,
  //             books,
  //           },
  //         });
  //       });
  //     });
  //   });

  //   books.forEach(({ value: bookValue, book }) => {
  //     // Set Number of Pages for Sermon for specific speaker and specific Bible Book.
  //     const numberOfPages = Math.ceil(
  //       posts.filter(
  //         ({ Preacher: { Prefix, Name }, BiblePassage }) =>
  //           prefix === Prefix &&
  //           name === Name &&
  //           BiblePassage.some(({ Book }) => Book === book)
  //       ).length / postsPerPage
  //     );
  //     // Create Pages for sermons for specific speaker, and specific Bible Book.
  //     const filterValues = `${value}/${bookValue}`;
  //     Array.from({ length: numberOfPages }).forEach((_, bookIndex) => {
  //       createPage({
  //         path:
  //           bookIndex === 0
  //             ? `/watch/${filterValues}`
  //             : `/watch/${filterValues}/${bookIndex + 1}`,
  //         component: path.resolve("./src/templates/sermons.js"),
  //         context: {
  //           limit: postsPerPage,
  //           skip: bookIndex * postsPerPage,
  //           currentPage: bookIndex + 1,
  //           filterValue: filterValues,
  //           numPages: numberOfPages,
  //           speakers,
  //           series,
  //           prefix,
  //           name,
  //           book,
  //           books,
  //         },
  //       });
  //     });
  //   });
  // });
  // /* Loop through series to create pages for one of the follow combinations:
  //  * Series' Sermon, and Specific Series' and Specific Bible Book's Sermons
  //  */
  // series.forEach(({ value, label, numOfPages }) => {
  //   // Create pages for Each Series with their sermons.
  //   Array.from({ length: numOfPages }).forEach((_, index) => {
  //     createPage({
  //       path: index === 0 ? `/watch/${value}` : `/watch/${value}/${index + 1}`,
  //       component: path.resolve("./src/templates/sermons.js"),
  //       context: {
  //         limit: postsPerPage,
  //         skip: index * postsPerPage,
  //         numPages: numOfPages,
  //         currentPage: index + 1,
  //         filterValue: value,
  //         seriesName: label,
  //         speakers,
  //         series,
  //         books,
  //       },
  //     });
  //   });

  //   books.forEach(({ value: bookValue, book }) => {
  //     // Set Number of Pages for Sermon for specific series and specific Bible Book.
  //     const numberOfPages = Math.ceil(
  //       posts.filter(
  //         ({ Series: { Name: seriesName }, BiblePassage }) =>
  //           seriesName === label &&
  //           BiblePassage.some(({ Book }) => Book === book)
  //       ).length / postsPerPage
  //     );
  //     // Create Pages for sermons for specific series, and specific Bible Book.
  //     const filterValues = `${value}/${bookValue}`;
  //     Array.from({ length: numberOfPages }).forEach((_, bookIndex) => {
  //       createPage({
  //         path:
  //           bookIndex === 0
  //             ? `/watch/${filterValues}`
  //             : `/watch/${filterValues}/${bookIndex + 1}`,
  //         component: path.resolve("./src/templates/sermons.js"),
  //         context: {
  //           limit: postsPerPage,
  //           skip: bookIndex * postsPerPage,
  //           currentPage: bookIndex + 1,
  //           filterValue: filterValues,
  //           numPages: numberOfPages,
  //           speakers,
  //           series,
  //           seriesName: label,
  //           book,
  //           books,
  //         },
  //       });
  //     });
  //   });
  // });

  // // Create pages for Each Bible Book with their sermons.
  // books.forEach(({ value, numOfPages, book }) => {
  //   Array.from({ length: numOfPages }).forEach((_, index) => {
  //     createPage({
  //       path: index === 0 ? `/watch/${value}` : `/watch/${value}/${index + 1}`,
  //       component: path.resolve("./src/templates/sermons.js"),
  //       context: {
  //         limit: postsPerPage,
  //         skip: index * postsPerPage,
  //         numPages: numOfPages,
  //         currentPage: index + 1,
  //         filterValue: value,
  //         book,
  //         speakers,
  //         series,
  //         books,
  //       },
  //     });
  //   });
  // });

  posts.forEach(sermon => {
    const { strapi_id } = sermon;
    createPage({
      path: getSermonPageUrl(strapi_id),
      component: path.resolve("./src/templates/sermon.js"),
      context: {
        id: strapi_id,
        baseURL: process.env.STRAPI_API_URL,
      },
    });
  });
}

const PostsPerPage = ITEMS_PER_PAGE;

function getSermonPageUrl(strapi_id) {
  return `/watch/sermons/${strapi_id}`;
}

// Generate all combinations given arr with number of combinations at each index
// eg. [1, 2, 3] generates 6 combinations:
//   [0, 0, 0] [0, 0, 1] [0, 0, 2] [0, 1, 0] [0, 1, 1] [0, 1, 2]
function generateArrayCombinations(arr, perm_index) {
  return Array.from({ length: arr[perm_index] })
    .map((_, i) => {
      let new_arr = [...arr];
      new_arr[perm_index] = i;
      return new_arr;
    })
    .map(new_arr =>
      perm_index + 1 === arr.length
        ? [new_arr]
        : generateArrayCombinations(new_arr, perm_index + 1)
    )
    .flat();
}

function normalizeTraits(traits) {
  // normalize sermon traits
  //   - keep traits in same order so we can just use arrays instead of maps/objects
  //   - make every trait into array
  let sermonTraits = [];
  for (let t in SermonTraits) {
    sermonTraits.push(Array.isArray(traits[t]) ? traits[t] : [traits[t]]);
  }
  return sermonTraits;
}

function permutateAndMaskSermonTraits(sermonTraits) {
  // return permutations of masked traits
  return Array.from({ length: 2 ** sermonTraits.length })
    .map((_, index) => {
      // generate bit map
      const mask = index
        .toString(2)
        .padStart(sermonTraits.length, "0")
        .split("");

      // get number of entries per sermon trait for this mask, and iterate through combinations
      let entries_map = generateArrayCombinations(
        mask.map((c, i) =>
          c === "1" && sermonTraits[i] ? sermonTraits[i].length : 1
        ),
        0
      );

      // Iterate through each combination and pair it with appropriate sermon trait field
      return entries_map.map(arr =>
        arr.map((val, i) => (mask[i] === "1" ? sermonTraits[i][val] : null))
      );
    })
    .flat();
}

class SermonGroup {
  constructor(url) {
    this.sermons = [];
    this.url = url;
    this.traits = [];
    for (let _ in SermonTraits) {
      this.traits.push(new OrderedSet());
    }
  }

  addSermon(sermonId, traits) {
    this.sermons.push(sermonId);
    traits.forEach((traitArr, i) => {
      traitArr.forEach(trait => (this.traits[i] = this.traits[i].add(trait)));
    });
  }

  getAllTraits() {
    let traitInfo = [];
    let curr_index = 0;
    for (let t in SermonTraits) {
      traitInfo.push({
        field: t,
        ...SermonTraitMetadata.get(t),
        traits: this.traits[curr_index++].toArray(),
      });
    }
    return traitInfo;
  }

  createPage(createPageAPI) {
    const numberOfPages = Math.ceil(this.sermons.length / PostsPerPage);
    Array.from({ length: numberOfPages }).forEach((_, index) => {
      console.log(this.url, index);
      let full_url = this.url + (index === 0 ? "" : `/${index + 1}`);
      console.log("creating page", full_url);
      createPageAPI({
        path: full_url,
        component: path.resolve("./src/templates/sermons.js"),
        context: {
          limit: PostsPerPage,
          skip: index * PostsPerPage,
          sermonIds: this.sermons,
          url: this.url,
          limit: PostsPerPage,
          skip: index * PostsPerPage,
          numPages: numberOfPages,
          currentPage: index + 1,
          traits: this.getAllTraits(),
        },
      });
    });
  }
}

class AllSermons {
  constructor() {
    this.sermonGroups = new Map();
  }

  getSermonGroup(url) {
    let sermonGroup = this.sermonGroups.get(url);
    if (sermonGroup === undefined) {
      sermonGroup = new SermonGroup(url);
      this.sermonGroups.set(url, sermonGroup);
    }
    return sermonGroup;
  }

  // Add this sermon with these traits to each of the sermonGroups at these respective urls
  addSermon(sermonId, traits) {
    let sermonTraits = normalizeTraits(traits);
    permutateAndMaskSermonTraits(sermonTraits)
      .map(getUrlFromNormalizedSermonTraits)
      .forEach(url =>
        this.getSermonGroup(url).addSermon(sermonId, sermonTraits)
      );
  }

  createPages(createPage) {
    this.sermonGroups.forEach(group => group.createPage(createPage));
  }
}

function processSpeaker({ Prefix, Name }) {
  return `${Prefix || ""} ${Name}`;
}

function processBiblePassages(passages) {
  return passages.map(({ Book }) => getBookName(Book));
}

function processTopics(topics) {
  return topics.map(({ Topic }) => Topic);
}

function processSermon(sermon) {
  return {
    type: sermon.ServiceType || "",
    speaker: processSpeaker(sermon.Preacher),
    series: sermon.Series.Name || "",
    book: processBiblePassages(sermon.BiblePassage),
    topic: processTopics(sermon.SermonTopics),
  };
}

async function tempCreateSermonPages(graphql, createPage, reporter) {
  // GraphQL Query for All Sermons
  const result = await graphql(`
    {
      allStrapiSermon {
        nodes {
          strapi_id
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

  let sermonCollection = new AllSermons();

  sermons.forEach(sermon => {
    sermonCollection.addSermon(sermon.strapi_id, processSermon(sermon));
  });

  sermonCollection.createPages(createPage);
}

module.exports.CreateSermonPages = CreateSermonPages;
