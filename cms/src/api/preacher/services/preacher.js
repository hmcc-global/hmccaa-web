'use strict';

/**
 * preacher service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::preacher.preacher');
