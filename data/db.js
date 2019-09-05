const knex = require('knex');

const config = require('../knexfile.js').development;

// { development {} }
// config.development === config["development"]

module.exports = knex(config);
