const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/restaurants", (req, res) => {
  const postcode = req.query.postcode;
  axios.get(`https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}`)
    .then(response => {
      res.json(response.data.restaurants);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch restaurants. Input must be a valid UK postcode, i.e. SW6 3GT.' });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});