const express = require('express');
const router = express.Router();

const { register,
    profile,
    profileEdit,
    processRegister, 
    categorias,
    productCart, } = require('../controllers/userController')

const registerValidator = require('../validations/registerValidator')
const userAvatars = require('../middlewares/userAvatars')

/* GET - REGISTER */
router.get('/register', register)
router.post('/register', registerValidator, processRegister);

/* GET - LOGIN */


/* GET - USER PROFILE */
router.get('/profile', profile)
router.put('/profile-edit', userAvatars.single('avatar'), profileEdit)

router.get('/categorias', categorias)

router.get('/productCart', productCart)


module.exports = router;