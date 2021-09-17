const express = require('express')

const router = express.Router()

const { perfil, crearProducto, edit, adminLogin, agregarProducto, eliminarProducto, update, productsList } = require('../controllers/adminController')
const upLoadFile = require('../middlewares/cargaImagen')
const checkLogAdmin = require('../middlewares/checkLogUserAdmin')

//Muestra la lista de productos desde el admin
router.get('/products', checkLogAdmin, productsList);

//configuración del admin y login
router.get('/config-perfil', checkLogAdmin, perfil)
router.get('/adminLogin', checkLogAdmin, adminLogin);

//crea un nuevo producto
router.get('/products/create', checkLogAdmin, agregarProducto)
router.post('/products/create', upLoadFile.array("image"), crearProducto)

//edita un producto existente
router.get('/products/:id/edit', checkLogAdmin, edit);
router.put('/products/:id', upLoadFile.array("image"), update);

//elimina el producto seleccionado
router.delete('/products/delete/:id', eliminarProducto);

module.exports = router;