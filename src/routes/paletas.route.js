const express = require('express');

const router = express.Router();

const {
  validId,
  validObjectBody,
} = require('../middlewares/paleta.middleware');

const paletasController = require('../controllers/paletas.controller');

router.get('/all-paletas', paletasController.findPaletasController);
router.get(
  '/one-paleta/:id',
  validId,
  paletasController.findPaletaByIdController,
);
router.post(
  '/create-paleta',
  validObjectBody,
  paletasController.createPaletaController,
);
router.put('/update-paleta/:id', paletasController.updatePaletaController);
router.delete('/delete-paleta/:id', paletasController.deletePaletaController);

module.exports = router;
