let express = require('express')

let router = express.Router()

let { productsList, agregarProducto, crearProducto, detail, edit, update, eliminarProducto } = require('../controllers/productsController');

let upLoadFile = require('../middlewre/cargaImagen')


router.get('/', productsList);

router.get('/create', agregarProducto)

router.post('/create', upLoadFile.single("image"), crearProducto)
router.get('/detail/:id', detail)

router.delete('/delete/:id', eliminarProducto)

router.get('/:id/edit', edit);
router.put('/:id', update);


module.exports = router;