const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));


const port = 3000;


let contatos = [{ nome: "John Doe", email: "john@example.com" }, { nome: "Jane Smith", email: "jane@example.com" }];

app.get("/contatos", (req, res) => {
    if (req.query.delId)
        contatos.splice(req.query.delId, 1);

    res.render("contato", { contatos: contatos } );
});

app.post("/contatos", (req, res) => {
    const { nome, email } = req.body;
    contatos.push({ nome, email });
    res.render("contato", { contatos: contatos });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});