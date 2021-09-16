const express = require('express');
const router = express.Router();

const { register,
    processRegister,
    profile,
    profileEdit,
    categorias,
    productCart, } = require('../controllers/userController')

const registerValidator = require('../validations/registerValidator')
const userAvatars = require('../middlewares/userAvatars')

/* GET - REGISTER */
router.get('/register', register)
router.post('/register', userAvatars.single('avatar'), registerValidator, processRegister);

/* GET - LOGIN */


/* GET - USER PROFILE */
router.get('/profile', profile)

router.get('/profile-edit/:id', profileEdit)
router.post('/profile-edit/:id', userAvatars.single('avatar'), profileEdit)

router.get('/categorias', categorias)

router.get('/productCart', productCart)


module.exports = router;