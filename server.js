const express = require('express');
const { vehicles } = require('./data/dataVehicles');
const { news } = require('./data/news');
const { mechanics } = require('./data/mechanics');
const { fuel } = require('./data/fuelBaseNorm');
const app = express();
const port = process.env.PORT || 3001;

const vehiclesData = vehicles;
const newsData = news;
const mechanicsData = mechanics;
const fuelNormsData = fuel;

// Сообщение о том, что сервер запущен и прослушивает указанный порт
app.listen(port, () => console.log(`Listening on port ${port}`));

// Создание GET маршрута
app.get('/vehicles', (req, res) => {
  res.send(vehiclesData);
});

app.get('/news', (req, res) => {
  // res.send(newsData);
  res.redirect("https://volottnazarov.github.io/serverGarage/data/news.js")
});

app.get('/mechanics', (req, res) => {
  res.send(mechanicsData);
});

app.get('/fuel', (req, res) => {
  res.send(fuelNormsData);
});