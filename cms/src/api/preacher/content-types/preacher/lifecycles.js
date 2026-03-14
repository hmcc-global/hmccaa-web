const { errors } = require("@strapi/utils");
const { ApplicationError } = errors;

async function countPublishedSermons(preacherId) {
  const sermons = await strapi.entityService.findMany(
    "api::sermon.sermon",
    {
      filters: {
        Preacher: preacherId,
        publishedAt: { $notNull: true },
      },
    }
  );
  return sermons.length;
}

function isUnpublishing(event) {
  const { data } = event.params;
  return data.publishedAt === null;
}

module.exports = {
  async beforeUpdate(event) {
    if (!isUnpublishing(event)) return;

    const id = event.params.where?.id;
    if (!id) return;

    const count = await countPublishedSermons(id);
    if (count > 0) {
      throw new ApplicationError(
        `Cannot unpublish this preacher: it is linked to ${count} published sermon(s).`
      );
    }
  },

  async beforeDelete(event) {
    const id = event.params.where?.id;
    if (!id) return;

    const count = await countPublishedSermons(id);
    if (count > 0) {
      throw new ApplicationError(
        `Cannot delete this preacher: it is linked to ${count} published sermon(s).`
      );
    }
  },
};
