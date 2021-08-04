const { knex } = require('knex');
const { dotenv } = require('dotenv');
const configuration = require('../../knexfile');

let connection = 'development';

if (connection == 'development') { connection = knex(configuration.development); } else { connection = knex(configuration.production); }

module.exports = connection;
