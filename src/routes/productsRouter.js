let express = require('express')

let router = express.Router()

let { productsList, agregarProducto, crearProducto, detail, eliminarProducto } = require('../controllers/productsController');

router.get('/', productsList);

router.get('/create', agregarProducto)

router.post('/create', crearProducto)

router.get('/detail/:id', detail)

router.delete('/delete/:id', eliminarProducto)

module.exports = router;