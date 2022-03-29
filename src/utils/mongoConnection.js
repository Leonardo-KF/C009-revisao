const mongoose = require('mongoose');
const uri = process.env.CONEXAO_MONGO;

function connectToDataBase() {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Database connected');
    })
    .catch((err) => console.log(err));
}

module.exports = connectToDataBase;
