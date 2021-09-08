const { knex } = require('knex');
const { dotenv } = require('dotenv');
const configuration = require('../../knexfile');

let connection = process.env.NODE_ENV;

if (connection == 'development') { connection = knex(configuration.development); } else { connection = knex(configuration.production); }

module.exports = connection;
