const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'CMSdata',
  password: 'Hallo123!',
  port: 5432,
});

// Example query
pool.query('SELECT * FROM your_table', (err, res) => {
  if (err) {
    console.error('Error executing query', err);
  } else {
    console.log('Query result:', res.rows);
  }
  pool.end();
});
