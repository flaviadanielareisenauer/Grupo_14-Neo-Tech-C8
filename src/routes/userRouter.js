let express = require('express');

let router = express.Router();

let { register, perfil, categorias, productCart, productDetail } = require('../controllers/userController')

router.get('/register', register)

router.get('/config-perfil', perfil)

router.get('/categorias', categorias)

router.get('/productCart', productCart)

router.get('/productDetail', productDetail)



module.exports = router;