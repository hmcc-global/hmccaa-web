const {
  ApplicationError,
  isUnpublishing,
  isPublishing,
  isAlreadyPublished,
} = require("../../../../utils/lifecycles");

const RELATIONS_TO_VALIDATE = [
  { field: "Series", uid: "api::sermon-series.sermon-series", label: "Sermon Series" },
  { field: "Preacher", uid: "api::preacher.preacher", label: "Preacher" },
];

async function validateRelationsPublished(data, existingId) {
  for (const { field, uid, label } of RELATIONS_TO_VALIDATE) {
    let relationId = data[field];

    // If the relation is being set via connect/disconnect syntax, extract the id
    if (relationId && typeof relationId === "object") {
      if (relationId.disconnect && relationId.disconnect.length > 0) {
        // Relation is being removed
        relationId = null;
      } else if (relationId.connect && relationId.connect.length > 0) {
        // Relation is being set to a new value
        relationId = relationId.connect[0].id;
      } else if (relationId.id) {
        relationId = relationId.id;
      } else {
        // Relation not being changed (e.g. { connect: [], disconnect: [] })
        relationId = undefined;
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

module.exports = {
  async beforeCreate(event) {
    if (isPublishing(event)) {
      await validateRelationsPublished(event.params.data, null);
    }
  },

  async beforeUpdate(event) {
    if (isUnpublishing(event)) return;
    if (isPublishing(event) || (await isAlreadyPublished("api::sermon.sermon", event))) {
      await validateRelationsPublished(
        event.params.data,
        event.params.where?.id
      );
    }
  },
};
