const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3001;
const app = express();
const route = require('./src/routes/paletas.route');

require('dotenv').config();

const connectToDataBase = require('./src/utils/mongoConnection');

app.use(cors());

app.use(express.json());

connectToDataBase();

app.use('/paletas', route);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
