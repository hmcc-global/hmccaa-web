const hash = require("crypto-js/sha256");
const { sortBibleBooks } = require("./strapi-bible");

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
  // TODO escape characters
  return trait
    .toLowerCase()
    .replace(/[.'"&]./g, "")
    .replace(/\s+/g, "-")
    .replace(/#/g, "hash")
    .replace(/%/g, "percent")
    .replace(/\?/g, "question");
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

function getNormalizedSermonTraitsFromUrl(url) {
  let urlParts = url.split("/");
  let normalized_traits = [];
  for (let t in SermonTraits) {
    let idx = urlParts.indexOf(SermonTraitMetadata.get(t).restLabel);
    normalized_traits.push(idx === -1 ? null : urlParts[idx + 1]);
  }
  return normalized_traits;
}

module.exports.getSermonPageUrl = getSermonPageUrl;
module.exports.SermonTraits = SermonTraits;
module.exports.SermonTraitMetadata = SermonTraitMetadata;
module.exports.normalizeTrait = normalizeTrait;
module.exports.getUrlFromNormalizedSermonTraits =
  getUrlFromNormalizedSermonTraits;
module.exports.getNormalizedSermonTraitsFromUrl =
  getNormalizedSermonTraitsFromUrl;
