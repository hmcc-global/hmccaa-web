'use strict';

/**
 * preacher router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::preacher.preacher');
