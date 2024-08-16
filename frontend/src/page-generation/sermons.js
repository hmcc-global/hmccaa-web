const path = require("path");
const { OrderedSet } = require("immutable");
const { getBookName } = require("./strapi-bible");
const {
  getSermonPageUrl,
  SermonTraits,
  SermonTraitMetadata,
  getUrlFromNormalizedSermonTraits,
} = require("./sermon-pages");

const ITEMS_PER_PAGE = 6;

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
        traits: this.traits[curr_index++].toArray(),
      });
    }
    return traitInfo;
  }

  createPage(createPageAPI) {
    const numberOfPages = Math.ceil(this.sermons.length / ITEMS_PER_PAGE);
    Array.from({ length: numberOfPages }).forEach((_, index) => {
      createPageAPI({
        path: this.url + (index === 0 ? "" : `/${index + 1}`),
        component: path.resolve("./src/templates/sermons.js"),
        context: {
          limit: ITEMS_PER_PAGE,
          skip: index * ITEMS_PER_PAGE,
          sermonIds: this.sermons,
          url: this.url,
          limit: ITEMS_PER_PAGE,
          skip: index * ITEMS_PER_PAGE,
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

async function CreateSermonPages(graphql, createPage, reporter) {
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

    createPage({
      path: getSermonPageUrl(sermon.strapi_id),
      component: path.resolve("./src/templates/sermon.js"),
      context: {
        id: sermon.strapi_id,
        baseURL: process.env.STRAPI_API_URL,
      },
    });
  });

  sermonCollection.createPages(createPage);
}

module.exports.CreateSermonPages = CreateSermonPages;
