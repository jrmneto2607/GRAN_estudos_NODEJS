const express = require('express');
const app = express();
const port = 3000;

let router = express.Router();

router.use(function timelog(req, res, next) {
  console.log('Time:', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.send('Pagina Principal. LETS GOOOOOO!!!!');
});

app.use("/show", router);

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));