const express = require('express')
const router = express.Router()

const { index, pago, search } = require('../controllers/indexController')

router.get('/', index)

router.get('/formas-de-pago', pago)

router.get('/search', search)


module.exports = router;