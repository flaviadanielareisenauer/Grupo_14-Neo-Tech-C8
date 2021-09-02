let express = require('express')
let router = express.Router()

let { detail } = require('../controllers/productsController');
//detalle del producto
router.get('/detail/:id', detail)

module.exports = router;