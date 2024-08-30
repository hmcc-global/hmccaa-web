'use strict';

/**
 * notification-bar service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::notification-bar.notification-bar');
