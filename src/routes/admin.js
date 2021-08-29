let express = require('express')

let router = express.Router()

let adminController =require ('../controllers/adminController')

router.get('/config-perfil', adminController.perfil)

router.get('/admin-carga', adminController.carga)

router.get('/admin-edit', adminController.edit)

router.get('/categorias', adminController.categorias)

router.get('/productCart', adminController.productCart)

router.get('/productDetail', adminController.productDetail)

router.get('/adminLogin', adminController.adminLogin);

module.exports= router