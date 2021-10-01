const express = require('express')
const router = express.Router()

const { index, pago, search } = require('../controllers/indexController')

const coockieCheck = require('../middlewares/cookieCheck')

router.get('/', coockieCheck, index)

router.get('/formas-de-pago', pago)

router.get('/search', search)


module.exports = router;