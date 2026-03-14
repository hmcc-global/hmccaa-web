const { errors } = require("@strapi/utils");
const { ApplicationError } = errors;

function isUnpublishing(event) {
  const { data } = event.params;
  return data.publishedAt === null;
}

function isPublishing(event) {
  const { data } = event.params;
  return data.publishedAt !== undefined && data.publishedAt !== null;
}

async function isAlreadyPublished(uid, event) {
  const existingId = event.params.where?.id;
  if (!existingId) return false;
  const existing = await strapi.entityService.findOne(uid, existingId);
  return existing?.publishedAt != null;
}

/**
 * Creates beforeUpdate/beforeDelete hooks that prevent unpublishing or
 * deleting an entity when published sermons still reference it.
 *
 * @param {string} filterField - The sermon relation field name (e.g. "Series", "Preacher")
 * @param {string} label - Human-readable label for error messages
 */
function createSermonDependencyGuard({ filterField, label }) {
  async function countPublishedSermons(id) {
    const sermons = await strapi.entityService.findMany(
      "api::sermon.sermon",
      {
        filters: {
          [filterField]: id,
          publishedAt: { $notNull: true },
        },
      }
    );
    return sermons.length;
  }

  async function checkDisconnectingPublishedSermons(event) {
    const sermons = event.params.data?.Sermons;
    if (!sermons?.disconnect || sermons.disconnect.length === 0) return;

    const disconnectedIds = sermons.disconnect.map(s => s.id);
    const published = await strapi.entityService.findMany(
      "api::sermon.sermon",
      {
        filters: {
          id: { $in: disconnectedIds },
          publishedAt: { $notNull: true },
        },
      }
    );

    if (published.length > 0) {
      throw new ApplicationError(
        `Cannot remove ${published.length} published sermon(s) from this ${label}. Unpublish them first.`
      );
    }
  }

  return {
    async beforeUpdate(event) {
      await checkDisconnectingPublishedSermons(event);

      if (!isUnpublishing(event)) return;

      const id = event.params.where?.id;
      if (!id) return;

      const count = await countPublishedSermons(id);
      if (count > 0) {
        throw new ApplicationError(
          `Cannot unpublish this ${label}: it is linked to ${count} published sermon(s).`
        );
      }
    },

    async beforeDelete(event) {
      const id = event.params.where?.id;
      if (!id) return;

      const count = await countPublishedSermons(id);
      if (count > 0) {
        throw new ApplicationError(
          `Cannot delete this ${label}: it is linked to ${count} published sermon(s).`
        );
      }
    },
  };
}

module.exports = {
  ApplicationError,
  isUnpublishing,
  isPublishing,
  isAlreadyPublished,
  createSermonDependencyGuard,
};
