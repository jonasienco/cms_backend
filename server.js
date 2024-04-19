const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS middleware
app.use(cors());

// Create a PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'CMSbackend',
  password: 'Hallo123!',
  port: 5432,
});

// Route to request news
app.get('/news', async (req, res) => {
  try {
    const queryResult = await pool.query('SELECT * FROM cmsdata');
    res.json(queryResult.rows);
  } catch (error) {
    console.error('Error querying news data:', error);
    res.status(500).send('Internal server error');
  }
});

// Server initialization
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
