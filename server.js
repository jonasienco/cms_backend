const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config({ path: '.env.local' }); // Specify the path to .env.local

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS middleware
app.use(cors());

// Create a PostgreSQL connection pool using environment variables
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
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
