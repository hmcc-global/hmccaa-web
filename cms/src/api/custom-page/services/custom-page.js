'use strict';

/**
 * custom-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::custom-page.custom-page');
