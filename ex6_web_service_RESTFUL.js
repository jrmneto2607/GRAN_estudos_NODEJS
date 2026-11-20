const express = require('express');
const bodyParser = require('body-parser');
const rotaNotas = require('./ex6_router.js');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/notas', rotaNotas);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});