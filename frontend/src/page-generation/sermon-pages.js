const hash = require("crypto-js/sha256");

function getSermonPageUrl(strapi_id) {
  return `/watch/sermons/${hash(strapi_id.toString()).toString()}`;
}

const SermonTraits = Object.freeze({
  type: "type",
  speaker: "speaker",
  series: "series",
  book: "book",
  topic: "topic",
});

const SermonTraitMetadata = new Map([
  [
    SermonTraits.type,
    {
      dropdownLabel: "Service Type",
      restLabel: "gathering",
    },
  ],
  [
    SermonTraits.speaker,
    {
      dropdownLabel: "Speaker",
      restLabel: "speaker",
    },
  ],
  [
    SermonTraits.series,
    {
      dropdownLabel: "Sermon Series",
      restLabel: "series",
    },
  ],
  [
    SermonTraits.book,
    {
      dropdownLabel: "Bible Book",
      restLabel: "book",
    },
  ],
  [
    SermonTraits.topic,
    {
      dropdownLabel: "Sermon Topic",
      restLabel: "topic",
    },
  ],
]);

function normalizeTrait(trait) {
  // TODO escape characters
  return trait
    .toLowerCase()
    .replace(/[.'"&]./g, "")
    .replace(/\s+/g, "-")
    .replace(/#/g, "HASH")
    .replace(/%/g, "PERCENT")
    .replace(/\?/g, "QUESTION");
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
