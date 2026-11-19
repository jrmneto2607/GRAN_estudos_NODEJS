const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

const port = 3000;

app.get(['/', '/exemplo'], (req, res) => {
    const dados = [{nome: 'João', idade: 30}, {nome: 'Maria', idade: 25}];
    res.render('exemplo', {pessoas: dados});
});



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
