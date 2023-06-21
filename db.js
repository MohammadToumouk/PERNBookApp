require('dotenv').config();

const Pool = require('pg').Pool;


const connectionString = process.env.connectionString;


const pool = new Pool({
    connectionString,

});

module.exports = pool;