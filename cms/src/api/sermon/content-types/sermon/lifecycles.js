const { errors } = require("@strapi/utils");
const { ApplicationError } = errors;

const RELATIONS_TO_VALIDATE = [
  { field: "Series", uid: "api::sermon-series.sermon-series", label: "Sermon Series" },
  { field: "Preacher", uid: "api::preacher.preacher", label: "Preacher" },
];

async function validateRelationsPublished(data, existingId) {
  for (const { field, uid, label } of RELATIONS_TO_VALIDATE) {
    let relationId = data[field];

    // If the relation is being set via connect/disconnect syntax, extract the id
    if (relationId && typeof relationId === "object") {
      if (relationId.connect && relationId.connect.length > 0) {
        relationId = relationId.connect[0].id;
      } else if (relationId.id) {
        relationId = relationId.id;
      } else {
        relationId = null;
      }
    }

    // If this update doesn't touch the relation, look up the existing value
    if (relationId === undefined && existingId) {
      const existing = await strapi.entityService.findOne(
        "api::sermon.sermon",
        existingId,
        { populate: [field] }
      );
      relationId = existing?.[field]?.id ?? null;
    }

    if (!relationId) {
      throw new ApplicationError(
        `Cannot publish sermon: ${label} is required but missing.`
      );
    }

    const related = await strapi.entityService.findOne(uid, relationId);
    if (!related || !related.publishedAt) {
      throw new ApplicationError(
        `Cannot publish sermon: the linked ${label} is not published.`
      );
    }
  }
}

function isUnpublishing(event) {
  const { data } = event.params;
  return data.publishedAt === null;
}

function isPublishing(event) {
  const { data } = event.params;
  return data.publishedAt !== undefined && data.publishedAt !== null;
}

async function isAlreadyPublished(event) {
  const existingId = event.params.where?.id;
  if (!existingId) return false;
  const existing = await strapi.entityService.findOne(
    "api::sermon.sermon",
    existingId
  );
  return existing?.publishedAt != null;
}

module.exports = {
  async beforeCreate(event) {
    if (isPublishing(event)) {
      await validateRelationsPublished(event.params.data, null);
    }
  },

  async beforeUpdate(event) {
    if (isUnpublishing(event)) return;
    if (isPublishing(event) || (await isAlreadyPublished(event))) {
      await validateRelationsPublished(
        event.params.data,
        event.params.where?.id
      );
    }
  },
};
