const express = require('express');
const router = express.Router();

const { register, processRegister, profile, updateProfile, categorias, productCart, profileLogin, logout, profileEdit } = require('../controllers/userController')

const validationLogin = require('../validations/validationLogin')
const checkLog = require('../middlewares/checklLogUser')
const registerValidator = require('../validations/registerValidator')
const userAvatars = require('../middlewares/userAvatars')

/* GET - REGISTER */
router.get('/register', register)
router.post('/register', userAvatars.single('avatar'), registerValidator, processRegister);

/* GET - LOGIN */
router.get('/login', validationLogin, profileLogin)
router.post('/login', validationLogin, profileLogin)
router.get('/logout', checkLog, logout)

/* GET - USER PROFILE */
router.get('/profile/:id', checkLog, profile)
router.get('/profile-edit/:id', checkLog, profileEdit)
router.put('/profile-edit/:id', userAvatars.single('avatar'), updateProfile)


router.get('/categorias', categorias)
router.get('/productCart', productCart)


module.exports = router;