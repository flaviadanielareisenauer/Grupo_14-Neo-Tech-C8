const express = require('express')
const router = express.Router()
const upLoadFile = require('../middlewre/cargaImagen')

const { perfil, crearProducto, edit, adminLogin, agregarProducto, eliminarProducto, update, productsList } = require('../controllers/adminController')

//Muestra la lista de productos desde el admin
router.get('/products', productsList);

//configuración del admin y login
router.get('/config-perfil', perfil)
router.get('/adminLogin', adminLogin);

//crea un nuevo producto
router.get('/products/create', agregarProducto)
router.post('/products/create', upLoadFile.array("image"), crearProducto)

//edita un producto existente
router.get('/products/:id/edit', edit);
router.put('/products/:id', upLoadFile.array("image"), update);

//elimina el producto seleccionado
router.delete('/products/delete/:id', eliminarProducto);


module.exports = router;