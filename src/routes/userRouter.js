const express = require('express');
const router = express.Router();

const { register,
    perfil,
    /*processRegister, */
    categorias,
    productCart, } = require('../controllers/userController')

const registerValidator = require('../validations/registerValidator')
//const userAvatars = require('../middlewares/userAvatars')

/* GET - REGISTER */
router.get('/register', register)
/*router.post('/register', registerValidator, processRegister);*/

/* GET - LOGIN */


/* GET - USER PROFILE */
router.get('/config-perfil', perfil)


router.get('/categorias', categorias)
router.get('/productCart', productCart)


module.exports = router;