var express = require('express');
var router = express.Router();
const acaiController= require('../controllers/acaiController')


/* GET home page. */
router.get('/',acaiController.index );

router.get('/acai', acaiController.index);

module.exports = router;
