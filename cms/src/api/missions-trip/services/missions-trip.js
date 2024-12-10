'use strict';

/**
 * missions-trip service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::missions-trip.missions-trip');
