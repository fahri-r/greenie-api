'use strict';

/**
 * prevention router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::prevention.prevention');
