'use strict';

/**
 * staff service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::staff.staff');
