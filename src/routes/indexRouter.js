let express = require('express')

let router = express.Router()

let { index, pago } = require('../controllers/indexController')

router.get('/', index)

router.get('/formas-de-pago', pago)

module.exports = router;