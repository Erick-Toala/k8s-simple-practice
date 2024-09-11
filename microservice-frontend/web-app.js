const express = require('express');
const app = express();
const axios = require('axios');
const PORT = process.env.PORT || 4000;

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://backend-service:6000/api');
    res.send(`<h1>${response.data.message}</h1>`);
  } catch (error) {
    res.send('<h1>Error conectando con el backend!</h1>');
  }
});

app.listen(PORT, () => {
  console.log(`Frontend corriendo en el puerto ${PORT}`);
});