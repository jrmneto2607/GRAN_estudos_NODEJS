const express = require('express');
const app = express();
const port = 3000;

let tarefas = [{tarefa: 'Comprar pão'}, {tarefa: 'Lavar o carro'}];

app.get(['/', '/tarefas'], (req, res) => {
  let conteudo = "<html><body><h1>Lista de Tarefas</h1><ul>";
  for(let t of tarefas) {
    conteudo += `<li>${t.tarefa}</li>`;
  }
  conteudo += "</ul></body></html>";
  res.status(200).contentType('text/html').send(conteudo); 
});



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});