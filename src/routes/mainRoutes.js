const express=require('express');

const router =express.Router();

const mainController=require('../Controllers/mainControllers');

router.get('/', mainController.index)

router.get('/admin', mainController.admin);

router.get ('/categorias', mainController.categorias);

router.get ('/config-perfil', mainController.perfil);

router.get ('/formas-de-pago', mainController.pago);

router.get ('/productCart', mainController.productCart);

router.get ('/productDetail', mainController.productDetail);

router.get ('/register', mainController.register);


module.exports=router 