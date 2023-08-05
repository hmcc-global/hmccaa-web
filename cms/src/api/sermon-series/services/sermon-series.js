'use strict';

/**
 * sermon-series service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sermon-series.sermon-series');
