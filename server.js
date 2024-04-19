const express = require('express');
const { newsData } = require('./database.js'); // Import data from database.js
const app = express();
const PORT = process.env.PORT || 3000; // default port 3000

// Route to request news
app.get('/news', (req, res) => {
  res.json(newsData); // Return JSON file
});

// Route to request news by spfic Id
app.get('/news/:id', (req, res) => {
  const id = parseInt(req.params.id); // id url and convert to int
  const news = newsData.find(item => item.id === id); // 
  if (news) {
    res.json(news);
  } else {
    res.status(404).send('Notícia não encontrada'); // if news not found, error msg
  }
});

// Server init
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});