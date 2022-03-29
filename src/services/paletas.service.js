const paleta = require('../utils/models/paletaSchema');

const findPaletasService = async () => {
  const paletas = await paleta.find();
  if (paletas !== undefined) {
    return paletas;
  } else {
    throw new Error({ message: 'Erro ao encontrar as paletas' });
  }
};

const findPaletaByIdService = async (id) => {
  const paletaById = await paleta.findById(id);
  console.log(paletaById);
  if (paletaById === undefined) {
    console.log('Nenhuma paleta foi encontrada');
    return undefined;
  }

  return paletaById;
};

const createPaletaService = async (newPaleta) => {
  if (newPaleta === undefined) {
    throw new Error({ message: 'Nehum dado recebido' });
  }
  if (newPaleta.sabor === undefined || newPaleta.sabor === '') {
    console.log('Rodou validação');
    throw new Error({ message: 'O sabor deve ser preenchido' });
  }
  if (newPaleta.preco <= 0) {
    throw new Error({ message: 'O preço deve ser maior do que zero' });
  }
  if (newPaleta.descricao === undefined) {
    throw new Error({ message: 'Descrição deve ser preenchida' });
  }

  try {
    await paleta.create(newPaleta);
    return newPaleta;
  } catch (err) {
    console.log(err);
    throw new Error({ message: err });
  }
};

const updatePaletaService = async (id, paletaEdited) => {
  const paletaById = await paleta.findByIdAndUpdate(id, paletaEdited);
  console.log(paletaById);
  if (paletaById === undefined) {
    throw new Error({ message: 'Nenhuma paleta corresponde a esse id' });
  }
  return paletaById;
};

const deletePaletaService = async (id) => {
  const paletaById = await paleta.findByIdAndDelete(id);
  console.log(paletaById);
  return { message: 'Paleta deletada com sucesso' };
};

module.exports = {
  findPaletasService,
  findPaletaByIdService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
