'use strict';

/**
 * prevention service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::prevention.prevention');
