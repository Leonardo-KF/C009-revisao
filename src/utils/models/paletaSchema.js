const mongoose = require('mongoose');
const { Schema } = mongoose;

//exemplo moreInfos: {estado: frio/gelado/derretido, promocao: boolean, desconto: number}

const paletaSchema = new Schema({
  sabor: { type: String, required: true },
  descricao: { type: String, required: true },
  foto: { type: String, required: true },
  preco: { type: Number, required: true },
  created: { type: Date, default: Date.now() },
});

const Paleta = mongoose.model('Paletas', paletaSchema);

module.exports = Paleta;
