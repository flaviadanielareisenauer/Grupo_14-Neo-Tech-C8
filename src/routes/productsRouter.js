let express = require('express')

let router = express.Router()

let { productsList, agregarProducto, crearProducto, detail } = require('../controllers/productsController');

router.get('/', productsList);

router.get('/create', agregarProducto)

router.post('/create', crearProducto)

router.get('/detail/:id', detail)


module.exports = router;