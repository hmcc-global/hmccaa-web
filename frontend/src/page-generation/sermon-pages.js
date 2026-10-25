const hash = require("crypto-js/sha256");
const { getBookName, sortBibleBooks } = require("./strapi-bible");

const ITEMS_PER_PAGE = 6;

function getSermonPageUrl(strapiId) {
  return `/watch/sermons/${hash(strapiId.toString()).toString()}`;
}

const SermonTraits = Object.freeze({
  type: "type",
  speaker: "speaker",
  series: "series",
  book: "book",
  topic: "topic",
});

const defaultSort = (a, b) => a.localeCompare(b);

const SermonTraitMetadata = new Map([
  [
    SermonTraits.type,
    {
      dropdownLabel: "Service Type",
      restLabel: "gathering",
      sortingFn: (a, b) => {
        if (a === b) {
          return 0;
        }
        if (a === "Sunday Celebration" || b === "Other") {
          return -1;
        }
        if (a === "Other" || b === "Sunday Celebration") {
          return 1;
        }
        return defaultSort(a, b);
      },
    },
  ],
  [
    SermonTraits.speaker,
    {
      dropdownLabel: "Speaker",
      restLabel: "speaker",
      sortingFn: defaultSort,
    },
  ],
  [
    SermonTraits.series,
    {
      dropdownLabel: "Sermon Series",
      restLabel: "series",
      sortingFn: defaultSort,
    },
  ],
  [
    SermonTraits.book,
    {
      dropdownLabel: "Bible Book",
      restLabel: "book",
      sortingFn: sortBibleBooks,
    },
  ],
  [
    SermonTraits.topic,
    {
      dropdownLabel: "Sermon Topic",
      restLabel: "topic",
      sortingFn: (a, b) => defaultSort(a.toLowerCase(), b.toLowerCase()),
    },
  ],
]);

function normalizeTrait(trait) {
  return trait
    .toLowerCase()
    .replace(/[.'"&<>|*]/g, "")
    .replace(/\s+/g, "-")
    .replace(/#/g, "hash")
    .replace(/%/g, "percent")
    .replace(/\?/g, "question")
    .replace(/:/g, "colon");
}

function getUrlFromNormalizedSermonTraits(traits) {
  let url_parts = ["/watch"];
  let curr_index = 0;
  for (let t in SermonTraits) {
    const curr_trait = traits[curr_index++];
    if (curr_trait) {
      url_parts.push(
        `/${SermonTraitMetadata.get(t).restLabel}/${normalizeTrait(curr_trait)}`
      );
    }
  }

  return url_parts.join("");
}

// Inverse of getUrlFromNormalizedSermonTraits, plus the optional page number suffix. Returns null if the
// path isn't a listing URL, eg. a label without a value (/watch/speaker) or a bad page number (/watch/book/john/0)
function parseSermonListingUrl(pathname) {
  const restLabels = Object.values(SermonTraits).map(
    t => SermonTraitMetadata.get(t).restLabel
  );
  let urlParts = pathname.split("/").filter(part => part.length);
  if (urlParts.shift() !== "watch") {
    return null;
  }

  let page = 1;
  if (urlParts.length % 2 === 1) {
    const pageStr = urlParts.pop();
    if (!/^[1-9][0-9]*$/.test(pageStr)) {
      return null;
    }
    page = parseInt(pageStr, 10);
  }

  let normalizedTraits = restLabels.map(() => null);
  for (let i = 0; i < urlParts.length; i += 2) {
    const idx = restLabels.indexOf(urlParts[i]);
    if (idx === -1 || normalizedTraits[idx] !== null) {
      return null;
    }
    try {
      normalizedTraits[idx] = decodeURIComponent(urlParts[i + 1]);
    } catch (e) {
      return null;
    }
  }
  return { normalizedTraits, page };
}

// A sermon's values for each trait, in SermonTraits order (book and topic can have several).
// Throws if the sermon is missing its preacher, series or passages; those sermons aren't listed.
function getSermonTraits({
  ServiceType,
  Preacher: { Prefix, Name },
  Series,
  BiblePassage,
  SermonTopics,
}) {
  return [
    [ServiceType || ""],
    [(Prefix ? `${Prefix} ` : "") + Name],
    [Series.Name || ""],
    BiblePassage.map(({ Book }) => getBookName(Book)),
    (SermonTopics || []).map(({ Topic }) => Topic),
  ];
}

module.exports.ITEMS_PER_PAGE = ITEMS_PER_PAGE;
module.exports.getSermonPageUrl = getSermonPageUrl;
module.exports.SermonTraits = SermonTraits;
module.exports.SermonTraitMetadata = SermonTraitMetadata;
module.exports.normalizeTrait = normalizeTrait;
module.exports.getUrlFromNormalizedSermonTraits =
  getUrlFromNormalizedSermonTraits;
module.exports.parseSermonListingUrl = parseSermonListingUrl;
module.exports.getSermonTraits = getSermonTraits;
