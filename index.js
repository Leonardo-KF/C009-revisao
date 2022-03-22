const express = require('express');
const cors = require('cors');
const port = 3001;

const app = express();
app.use(cors());

app.use(express.json());

const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/chocolate-belga.png',
    preco: 7.0,
  },
];

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/paletas', (req, res) => {
  res.send(paletas);
});

// definição de parametro de url opcional no express (:id)?
app.get('/paletas/find/(:id)?', (req, res) => {
  const idParam = req.params.id;
  const unicaPaleta = paletas.find((paleta) => paleta.id == idParam);
  console.log(unicaPaleta);
  if (unicaPaleta === undefined) {
    res.send({ message: 'Nenhuma paleta foi encontrada' });
  }
  res.send(unicaPaleta);
});

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`);
});
