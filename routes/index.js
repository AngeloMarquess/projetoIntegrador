var express = require('express');
var router = express.Router();
const acaiController= require('../controllers/acaiController')
const institucionalController = require('../controllers/institucionalController');
const servicosController = require('../controllers/servicoController');




/* GET home page. */
router.get('/',acaiController.index );

router.get('/acai', acaiController.index);

router.get('/',institucionalController.index);
router.get('/sobre',institucionalController.sobre);
router.get('/contato',institucionalController.contato);
router.get('/servicos',institucionalController.servicos);


module.exports = router;
