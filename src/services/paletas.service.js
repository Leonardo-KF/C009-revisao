const paleta = require('../utils/models/paletaSchema');

const findPaletasService = async () => {
  try {
    const paletas = await paleta.find();
    if (paletas !== undefined) {
      return paletas;
    } else {
      throw new Error({ message: 'Erro ao encontrar as paletas' });
    }
  } catch (err) {
    console.log(err);
  }
};

const findPaletaByIdService = async (id) => {
  const paletaById = await paleta.findById(id);
  console.log(paletaById);
  if (!paletaById) {
    throw new Error({ message: 'Nenhuma paleta foi encontrada' });
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
  try {
    if (!paletaEdited.sabor && !paletaEdited.descricao && !paletaEdited.foto) {
      throw new Error({ message: 'Erro não recebemos nenhuma paleta' });
    }

    const paletaById = await paleta.findByIdAndUpdate(id, paletaEdited);
    return paletaById;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const deletePaletaService = async (id) => {
  try {
    const paletaById = await paleta.findByIdAndDelete(id);

    return { message: 'Paleta deletada com sucesso' };
  } catch (err) {
    throw new Error({ message: 'Não foi possivel deletar a paleta!!' });
  }
};

module.exports = {
  findPaletasService,
  findPaletaByIdService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
