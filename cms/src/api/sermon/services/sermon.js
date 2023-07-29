'use strict';

/**
 * sermon service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sermon.sermon');
