'use strict';

/**
 * sermon-topic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sermon-topic.sermon-topic');
