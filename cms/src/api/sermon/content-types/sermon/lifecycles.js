'use strict';

const { ApplicationError } = require('@strapi/utils').errors;

async function checkSeriesPublished(seriesId) {
  if (!seriesId) {
    throw new ApplicationError('Sermon must have a published Sermon Series.');
  }
  const series = await strapi.db
    .query('api::sermon-series.sermon-series')
    .findOne({ where: { id: seriesId } });
  if (!series || !series.publishedAt) {
    throw new ApplicationError(
      'Cannot publish a sermon with an unpublished Sermon Series. Please publish the Sermon Series first.'
    );
  }
}

function getSeriesId(seriesData) {
  if (!seriesData) return null;
  if (typeof seriesData === 'number') return seriesData;
  if (typeof seriesData === 'object') {
    if (seriesData.connect && seriesData.connect.length > 0) {
      return seriesData.connect[0].id;
    }
    if (seriesData.id) return seriesData.id;
  }
  return null;
}

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    if (data.publishedAt) {
      await checkSeriesPublished(getSeriesId(data.Series));
    }
  },

  async beforeUpdate(event) {
    const { data, where } = event.params;

    // Skip validation when unpublishing
    if ('publishedAt' in data && !data.publishedAt) return;

    const existingEntry = await strapi.db
      .query('api::sermon.sermon')
      .findOne({ where: { id: where.id }, populate: ['Series'] });

    const willBePublished =
      (data.publishedAt !== null && data.publishedAt !== undefined) ||
      (existingEntry?.publishedAt !== null && existingEntry?.publishedAt !== undefined);

    if (willBePublished) {
      const seriesId =
        getSeriesId(data.Series) ?? existingEntry?.Series?.id ?? null;
      await checkSeriesPublished(seriesId);
    }
  },
};
