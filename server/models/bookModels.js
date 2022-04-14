const { Pool } = require('pg');

const PG_URI = 'postgres://epcwessc:Jmdq41arBVqEHZL_VhtSADqpwHwGAt6Q@rajje.db.elephantsql.com/epcwessc';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
