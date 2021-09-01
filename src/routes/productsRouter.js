let express = require('express')

let router = express.Router()

let { productsList, agregarProducto, crearProducto, detail, edit, update } = require('../controllers/productsController');

let upLoadFile = require('../middlewre/cargaImagen')

router.get('/', productsList);

router.get('/create', agregarProducto)

router.post('/create', upLoadFile.single("image"), crearProducto)
router.get('/detail/:id', detail)


router.get('/edit/:id', edit);
router.put('/edit', update);


module.exports = router;