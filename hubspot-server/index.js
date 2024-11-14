// hubspot-server/index.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/contacts', async (req, res) => {
  try {
    const response = await axios.get('https://api.hubapi.com/crm/v3/objects/contacts', {
      headers: { Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}` }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching contacts from HubSpot:', error);
    res.status(500).send('Error fetching contacts');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
