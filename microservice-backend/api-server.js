const express = require('express');
const app = express();
const PORT = process.env.PORT || 6000;

app.get('/api', (req, res) => {
  res.json({ message: 'Hola desde el backend del nuevo proyecto!' });
});

app.listen(PORT, () => {
  console.log(`Backend corriendo en el puerto ${PORT}`);
});