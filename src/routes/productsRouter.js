let express = require('express')

let router = express.Router()

let upLoadFile = require('../middlewre/cargaImagen')

let { productsList, agregarProducto, crearProducto, detail, edit, update, eliminarProducto } = require('../controllers/productsController');

router.get('/', productsList);

router.get('/create', agregarProducto)

router.post('/create', upLoadFile.single("image"), crearProducto)
router.get('/detail/:id', detail)

router.get('/edit/:id', edit);
router.put('/edit/:id', update);

router.delete('/delete/:id', eliminarProducto)


module.exports = router;