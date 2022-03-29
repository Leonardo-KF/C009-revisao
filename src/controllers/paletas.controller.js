const paletasService = require('../services/paletas.service');

const findPaletasController = async (req, res) => {
  const allPaletas = await paletasService.findPaletasService();
  res.status(200).send(allPaletas);
};

const findPaletaByIdController = async (req, res) => {
  const idParam = req.params.id;
  try {
    const chosenPaleta = await paletasService.findPaletaByIdService(idParam);
    res.status(200).send(chosenPaleta);
  } catch (err) {
    console.log(err);
    res.status(404).send({ message: 'Nenhuma paleta foi encontrada' });
  }
};

const createPaletaController = async (req, res) => {
  const paleta = req.body;
  try {
    const newPaleta = await paletasService.createPaletaService(paleta);

    res.status(201).send(newPaleta);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

const updatePaletaController = async (req, res) => {
  const idParam = req.params.id;
  console.log(idParam);
  const paletaEdit = req.body;
  try {
    const updatedPaleta = await paletasService.updatePaletaService(
      idParam,
      paletaEdit,
    );
    res.status(200).send(updatedPaleta);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err });
  }
};

const deletePaletaController = async (req, res) => {
  const idParam = req.params.id;
  try {
    await paletasService.deletePaletaService(idParam);

    res.status(200).send({ message: 'Paleta foi deletada com sucesso!' });
  } catch (err) {
    res.status(400).send({ message: 'Não foi possivle deletar a paleta' });
  }
};

module.exports = {
  findPaletaByIdController,
  findPaletasController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
