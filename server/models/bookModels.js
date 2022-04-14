const { Pool } = require('pg');

//const PG_URI = 'postgres://dkkcsyzq:kmL7sCZe-lVTlpTeLLWeGMTfmUQK8ejp@batyr.db.elephantsql.com/dkkcsyzq';
const PG_URI = 'postgres://jxwqfmrw:KCz2y89bMFZCWbkSjOYsJWge9czBftq6@rajje.db.elephantsql.com/jxwqfmrw';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
